import SubNavBarCss from "./SubNavBarCss.js";

export default function SubNavBar() {
    return (`
        ${SubNavBarCss()}
        <div class="sub-nav-bar">
            <div class="sub-nav-item">Category 1</div>
            <div class="sub-nav-item">Category 2</div>
            <div class="sub-nav-item">Category 3</div>
            <div class="sub-nav-item">Category 4</div>
            <div class="sub-nav-item">Category 5</div>
        </div>
    `);
}
