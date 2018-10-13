
-- ROOM
insert into room (room_name) values
  ('master_bedroom')
, ('bedroom_2')
, ('bedroom_3')
, ('master_bathroom')
, ('bathroom_2')
, ('garage')
, ('laundry_room')
, ('living_room')
, ('kitchen')
, ('general')
, ('outside')
;

-- OBJ
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
  ('master_bedroom', 'overhead_light',   60)
, ('master_bedroom', 'lamp_1'        ,   60)
, ('master_bedroom', 'lamp_2'        ,   60)
, ('master_bedroom', 'overhead_light',   60)
, ('master_bedroom', 'tv'            ,  100)
, ('bedroom_1'     , 'lamp_1'        ,   60)
, ('bedroom_1'     , 'lamp_2'        ,   60)
, ('bedroom_1'     , 'overhead_light',   60)
, ('bedroom_2'     , 'lamp_1'        ,   60)
, ('bedroom_2'     , 'lamp_2'        ,   60)
, ('bedroom_2'     , 'overhead_light',   60)

-- bathrooms
, ('master_bathroom', )
) o(room_name, obj_name, watts)
inner join room r
on r.room_name = o.room_name
;