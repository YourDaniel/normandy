from flask import Blueprint, render_template, send_from_directory
import os

root_path = os.path.dirname(os.path.dirname(__file__))
bp = Blueprint('home', __name__, url_prefix='',
               root_path=os.path.join(root_path, 'build'),
               template_folder=os.path.join(root_path, 'build'),
               static_folder=os.path.join(root_path, 'build'))


@bp.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(bp.root_path, 'build'),
                               'favicon.ico',
                               mimetype='image/vnd.microsoft.icon')


@bp.route('/')
def home_page():
    #print(bp.template_folder)
    return render_template('index.html')
