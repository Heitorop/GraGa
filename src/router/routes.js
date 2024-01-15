import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root.jsx';
import PlantsDb from '../pages/PlantsDB/PlantsDb.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/plants-db',
        element: <PlantsDb />,
      },
    ],
  },
]);
