import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  MainApp, Home, Page404, ListHotel,
} from '../../pages';

function AllRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/hotels" element={<ListHotel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AllRouters;
