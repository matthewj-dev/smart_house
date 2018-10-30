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
returns power_bill
as $$
    with agg as
    (
        select
          extract(epoch from sum(duration))/60/60 as total_hours
        , (sum(distinct watts)/1000) as total_kw
        from power_consumption pc
        where _rng @> pc.time_used
    )
    insert into power_bill
    ( period
    , amount
    , kwh
    )
    select
      _rng
    , sum(0.12 * total_kw * total_hours) -- 0.12 is constant electricity cost
    , sum(total_kw * total_hours)
    from agg
    returning *
    ;
$$ language sql volatile;