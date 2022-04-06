import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M202.7 84.1c-6.6-5.9-16.7-5.37-22.6 1.19L36.1 245.3a16.06 16.06 0 0 0 0 21.44l144 159.1c5.906 6.562 16.03 7.094 22.59 1.188 6.549-5.938 7.064-16.03 1.188-22.62L69.53 256l134.4-149.3c5.57-6.2 5.67-16.32-1.23-22.6zM261.5 256l134.4-149.3c5.596-6.23 5.73-16.35-1.188-22.62-6.562-5.906-16.69-5.375-22.59 1.188l-144 159.1a16.06 16.06 0 0 0 0 21.44l144 159.1c5.906 6.562 16.03 7.094 22.59 1.188 6.549-5.938 7.064-16.03 1.188-22.62L261.5 256z" />
  </svg>
);

const SvgAnglesLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAnglesLeft;
