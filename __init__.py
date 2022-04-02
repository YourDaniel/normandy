from flask import Flask
from api import MODULES


def create_app():
    app = Flask('normandy')
    for module in MODULES:
        app.register_blueprint(module.bp)
    return app
