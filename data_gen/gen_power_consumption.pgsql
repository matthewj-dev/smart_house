/*
    GEN POWER CONSUMPTION
*/
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