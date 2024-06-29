import loadingPage from "./loading_page/loadingPage.js";

export default function Body() {
    return `
      <main>
        ${loadingPage()}
      </main>
    `;
}
