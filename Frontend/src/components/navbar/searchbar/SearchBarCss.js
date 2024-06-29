export default function SearchBarCss() {
    return (`
        <style>
            .search-bar {
                background-color: #232f3e;
                margin: 10px;
                display: flex;
                align-items: center;
                padding: 10px;
                border-radius: 10px;
                font-family: Arial, sans-serif;
            }

            .search-main {
                display: flex;
                width: 100%;
                align-items: center;
            }

            .search-input {
                flex-grow: 1;
                padding: 10px;
                border: none;
                border-radius: 4px 0 0 4px;
                font-size: 16px;
            }

            .search-button {
                padding: 10px 20px;
                background-color: #ff9900;
                border: none;
                border-radius: 0 4px 4px 0;
                color: white;
                font-size: 16px;
                cursor: pointer;
            }

            .search-button:hover {
                background-color: #e68a00;
            }
        </style>
    `);
}
