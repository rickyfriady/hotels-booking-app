import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';

function MainApp() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainApp;
