import React, { useState } from 'react'
import Button from "./button.jsx"

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
        <div className='flex flex-col items-center justify-center p-6 font-roboto'>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="shadow-md rounded px-8 pt-6 pb-8 mb-4 font-roboto"></input>
            <Button onClick={handleSpeak} buttonText='Speak it' />
            <div className='flex flex-col items-center justify-center p-6'>
                {audioURL &&
                    <audio controls src={audioURL}>
                        Your brower doesn't support audio</audio>}
            </div>
        </div>
    )
}

export default TextToSpeech