import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { theme } from './styles/theme.js';

import './components/hero-section.js';
import './components/content-section.js';
import './components/photo-gallery.js';
import './components/footer-section.js';

@customElement('milano-app')
export class MilanoApp extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background-color: var(--color-white);
        color: var(--color-dark);
        font-family: var(--font-body);
      }
    `
  ];

  render() {
    return html`
      <header>
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
