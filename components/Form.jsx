import React from 'react'

const Form = () => {
    return (
        <form action="https://formsubmit.co/coreystephenr@gmail.com" method="POST">
            <div className='left_column'>
                <input name='name' type='text' placeholder='YOUR NAME'></input>
                <input name='phone' type='text' placeholder='YOUR PHONE NUMBER'></input>
                <input name='email' type='email' placeholder='YOUR EMAIL'></input>
            </div>
            <div className='right_column'>
                <textarea name='project/message' type='text' placeholder='YOUR PROJECT'></textarea>
                <button type='submit'>SUBMIT</button>
            </div>
        </form>
    )
}

export default Form