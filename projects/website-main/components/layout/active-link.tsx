import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { Children } from 'react';

interface Props extends LinkProps {
  children: React.ReactNode;
  inactiveClassName?: string;
  activeClassName?: string;
}

const ActiveLink = ({
  children,
  inactiveClassName,
  activeClassName,
  ...props
}: Props): JSX.Element => {
  const { asPath } = useRouter();
  const child = Children.only(children) as React.ReactElement;
  const childClassName = child.props.className || '';

  const className =
    (props.href === asPath && props.href === '/') ||
    (props.href !== '/' &&
      (asPath.includes(props.href?.toString()) ||
        asPath.includes(props.as?.toString())))
      ? `${childClassName} ${activeClassName}`.trim()
      : `${childClassName} ${inactiveClassName}`.trim();

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
