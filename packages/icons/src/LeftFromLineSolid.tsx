import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M319.9 191.1H191.8v-72c0-9.578-5.708-18.25-14.51-22.05-8.79-2.88-18.99-1.09-25.99 5.45L7.201 238.5c-9.602 9.062-9.602 25.84 0 34.91l144.1 136c6.973 6.578 17.2 8.375 26 4.594a24.025 24.025 0 0 0 14.51-22.05v-72h128.1c17.69 0 32.04-14.33 32.04-32v-64C351.9 206.3 337.6 191.1 319.9 191.1zm95.2-127.11c-16.8 0-31.1 14.33-31.1 32v320c0 17.71 14.3 32.01 31.1 32.01 18.6 0 32.9-14.3 32.9-32V95.99c0-17.67-14.3-32-32.9-32z" />
  </svg>
);

const SvgLeftFromLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLeftFromLineSolid;
