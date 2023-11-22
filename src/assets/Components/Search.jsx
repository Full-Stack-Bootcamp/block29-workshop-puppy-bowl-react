// Render search
import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

export default function Search({ playerArray }) {
  const [searchInput, setSearchInput] = useState("");
  const [resultArray, setResultArray] = useState([]);
  const [searched, setSearched] = useState(false);

  const search = () => {
    setSearched(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (searchInput.length > 0) {
      let searchResults = [];
      playerArray.filter((player) => {
        console.log(player);
        let found = player.name.match(searchInput);
        if (found) searchResults.push(player);
      });

      console.log("searchResults:");
      console.log(searchResults.length);
      searchResults.length > 0
        ? setResultArray(searchResults)
        : setResultArray(["No Results"]);
    }
    console.log("resultArray");
    console.log(resultArray);
  };

  return (
    <>
      <div className="search-bar">
        <h3>Search</h3>
        <label>
          Player Name:
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearch}
          />
        </label>
        <button onClick={search}>Search</button>
      </div>
      {searched && (
        <div id="search-results">
          {resultArray[0] === "No Results" ? (
            <table>
              <tr>
                <td>No Results</td>
              </tr>
            </table>
          ) : (
            <table>
              <tr>
                <td colSpan={5}>
                  <h4>Search Results</h4>
                </td>
              </tr>
              <tr id="table-title">
                <td>Name</td>
                <td>ID</td>
                <td>Breed</td>
                <td>Team</td>
                <td>Status</td>
              </tr>

              {resultArray.map((player, index) => {
                console.log(player);
                return <SearchResults key={index} player={player} />;
              })}
            </table>
          )}
        </div>
      )}
    </>
  );
}
