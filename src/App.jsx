import { RouterProvider } from 'react-router-dom';
import router from './routes/router-config'

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
