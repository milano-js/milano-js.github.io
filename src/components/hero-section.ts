import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { theme } from '../styles/theme.js';

interface DiscordInvite {
  approximate_member_count: number;
  approximate_presence_count: number;
}

@customElement('hero-section')
export class HeroSection extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
        border-bottom: var(--border-thick);
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1fr;
      }

      @media (min-width: 768px) {
        .hero-grid {
          grid-template-columns: 40% 60%;
        }
      }

      .logo-box {
        background-color: var(--bg-surface-alt);
        padding: 4rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        border-bottom: var(--border-thick);
      }

      @media (min-width: 768px) {
        .logo-box {
          border-bottom: none;
          border-right: var(--border-thick);
        }
      }

      /* Wrapper for precise balloon positioning */
      .logo-wrapper {
        position: relative;
        display: inline-block;
        margin-bottom: 2rem;
      }

      img.logo {
        width: 180px;
        height: auto;
        filter: drop-shadow(var(--shadow-hard));
        display: block; /* Removes bottom spacing */
      }

      .balloon {
        position: absolute;
        top: -15px;
        right: -40px;
        background-color: var(--color-accent-red);
        color: white;
        padding: 0.5rem 1rem;
        font-family: var(--font-body);
        font-weight: 700;
        text-transform: uppercase;
        border: var(--border-thick);
        box-shadow: var(--shadow-hard);
        transform: rotate(12deg);
        z-index: 10;
        animation: glitch-anim 3s infinite linear alternate-reverse;
      }

      .content-box {
        background-color: var(--color-accent-yellow);
        padding: 4rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      h1 {
        font-family: var(--font-heading);
        font-size: 3.5rem;
        font-weight: 900;
        text-transform: uppercase;
        line-height: 0.9;
        margin: 0;
        color: var(--text-on-accent);
        letter-spacing: -2px;
        text-shadow: 2px 2px 0px rgba(255,255,255,0.5);
      }

      @media (min-width: 1024px) {
        h1 { font-size: 5rem; }
      }

      .slogan-box {
        margin-top: 1.5rem;
        background-color: var(--bg-contrast);
        color: var(--text-inverse);
        padding: 0.5rem 1.5rem;
        font-family: var(--font-body);
        font-size: 1.2rem;
        font-weight: 700;
        transform: skewX(-10deg);
        box-shadow: var(--shadow-hard);
      }

      .slogan-text {
        display: block;
        transform: skewX(10deg);
      }

      .cta-button {
        display: inline-block;
        background-color: var(--bg-action-primary);
        color: var(--text-on-action);
        font-family: var(--font-heading);
        font-size: 1.2rem;
        font-weight: 700;
        padding: 1rem 2rem;
        text-transform: uppercase;
        text-decoration: none;
        border: var(--border-thick);
        box-shadow: var(--shadow-hard);
        transition: all 0.2s ease;
        margin-bottom: 1rem;
      }

      .cta-button:hover {
        transform: translate(-2px, -2px);
        box-shadow: var(--shadow-hard-lg);
        filter: brightness(1.1);
      }
      
      .cta-button:active {
        transform: translate(0, 0);
        box-shadow: var(--shadow-hard);
      }

      .discord-stats {
        font-family: var(--font-body);
        font-size: 0.9rem;
        color: var(--text-primary);
        display: flex;
        gap: 1rem;
        font-weight: bold;
      }
      
      .discord-stat {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--color-primary-green);
        border: 1px solid black;
      }
      
      .dot.total { background-color: var(--color-accent-yellow); }

      /* Glitch Animation */
      @keyframes glitch-anim {
        0% { transform: rotate(12deg) translate(0); }
        20% { transform: rotate(12deg) translate(-2px, 2px); }
        40% { transform: rotate(12deg) translate(-2px, -2px); }
        60% { transform: rotate(12deg) translate(2px, 2px); }
        80% { transform: rotate(12deg) translate(2px, -2px); }
        100% { transform: rotate(12deg) translate(0); }
      }
    `
  ];

  @state()
  private onlineCount: number | null = null;

  @state()
  private totalCount: number | null = null;

  async connectedCallback() {
    super.connectedCallback();
    try {
      const response = await fetch('https://discord.com/api/v9/invites/CrHrweEaUg?with_counts=true');
      if (response.ok) {
        const data: DiscordInvite = await response.json();
        this.onlineCount = data.approximate_presence_count;
        this.totalCount = data.approximate_member_count;
      }
    } catch (e) {
      console.error('Failed to fetch Discord stats', e);
    }
  }

  render() {
    return html`
      <div class="hero-grid">
        <div class="logo-box">
          <div class="logo-wrapper">
            <img class="logo" src="/assets/mijs.svg" alt="Milano JS Logo" />
            <div class="balloon">dal 2012</div>
          </div>

          <a href="https://discord.gg/CrHrweEaUg" target="_blank" rel="noopener noreferrer" class="cta-button">
            Partecipa su Discord
          </a>
          
          <div class="discord-stats">
            <div class="discord-stat">
              <span class="dot"></span>
              <span>${this.onlineCount ?? '...'} Online</span>
            </div>
            <div class="discord-stat">
              <span class="dot total"></span>
              <span>${this.totalCount ?? '...'} Membri</span>
            </div>
          </div>
        </div>
        <div class="content-box">
          <h1>Milano<br>JavaScript<br>Community</h1>
          <div class="slogan-box">
            <span class="slogan-text">Il DOM de Milan</span>
          </div>
        </div>
      </div>
    `;
  }
}
