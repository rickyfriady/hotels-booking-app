/* eslint-disable react/jsx-props-no-spreading */

// import { useQuery } from '@tanstack/react-query';
import {
  Featured, FeaturedProperties, Footer, Header, HomeCard, MailList, PropertyList,
} from '../../components';

function Home() {

  return (
    <div className="w-full h-full relative ">
      <Header />
      <HomeCard />
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
