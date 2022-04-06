import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M208 160c-26.5 0-48-21.5-48-48V32H48c-8.84 0-16 7.16-16 16v320c0 8.8 7.16 16 16 16h192v32H48c-26.51 0-48-21.5-48-48V48C0 21.49 21.49 0 48 0h140.1c12.7 0 25 5.057 34 14.06l83.8 83.88c9 8.96 14.1 21.26 14.1 33.96V224h-32v-64h-80zM192 32.48V112c0 8.8 7.2 16 16 16h79.5c-.7-2.8-2.1-5.4-4.2-7.4l-83.9-83.91c-2-2.07-4.6-3.51-7.4-4.21zM272 288c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v192h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V288zm32 192h256V288H304v192zM199.4 36.69l22.7-22.63z" />
  </svg>
);

const SvgLaptopFile = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLaptopFile;
