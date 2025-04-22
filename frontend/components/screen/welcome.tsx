import { list } from 'components/lists/welcome-list';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import useAuth from 'store/zustand';
import { childVariants, pageVariants } from 'variants/variants';

export function Welcome() {
  const { isAuth } = useAuth();
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="h-screen flex items-center justify-center flex-col gap-12"
    >
      <motion.h1 variants={childVariants} className="font-bold text-5xl">
        Welcome to Your Personal To-Do List!
      </motion.h1>
      <motion.p
        variants={childVariants}
        className="font-medium text-2xl max-w-[900px] text-center mx-auto"
      >
        Stay organized, boost your productivity, and never miss a task again.
        With our simple and intuitive task manager, you can:
      </motion.p>
      <ul className="flex gap-14 flex-wrap max-w-[1000px] justify-around mt-5 ">
        {list.map((item) => (
          <motion.li
            variants={childVariants}
            key={item.id}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="border-2 p-10 max-w-[400px] w-full"
          >
            <p className="font-bold"> {item.label}</p> <p>{item.description}</p>
          </motion.li>
        ))}
      </ul>
      <motion.div
        variants={childVariants}
        className="flex gap-5 justify-between"
      >
        {isAuth ? (
          <Link
            to={'/to-do'}
            className="font-semibold text-2xl border-2 py-5 px-14 rounded-4xl transition-all duration-[350ms] hover:text-black hover:bg-white"
          >
            Your To do list
          </Link>
        ) : (
          <>
            <Link
              to={'/auth/log-in'}
              className="font-semibold text-2xl border-2 py-5 px-14 rounded-4xl transition-all duration-[350ms] hover:text-black hover:bg-white"
            >
              Log in
            </Link>
            <Link
              to={'/auth/sign-up'}
              className="font-semibold text-2xl border-2 py-5 px-14 rounded-4xl transition-all duration-[350ms] hover:text-black hover:bg-white"
            >
              Sign up
            </Link>
          </>
        )}
      </motion.div>
    </motion.main>
  );
}
