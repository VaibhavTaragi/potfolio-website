import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/5e2c9943-0ed2-4533-ab1a-65e22fb52aad' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-300 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or send me an email - <span className='text-blue-300 font-semibold'>taragivaibhav@gmail.com</span></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
            <input className='bg-[#ccd6f6] my-4 p-2' type='email' placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'/>
            <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact