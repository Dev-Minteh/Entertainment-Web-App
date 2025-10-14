

// import { useState } from "react";
// import { registerUser } from "../services/auth";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSignup = async () => {
//     try {
//       await registerUser(email, password);
//       setMessage("Signup successful!");
//     } catch (error: any) {
//       setMessage(error.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//     <img src="/logo.svg" alt="logo" className="mb-8"/>
//       <div className="bg-white p-6 rounded shadow w-80">
//         <h2 className="text-xl font-semibold mb-4 text-center">Create Account</h2>
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
//           className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
//           onClick={handleSignup}
//         >
//           Sign Up
//         </button>
//         {message && <p className="mt-3 text-center text-sm text-gray-600">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Signup;



// import { useState } from "react";
// import { registerUser } from "../services/auth"; // your Firebase signup logic

// export default function SignupForm({ onSwitchMode }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeatPassword, setRepeatPassword] = useState("");
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSignup = async () => {
//     if (!email || !password || !repeatPassword) {
//       setError("All fields are required");
//       return;
//     }
//     if (password !== repeatPassword) {
//       setError("Passwords don't match");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     setIsLoading(true);
//     setError("");
//     setMessage("");

//     try {
//       await registerUser(email, password);
//       setMessage("Signup successful!");
//     } catch (error) {
//       setError(error.message || "Signup failed");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
//       <h2 className="text-3xl font-light text-white mb-8">Sign Up</h2>

//       <div className="space-y-6">
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
//         <input
//           type="password"
//           placeholder="Repeat Password"
//           value={repeatPassword}
//           onChange={(e) => setRepeatPassword(e.target.value)}
//           disabled={isLoading}
//           className="w-full bg-transparent border-b-2 border-slate-600 text-white placeholder-slate-500 py-3 px-1 focus:outline-none focus:border-red-500 transition-colors"
//         />

//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         {message && <p className="text-green-400 text-center text-sm">{message}</p>}

//         <button
//           onClick={handleSignup}
//           disabled={isLoading}
//           className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isLoading ? "Processing..." : "Create an account"}
//         </button>
//       </div>

//       <p className="text-center text-slate-400 mt-6 text-sm">
//         Already have an account?{" "}
//         <button
//           onClick={onSwitchMode}
//           className="text-red-500 hover:text-red-400 font-medium"
//         >
//           Login
//         </button>
//       </p>
//     </div>
//   );
// }    

import { useState, ChangeEvent } from "react";
// import { Film } from "lucide-react";
import { Link } from "react-router"; // 👈 for navigation to login page

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
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

    if (!repeatPassword) {
      newErrors.repeatPassword = "Can't be empty";
    } else if (password !== repeatPassword) {
      newErrors.repeatPassword = "Passwords don't match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (): void => {
    if (validateForm()) {
      setMessage("Account creation successful!");
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
    if (field === "repeatPassword") setRepeatPassword(value);
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="mb-12">
        {/* <Film className="w-12 h-12 text-red-500" strokeWidth={2.5} /> */}
      </div>

      {/* Signup Card */}
      <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md shadow-2xl border border-slate-700/50">
        <h2 className="text-3xl font-light text-white mb-8">Sign Up</h2>

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

          {/* Repeat Password */}
          <div>
            <input
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => handleInputChange(e, "repeatPassword")}
              className={`w-full bg-transparent border-b-2 ${
                errors.repeatPassword ? "border-red-500" : "border-slate-600"
              } text-white placeholder-slate-500 py-3 px-1 focus:outline-none focus:border-red-500 transition-colors`}
            />
            {errors.repeatPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.repeatPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSignup}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
          >
            Create an account
          </button>

          {/* Message */}
          {message && (
            <p className="text-green-400 text-center text-sm">{message}</p>
          )}
        </div>

        {/* 👇 Toggle link */}
        <p className="text-center text-slate-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-500 hover:text-red-400 transition-colors font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
