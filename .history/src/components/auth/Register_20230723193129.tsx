import React from "react";
import { useForm } from "react-hook-form";

type RegisterFormInputs = {
  username: string;
  email: string;
  password: string;
};

const Register: React.FC = () => {


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
       
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              ref={register({ required: "Email is required" })}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
            />
            {errors.email && (
              <p className="text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

      </div>
    </div>
  );
};

export default Register;
