from flask import Blueprint, render_template
import os

root_path = os.path.dirname(os.path.dirname(__file__))
bp = Blueprint('home', __name__, url_prefix='',
               template_folder=os.path.join(root_path, 'build'),
               static_folder=os.path.join(root_path, 'build'))


@bp.route('/')
def home_page():
    return render_template('index.html')
