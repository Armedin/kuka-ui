import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 239.4v-42l278.1-82.1c6.8-1.7 13-1.7 18.9 0l279 82.1v42l-38.9-10.8c-8.5-2.4-17.4 2.6-19.7 11.1-2.4 8.5 2.6 17.4 11.1 19.7l47.5 13.2v136.9c0 21.6-15.6 42-37.6 46.9l-240 53.3c-6.8 1.5-14 1.5-20.8 0L37.59 456.4C15.63 451.5 0 431.1 0 409.5V272.6l47.48-13.2c7.62-2.3 13.5-11.2 11.14-19.7-2.37-8.5-11.19-13.5-19.7-11.1L0 239.4zm292.3-78.8c-2.8-.8-5.8-.8-8.6 0l-43.2 12c-8.5 2.3-13.5 11.2-11.1 19.7 2.3 8.5 11.2 13.5 19.7 11.1l38.9-10.8 38.9 10.8c8.5 2.4 17.4-2.6 19.7-11.1 1.5-8.5-3.5-17.4-11.1-19.7l-43.2-12zm-100.8 58.8c7.6-2.3 12.6-11.2 11.1-19.7-2.3-8.5-11.2-13.5-19.7-11.1l-86.38 24c-8.52 2.3-13.5 11.2-11.14 19.7 2.37 8.5 11.19 13.5 19.72 11.1l86.4-24zm201.6-30.8c-8.5-2.4-17.4 2.6-19.7 11.1-2.4 8.5 2.6 17.4 11.1 19.7l86.4 24c8.5 2.4 17.4-2.6 19.7-11.1 1.5-8.5-3.5-17.4-11.1-19.7l-86.4-24zM269.9 84.63 0 164v-33.4c0-20.7 13.22-39.01 32.82-45.54L272.8 5.061a48.134 48.134 0 0 1 30.4 0l240 79.999c19.6 6.53 32.8 24.84 32.8 45.54V164L306.1 84.63a64.42 64.42 0 0 0-36.2 0z" />
  </svg>
);

const SvgKaabaSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKaabaSolid;