import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { theme } from '../styles/theme.js';

@customElement('footer-section')
export class FooterSection extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
        padding: 4rem 1rem;
        background-color: var(--color-white);
        color: var(--color-dark);
        border-top: var(--border-thick);
      }

      .footer-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }

      .links {
        display: flex;
        gap: 0;
        border: var(--border-thick);
        flex-wrap: wrap;
        box-shadow: var(--shadow-hard);
      }

      a {
        padding: 1rem 2rem;
        color: var(--color-dark);
        text-decoration: none;
        font-family: var(--font-body);
        font-weight: 700;
        text-transform: uppercase;
        border-right: var(--border-thick);
        transition: background-color 0.2s;
      }

      a:last-child {
        border-right: none;
      }

      a:hover {
        background-color: var(--color-accent-yellow);
      }

      .copyright {
        font-family: var(--font-body);
        font-size: 0.9rem;
        opacity: 0.6;
      }
    `
  ];

  render() {
    return html`
      <div class="footer-grid">
        <div class="links">
          <a href="https://www.facebook.com/milanojavascript" target="_blank">Facebook</a>
          <a href="https://x.com/milano_js" target="_blank">X / Twitter</a>
          <a href="https://github.com/milano-js/" target="_blank">GitHub</a>
          <a href="https://www.youtube.com/@Milano-JS" target="_blank">YouTube</a>
          <a href="https://discord.gg/CrHrweEaUg" target="_blank">Discord</a>
        </div>
        <div class="copyright">
          © ${new Date().getFullYear()} MILANO JS // Nessun file JavaScript è stato maltrattato per creare questo sito che, di fatto, è in TypeScript.
        </div>
      </div>
    `;
  }
}
