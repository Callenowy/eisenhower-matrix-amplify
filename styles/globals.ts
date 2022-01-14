import { css } from '@emotion/react';

export const globals = css`
  :root {
    --page-boundary: 1.5rem;

    --font-weight-bold: 600;
    --font-weight-medium: 400;
    --font-weight-light: 300;

    --font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: var(--font-family);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:focus {
    outline: 5px auto red;
  }

  #__next {
    isolation: isolate;
  }

  .assistive-text {
    position: absolute !important;
    margin: -1px !important;
    border: 0 !important;
    padding: 0 !important;
    width: 1px !important;
    height: 1px !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    text-transform: none !important;
    white-space: nowrap !important;
  }
`;
