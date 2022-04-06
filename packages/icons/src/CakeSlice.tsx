import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M450.6 101.7C490 143.4 512 198.6 512 256v160c-.1 16.1-6.8 33.2-18.8 45.2S464.1 479.9 448 480H64c-16.96-.1-33.21-6.8-45.2-18.8C6.81 449.2.05 432.1 0 416V271.6c.006-4.8 1.122-10.5 3.262-14 2.141-4.4 5.249-8.2 9.088-11.2L278.8 39.01c5.7-4.56 12.7-7.04 20-7.01h1.1c57.3 3.11 111.2 28.07 150.7 69.7zM480 384H32v32c0 8.5 3.37 16.6 9.37 22.6 6 6 14.14 9.4 22.63 9.4h384c8.5 0 16.6-3.4 22.6-9.4s9.4-14.1 9.4-22.6v-32zm0-96H32v64h448v-64zm0-32c.1-49.1-18.7-96.4-52.4-132.1A191.844 191.844 0 0 0 298.7 64L52.06 256H480z" />
  </svg>
);

const SvgCakeSlice = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCakeSlice;
