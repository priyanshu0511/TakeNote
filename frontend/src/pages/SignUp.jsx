import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [name,setName]=useState('');
  const {signup,isLoading,error}=useSignup();
  const navigate = useNavigate();

  
  const handleSubmit = async(e) =>{
    e.preventDefault();

    await signup(name,email,password);
    if (!error) { 
      navigate('/');
  }
  }

  return (
    <div className="flex justify-center items-center h-[90vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e)=>setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
          />
          <button disabled={isLoading} className={`w-full ${isLoading?"opacity-50":"opacity-100"} bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition`}>
            Sign Up
          </button>
        </form>
        {error && (
          <div className="mt-3 text-center text-red-500 bg-red-100 p-2 rounded-md">
            {error}
          </div>
        )}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
