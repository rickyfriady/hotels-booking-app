/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import { useFetch } from '../../../hooks/useFetch';

function FeaturedProperties() {
  


const url = "http://localhost:8800/api/hotel?featured=true&limit=4";
const { data,  isLoading } = useQuery(['futuredPro', url], () => useFetch(url));

if (isLoading) {
  return <div>Loading...</div>;
}

return (
    <div className="w-full max-w-5xl flex justify-between gap-5">
      {data.data.map((items, key) => (
        <div className="flex-1 gap-2 flex flex-col shadow-lg rounded-t-lg overflow-hidden relative" key={key}>
          <img src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1' alt="futured-Property" className="w-full h-60 object-cover" />
          <div className="flex-1 gap-2 flex flex-col text-left px-4 pb-4">
            <span className="font-bold">{items.name}</span>
            <span className="font-light">{items.city}</span>
            <span className="font-medium">
              Starting From $
              {items.cheapestPrice}
            </span>
            {items.rating &&
            <div className="absolute top-1 right-4">
              <button type="button" className="py-0 px-2 mr-2  font-bold bg-[#F9BC60]">{items.rating}</button>
              <span className="text-sm  text-white">Excelent</span>
            </div>
            }
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProperties;
