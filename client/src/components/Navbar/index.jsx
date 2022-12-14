import { Transition } from '@headlessui/react';
import { useState, useEffect } from 'react';
import {
  FaUserCircle, FaAngleDown, FaRegListAlt, FaPiggyBank, FaBookmark, FaTh,
} from 'react-icons/fa';

function Navbar() {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log('window.scrollY', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed border-t-8 border-iconNav w-full p-2 z-20 backdrop-blur-md bg-white font-Inter">
      <div className="mx-auto max-w-6xl relative">
        <nav className="flex items-center justify-between gap-3 text-base ">
          <a href="/" className="group">
            <h2 className="font-semibold tracking-tighter p-2 font-mplus text-lg">
              Logo
            </h2>
          </a>
          <div className="flex-1" />
          <div className="items-center gap-6 hidden sm:flex">
            <div className="flex justify-between gap-4">
              <div className="flex justify-center items-center gap-1 cursor-pointer">
                <FaBookmark className="w-3 h-4 mt-1" />
                <span className="text-sm">Saved</span>
              </div>
              <div className="flex justify-center items-center content-center gap-1 cursor-pointer">
                <FaRegListAlt className="w-4 h-5 " />
                <span className="text-sm">My Booking</span>
              </div>
              <div className="flex justify-center items-center gap-1 cursor-pointer">
                <FaPiggyBank className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-thin text-gray-400">Pay</span>
                <FaAngleDown className="w-4 h-4 mt-1 text-gray-500" />
              </div>
              <button className="flex justify-center items-center gap-1 cursor-pointer" type="button" onClick={() => setIsShowing(!isShowing)}>
                <FaUserCircle className="w-5 h-5  text-gray-400" />
                <span className="text-sm font-thin text-gray-500">Log In</span>
                <FaAngleDown className="w-4 h-4 mt-1 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="items-center ml-2 gap-6 hidden sm:flex">
            <button type="submit" className="px-3 py-1 bg-iconNav/80 rounded-md text-textNav hover:bg-iconNav"> Register </button>
          </div>

          <div className="flex flex-col sm:hidden relative">
            <div>
              <button type="submit" className="p-3 hover:bg-gray-300/50 hover:rounded ">
                <FaTh className="w-4 h-4" />
              </button>
            </div>
            <div className="hidden absolute -top-0 right-0 w-100 h-100 bg-red-200">
              <ul>
                <li>satu</li>
                <li>Dua</li>
                <li>Tiga</li>
              </ul>
            </div>
          </div>
        </nav>
        <Transition
          show={isShowing}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="w-1/5 h-12 bg-slate-400 absolute -bottom-12 right-24 flex flex-col">
            <h1>
              I will fade in and out
            </h1>
            <span>helo</span>
          </div>
        </Transition>
      </div>
    </header>
  );
}

export default Navbar;
