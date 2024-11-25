import React, {useState} from 'react'
import ContactImg from '../assets/images/contact.png'
import Form from './Form'
const Contact = () => {

    
  return (
    <div class="bg-gray-50 dark:bg-gray-900" id="contact">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 class="text-4xl font-bold dark:text-gray-100">Contact</h2>
        <p class="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-gray-400">
            Want to contact us? Choose an
            option below and well be happy to show you how we can transform companys web experience.
        </p>
    </div>
    <div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src={ContactImg} />
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
    <Form/>
    </div>
</div>
    </div>
  )
}

export default Contact