from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'FinInsight AI Agent API'

if __name__ == '__main__':
    app.run(debug=True)
