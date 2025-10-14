import { useState } from "react";
import { auth } from "../firebaseConfig";

export default function AccountMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <img
        onClick={() => setOpen(!open)}
        className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 hover:ring-white transition"
        src={auth.currentUser?.photoURL || "/image-avatar.png"}
        alt="profile-account"
      />

      {open && (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-48 bg-[#161d2f] rounded-lg shadow-lg p-4 flex flex-col gap-2 z-50">
          <p className="text-white text-sm truncate">{auth.currentUser?.email || "User"}</p>
          <button
            onClick={() => auth.signOut()}
            className="bg-red-500 text-white text-sm py-1 rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
