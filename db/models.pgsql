
create or replace view monthly_billing
as
select json_agg
( json_build_object
  ( 'name', to_char(m, 'Mon')
  , 'bill', coalesce(get_power_bill(tstzrange(m, m + interval '1 month')), 0)
  )
) as model
from generate_series('2018-01-01', '2018-12-31', interval '1 month') m;