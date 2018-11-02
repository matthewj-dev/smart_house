create or replace function gen_fridge
( _bgn timestamptz default '2018-10-01'
, _end timestamptz default now()
)
returns void as $$
    insert into power_consumption
    ( obj_id
    , time_used
    , duration
    , watts
    )
    select
      o.obj_id
    , h
    , '1 hour'
    , o.watts
    from obj o
    inner join generate_series(_bgn, _end, interval '1 hour') h
    on o.obj_name = 'refrigerator'
$$ language sql volatile;

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

/*

select json_agg
( json_build_object
  ( 'name', to_char(m, 'Mon')
  , 'bill', get_power_bill(tstzrange(m, m + interval '1 month'))
  )
)
from generate_series('2018-01-01', '2018-12-31', interval '1 month') m;
*/