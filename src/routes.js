import App from './app';
import { NotFound } from './pages';
import Home from './pages/Home/Home';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        component: NotFound
      }
    ]
  }
];
