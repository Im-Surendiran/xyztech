import React from 'react'
import AboutImg from '../assets/images/aboutImg.png'
const About = () => {
  return (
    <div class="bg-gray-50 dark:bg-gray-900" id="contact">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 class="text-4xl font-bold dark:text-gray-100">About Us</h2>
        <p class="pt-6 pb-6 text-lg max-w-2xl text-center m-auto dark:text-gray-400">
        Empowering innovation through technology. Discover who we are, what we do, and why we do it.
        </p>
    </div>
    <div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
             <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About Our Company</h2>
            <p class="text-gray-700">
            At XYZTech, we specialize in delivering innovative IT solutions that drive business success. Founded in 2024, our mission is to empower organizations with cutting-edge technology, tailored software development, and expert consulting services. From web and mobile app development to cloud and AI integration, we harness the latest tools to solve complex challenges and create impactful solutions.  
With a customer-first approach and a team of skilled professionals, we are committed to delivering excellence, ensuring your business stays ahead in an ever-evolving digital landscape. Let us be your trusted partner in innovation.
            </p>
        </div>
    </div>
</div>
  
</div>
  )
}

export default About