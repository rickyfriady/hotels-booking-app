const FuturedPropertiesData = [
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
    title: 'Aparthotel Stare Miasto',
    location: 'Madrid',
    priceStart: '$120',
    rating: {
      star: '8.9',
      starDesc: 'Excellent',
    },
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1',
    title: 'Four Seasons Hotel',
    location: 'Lisbon',
    priceStart: ' $99',
    rating: {
      star: '8.8',
      starDesc: 'Excellent',
    },
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1',
    title: 'Hilton Garden Inn',
    location: 'Berlin',
    priceStart: ' $105',
    rating: {
      star: '9.0',
      starDesc: 'Excellent',
    },
  },
];

function FeaturedProperties() {
  return (
    <div className="w-full max-w-5xl flex justify-between gap-5">
      {FuturedPropertiesData.map((items, key) => (
        <div className="flex-1 gap-2 flex flex-col shadow-lg rounded-t-lg overflow-hidden relative" key={key}>
          <img src={items.src} alt="futured-Property" className="w-full h-60 object-cover" />
          <div className="flex-1 gap-2 flex flex-col text-left px-4 pb-4">
            <span className="font-bold">{items.title}</span>
            <span className="font-light">{items.location}</span>
            <span className="font-medium">
              Starting From
              {items.priceStart}
            </span>
            <div className="absolute top-1 right-4">
              <button type="button" className="py-0 px-2 mr-2  font-bold bg-[#F9BC60]">{items.rating.star}</button>
              <span className="text-sm  text-white">{items.rating.starDesc}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProperties;
