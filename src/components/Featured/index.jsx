import React from 'react';

function Featured() {
  const featuredHotels = [
    {
      src: 'https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=',
      name: 'Dublin',
      detail: '123 properties',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=',
      name: 'Reno',
      detail: '123 properties',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=',
      name: 'Austin',
      detail: '123 properties',
    },
  ];

  return (
    <div className="w-full max-w-5xl flex justify-between gap-7 z-10 ">
      {featuredHotels.map((hotels) => (
        <div className="relative text-white rounded-xl overflow-hidden h-60 cursor-pointer bg-no-repeat bg-cover group ">
          <img src={hotels.src} alt="hotels" className="w-full object-cover group-hover:scale-110  transition duration-300 ease-in-out" />
          <div className="absolute bottom-5 left-5 z-10">
            <h1 className="text-left text-2xl font-semibold">{hotels.name}</h1>
            <h2 className="font-normal text-lg">{hotels.detail}</h2>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out bg-black/80" />
        </div>
      ))}
    </div>
  );
}

export default Featured;
