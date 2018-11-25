create table stage
( "STATION" text
, "NAME" text
, "DATE" text
, "HLY-TEMP-NORMAL" numeric
);

\copy stage from 'weather.csv' with (format csv, header on)

insert into temperature (temp_time, is_outside_temp, val)
select
  ('2018-' || "DATE")::timestamptz
, true
, "HLY-TEMP-NORMAL"
from stage
on conflict do nothing
;

-- use the AC or heat to maintain 70 degrees
insert into temperature (temp_time, is_outside_temp, val)
select
  ('2018-' || "DATE")::timestamptz
, false
, ("HLY-TEMP-NORMAL" + (70 * 9)) / 10
from stage
on conflict do nothing
;


drop table stage;

