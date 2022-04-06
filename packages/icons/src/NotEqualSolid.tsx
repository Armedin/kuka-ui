import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 336c0 17.69-14.31 32.01-32 32.01H187.8l-65.15 97.74C116.5 474.1 106.3 480 95.97 480c-6.094 0-12.25-1.75-17.72-5.375-14.72-9.812-18.69-29.66-8.875-44.38l41.49-62.23H48c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h105.5l63.1-96H48c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h212.2l65.18-97.77c9.781-14.69 29.62-18.66 44.37-8.875 14.72 9.812 18.69 29.66 8.875 44.38l-41.51 62.27H400c17.69 0 32 14.31 32 31.99s-14.31 32.01-32 32.01H294.4l-63.1 96H400c17.7-.02 32 14.28 32 31.98z" />
  </svg>
);

const SvgNotEqualSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNotEqualSolid;
