import Logo from "./Logo";
import AccountMenu from "./AccountMenu";
import Nav from "./Nav";

export default function Sidebar() {
  return (
    <>
      {/* Mobile / Tablet: fixed top bar (logo left, nav center, account right) */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-[#161d2f] text-white flex items-center px-4 z-10 md:hidden">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="flex-1 flex items-center justify-center">
            <Nav />
          </div>

          <div className="flex items-center">
            <AccountMenu />
          </div>
        </div>
      </header>

      {/* Desktop: vertical sidebar */}
      <aside className="hidden md:flex md:flex-col md:items-center md:justify-between md:w-24 md:h-screen bg-[#161d2f] text-white p-4 mx-8 my-4 rounded-xl">
        <div className="flex flex-col items-center gap-8">
          <Logo />
          <Nav />
        </div>

        <div className="mb-4">
          <AccountMenu />
        </div>
      </aside>
    </>
  );
}


// ...existing code...
// import Logo from "./Logo";
// import AccountMenu from "./AccountMenu";
// import Nav from "./Nav";

// export default function Sidebar() {
//   return (
//     <>
//       {/* Mobile / Tablet: fixed top bar (logo left, nav center, account right) */}
//       <header className="fixed top-0 left-0 right-0 h-14 bg-[#161d2f] text-white flex items-center px-4 z-10 md:hidden">
//         <div className="flex items-center w-full justify-between">
//           <div className="flex items-center">
//             <Logo />
//           </div>

//           <div className="flex-1 flex items-center justify-center">
//             <Nav />
//           </div>

//           <div className="flex items-center">
//             <AccountMenu />
//           </div>
//         </div>
//       </header>

//       {/* Desktop: vertical sidebar */}
//       <aside className="hidden md:flex md:flex-col md:items-center md:justify-between md:w-24 md:h-screen bg-[#161d2f] text-white p-4 rounded-xl">
//         <div className="flex flex-col items-center gap-8">
//           <Logo />
//           <Nav />
//         </div>

//         <div className="mb-4">
//           <AccountMenu />
//         </div>
//       </aside>
//     </>
//   );
// }
// // ...existing code...
