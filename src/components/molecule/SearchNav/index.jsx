import { IoBedOutline } from 'react-icons/io5';
import { BsCalendarDate, BsPeople } from 'react-icons/bs';

function SearchNav() {
  return (
    <div className=" absolute -bottom-6 flex justify-around items-center w-full max-w-xs lg:max-w-5xl py-4 z-2 bg-[#b8c1ec] rounded-md">
      <div className=" flex justify-center items-center gap-2 ">
        <IoBedOutline className="text-heroSec w-6 h-6" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Where your going?"
          className="border-none outline-none bg-[#b8c1ec] text-white font-normal"
        />
      </div>
      <div className=" flex justify-center items-center gap-2">
        <BsCalendarDate className="text-heroSec w-5 h-5" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Where your going?"
        />
      </div>
      <div className=" flex justify-center items-center gap-2 ">
        <BsPeople className="text-heroSec w-5 h-5
        "
        />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Where your going?"
        />
      </div>
    </div>
  );
}

export default SearchNav;
