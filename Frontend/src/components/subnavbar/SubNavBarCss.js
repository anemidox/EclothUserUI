export default function SubNavBarCss() {
    return (`
        <style>
            .sub-nav-bar {
                background-color: #37475a;
                display: flex;
                justify-content: space-around;
                padding: 10px;
                margin-top: 5px;
                border-radius: 0px;
                color: #f2f2f2;
            }

            .sub-nav-bar .sub-nav-item {
                padding: 10px;
                font-family: Arial, sans-serif;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            .sub-nav-bar .sub-nav-item:hover {
                background-color: #232f3e;
            }
        </style>
    `);
}
