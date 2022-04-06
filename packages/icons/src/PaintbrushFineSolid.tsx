import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M559.6 16.4c21.9 21.87 21.9 57.33 0 79.2L306.9 348.3l-79.2-79.2L480.4 16.4c21.9-21.867 57.3-21.867 79.2 0zM284.3 370.9l-.1-.8c2.5 10.1 3.8 19 3.8 29.9 0 61.9-50.1 112-112 112H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h4.81c17.63 0 29.59-18.9 27.78-36.4-.39-3.8-.59-7.7-.59-11.6 0-61.9 50.1-112 112-112 10 0 19.8 1.3 29 3.8l.1-.1 79.2 79.2z" />
  </svg>
);

const SvgPaintbrushFineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPaintbrushFineSolid;
