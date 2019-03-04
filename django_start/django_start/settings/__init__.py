from .base import *
from .base import env

SETTINGS_MODULE = str(env('SETTINGS_MODULE'))

if SETTINGS_MODULE.lower() == 'production':
    from .production import *
else:
    from .local import *
