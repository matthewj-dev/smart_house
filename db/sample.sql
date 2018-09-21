drop schema if exists smarthouse cascade;
create schema if not exists smarthouse;
set search_path to smarthouse, public;

drop table if exists test;
create table if not exists test
( id serial
, val text
);
insert into test (val)
values
  ('hello')
, ('world')
;
