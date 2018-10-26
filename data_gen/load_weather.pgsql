create table stage
( "STATION" text
, "NAME" text
, "DATE" text
, "HLY-TEMP-NORMAL" numeric
);

\copy stage from 'weather.csv' with (format csv, header on)

insert into temperature (temp_time, is_outside_temp, val)
select
  ('2010-' || "DATE")::timestamptz
, true
, "HLY-TEMP-NORMAL"
from stage
;

drop table stage;