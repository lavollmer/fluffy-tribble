import React, { useState } from 'react'

function TextToSpeech() {

    // setting useState for text and audioURL
    const [text, setText] = useState('');
    const [audioURL, setAudioURL] = useState('');

    const handleSpeak = async () => {
        const response = await fetch('http://localhost:5000/synthesize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("data", data);
        setAudioURL(`data:audio/mp3;base64,${data.audio}`);

    };

    return (
        <div>
            <div>
                <h1>MedPronounce</h1>
            </div>
            <div>
                <input
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}></input>
                <button onClick={handleSpeak}>Say it</button>
                {audioURL &&
                    <audio controls src={audioURL}>
                        Your brower doesn't support audio</audio>}
            </div>
        </div>
    )
}

export default TextToSpeech