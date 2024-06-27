import SearchBarCss from "./SearchBarCss.js";

export default function SearchBar() {
    return (`
      ${SearchBarCss()}
      <div class="search-bar">
        <input type="text" placeholder="Search">
        <button class="search-button" type="submit">Search</button>
      </div>
    `
  );
  }