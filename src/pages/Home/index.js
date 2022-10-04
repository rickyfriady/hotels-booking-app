/* eslint-disable react/jsx-props-no-spreading */

// import { useQuery } from '@tanstack/react-query';
import { FaBed } from 'react-icons/fa';
import { HomeCard } from '../../components';

function Home() {
  // const fetchData = async () => {
  //   const response = await fetch('https://dummyjson.com/products');
  //   return response.json();
  // };

  // const { data, status } = useQuery(['products'], fetchData);

  // if (status === 'loading') {
  //   return <div>Loding .....</div>;
  // }

  // if (status === 'error') {
  //   return <div>Error! cant result data</div>;
  // }
  return (
    <div className="w-full h-full bg-heroSec relative">
      <div className="bg-white flex text-gray-500 justify-center">
        <div className="w-full max-w-5xl mt-5 mb-12 ">
          <div className="flex gap-10 mb-12">
            <div className="flex items-center gap-2">
              <FaBed />
              <span>Stays</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBed />
              <span>Stays</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBed />
              <span>Stays</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBed />
              <span>Stays</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBed />
              <span>Stays</span>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start">

            <h1 className="text-5xl font-bold text-left">A lifetime of discounts? its genius</h1>
            <p className="my-5  text-left">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
          </div>
        </div>
      </div>
      <HomeCard />
      {/* <SearchNav /> */}
      {/* <div>
        {data.products.map((item) => (
          <div>{item.title}</div>
        ))}
      </div> */}
    </div>
  );
}

export default Home;
