import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { theme } from '../styles/theme.js';

@customElement('content-section')
export class ContentSection extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
        padding: var(--spacing-xl) var(--spacing-md);
        background-color: var(--bg-page);
        border-bottom: var(--border-thick);
        position: relative;
        overflow: hidden;
      }
      
      /* Decorative Background Elements */
      .bg-decoration {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        opacity: 0.05;
        background-image: var(--pattern-dots);
        background-size: 20px 20px;
        pointer-events: none;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        gap: 4rem;
        grid-template-columns: 1fr;
        position: relative;
        z-index: 1;
      }

      @media (min-width: 900px) {
        .container {
          grid-template-columns: 1.2fr 0.8fr;
          align-items: start;
        }
      }

      .text-content {
        font-size: 1.1rem;
        border: var(--border-thick);
        padding: 2rem;
        background: var(--bg-card);
        box-shadow: var(--shadow-hard);
      }

      h2 {
        font-family: var(--font-heading);
        font-size: 3rem;
        color: var(--text-on-accent);
        margin-top: 0;
        line-height: 1;
        margin-bottom: 2rem;
        text-transform: uppercase;
        background: var(--color-accent-yellow);
        display: inline-block;
        padding: 0 0.5rem;
        border: var(--border-thick);
        transform: translate(-1rem, -3rem) rotate(-1deg);
      }

      p {
        line-height: 1.7;
        margin-bottom: 2rem;
      }

      /* Brutalist Video Frame */
      .video-wrapper {
        background: var(--bg-contrast);
        padding: 0.5rem;
        box-shadow: var(--shadow-hard-lg);
        border: var(--border-thick);
        position: relative;
      }
      
      .video-wrapper::before {
        content: '';
        position: absolute;
        bottom: -20px;
        right: -20px;
        width: 100%;
        height: 100%;
        background-image: var(--pattern-lines);
        background-size: 10px 10px;
        z-index: -1;
        opacity: 0.2;
      }

      .video-header {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        padding-left: 0.5rem;
      }

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: var(--bg-page);
        border: 1px solid black;
      }

      .dot.red { background-color: var(--color-accent-red); }
      .dot.yellow { background-color: var(--color-accent-yellow); }
      .dot.green { background-color: var(--color-primary-green); }

      .video-container {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        height: 0;
        overflow: hidden;
        border: var(--border-thin);
        background: black;
      }

      .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
      }
    `
  ];

  render() {
    return html`
      <div class="bg-decoration"></div>
      <div class="container">
        <div class="text-content">
          <h2>Origins_<br>Protocol</h2>
          <p>
            Milano JS è la community JavaScript di Milano ma, soprattutto, è la prima nata in Italia. 
            Da subito ha riscontrato un enorme successo di pubblico; non solo la community milanese 
            è cresciuta molto in poco tempo, ma Milano JS è riuscita a influenzare 
            molte persone che, a loro volta, hanno creato una community JS nella loro città, 
            dando vita a una rete di community in tutta Italia.
          </p>
          <p>
            La voglia di confrontarsi con altri sviluppatori JavaScript è stata subito un'esigenza molto sentita dalla community e quindi, dopo qualche mese, è nato il Google Group 
            di Milano JS, diventato poi un canale Slack e infine un server Discord, 
            dove ci puoi trovare tutt’ora.
          </p>
        </div>
        
        <div class="video-wrapper">
          <div class="video-header">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
          <div class="video-container">
            <iframe 
              src="https://www.youtube.com/embed/9wXOEZETFTE?si=9ibJr3bTXaFDPZta" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    `;
  }
}
