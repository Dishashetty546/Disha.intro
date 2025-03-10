import React from 'react'
import {CONTACT} from '../constants/index'
const Contacts = () => {
  return (
    <div className='text-white border-b tet-neutral-900 pb-20'>
      <h1 className='my-10 text-center text-4xl'>Get In Touch</h1>
      <div className='text-center tracking-tighter'>
        <p className='my-4'>{CONTACT.address}</p>
        
        <a href="#" className='border-b'>{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contacts