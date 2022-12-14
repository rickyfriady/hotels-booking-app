import {
  FaBed, FaPlane, FaCar, FaTaxi,
} from 'react-icons/fa';
import { SearchNav } from '../molecule';

const HeaderItems = [
  {
    icons: <FaBed />, title: 'Stay',
  },
  {
    icons: <FaPlane />, title: 'Flights',
  },
  {
    icons: <FaCar />, title: 'Car Rentals',
  },
  {
    icons: <FaTaxi />, title: 'Airport Taxi',
  },
];

function Header({ tipe }) {
  return (
    <div className="bg-white pt-16 flex text-gray-500 justify-center relative">
      <div className={tipe === 'list' ? 'header-listMode' : 'header-containers'}>
        <div className="flex gap-3 mb-12">
          {HeaderItems.map((items) => (
            <div className="flex items-center gap-2 cursor-pointer py-2 px-4 rounded-full bg-heroSec text-white hover:bg-iconNav/80 hover:text-heroSec ">
              {items.icons}
              <span>{items.title}</span>
            </div>
          ))}
        </div>
        {tipe !== 'list'
        && (
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl lg:text-5xl font-bold text-left">A lifetime of discounts? its genius</h1>
          <p className="my-5 text-md text-left">
            Get rewarded for your travels – unlock instant savings of 10% or
            more with a free Lamabooking account
          </p>
          <button type="button" className=" px-3 py-3 bg-iconNav/80 text-textNav font-Inter text-sm leading-tight rounded shadow-md hover:bg-iconNav hover:shadow-lg transition duration-150 ease-in-out">Sign In or Register</button>
        </div>
        )}
      </div>
      {tipe !== 'list'
      && <SearchNav />}
    </div>
  );
}

export default Header;
