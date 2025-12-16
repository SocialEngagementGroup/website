"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import styles from "./PageSearch.module.css";

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
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className={styles.inputField}
        />

        {/* Clickable search icon */}
        <div
          className={styles.searchIconWrapper}
          onClick={() => {
            if (filteredPages.length > 0) handleClick(filteredPages[0]);
          }}
        >
          <FiSearch />
        </div>
      </div>

      {/* Dropdown */}
      {filteredPages.length > 0 && (
        <ul className={styles.dropdown + " backdrop-blur-md bg-black/40 shadow-lg"}>
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
                className={`${styles.dropdownItem} ${
                  isSelected ? styles.dropdownItemSelected : ""
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
