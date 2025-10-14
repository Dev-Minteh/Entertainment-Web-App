
// import { createContext, useContext, useEffect, useState } from "react";
// import data from "../../Data/data.json";

// type MediaItem = typeof data[number];

// type BookmarkContextType = {
//   bookmarks: string[]; // array of item.title
//   bookmarkedItems: MediaItem[];
//   isBookmarked: (title?: string) => boolean;
//   toggleBookmark: (item: MediaItem) => void;
// };

// const KEY = "entertainment_bookmarks_v1";
// const BookmarksContext = createContext<BookmarkContextType | undefined>(undefined);

// export function BookmarksProvider({ children }: { children: React.ReactNode }) {
//   const [bookmarks, setBookmarks] = useState<string[]>(() => {
//     try {
//       const raw = localStorage.getItem(KEY);
//       return raw ? JSON.parse(raw) : [];
//     } catch {
//       return [];
//     }
//   });

//   useEffect(() => {
//     try {
//       localStorage.setItem(KEY, JSON.stringify(bookmarks));
//     } catch {}
//   }, [bookmarks]);

//   const toggleBookmark = (item: MediaItem) => {
//     if (!item?.title) return;
//     setBookmarks((prev) =>
//       prev.includes(item.title) ? prev.filter((t) => t !== item.title) : [...prev, item.title]
//     );
//   };

//   const isBookmarked = (title?: string) => !!title && bookmarks.includes(title);

//   const bookmarkedItems = data.filter((d) => bookmarks.includes(d.title));

//   return (
//     <BookmarksContext.Provider value={{ bookmarks, bookmarkedItems, isBookmarked, toggleBookmark }}>
//       {children}
//     </BookmarksContext.Provider>
//   );
// }

// export function useBookmarks() {
//   const ctx = useContext(BookmarksContext);
//   if (!ctx) throw new Error("useBookmarks must be used inside BookmarksProvider");
//   return ctx;
// }
// ...existing code...
import React, { createContext, useContext, useEffect, useState } from "react";
import data from "../../Data/data.json";

type MediaItem = typeof data[number];

type BookmarkContextType = {
  bookmarks: string[]; // array of item.title
  bookmarkedItems: MediaItem[];
  isBookmarked: (title?: string) => boolean;
  toggleBookmark: (item: MediaItem) => void;
};

const KEY = "entertainment_bookmarks_v1";
const BookmarksContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarksProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(bookmarks));
    } catch {}
  }, [bookmarks]);

  const toggleBookmark = (item: MediaItem) => {
    if (!item?.title) return;
    setBookmarks((prev) =>
      prev.includes(item.title) ? prev.filter((t) => t !== item.title) : [...prev, item.title]
    );
  };

  const isBookmarked = (title?: string) => !!title && bookmarks.includes(title);

  const bookmarkedItems = data.filter((d) => bookmarks.includes(d.title));

  return (
    <BookmarksContext.Provider value={{ bookmarks, bookmarkedItems, isBookmarked, toggleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarks() {
  const ctx = useContext(BookmarksContext);
  if (!ctx) throw new Error("useBookmarks must be used inside BookmarksProvider");
  return ctx;
}
// ...existing code...