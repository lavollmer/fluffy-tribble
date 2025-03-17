from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from google.cloud import texttospeech
import base64
import os

app = Flask(__name__)

# enable CORS for all routes
CORS(app, origins="http://localhost:5181")

@app.route('/')
def main_homepage():
    return "welcome to the backend!"


# Using a route decorator to tell Flask what URL to trigger the function
@app.route("/synthesize", methods=["POST"])
def synthesize_speech():
    try:
        if not os.getenv('GOOGLE_APPLICATION_CREDENTIALS'):
            return jsonify({"error": "Google credentials not found!"}), 500
        
        client = texttospeech.TextToSpeechClient()
        text = request.json["text"]
        if not text:
            return jsonify({"error": "No text provided"}), 400

        input_text = texttospeech.SynthesisInput(text=text)
        voice = texttospeech.VoiceSelectionParams(
            language_code="en-US", ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
        )
        audio_config = texttospeech.AudioConfig(
            audio_encoding=texttospeech.AudioEncoding.MP3
        )

        response = client.synthesize_speech(
            request={"input": input_text, "voice": voice, "audio_config": audio_config}
        )

        audio_data = base64.b64encode(response.audio_content).decode("utf-8")
        return jsonify({"audio": audio_data})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
