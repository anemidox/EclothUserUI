import Header from './src/pages/Header.js';
import Main from './src/pages/Main.js';
import Footer from './src/pages/Footer.js';

export default function App() {
  return `
    ${Header()}
    ${Main()}
    ${Footer()}
  `;
}