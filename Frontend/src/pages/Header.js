import MainNav from '../components/navbar/MainNav.js';

export default function Header() {
    return `
      <header>
        ${MainNav()}
      </header>
    `;
  }