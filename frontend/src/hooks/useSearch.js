import { useContext } from "react";

import { SearchContext } from "../context/search";


export const useSearch= () => {
  const { setSearchTerm, searchTerm } = useContext(SearchContext);

  return {
    setSearchTerm,
    searchTerm
  };
};
