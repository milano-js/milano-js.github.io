import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { theme } from '../styles/theme.js';

@customElement('photo-gallery')
export class PhotoGallery extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
        padding: var(--spacing-xl) var(--spacing-md);
        background-color: var(--bg-surface-alt);
        border-bottom: var(--border-thick);
        position: relative;
        overflow: hidden;
      }
      
      /* Brutalist Background Grid */
      :host::before {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-image: 
          linear-gradient(var(--pattern-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--pattern-color) 1px, transparent 1px);
        background-size: 100px 100px;
        opacity: 0.05;
        z-index: 0;
      }

      h2 {
        text-align: center;
        font-family: var(--font-heading);
        font-size: 4rem;
        color: var(--text-primary);
        margin-bottom: 4rem;
        text-transform: uppercase;
        letter-spacing: -2px;
        position: relative;
        z-index: 2;
        text-shadow: 4px 4px 0px var(--color-accent-yellow);
      }

      @media (max-width: 768px) {
        h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          word-break: break-all;
        }
      }

      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 3rem;
        max-width: 1400px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
      }

      .gallery-item {
        position: relative;
        border: var(--border-thick);
        background: var(--bg-card);
        padding: 0.5rem;
        box-shadow: var(--shadow-hard);
        transition: transform 0.2s cubic-bezier(0.1, 0.7, 1.0, 0.1);
        cursor: pointer;
      }

      .gallery-item:nth-child(even) {
        transform: rotate(2deg) translateY(2rem);
      }

      .gallery-item:nth-child(odd) {
        transform: rotate(-1deg);
      }
      
      .gallery-item:nth-child(3n) {
        transform: rotate(1.5deg) translateY(-1rem);
      }

      .gallery-item:hover {
        transform: translate(-4px, -4px) rotate(0deg) !important;
        box-shadow: var(--shadow-hard-lg);
        z-index: 10;
        background-color: var(--color-accent-yellow);
      }

      .gallery-item img {
        width: 100%;
        height: auto;
        aspect-ratio: 4/3;
        object-fit: cover;
        filter: grayscale(100%) contrast(120%);
        transition: filter 0.3s ease;
        display: block;
        border: 1px solid black;
      }

      .gallery-item:hover img {
        filter: grayscale(0%) contrast(100%);
      }

      .tape {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 30px;
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0,0,0,0.1);
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        z-index: 20;
      }

      /* Number Decoration */
      .gallery-item::before {
        content: attr(data-index);
        position: absolute;
        bottom: -2rem;
        right: -1rem;
        font-family: var(--font-heading);
        font-size: 4rem;
        color: var(--text-primary);
        opacity: 0.1;
        font-weight: 900;
        pointer-events: none;
        z-index: -1;
      }

      /* Lightbox */
      .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(50, 51, 48, 0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        padding: 2rem;
        box-sizing: border-box;
      }

      .lightbox-content {
        position: relative;
        max-width: 100%;
        max-height: 100%;
        border: var(--border-thick);
        padding: 10px;
        background: var(--bg-card);
        box-shadow: 0 0 50px rgba(0,0,0,0.8);
      }

      .lightbox img {
        max-width: 100%;
        max-height: 85vh;
        display: block;
        border: 1px solid black;
      }

      .close-btn {
        position: absolute;
        top: -2rem;
        right: -2rem;
        background: var(--color-accent-red);
        color: white;
        border: var(--border-thick);
        width: 3rem;
        height: 3rem;
        font-family: var(--font-heading);
        font-weight: 900;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow-hard);
        transition: transform 0.1s;
      }
      
      .close-btn:hover {
        transform: translate(-2px, -2px);
        box-shadow: var(--shadow-hard-lg);
      }
    `
  ];

  @state()
  private selectedPhoto: string | null = null;

  private photos = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
    'photo4.jpg',
    'photo5.jpg'
  ];

  private openPhoto(photo: string) {
    this.selectedPhoto = photo;
  }

  private closePhoto() {
    this.selectedPhoto = null;
  }

  render() {
    return html`
      <h2>Evidence_Log</h2>
      <div class="gallery-grid">
        ${this.photos.map((photo, index) => html`
          <div class="gallery-item" data-index="0${index + 1}" @click=${() => this.openPhoto(photo)}>
            <div class="tape"></div>
            <img src="/assets/photos/${photo}" alt="Foto meetup Milano JS" loading="lazy" />
          </div>
        `)}
      </div>

      ${this.selectedPhoto ? html`
        <div class="lightbox" @click=${this.closePhoto}>
          <div class="lightbox-content" @click=${(e: Event) => e.stopPropagation()}>
            <img src="/assets/photos/${this.selectedPhoto}" alt="Full size photo" />
            <button class="close-btn" @click=${this.closePhoto}>X</button>
          </div>
        </div>
      ` : ''}
    `;
  }
}
