cd %~dp0
set PYTHONPATH=%CD%
cd ..
set FLASK_APP=normandy
set FLASK_ENV=development
flask run --host 0.0.0.0 --port 12000