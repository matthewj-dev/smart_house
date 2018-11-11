
-- ROOM
insert into room (room_name) values
  ('master bedroom')
, ('bedroom 2')
, ('bedroom 3')
, ('master bathroom')
, ('bathroom 2')
, ('garage')
, ('laundry room')
, ('living room')
, ('kitchen')
, ('outside')
;

-- OBJ
--TODO: windows
insert into obj
( room_id
, obj_name
, watts
, duration
, duration_deviation
, weekday_frequency
, weekend_frequency
)
select
  r.room_id
, o.obj_name
, o.watts
, o.duration::interval
, o.duration_deviation::interval
, o.weekday_frequency
, o.weekend_frequency
from
( values
-- bedrooms
  ('master bedroom', 'overhead light',  60, '4 hours', '2 hours', 1, 2)
, ('master bedroom', 'lamp 1'        ,  60, '4 hours', '2 hours', 1, 2)
, ('master bedroom', 'lamp 2'        ,  60, '4 hours', '2 hours', 1, 2)
, ('master bedroom', 'overhead light',  60, '4 hours', '2 hours', 1, 2)
, ('master bedroom', 'tv'            , 100, '4 hours', '2 hours', 1, 2)
, ('bedroom 2'     , 'lamp 1'        ,  60, '4 hours', '2 hours', 1, 2)
, ('bedroom 2'     , 'lamp 2'        ,  60, '4 hours', '2 hours', 1, 2)
, ('bedroom 2'     , 'overhead light',  60, '4 hours', '2 hours', 1, 2)
, ('bedroom 3'     , 'lamp 1'        ,  60, '4 hours', '2 hours', 1, 2)
, ('bedroom 3'     , 'lamp 2'        ,  60, '4 hours', '2 hours', 1, 2)
, ('bedroom 3'     , 'overhead light',  60, '4 hours', '2 hours', 1, 2)

-- bathrooms
, ('master bathroom', 'overhead light', 60, '5 minutes', '5 minutes', 16, 32)
, ('master bathroom', 'exhaust fan'   , 30, '5 minutes', '5 minutes', 16, 32)
, ('bathroom 2'     , 'overhead light', 60, '5 minutes', '5 minutes', 16, 32)
, ('bathroom 2'     , 'exhaust fan'   , 30, '5 minutes', '5 minutes', 16, 32)

-- garage
, ('garage', 'door 1'        , null, '60 seconds', '10 seconds', 16, 32)
, ('garage', 'door 2'        , null, '60 seconds', '10 seconds', 16, 32)
, ('garage', 'door to inside', null, '30 seconds', '15 seconds', 16, 32)

-- laundry room
-- these are not run daily, so don't record daily durations and frequencies here
, ('laundry room', 'washer'          ,  500, null, null, null, null) -- does not inlcude hot water usage
, ('laundry room', 'dryer'           , 3000, null, null, null, null)
, ('laundry room', 'hot water heater', 4500, null, null, null, null)
, ('laundry room', 'hvac'            , 3500, null, null, null, null)

-- outside
, ('outside', 'front door'    , null, '30 seconds', '15 seconds', 16  , 32)
, ('outside', 'back door'     , null, '30 seconds', '15 seconds', 16  , 32)
, ('outside', 'outside faucet', null, null        , null        , null, null) -- don't gen random events

-- living room
, ('living room', 'overhead light',  60, '4 hours', '2 hours', 1, 2)
, ('living room', 'lamp 1'        ,  60, '4 hours', '2 hours', 1, 2)
, ('living room', 'lamp 2'        ,  60, '4 hours', '2 hours', 1, 2)
, ('living room', 'tv'            , 100, '4 hours', '2 hours', 1, 2)

-- kitchen
-- dishwasher does not run daily, so don't record daily durations and frequencies here
, ('kitchen', 'overhead light',   60, '4 hours'   , '2 hours'  , 1   , 2)
, ('kitchen', 'stove'         , 3500, '15 minutes', '7 minutes', 1   , 2)
, ('kitchen', 'oven'          , 4000, '15 minutes', '7 minutes', 3   , 4)
, ('kitchen', 'microwave'     ,  636, '10 minutes', '5 minutes', 2   , 3)
, ('kitchen', 'refrigerator'  ,  150, '24 hours'  , '0 minutes', 1   , 1) -- fridge is on 24/7
, ('kitchen', 'dishwasher'    , 1800, null        , null       , null, null) -- does not include hot water usage
) o(room_name, obj_name, watts, duration, duration_deviation, weekday_frequency, weekend_frequency)
inner join room r
on r.room_name = o.room_name
;