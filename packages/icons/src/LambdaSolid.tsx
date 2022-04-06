import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 448c0 17.69-14.31 32-32 32h-64a32 32 0 0 1-28.62-17.69l-130.6-261.2-115.5 259.9c-5.312 11.94-17 19-29.28 19-4.344 0-8.75-.875-12.97-2.75-16.16-7.188-23.41-26.09-16.25-42.25l136.9-308.1-15.48-30.9H32c-17.69 0-32-14.31-32-32s14.31-32 32-32l128-.005a32.01 32.01 0 0 1 28.62 17.69l183.2 366.3H416C433.7 416 448 430.3 448 448z" />
  </svg>
);

const SvgLambdaSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLambdaSolid;
