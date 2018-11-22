create or replace function dashboard_model()
returns json
as $$
declare
    _temp json;
    _obj json;
begin

    return json_build_object('temperature', _temp, 'objects', _obj);
end;
$$ language plpgsql stable;