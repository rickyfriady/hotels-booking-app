import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainApp, Home, Page404 } from '../../pages';

function AllRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AllRouters;
