from flask import Flask, request, jsonify
from flask_cors import CORS
from helper import find_matches, find_cocktails


app = Flask(__name__)
CORS(app)


@app.route('/api/', methods=['POST'])
def recommend():
    data = request.get_json()
    user_input = data['input']
    # cocktails = find_matches(user_input, 4)
    cocktails = find_cocktails(user_input, 3)
    return jsonify({
        'input': user_input,
        'recs': cocktails,
    })


if __name__ == '__main__':
    app.run(host='0.0.0.0')
