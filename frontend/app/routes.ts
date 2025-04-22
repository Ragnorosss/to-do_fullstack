import { type RouteConfig, route, index } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  route('/auth/log-in', '../components/screen/login.tsx'),
  route('/auth/sign-up', '../components/screen/registration.tsx'),
  route('/to-do', '../components/screen/to-do.tsx'),
] satisfies RouteConfig;
