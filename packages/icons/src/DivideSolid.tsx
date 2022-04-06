import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M400 224H48c-17.69 0-32 14.31-32 31.1s14.31 32 32 32h352c17.69 0 32-14.31 32-32S417.7 224 400 224zm-176-80c26.47 0 48-21.53 48-48s-21.53-48-48-48-48 21.53-48 48 21.5 48 48 48zm0 224c-26.47 0-48 21.53-48 48s21.53 48 48 48 48-21.53 48-48-21.5-48-48-48z" />
  </svg>
);

const SvgDivideSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDivideSolid;
