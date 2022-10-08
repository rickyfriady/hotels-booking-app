/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { Header, SearchItem } from '../../components';

function ListHotel() {
  const location = useLocation();
  const [destination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Header tipe="list" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-5xl flex gap-5">
          <div className="flex-1 p-2 sticky top-2 h-max bg-iconNav">
            <h1 className="text-lg mb-2">Search</h1>
            <div className="flex flex-col gap-2 mb-2">
              <label htmlFor="destination-input">
                Destination
                <input placeholder={destination} id="destination-input" type="text" />
              </label>
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label htmlFor="range-input">
                Check-in Date
                <span onClick={() => setOpenDate(!openDate)}>
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
          </div>

          <div className="flex-3">
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListHotel;
