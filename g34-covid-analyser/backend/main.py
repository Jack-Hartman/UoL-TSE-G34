from flask import Flask

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return {
        'name': 'Hello World'
    }

if __name__ == '__main__':
    app.run(debug=True)