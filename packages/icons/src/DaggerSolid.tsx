import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 128H224V16c0-8.875-7.1-16-16-16h-32c-8.9 0-16 7.125-16 16v112H48c-26.5 0-48 21.5-48 48s21.5 48 48 48c20.88 0 38.5-13.38 45-32h198c6.5 18.6 24.1 32 45 32 26.5 0 48-21.5 48-48s-21.5-48-48-48zM128 428.9l50.73 76c6.25 9.5 20.25 9.5 26.62 0l50.65-76V224H128v204.9z" />
  </svg>
);

const SvgDaggerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDaggerSolid;
