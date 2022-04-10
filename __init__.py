from flask import Flask
from api import MODULES
import os


root_path = os.path.dirname(__file__)


def create_app():
    app = Flask('normandy',
                static_url_path='',
                template_folder=os.path.join(root_path, 'build'),
                static_folder=os.path.join(root_path, 'build')
                )
    for module in MODULES:
        app.register_blueprint(module.bp)
    return app
