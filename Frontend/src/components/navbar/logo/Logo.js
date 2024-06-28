import LogoCss from './LogoCss.js';

export default function Logo() {
    return `
      ${LogoCss()}
      <div class="logo">
        <h1>Logo</h1>
      </div>
    `;
}