import axios from 'axios';
import { MButton } from 'components/ui/button';
import { MInput } from 'components/ui/Input';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { UserSchema, type UserType } from 'schemas/login';
import { pageVariants } from 'variants/variants';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import useAuthStore from 'store/zustand';

export default function Login() {
  const { setIsAuth } = useAuthStore();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isLoading },
  } = useForm<UserType>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<UserType> = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email: data.email,
        password: data.password,
      });

      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        setIsAuth(true);
        navigate('/to-do')
      }

      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="h-screen flex flex-col items-center justify-center"
    >
      <h2 className="font-bold text-4xl mb-5">Log-in</h2>

      <form
        className="flex flex-col border-2 p-10 rounded-xl gap-6 w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label className="text-xl">Email</label>
          <MInput
            {...register('email', { required: true })}
            type="text"
            placeholder="Email"
            className="border py-2 pl-5 rounded-md"
            disabled={isLoading}
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {errors.email.message}
            </motion.p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xl">Password</label>
          <MInput
            {...register('password', { required: true })}
            type="password"
            placeholder="Password"
            className="border py-2 pl-5 rounded-md"
            disabled={isLoading}
          />
          {errors.password && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {errors.password.message}
            </motion.p>
          )}
        </div>
        <MButton
          type="submit"
          className="font-semibold text-xl border-2 py-2 px-7 rounded-xl transition-all duration-[350ms] hover:text-black hover:bg-white focus:outline-purple-800"
          disabled={!isValid && isLoading ? false : false}
        >
          Submit
        </MButton>
      </form>
    </motion.main>
  );
}
