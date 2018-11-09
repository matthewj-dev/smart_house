/*
    GEN FRIDGE
*/
create or replace function gen_fridge(_last_run timestamptz, _now timestamptz)
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
    where obj_name = 'refrigerator'
    and is_on_open
    ;
$$ language sql volatile;