# Main entry point for Flask backend
# intializes the app
# Connects the databases
# Imports the routes
import os
from flask import send_from_directory
import Flask
from flask_cors import CORS

app = Flask(__name__)
# Cross-origin requests from React app
CORS(app)

def hello_world():
    return 'Hello world!'

@app.route('/')
def serve_react_app():
    return send_from_directory(os.path.join(app.root_path, 'static', 'build'), 'index.html')

@app.route('/<path:path>')
def serve_react_static(path):
    return send_from_directory(os.path.join(app.root_path, 'static', 'build'), path)

if __name__ == '__main__':
    app.run(debug=True)