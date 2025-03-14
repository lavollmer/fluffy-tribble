import React, { useState } from 'react'


const practice = () => {
    const [name, setName] = useState('');

    // const handleSubmit= (e) => {
    //     e.preventDefault();
    //     alert(`The medication you entered was ${name}`)
    // }

    return (
        <>
            <div>
                <form>
                    <div>
                        <label>Enter medication name:
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}></input>
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default practice