"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

const PageSearch = ({ pages = [] }) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();

  // Debounce input
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 200);
    return () => clearTimeout(handler);
  }, [query]);

  // Filter pages based on query
  const filteredPages = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return pages.filter((page) =>
      page.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery, pages]);

  // Navigate to page
  const handleClick = (page) => {
    const urlParts = page
      .split(" > ")
      .map((part) => part.replace(/[()]/g, "").trim());
    const url = "/services/" + urlParts.join("/");
    router.push(url);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!filteredPages.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredPages.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev <= 0 ? filteredPages.length - 1 : prev - 1
      );
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0 && selectedIndex < filteredPages.length) {
        handleClick(filteredPages[selectedIndex]);
      }
    }
  };

  return (
    <div className="max-w-[400px] mx-auto relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className="text-black w-full h-[57px] max-md:w-[85%] max-md:h-[40px] px-[20px] py-[15px] rounded-[20px] border border-[#ccc] bg-white placeholder:text-black placeholder:not-italic"
        />

        {/* Clickable search icon */}
        <div
          className="absolute right-[20px] max-md:right-[50px] top-[52%] -translate-y-1/2 cursor-pointer text-[#888]"
          onClick={() => {
            if (filteredPages.length > 0) handleClick(filteredPages[0]);
          }}
        >
          <FiSearch />
        </div>
      </div>

      {/* Dropdown */}
      {filteredPages.length > 0 && (
        <ul className="absolute top-full inset-x-0 w-full max-h-[250px] overflow-y-auto mt-[10px] z-[1000] p-0 list-none border border-[#ccc] shadow-lg backdrop-blur-md bg-black/40" style={{ scrollbarWidth: 'thin', scrollbarColor: '#502154 #8a3159' }}>
          {filteredPages.map((page, index) => {
            const displayText = page
              .split(" > ")
              .map((part) =>
                part.replace(/[()]/g, "").replace(/-/g, " ").trim()
              )
              .filter((part) => part)
              .join(" > ");

            const isSelected = index === selectedIndex;

            return (
              <li
                key={index}
                onClick={() => handleClick(page)}
                className={`p-[10px] cursor-pointer transition-colors duration-200 text-start capitalize ${
                  isSelected ? "bg-[#090414] text-white" : "hover:bg-[#090414] hover:text-white"
                }`}
                onMouseEnter={() => setSelectedIndex(index)}
                onMouseLeave={() => setSelectedIndex(-1)}
              >
                {displayText}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PageSearch;
