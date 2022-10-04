import './App.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import AllRouters from '../config/AllRouters';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AllRouters />
      </QueryClientProvider>
    </div>
  );
}

export default App;
