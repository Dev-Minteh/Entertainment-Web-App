

// import { useState } from "react";
// import { loginUser } from "../services/auth";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = async () => {
//     try {
//       await loginUser(email, password);
//       setMessage("Login successful!");
//     } catch (error: any) {
//       setMessage(error.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//     <img src="/logo.svg" alt="logo" className="mb-8"/>
//       <div className="bg-white p-6 rounded shadow w-80">
//         <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           className="border p-2 w-full mb-3 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="border p-2 w-full mb-3 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//         {message && <p className="mt-3 text-center text-sm text-gray-600">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";
// import { loginUser } from "../services/auth"; 

// export default function LoginForm({ onSwitchMode }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       setError("Email and password are required");
//       return;
//     }

//     setIsLoading(true);
//     setError("");
//     setMessage("");

//     try {
//       await loginUser(email, password);
//       setMessage("Login successful!");
//     } catch (error: any) {
//       setError(error.message || "Login failed");
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   //  try {
//   //     await loginUser(email, password);
//   //     setMessage("Login successful!");
//   //   } catch (error: any) {
//   //     setMessage(error.message);
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
//       <div className="mb-12">
//         <img src="/logo.svg" alt="logo" className=""/>
//       </div>
//        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md shadow-2xl border border-slate-700/50">
//       <h2 className="text-3xl font-light text-white mb-8">Login</h2>
//       <form className="space-y-6">
//         <input
//           type="email"
//           placeholder="Email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           disabled={isLoading}
//           className="w-full bg-transparent border-b-2 border-slate-600 text-white placeholder-slate-500 py-3 px-1 focus:outline-none focus:border-red-500 transition-colors"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           disabled={isLoading}
//           className="w-full bg-transparent border-b-2 border-slate-600 text-white placeholder-slate-500 py-3 px-1 focus:outline-none focus:border-red-500 transition-colors"
//         />

//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         {message && <p className="text-green-400 text-center text-sm">{message}</p>}

//         <button
//           onClick={handleLogin}
//           disabled={isLoading}
//           className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isLoading ? "Processing..." : "Login to your account"}
//         </button>
//       </form>

//       <p className="text-center text-slate-400 mt-6 text-sm">
//         Don’t have an account?{" "}
//         <button
//           onClick={onSwitchMode}
//           className="text-red-500 hover:text-red-400 font-medium"
//         >
//           Sign Up
//         </button>
//       </p>
//       </div>
//     </div>
//   );
// }

import { useState, ChangeEvent } from "react";
// import { Film } from "lucide-react";
import { Link } from "react-router"; // 👈 for navigation to signup page

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [message, setMessage] = useState<string>("");

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!email) {
      newErrors.email = "Can't be empty";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email";
    }

    if (!password) {
      newErrors.password = "Can't be empty";
    } else if (password.length < 6) {
      newErrors.password = "Min 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (): void => {
    if (validateForm()) {
      setMessage("Login successful!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: string
  ): void => {
    const value = e.target.value;
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="mb-12">
        {/* <Film className="w-12 h-12 text-red-500" strokeWidth={2.5} /> */}
      </div>

      {/* Login Card */}
      <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md shadow-2xl border border-slate-700/50">
        <h2 className="text-3xl font-light text-white mb-8">Login</h2>

        <div className="space-y-6">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => handleInputChange(e, "email")}
              className={`w-full bg-transparent border-b-2 ${
                errors.email ? "border-red-500" : "border-slate-600"
              } text-white placeholder-slate-500 py-3 px-1 focus:outline-none focus:border-red-500 transition-colors`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => handleInputChange(e, "password")}
              className={`w-full bg-transparent border-b-2 ${
                errors.password ? "border-red-500" : "border-slate-600"
              } text-white placeholder-slate-500 py-3 px-1 focus:outline-none focus:border-red-500 transition-colors`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
          >
            Login to your account
          </button>

          {/* Message */}
          {message && (
            <p className="text-green-400 text-center text-sm">{message}</p>
          )}
        </div>

        {/* 👇 Toggle link */}
        <p className="text-center text-slate-400 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-red-500 hover:text-red-400 transition-colors font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

