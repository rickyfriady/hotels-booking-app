import { Link } from "react-router-dom";

function SearchItem({item}) {
  return (
    <div className="border-2 border-solid border-gray-500 p-3 rounded-md flex justify-between gap-5 mb-5 text-left">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="w-[200px] h-[200px] object-cover"
      />
      <div className="flex flex-col gap-2 flex-[2_1_0%]">
        <h1 className="text-lg text-blue-400">{item.name}</h1>
        <span className="text-sm">{item.distance} Meters</span>
        <span className="text-sm bg-iconNav text-heroSec w-max p-1 rounded-md">Free airport taxi</span>
        <span className="text-sm font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-sm">
        {item.desc}
        </span>
        <span className="text-xl text-heroSec font-bold">Free cancellation </span>
        <span className="text-sm font-semibold text-iconNav ">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        {item.rating &&
        <div className="flex justify-between">
          <span className="font-medium">Excellent</span>
          <button type="button" className="bg-yellowSec p-1 font-bold border-2 border-black">{item.rating}</button>
        </div>
        }
        <div className="text-right justify-center flex flex-col gap-1">
          <span className="text-2xl">${item.cheapestPrice}</span>
          <span className="text-xs text-gray-400">Includes taxes and fees</span>
          <Link to={`/hotel/${item._id}`}>
          <button type="button" className="bg-heroSec text-iconNav font-bold p-2 border-none cursor-pointer rounded">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
