import { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import QuoteModal from '../QuoteModal';
const Header = () => {
  const [nav, setNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  let {pathname} = useLocation()
  let subpage = pathname.split('/')?.[1]
  const updateModal =()=>{
    setOpenModal(!openModal);
    console.log();
  }
  function Linkness (type = null){
    let classes ='block pr-4 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
    if(subpage === ''){
      subpage = 'home'
    }
    if(type === subpage){
      console.log('active');
      classes = 'block border-b-0 md:pl-0 sm:border-b-2 border-black font-bold'
    }
    else{
      classes ='block py-2 pr-4 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-medium'
    }
    return classes
  }
  function removeNav() {
    if(nav){
      setNav(!nav)
    }
  }
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
          <Link to="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              XYZTech 
            </span>
          </Link>

          <div
          onClick={removeNav}
            className={`flex-col md:flex md:flex-row items-center w-full md:w-auto md:order-2 transition-all duration-300 nav-list ${
              nav
                ? ' bg-white h-full absolute top-14 left-0 w-full shadow-md p-4 md:relative md:top-0 md:w-auto md:bg-white md:shadow-none'
                : 'hidden'
            }`}
          >
            <ul className="flex flex-col md:flex-row md:gap-8 gap-0">
              <li onClick={removeNav}>
                <Link
                  to="/home"
                  className={Linkness('home')}
                >
                  Home
                </Link>
              </li>
              <li onClick={removeNav}>
                <Link
                  to="/about"
                  className={Linkness('about')}
                >
                  About
                </Link>
              </li>
              <li onClick={removeNav}>
                <Link
                  to="contact"
                  className={Linkness('contact')}
                >
                  Contact Us
                </Link>
              </li>
              <li onClick={removeNav}>
                <Link
                  to="our-services"
                  className={Linkness('services')}
                  >
                  Our Services & Features
                </Link>
              </li>
              {/* Add more links here */}
            </ul>
            <button
              className="mt-4 lg:ml-6 md:mt-0 rounded-full bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700"
              onClick={updateModal}
              type="button"
            >
              Get Quote
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center lg:order-1">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={nav}
              onClick={() => setNav(!nav)}
            >
              <span className="sr-only">Open main menu</span>
              {nav ? (
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
              )}
            </button>
          </div>

         
        </div>
      </nav>
      {openModal && 
      <QuoteModal updateModal={updateModal} />
      }
      
    </header>
  );
};

export default Header;
