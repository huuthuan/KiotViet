# Django 2.0+ project template

This is a simple Django 2.0+ project template with my preferred setup. Most Django project templates make way too many assumptions or are just way too complicated. I try to make the least amount of assumptions possible while still trying provide a useful setup. Most of my projects are deployed to Heroku, so this is optimized for that but is not necessary.

## How to install

```bash
$ django-admin.py startproject --template=django-project-template.zip project_name
$ mv example.env .env
$ pip install -r requirements.txt
$ python manage.py migrate
$ cd AppUI
$ npm install
$ npm run build-dev
```

## Environment variables

These are common between environments. The `ENVIRONMENT` variable loads the correct settings, possible values are: `LOCAL`, `PRODUCTION`.

```
SETTINGS_MODULE='local'
DJANGO_SECRET_KEY='dont-tell-eve'
DEBUG=True
```

## Deployment

It is possible to deploy to Heroku or to your own server.


### PyCharm

Adding DJANGO_SECRET_KEY in ``Settings -> Tools -> Terminal`` for running Django command lines