import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { theme } from '../styles/theme.js';

@customElement('theme-toggle')
export class ThemeToggle extends LitElement {
    static styles = [
        theme,
        css`
      :host {
        display: inline-block;
      }
      
      button {
        background: var(--bg-card);
        border: var(--border-thick);
        box-shadow: var(--shadow-hard);
        padding: 0.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }

      button:hover {
        transform: translate(-2px, -2px);
        box-shadow: var(--shadow-hard-lg);
      }

      button:active {
        transform: translate(0, 0);
        box-shadow: var(--shadow-hard);
      }

      svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: var(--text-primary);
      }
    `
    ];

    @state()
    private isDark = false;

    connectedCallback() {
        super.connectedCallback();
        const storedTheme = localStorage.getItem('theme');
        // Default is light (per request), so only switch if user explicitly set 'dark'
        if (storedTheme === 'dark') {
            this.isDark = true;
            document.body.setAttribute('data-theme', 'dark');
        }
    }

    private toggleTheme() {
        this.isDark = !this.isDark;
        if (this.isDark) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }

    render() {
        return html`
      <button @click=${this.toggleTheme} aria-label="Toggle Dark Mode">
        ${this.isDark
                ? html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>`
                : html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>`
            }
      </button>
    `;
    }
}
