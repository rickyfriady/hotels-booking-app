/* eslint-disable react/jsx-props-no-spreading */

// import { useQuery } from '@tanstack/react-query';
import { Header, HomeCard } from '../../components';

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
      <Header />
      <HomeCard />
      {/* <div>
        {data.products.map((item) => (
          <div>{item.title}</div>
        ))}
      </div> */}
    </div>
  );
}

export default Home;
