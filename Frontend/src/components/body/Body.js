import Product from "./loading_page/loadingPage.js";

export default function Body() {
    return `
      <main>
        ${Product()}
      </main>
    `;
}
