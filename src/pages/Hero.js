import React from 'react'

const Hero = () => {
  return (
    <div class="relative bg-gray-600 w-full">
    <div class="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white" preserveAspectRatio="none">
            <path
                d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
            </path>
        </svg>
    </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 class="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              XYZTech
            </h2>
            <p class="mb-6 text-base text-white md:text-lg">
            we are committed to driving innovation through cutting-edge technology solutions. Specializing in web and mobile development, cloud integration, and AI-powered systems, we help businesses transform.
            </p>
        </div>
    </div>
</div>
  )
}

export default Hero