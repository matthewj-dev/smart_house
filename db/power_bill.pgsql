/*
    GET POWER BILL
*/
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