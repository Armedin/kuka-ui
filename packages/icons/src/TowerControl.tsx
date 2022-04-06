import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M160 16c0-8.836 7.2-16 16-16h96c8.8 0 16 7.164 16 16 0 8.84-7.2 16-16 16h-32v32h48c17.7 0 32 14.33 32 32v32h80.9c26.2 0 45.4 24.8 38.7 50.1l-37 142.1c7.6 1.2 13.4 7.8 13.4 15.8 0 8.8-7.2 16-16 16h-48v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V352H128v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V352H48c-8.84 0-16-7.2-16-16 0-8 5.82-14.6 13.43-15.8L8.361 178.1c-6.611-25.3 12.509-51 38.709-51H128v-32c0-16.77 14.3-32 32-32h48v-32h-32c-8.8 0-16-6.26-16-16v.9zm-32 144.2-.9-.2H47.07c-5.24 0-9.07 4.1-7.75 10l39.13 150H128V160.2zM160 320h128V160H160v160zm160-160v160h49.6l39.1-150c1.3-5.9-2.5-10.9-7.8-10.9l-80.9.9zm-32-64H159.1v32H288V96z" />
  </svg>
);

const SvgTowerControl = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTowerControl;
