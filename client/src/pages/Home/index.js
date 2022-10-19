/* eslint-disable react/jsx-props-no-spreading */

// import { useQuery } from '@tanstack/react-query';
import {
  Featured, FeaturedProperties, Footer, Header, HomeCard, MailList, PropertyList,
} from '../../components';

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
    <div className="w-full h-full relative ">
      <Header />
      <HomeCard />
      {/* <div>
        {data.products.map((item) => (
          <div>{item.title}</div>
        ))}
      </div> */}
      <div className="flex mt-12 flex-col items-center gap-7">
        <Featured />
        <h1 className="w-full max-w-5xl text-4xl font-Inter text-left capitalize">Browse by property type</h1>
        <PropertyList />
        <h1 className="w-full max-w-5xl text-4xl font-Inter text-left capitalize">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
