
drop table if exists room cascade;
create table if not exists room
( room_id   serial not null
, room_name text   not null
, constraint pk_room primary key (room_id) using index tablespace pg_default
);

drop table if exists obj cascade;
create table if not exists obj
( obj_id              serial   not null
, room_id             int      not null
, obj_name            text     not null
, category            text     null
, watts               int      null -- can be null for things like doors
, gallons             int      null -- can be null for things that don't need water
, is_on_open          boolean  default false -- is this thing on/off, open/closed? guess I'll leave this nullable for now
, duration            interval null
, duration_deviation  interval null
, weekday_frequency   int      null
, weekend_frequency   int      null 
, constraint pk_obj primary key (obj_id) using index tablespace pg_default
, constraint fk_obj_1 foreign key (room_id) references room(room_id) on delete cascade   
);
create index ix_obj on obj using btree(room_id) tablespace pg_default;

drop table if exists power_consumption cascade;
create table if not exists power_consumption
( power_consumption_id serial
, obj_id               int
, time_used            timestamptz
, duration             interval
, watts                numeric  -- calculated and cached
, constraint pk_power_consumption primary key (power_consumption_id) using index tablespace pg_default
, constraint fk_power_consumption_1 foreign key (obj_id) references obj(obj_id) on delete cascade
);
create index if not exists ix_power_consumption_1 on power_consumption(time_used);


drop table if exists water_consumption cascade;
create table if not exists water_consumption
( water_consumption_id serial
, obj_id               int
, time_used            timestamptz
, gallons              numeric
, constraint pk_water_consumption primary key (water_consumption_id) using index tablespace pg_default
, constraint fk_water_consumption foreign key (obj_id) references obj(obj_id) on delete cascade
);
create index if not exists ix_water_consumption_1 on water_consumption(time_used);


drop table if exists temperature cascade;
create table if not exists temperature
( temp_time       timestamptz
, is_outside_temp boolean
, val             numeric
, constraint pk_temperature primary key (temp_time, is_outside_temp) using index tablespace pg_default
);

drop table if exists thermostat cascade;
create table if not exists thermostat
( current_setting int
, heat            boolean -- true if set for heating, false if set for air conditioner
);