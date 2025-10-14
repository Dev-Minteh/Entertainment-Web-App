import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import BookmarkPage from "./pages/BookmarkPage";
import { BookmarksProvider } from "./components/context/BookmarksContext";
import { SearchProvider } from "./components/context/SearchContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
     <SearchProvider>
      <BookmarksProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/bookmarks" element={<BookmarkPage />} />
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />        
        </Routes>
      </BookmarksProvider>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>
);
