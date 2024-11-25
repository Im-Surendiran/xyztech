import React, {useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import emailjs from '@emailjs/browser';
const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
      });
      const notifySuccess = (res) => {
        toast.success(res);
      };
    
      const notifyError = (res) => {
        toast.error(res);
      };
      const onSubmit = async (e) => {
        e.preventDefault();
        let templateParams = {
            name : formData.name,
            email:  formData.email,
            message: formData.message
          };
         emailjs.send('service_q8zxw4a','template_24vtdkd', templateParams, {
                publicKey: 'WvG706Eu6Jwzd-Yzw',
              }).then(
                (response) => {
                  console.log('SUCCESS!', response.status, response.text);
                  notifySuccess(response.text);
                  ClearInputs();
                },
                (error) => {
                  console.log('FAILED...', error);
                  notifyError(error)
                },
              );
       
      }; 

      const ClearInputs =()=>{
        setFormData({name:''})
        setFormData({email:''})
        setFormData({message:''})
      }
  return (
    <div><form>
    <input type="checkbox" id="" class="hidden" name="botcheck" />
    <div class="mb-5">
        <input type="text" placeholder="Full Name" autocomplete="false"
            class="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            name="name"
            value={formData.name}
onChange={(e)=>setFormData({name:e.target.value})} />
    </div>
    <div class="mb-5">
        <label for="email_address" class="sr-only">Email Address</label>
        <input id="email_address" type="email" placeholder="Email Address" autocomplete="false"
            class="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            name="email"
            value={formData.email}
onChange={(e)=>setFormData({email:e.target.value})} />
    </div>
    <div class="mb-3">
        <textarea placeholder="Your Message"
            class="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            name="message"
            value={formData.message}
            onChange={(e)=>setFormData({message:e.target.value})}>
        </textarea>
    </div>
    <button type="submit"
    onClick={onSubmit}
        class="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black ">Send
        Message
    </button>
</form>
<ToastContainer position="top-center"/>
</div>
  )
}

export default Form