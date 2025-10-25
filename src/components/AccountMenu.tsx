
// import { useState } from "react";
// import { auth } from "../firebaseConfig";
// import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router";
// import { motion, AnimatePresence } from "framer-motion";

// export default function AccountMenu() {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const user = auth.currentUser;


//    const sessionUser = (() => {
//     try {
//       const raw = localStorage.getItem("ewa_session_v1");
//       return raw ? JSON.parse(raw) : null;
//     } catch {
//       return null;
//     }
//   })();

//   const displayName = sessionUser?.username || user?.displayName || "Guest User";
//   const email = sessionUser?.email || user?.email || "No email";


//   const handleSignOut = async () => {
//     try {
//       await signOut(auth);
//       setOpen(false);
//       navigate("/login");
//     } catch (err) {
//       console.error("Sign out error:", err);
//       alert("Sign out failed. Check console for details.");
//     }
//   };

//   return (
//     <div className="relative">
//       {/* Avatar button */}
//       <img
//         onClick={() => setOpen(!open)}
//         className={`w-10 h-10 rounded-full cursor-pointer border-2 ${
//           open ? "border-[#fc4747]" : "border-transparent"
//         } hover:border-[#fc4747] transition-all duration-300`}
//         src={user?.photoURL || "/image-avatar.png"}
//         alt="profile-avatar"
//       />

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 40 }}
//             transition={{ duration: 0.25 }}
//             className="absolute left-full ml-3 bottom-0 w-60 bg-[#161d2f]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-4 z-50"
//           >
//             <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-3">
//               <img
//                 src={user?.photoURL || "/image-avatar.png"}
//                 alt="user"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="text-white text-sm font-semibold">
//                   {displayName || "Guest User"}
//                 </p>
//                 <p className="text-gray-400 text-xs truncate max-w-[120px]">
//                   {email || "No email"}
//                 </p>
//               </div>
//             </div>

//             <ul className="flex flex-col gap-2">
//               <li>
//                 <button className="w-full text-left text-sm text-white/80 hover:text-[#fc4747] transition">
//                   Profile
//                 </button>
//               </li>
//               <li>
//                 <button className="w-full text-left text-sm text-white/80 hover:text-[#fc4747] transition">
//                   Settings
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={handleSignOut}
//                   className="w-full text-left text-sm text-red-400 hover:text-red-500 transition"
//                 >
//                   Sign Out
//                 </button>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

export default function AccountMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  const sessionUser = (() => {
    try {
      const raw = localStorage.getItem("ewa_session_v1");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  const displayName = sessionUser?.username || user?.displayName || "Guest User";
  const email = sessionUser?.email || user?.email || "No email";

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setOpen(false);
      navigate("/login");
    } catch (err) {
      console.error("Sign out error:", err);
      alert("Sign out failed. Check console for details.");
    }
  };

  return (
    <div className="relative">
      {/* Avatar button */}
      <img
        onClick={() => setOpen(!open)}
        className={`w-10 h-10 rounded-full cursor-pointer border-2 ${
          open ? "border-[#fc4747]" : "border-transparent"
        } hover:border-[#fc4747] transition-all duration-300`}
        src={user?.photoURL || "/image-avatar.png"}
        alt="profile-avatar"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="absolute z-50 w-60 bg-[#161d2f]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-4 
              right-0 mt-3 sm:right-0 sm:left-auto
              lg:left-full lg:ml-3 lg:bottom-0 lg:mt-0"
          >
            {/* User info */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-3">
              <img
                src={user?.photoURL || "/image-avatar.png"}
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-white text-sm font-semibold">
                  {displayName || "Guest User"}
                </p>
                <p className="text-gray-400 text-xs truncate max-w-[120px]">
                  {email || "No email"}
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-2">
              <li>
                <button className="w-full text-left text-sm text-white/80 hover:text-[#fc4747] transition">
                  Profile
                </button>
              </li>
              <li>
                <button className="w-full text-left text-sm text-white/80 hover:text-[#fc4747] transition">
                  Settings
                </button>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left text-sm text-red-400 hover:text-red-500 transition"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


