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
    --color-black: #000000;

    /* Typography */
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Space Grotesk', monospace; /* Tech feel */

    /* Shapes & Borders (Brutalist) */
    --border-thick: 3px solid var(--border-color);
    --border-thin: 1px solid var(--border-color);
    --radius-raw: 0px;
    --radius-soft: 4px;
    
    /* Patterns */
    --pattern-dots: radial-gradient(var(--pattern-color) 1px, transparent 1px);
    --pattern-lines: repeating-linear-gradient(45deg, var(--pattern-color), var(--pattern-color) 2px, transparent 2px, transparent 10px);
    
    /* Spacing */
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;

    /* Shadows */
    --shadow-hard: 4px 4px 0px var(--shadow-color);
    --shadow-hard-lg: 8px 8px 0px var(--shadow-color);

    /* Semantic Variables (Light Default) */
    --bg-page: var(--color-white);
    --bg-card: var(--color-white);
    --bg-contrast: var(--color-dark);
    --bg-surface-alt: var(--color-light-blue);
    --text-primary: var(--color-dark);
    --text-inverse: var(--color-white);
    --text-on-accent: var(--color-dark);
    --bg-action-primary: var(--color-primary-green);
    --text-on-action: var(--color-white);
    --border-color: var(--color-dark);
    --shadow-color: var(--color-dark);
    --pattern-color: var(--color-dark);
  }

  /* Dark Theme Overrides */
  /* Applies if user explicitly chooses dark OR if they prefer dark and haven't chosen light (assuming default handling elsewhere, 
     but request says 'light theme should be the default' which often implies ignoring system pref unless mapped. 
     For 'light default' + 'user choice stored', we usually rely on a class applied by JS. 
     If we want 'system default' as fallback, we keep media query. 
     If we want STRICT light default, we only use the selector.
     However, standard best practice for 'light default' usually means the site loads light unless user switches. 
     So we will stick to the selector applied by JS.
     BUT, to be safe and support system pref if logic allows, I will combine them or just use the selector as primary.
     Given user requirement "light theme should be the default", I will use a selector that requires the JS to act for Dark, 
     but I will also keep the media query wrapped in a way that it can be overridden, OR just rely on the JS to set the attribute based on preference if we wanted that.
     Simple approach: The JS will handle the default state (light). The CSS just reacts to the attribute. */
  
  :host-context(body[data-theme="dark"]) {
    --bg-page: var(--color-dark);
    --bg-card: #2a2b28;
    --bg-contrast: var(--color-light-blue);
    --bg-surface-alt: #252525;
    --text-primary: var(--color-light-blue);
    --text-inverse: var(--color-dark);
    --text-on-accent: var(--color-dark);
    --bg-action-primary: var(--color-accent-yellow);
    --text-on-action: var(--color-dark);
    --border-color: var(--color-light-blue);
    --shadow-color: var(--color-black);
    --pattern-color: var(--color-light-blue);
  }
`;
