from flask import Blueprint, render_template, send_from_directory
import os

bp = Blueprint('home', __name__, url_prefix='', root_path=os.path.dirname(os.path.dirname(__file__)))


@bp.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(bp.root_path, 'static'),
                               'favicon.ico',
                               mimetype='image/vnd.microsoft.icon')


@bp.route('/')
def home_page():
    print()
    print('ROOT_PATH', bp.root_path)
    print('__FILE__', __file__)
    print()
    return render_template('index.html')


