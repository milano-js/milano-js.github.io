import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { theme } from './styles/theme.js';

import './components/hero-section.js';
import './components/content-section.js';
import './components/photo-gallery.js';
import './components/footer-section.js';
import './components/theme-toggle.js';

@customElement('milano-app')
export class MilanoApp extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background-color: var(--bg-page);
        color: var(--text-primary);
        font-family: var(--font-body);
      }
      
      .app-header {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 1000;
      }
    `
  ];

  render() {
    return html`
      <header>
        <div class="app-header">
          <theme-toggle></theme-toggle>
        </div>
        <hero-section></hero-section>
      </header>
      <main>
        <content-section></content-section>
        <photo-gallery></photo-gallery>
      </main>
      <footer>
        <footer-section></footer-section>
      </footer>
    `;
  }
}
