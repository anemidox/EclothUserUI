import { Header } from './src/components/common/Header.js';
import { Router } from './routers/Router.js';
import { Footer } from './src/components/common/Footer.js';

export class App {
    constructor(root) {
        this.root = root;
        this.render();
    }
    render() {
        this.root.innerHTML = `
        <link rel="stylesheet" href="App.css">
            <div class="container">
                <div class="app">
                    <header class="header">
                        <app-header></app-header>
                    </header>
                    <main class="main">
                        <div id="app">
                            <app-router></app-router>
                        </div>
                    </main>
                    <footer class="footer">
                        <app-footer></app-footer>
                    </footer>
                </div>
            </div>
        `;
    }
}