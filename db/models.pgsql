
create or replace view monthly_billing
as
select json_agg
( json_build_object
  ( 'name', to_char(m, 'Mon')
  , 'bill', coalesce(get_power_bill(tstzrange(m, m + interval '1 month')), 0)
  )
) as model
from generate_series('2018-01-01', '2018-12-31', interval '1 month') m;

create or replace view random_events_info
as
select
  obj_id
, extract(epoch from duration) as duration
, extract(epoch from duration_deviation) as duration_deviation
, weekday_frequency
, weekend_frequency
from obj
where duration is not null
and duration_deviation is not null
and weekday_frequency is not null
and weekend_frequency is not null
;

create or replace view admin_page_model
as
select json_agg
( jsonb_build_object
  ( 'obj_id', o.obj_id
  , 'room_id', r.room_id
  , 'current_state', o.is_on_open
  )
) as model
from obj o
inner join room r
on o.room_id = r.room_id
;