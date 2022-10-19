/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IoBedOutline } from 'react-icons/io5';
import { BsCalendarDate, BsPeople } from 'react-icons/bs';
import { FaMinus, FaPlus } from 'react-icons/fa';

import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; //

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchNav() {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
    }));
  };

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } });
  };

  return (
    <div className=" absolute -bottom-8 flex justify-around items-center w-full max-w-xs lg:max-w-5xl py-4 z-2 bg-[#b8c1ec] rounded-md">
      <div className=" flex justify-center items-center gap-2 ">
        <IoBedOutline className="text-heroSec w-6 h-6" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Where your going?"
          className="border-none outline-none bg-[#b8c1ec] text-white font-normal placeholder:italic placeholder:text-heroSec "
          onChange={(e) => setDestination(e.target.value)}
          value={destination}
        />
      </div>
      <div className=" flex justify-center items-center gap-2">
        <BsCalendarDate className="text-heroSec w-5 h-5" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="cursor-pointer text-heroSec font-normal"
        >
          {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
            date[0].endDate,
            'MM/dd/yyyy',
          )}`}
        </span>
        {openDate && (
        <DateRange
          editableDateInputs
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="absolute top-16 z-20"
          minDate={new Date()}
        />
        )}
      </div>
      <div className=" flex justify-center items-center gap-2 ">
        <BsPeople className="text-heroSec w-5 h-5" />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="cursor-pointer text-heroSec"
        >
          {`${options.adult} adult · ${options.children} children · ${options.room} room`}
        </span>

        {openOptions && (
        <div className="absolute z-10 top-16 bg-white text-heroSec rounded-md">
          <div className="w-52 flex justify-between items-center m-3">
            <span className="text-heroSec font-Inter text-md">Adult</span>
            <div className="flex items-center justify-center gap-3 text-md text-iconNav">
              <button
                type="button"
                disabled={options.adult <= 1}
                className="w-8 h-8  text-heroSec cursor-pointer bg-white hover:bg-gray-200 hover:rounded-full disabled:cursor-not-allowed disabled:text-gray-400"
                onClick={() => handleOption('adult', 'd')}
              >
                <FaMinus className="mx-auto  text-sm" />
              </button>
              <span className="w-8 h-8 text-lg font-semibold border-b-2 border-heroSec/50">
                {options.adult}
              </span>
              <button
                type="button"
                className="w-8 h-8 text-heroSec cursor-pointer bg-white hover:bg-gray-200 hover:rounded-full disabled:cursor-not-allowed"
                onClick={() => handleOption('adult', 'i')}
              >
                <FaPlus className="mx-auto  text-sm" />
              </button>
            </div>
          </div>
          <div className="w-52 flex justify-between  items-center m-3">
            <span className="text-heroSec font-Inter text-md">Children</span>
            <div className="flex items-center gap-3 text-md text-iconNav">
              <button
                disabled={options.children <= 0}
                type="button"
                className="w-8 h-8  text-heroSec cursor-pointer bg-white hover:bg-gray-200 hover:rounded-full disabled:cursor-not-allowed disabled:text-gray-400"
                onClick={() => handleOption('children', 'd')}
              >
                <FaMinus className="mx-auto  text-sm" />
              </button>
              <span className="w-8 h-8 text-lg font-semibold border-b-2 border-heroSec/50">
                {options.children}
              </span>
              <button
                type="button"
                className="w-8 h-8 text-heroSec cursor-pointer bg-white hover:bg-gray-200 hover:rounded-full disabled:cursor-not-allowed"
                onClick={() => handleOption('children', 'i')}
              >
                <FaPlus className="mx-auto  text-sm" />
              </button>
            </div>
          </div>
          <div className="w-52 flex justify-between  items-center m-3">
            <span className="text-heroSec font-Inter text-md">Room</span>
            <div className="flex items-center gap-3 text-md text-iconNav">
              <button
                disabled={options.room <= 1}
                type="button"
                className="w-8 h-8  text-heroSec cursor-pointer bg-white hover:bg-gray-200 hover:rounded-full disabled:cursor-not-allowed disabled:text-gray-400"
                onClick={() => handleOption('room', 'd')}
              >
                <FaMinus className="mx-auto  text-sm" />
              </button>
              <span className="w-8 h-8 text-lg font-semibold border-b-2 border-heroSec/50">
                {options.room}
              </span>
              <button
                type="button"
                className="w-8 h-8 text-heroSec cursor-pointer bg-white hover:bg-gray-200 hover:rounded-full disabled:cursor-not-allowed"
                onClick={() => handleOption('room', 'i')}
              >
                <FaPlus className="mx-auto text-sm" />
              </button>
            </div>
          </div>
        </div>
        )}
      </div>
      <button type="submit" className="px-12 py-1 bg-iconNav/80 rounded-md font-Inter text-md text-textNav hover:bg-iconNav" onClick={handleSearch}> Search </button>
    </div>
  );
}

export default SearchNav;
