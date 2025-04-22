import axios from 'axios';
import { MButton } from 'components/ui/button';
import { MInput } from 'components/ui/Input';
import { motion } from 'framer-motion';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { pageVariants } from 'variants/variants';
interface IRegisterData {
  userName: string;
  email: string;
  password: string;
}
export default function Registration() {
  const MotionPage = motion.main;
  const { register, handleSubmit } = useForm<IRegisterData>();
  const onSubmit: SubmitHandler<IRegisterData> = (data) => {
    axios.post('http://localhost:3000/api/sign-up', {
      userName: data.userName,
      email: data.email,
      password: data.password,
    });

    console.log(data);
  };

  return (
    <MotionPage
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="h-screen flex flex-col items-center justify-center"
    >
      <h2 className="font-bold text-4xl mb-5">Sign-up</h2>
      <motion.form
        className="flex flex-col border-2 p-15 rounded-xl gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label className="text-xl">Username</label>
          <MInput
            type="text"
            placeholder="Username"
            className="border py-2 pl-5 rounded-md"
            {...register('userName')}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl">Email</label>
          <MInput
            type="text"
            placeholder="Email"
            className="border py-2 pl-5 rounded-md"
            {...register('email')}
          />
        </div>
        <div className="flex flex-col  gap-2">
          <label className="text-xl">Password</label>
          <MInput
            type="password"
            placeholder="Password"
            className="border py-2 pl-5 rounded-md"
            {...register('password')}
          />
        </div>
        <MButton
          type="submit"
          className="font-semibold text-xl border-2 py-2 px-7 rounded-4xl transition-all duration-[350ms] hover:text-black hover:bg-white focus:outline-purple-800"
        >
          Submit
        </MButton>
      </motion.form>
    </MotionPage>
  );
}
