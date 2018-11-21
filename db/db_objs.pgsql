
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
where duration_deviation is not null  -- daily events have these
and weekend_frequency is not null     -- daily events have these
;

create or replace view weekly_random_events_info
as
select
  obj_id
, extract(epoch from duration) as duration
, weekday_frequency as frequency
from obj
where duration_deviation is null  -- weekly events don't have these
and weekend_frequency is null     -- weekly events don't have these
and duration is not null
and weekday_frequency is not null
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

create or replace function power_consumption_by_category(_now timestamptz)
returns json as
$$
  select json_agg(x.*)
  from
  (
    select
      o.category
    , 0.12 * sum((ps.watts/1000) * extract(epoch from ps.duration)/60/60) as bill
    from power_consumption ps
    inner join obj o
    on o.obj_id = ps.obj_id
    and ps.time_used > (_now - interval '30 days')
    group by o.category
  ) x
  ;
$$ language sql stable;

create or replace function get_power_bill
( _rng tstzrange default tstzrange(current_date - interval '1 month', current_date)
)
returns double precision
as $$
    select 
      0.12 * sum((watts/1000) * extract(epoch from duration)/60/60)
    from power_consumption pc
    where _rng @> pc.time_used
    ;
$$ language sql volatile;

create or replace function gen_power_consumption(_last_run timestamptz, _now timestamptz)
returns void 
as $$
    insert into power_consumption
    ( obj_id
    , time_used
    , duration
    , watts
    )
    select
      obj_id
    , _now
    , _now - _last_run
    , watts
    from obj
    where is_on_open
    and watts is not null
    ;
$$ language sql volatile;