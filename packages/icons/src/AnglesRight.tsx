import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M75.89 85.29c-5.91-6.56-16.03-7.09-22.6-1.19-6.54 5.94-7.06 16-1.18 22.6L186.5 256 52.1 405.3c-5.596 6.23-5.73 16.35 1.188 22.62 6.562 5.906 16.69 5.375 22.59-1.188l144-159.1a16.06 16.06 0 0 0 0-21.44L75.89 85.29zM411.9 245.3l-144-160.01c-5.906-6.562-16.03-7.094-22.59-1.188-6.549 5.938-7.064 16.03-1.188 22.62L378.5 256 244.1 405.3c-5.596 6.23-5.73 16.35 1.188 22.62 6.562 5.906 16.69 5.375 22.59-1.188l144-159.1c5.522-7.032 5.522-16.232.022-22.332z" />
  </svg>
);

const SvgAnglesRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAnglesRight;
