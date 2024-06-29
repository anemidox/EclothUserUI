export default function MainNavCss() {
    return (`
        <style>
            .main-nav {
                background-color: #232f3e;
                color: #f2f2f2;
                display: flex;
                align-items: center;
                padding: 5px 15px;
                border-radius: px;
                margin-top: px;
                
            }

            .main-nav .logo {
                font-size: 24px;
                font-weight: bold;
                margin-right: 20px;
                color: #f2f2f2;
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                font-size: 15px;
            }

            .main-nav .search-bar {
                flex: 1;
                display: flex;
            }

            .main-nav .search-bar input {
                width: 100%;
                padding: 10px;
                border: none;
                border-radius: 4px 0 0 4px;
            }

            .main-nav .search-bar button {
                padding: 10px;
                background-color: #ff9900;
                border: none;
                border-radius: 0 4px 4px 0;
                cursor: pointer;
            }

            .main-nav .auth-cart {
                display: flex;
                gap: 20px;
                margin-left: 20px;
            }

            .main-nav .auth-cart div {
                color: #f2f2f2;
                text-decoration: none;
                padding: 10px;
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                font-size: 15px;
            }

            .main-nav .auth-cart div:hover {
                background-color: #131921;
            }
        </style>
    `);
}
