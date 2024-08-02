import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import TestLayout from '../pages/TestLayout';
import TestLayoutForm from '../pages/TestLayoutForm';
import TestSelect from '../pages/TestSelect';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/test-layout',
        element: <TestLayout />,
    },
    {
        path: '/test-layout-form',
        element: <TestLayoutForm />,
    },
    {
        path: '/test-select',
        element: <TestSelect />,
    },
    {
        path: '/*',
        element: <NotFound />,
    },
]);

export { router };