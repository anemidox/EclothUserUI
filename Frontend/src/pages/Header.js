import MainNav from '../components/navbar/MainNav.js';
import SubNabBar from '../components/subnavbar/SubNavBar.js';

export default function Header() {
    return `
      <header>
        ${MainNav()}
        ${SubNabBar()}
      </header>
    `;
  }