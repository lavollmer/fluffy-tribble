import React, { useState } from 'react'

import React from 'react'

const texttospeech = () => {
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
        const data = await response.json();
        setAudioUrl(`data:audio/mp3;base64,${data.audio}`);
    };

    return (
        <div>
            <h1>tts</h1>
        </div>
    )
}

export default texttospeech