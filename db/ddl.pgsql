
drop table if exists room cascade;
create table if not exists room
( room_id   serial not null
, room_name text   not null
, constraint pk_room primary key (room_id) using index tablespace pg_default
);

drop table if exists obj cascade;
create table if not exists obj
( obj_id     serial not null
, room_id    int    not null
, obj_name   text   not null
, watts      int    null -- can be null for things like doors
, is_on_open boolean default false -- is this thing on/off, open/closed? guess I'll leave this nullable for now
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

drop table if exists power_bill cascade;
create table if not exists power_bill
( power_bill_id serial
, period        tstzrange
, amount        numeric
, kwh           numeric
, constraint pk_power_bill primary key (power_bill_id) using index tablespace pg_default
);

drop table if exists temperature cascade;
create table if not exists temperature
( temp_time       timestamptz
, is_outside_temp boolean
, val             int -- might need to be a double?
, constraint pk_temperature primary key (temp_time, is_outside_temp) using index tablespace pg_default
);