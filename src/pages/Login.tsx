// src/pages/Login.tsx
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate, Link } from "react-router";
import { Film } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [message, setMessage] = useState("");

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!email) newErrors.email = "Can't be empty";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";

    if (!password) newErrors.password = "Can't be empty";
    else if (password.length < 6) newErrors.password = "Min 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful!");
      setTimeout(() => {
        navigate("/home"); // redirect where you want
      }, 2000);
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="mb-12">
        <Film className="w-12 h-12 text-red-500" strokeWidth={2.5} />
      </div>

      <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md shadow-2xl border border-slate-700/50">
        <h2 className="text-3xl font-light text-white mb-8">Login</h2>

        <div className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-transparent border-b-2 ${
                errors.email ? "border-red-500" : "border-slate-600"
              } text-white placeholder-slate-500 py-3 px-1 focus:outline-none focus:border-red-500 transition-colors`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-transparent border-b-2 ${
                errors.password ? "border-red-500" : "border-slate-600"
              } text-white placeholder-slate-500 py-3 px-1 focus:outline-none focus:border-red-500 transition-colors`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
          >
            Login to your account
          </button>

          {message && <p className="text-green-400 text-center text-sm">{message}</p>}
        </div>

        <p className="text-center text-slate-400 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-red-500 hover:text-red-400 transition-colors font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
