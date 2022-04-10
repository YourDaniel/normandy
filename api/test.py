from flask import Blueprint, jsonify, request
import os

root_path = os.path.dirname(os.path.dirname(__file__))
bp = Blueprint('test', __name__, url_prefix='/api',
               template_folder=os.path.join(root_path, 'build'),
               static_folder=os.path.join(root_path, 'build'))


@bp.route('/test', methods=['POST'])
def test_func():
    test_json = {
        'fields': [],
        'test_data': 'hello',
        'test_data_2': 1,
        'test_data_3': True,
        'test_data_4': None
    }
    return jsonify(test_json)
