import { AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

const AnimatedOutlet = (): React.JSX.Element => {
  const outlet = useOutlet();
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={true}>
      <Fragment key={location.pathname}>{outlet}</Fragment>
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
