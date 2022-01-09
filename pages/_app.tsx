import type { AppProps } from 'next/app';
import Link from 'next/link';
import { ThemeProvider, Global, css } from '@emotion/react';
import styled from '@emotion/styled';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import { globals } from '../styles/globals';

import { commonTheme } from '../styles/theme';

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 var(--page-boundary, 1.5rem);
  position: relative;
  height: 60px;
`;

const Main = styled.main`
  flex: 1 1 0%;
  padding: 0 var(--page-boundary, 1.5rem);
`;

const Footer = styled.footer`
  font-size: 0.875rem;
  text-align: right;
  margin: auto 0 0 0;
  padding: 0 1rem 0.5rem 1.5rem;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={commonTheme}>
      <Header>Eisenhower Matrix</Header>

      <Main>
        <Component {...pageProps} />
      </Main>

      <Footer>
        {`Copyright ${String.fromCharCode(169)} ${new Date().getFullYear()} `}
        <Link href="https://rna.dev" passHref>
          <a
            css={css`
              color: currentColor;
            `}
          >
            rna.dev
          </a>
        </Link>
      </Footer>

      <Global styles={globals} />
    </ThemeProvider>
  );
}

export default MyApp;
