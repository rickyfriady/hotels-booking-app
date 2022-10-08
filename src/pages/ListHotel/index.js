import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Header } from '../../components';

function ListHotel() {
  const location = useLocation();
  const [destination] = useState(location.state.destination);
  return (
    <div>
      <Header tipe="list" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-5xl flex gap-5">
          <div className="flex-1 p-2 sticky top-2 h-max">
            <h1 className="text-lg mb-2">Search</h1>
            <div className="flex flex-col gap-2 mb-2">
              <label htmlFor="destination-input">
                Destination
                <input placeholder={destination} id="destination-input" type="text" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListHotel;
