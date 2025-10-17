import './App.css'
import Homepage from './pages/Homepage'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";
import Login from "./pages/Login";

function App() {

const [user, loading] = useAuthState(auth);


  if (loading) return <p className='text-center h-min text-red-500'>Loading...</p>; 
  if (!user) return <Login />; // show login if not signed in

  return <Homepage />;
  
}

export default App
