/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { Header, SearchItem } from '../../components';
import { useFetch } from '../../hooks/useFetch';
import { useQuery } from '@tanstack/react-query';

function ListHotel() {
  const location = useLocation();
  const [destination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options] = useState(location.state.options);
  const [min, setMin] = useState(undefined) ;
  const [max, setMax] = useState(undefined) ;

  const url = `http://localhost:8800/api/hotel?city=${destination}&min=${min || 0 }&max=${max || 999}`;
  const { data,  isLoading } = useQuery(['listhotel', url], () => useFetch(url));

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  //refetching
  const handleClick = () => {
    useQuery(['listhotel', url], () => useFetch(url))
  };
  return (
    <div>
      <Header tipe="list" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-5xl flex gap-5">
          <div className="flex-1 p-2 sticky top-20 h-max bg-iconNav text-left ">
            <h1 className="text-xl mb-2 font-bold">Search</h1>
            <div className="mb-2">
              <label htmlFor="destination-input" className="text-sm flex flex-col gap-2 ">
                Destination
                <input placeholder={destination} id="destination-input" type="text" className="h-7 border-none p-1" />
              </label>
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label htmlFor="range-input" className="text-sm">
                Check-in Date
                <span onClick={() => setOpenDate(!openDate)} className="h-7 p-1 bg-white flex items-center cursor-pointer mb-1">
                  {`${format(
                    date[0].startDate,
                    'MM/dd/yyyy',
                  )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                </span>
                {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  id="range-input"
                />
                )}
              </label>
            </div>
            <div className="mb-2 flex flex-col gap-2">
              <span>
                Options
              </span>
              <div className="p-2">
                <div className="flex justify-between mb-2 text-heroSec text-xs">
                  <span className="lsOptionText">
                    Min price
                    {' '}
                    <small>per night</small>
                  </span>
                  <input type="number" className="w-12" />
                </div>
                <div className="flex justify-between mb-2 text-heroSec text-xs">
                  <span className="lsOptionText">
                    Max price
                    {' '}
                    <small>per night</small>
                  </span>
                  <input type="number" className="w-12" />
                </div>
                <div className="flex justify-between mb-2 text-heroSec text-xs">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="w-12"
                    placeholder={options.adult}
                  />
                </div>
                <div className="flex justify-between mb-2 text-heroSec text-xs">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="w-12"
                    placeholder={options.children}
                  />
                </div>
                <div className="flex justify-between mb-2 text-heroSec text-xs">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="w-12"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button type="button" className="p-2 bg-heroSec text-iconNav border-none w-full font-medium cursor-pointer" onClick={handleClick} >Search</button>
          </div>

          <div className="flex-[3_1_0%]">
                {data.data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListHotel;
