import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M159.1 255.1c0-128.3-85.76-192.4-89.42-195.1-6.22-4.25-7.82-14.25-2.63-21.38 5.219-7.219 15.19-8.719 22.31-3.594C93.55 38.06 192 110.8 192 256S93.55 473.9 89.4 476.1c-2.88 2.9-6.13 3.9-9.38 3.9-4.938 0-9.813-2.313-12.97-6.625-5.188-7.125-3.594-17.13 3.532-22.31C74.24 448.4 159.1 384.3 159.1 255.1z" />
  </svg>
);

const SvgBracketRoundRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBracketRoundRight;
