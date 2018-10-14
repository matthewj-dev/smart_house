
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
/*
  TODO: windows
  TODO: cameras
  TODO: beacons
*/
insert into obj
( room_id
, obj_name
, watts
)
select
  r.room_id
, o.obj_name
, o.watts
from
( values
-- bedrooms
  ('master bedroom', 'overhead light',  60)
, ('master bedroom', 'lamp 1'        ,  60)
, ('master bedroom', 'lamp 2'        ,  60)
, ('master bedroom', 'overhead light',  60)
, ('master bedroom', 'tv'            , 100)
, ('bedroom 2'     , 'lamp 1'        ,  60)
, ('bedroom 2'     , 'lamp 2'        ,  60)
, ('bedroom 2'     , 'overhead light',  60)
, ('bedroom 3'     , 'lamp 1'        ,  60)
, ('bedroom 3'     , 'lamp 2'        ,  60)
, ('bedroom 3'     , 'overhead light',  60)

-- bathrooms
, ('master bathroom', 'overhead light', 60)
, ('master bathroom', 'exhaust fan'   , 30)
, ('bathroom 2'     , 'overhead light', 60)
, ('bathroom 2'     , 'exhaust fan'   , 30)

-- garage
, ('garage', 'door 1'        , null)
, ('garage', 'door 2'        , null)
, ('garage', 'door to inside', null)

-- laundry room
, ('laundry room', 'washer'          ,  500) -- does not inlcude hot water usage
, ('laundry room', 'dryer'           , 3000)
, ('laundry room', 'hot water heater', 4500)
, ('laundry room', 'hvac'            , 3500)

-- outside
, ('outside', 'front door'    , null)
, ('outside', 'back door'     , null)
, ('outside', 'outside faucet', null) -- not sure if we need this one since it doesn't consume power

-- living room
, ('living room', 'overhead light',  60)
, ('living room', 'lamp 1'        ,  60)
, ('living room', 'lamp 2'        ,  60)
, ('living room', 'tv'            , 100)

-- kitchen
, ('kitchen', 'overhead light',   60)
, ('kitchen', 'stove'         , 3500)
, ('kitchen', 'oven'          , 4000)
, ('kitchen', 'microwave'     ,  636)
, ('kitchen', 'refrigerator'  ,  150)
, ('kitchen', 'dishwasher'    , 1800) -- does not include hot water usage
) o(room_name, obj_name, watts)
inner join room r
on r.room_name = o.room_name
;