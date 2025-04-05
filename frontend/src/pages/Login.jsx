import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {login, isLoading, error} = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    await login(email,password);
    navigate('/');
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 h-[90vh]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button disabled={isLoading} className={`w-full ${isLoading?"opacity-50":"opacity-100"} bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition`}>
            LogIn
          </button>
        </form>
        {error && (
          <div className="mt-3 text-center text-red-500 bg-red-100 p-2 rounded-md">
            {error}
          </div>
        )}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to='/signup'><span className="text-blue-500 cursor-pointer hover:underline">Sign Up</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
