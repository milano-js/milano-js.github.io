import { css } from 'lit';

export const theme = css`
  :host {
    /* Palette */
    --color-dark: #323330;
    --color-accent-yellow: #f0db4f;
    --color-primary-green: #004643;
    --color-accent-red: #e16162;
    --color-light-blue: #ebf2fa;
    --color-white: #ffffff;

    /* Typography */
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Space Grotesk', monospace; /* Tech feel */

    /* Shapes & Borders (Brutalist) */
    --border-thick: 3px solid var(--color-dark);
    --border-thin: 1px solid var(--color-dark);
    --radius-raw: 0px;
    --radius-soft: 4px;
    
    /* Patterns */
    --pattern-dots: radial-gradient(var(--color-dark) 1px, transparent 1px);
    --pattern-lines: repeating-linear-gradient(45deg, var(--color-dark), var(--color-dark) 2px, transparent 2px, transparent 10px);
    
    /* Spacing */
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;

    /* Shadows */
    --shadow-hard: 4px 4px 0px var(--color-dark);
    --shadow-hard-lg: 8px 8px 0px var(--color-dark);
  }
`;
