/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import { useFetch } from '../../../hooks/useFetch';

function PropertyList() {
  const properyData = [
    {
      src: 'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o='
    },
    {
      src: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg'
    },
    {
      src: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg'
    },
    {
      src: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg'
    },
    {
      src: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg'
    },
  ];

  const url = "http://localhost:8800/api/hotel/countByType";
  const { data, isLoading } = useQuery(['property', url], () => useFetch(url));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-5xl flex justify-between gap-5">
      {properyData.map((items,key ) => (
        <div className="flex-1 rounded-xl overflow-hidden cursor-pointer bg-iconNav shadow-lg relative" key={key}>
          <div className="absolute top-1 left-2">
            <span className="px-3 py-1 rounded-lg bg-heroSec text-sm text-iconNav font-Inter">Hot</span>
          </div>
          <img src={items.src} alt="property-poto" className="w-full h-40 object-cover" />
          <div className="p-3 text-heroSec">
            <h1 className="text-left text-xl capitalize">{data[key]?.type}</h1>
            <h2 className="text-left text-md font-thin">{data[key]?.count} units</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
