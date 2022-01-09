import { cloneElement } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import type { LinkProps } from 'next/link';

type ExtendedLinkProps = LinkProps & {
  children: React.ReactElement;
  activeClass?: string;
};

export default function Link({
  href,
  children,
  activeClass = 'active',
  ...rest
}: ExtendedLinkProps) {
  const router = useRouter();

  let className = children.props.className || '';
  const linkPathname = typeof href === 'string' ? href : href.pathname || null;

  if (router.pathname === linkPathname && activeClass) {
    className += ` ${activeClass}`.trim();
  }

  return (
    <NextLink href={href} {...rest} passHref>
      {cloneElement(children, { className })}
    </NextLink>
  );
}
