import React from 'react';
import NextLink from 'next/link';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} {...(props as any)}>
      {children}
    </NextLink>
  );
};
