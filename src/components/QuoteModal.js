import React from 'react'
import Form from '../pages/Form'

const QuoteModal = ({updateModal}) => {
    return (
        <div>
            <    div id="contactFormModal" class="fixed z-10 inset-0 overflow-y-auto bg-gray-900 bg-opacity-60 h-full w-full px-4">
                <div class="flex items-center justify-center min-h-screen">
                    <div class="bg-white w-11/12 md:max-w-lg w-1/2 p-6 rounded shadow-md">
                        <div class="flex justify-end">
                            <button id="closeContactForm"
                            onClick={updateModal} class="text-gray-700 hover:text-gray-800">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <h2 class="text-2xl font-bold mb-4">Get Quote</h2>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default QuoteModal