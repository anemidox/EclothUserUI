import SearchBarCss from "./SearchBarCss.js";

export default function SearchBar() {
    return (`
        ${SearchBarCss()}
        <div class="search-bar">
            <div class="search-main">
                <input type="text" placeholder="Search" class="search-input">
                <button class="search-button" type="submit">Search</button>
            </div>
        </div>
    `);
}
