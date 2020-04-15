#### Backend server
- cd project
- Create virtualenv
```
pip3 install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
#### Angularjs front-end
- cd app/
```
npm install
gulp
```