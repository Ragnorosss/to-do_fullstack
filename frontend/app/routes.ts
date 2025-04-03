import { type RouteConfig, route, index } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  route('/auth/log-in', '../components/screen/Login.tsx'),
  route('/auth/sign-up', '../components/screen/Registration.tsx'),
  route('/to-do', '../components/screen/To-do.tsx'),
] satisfies RouteConfig;
