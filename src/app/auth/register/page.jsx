"use client";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex items-center justify-center">
      <form onSubmit={onSubmit} className="w-1/4">

        <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>

        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Username:
        </label>
        <input
          type="text"
          {...register("username", {
            required: {
                value: true,
                message: "Username is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="Your Username"
        />
        {
          errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>
        }

        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
                value: true,
                message: "Email is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="Your Email"
        />
        {
          errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>
        }

        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
                value: true,
                message: "Password is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="***********"
        />
        {
          errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>
        }

        <label htmlFor="confirmPassword" className="text-slate-500 mb-2 block text-sm">
          Confirm Password:
        </label>
        <input
          type="Password"
          {...register("confirmPassword", {
            required: {
                value: true,
                message: "Confirm Password is required",
            }
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="***********"
        />
        {
          errors.confirmPassword && <p className="text-red-500 text-sx">{errors.confirmPassword.message}</p>
        }

        <button className="p-3 rounded-lg block mb-2 mt-4 bg-blue-500 text-slate-200 w-full">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
