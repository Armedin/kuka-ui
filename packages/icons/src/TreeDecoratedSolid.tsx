import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M471.6 455.6 381.73 352h35.1c25.62 0 39.5-29.25 23.25-48.5L346.1 192h44.75c21.37 0 32.87-22.5 19.37-37.25L276.12 8.25c-9.999-10.1-28.5-10.1-38.5 0l-134.9 146.5C89.1 169.5 101.62 192 122.09 192h44.75l-95.8 111.5C54.79 322.75 68.665 352 94.29 352h35.1L40.42 455.6c-18.1 21.88-3.75 56.38 24.75 56.38h381.6c28.63.02 43.73-34.58 24.83-56.38zM192 312c-13.25 0-23.1-10.75-23.1-24s10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24s-9.9 24-23.1 24zm72-152c0-13.25 10.75-24 23.1-24s23.1 10.75 23.1 24-10.75 24-23.1 24-23.1-10.7-23.1-24zm56 280c-13.25 0-23.1-10.75-23.1-24s10.75-24 23.1-24 23.1 10.75 23.1 24-9.9 24-23.1 24z" />
  </svg>
);

const SvgTreeDecoratedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTreeDecoratedSolid;
