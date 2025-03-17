import os
from google.cloud import texttospeech

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'C:\Users\Elmo0\Laura\medpro.json'
print(f"Using credentials file at: {os.environ['GOOGLE_APPLICATION_CREDENTIALS']}")
client = texttospeech.TextToSpeechClient()

text_block = '''
lindus construction'''

synthesis_input = texttospeech.SynthesisInput(text=text_block)

voice = texttospeech.VoiceSelectionParams(
    language_code = 'en-AU',
    name='en-AU-Neural2-B'
)

audio_config= texttospeech.AudioConfig(
    audio_encoding=texttospeech.AudioEncoding.MP3,
    effects_profile_id=['small-bluetooth-speaker-class-device'],
    speaking_rate=1,
    pitch=1
)

response = client.synthesize_speech(
    input=synthesis_input, voice=voice,audio_config=audio_config
)

with open("output.mp3", "wb") as output:
    output.write(response.audio_content)
    print("Audio content written to file output")