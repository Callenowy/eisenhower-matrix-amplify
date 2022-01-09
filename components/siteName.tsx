import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import type { PropsWithChildren } from 'react';

function SiteName({
  children,
  ...rest
}: PropsWithChildren<Record<string, unknown>>) {
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';

  const logoStyle = css`
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: 600;
    display: inline-block;
    padding: 0 2rem 0 0;
    margin: 0;
  `;

  if (isHomePage) {
    return (
      <h1 css={logoStyle} {...rest}>
        {children}
      </h1>
    );
  }

  return (
    <Link passHref href="/">
      <a css={logoStyle} {...rest}>
        {children}
      </a>
    </Link>
  );
}

export default SiteName;
