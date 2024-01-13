import { createContext, useEffect, useState } from "react";
export const EntriesContext = createContext();
import { getAllCategories } from "../apiCalls/Category";

export function EntriesProvider({ children }) {
  const [entries, setEntries] = useState(function () {
    const value = localStorage.getItem("entries");
    if (!value) return [];
    return JSON.parse(value);
  });

  const handleDelete = (id) => {
    setEntries(entries.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const totalIncome = entries
    .filter((entry) => entry.type === "income")
    .reduce((prev, entry) => prev + entry.value, 0);

  const totalExpense = entries
    .filter((entry) => entry.type === "expense")
    .reduce((prev, entry) => prev + entry.value, 0);

  getAllCategories()
    .then((categories) => console.log("Categories:", categories))
    .catch((error) => console.error("Error:", error));

  return (
    <EntriesContext.Provider
      value={{ entries, setEntries, totalIncome, totalExpense, handleDelete }}
    >
      {children}
    </EntriesContext.Provider>
  );
}
