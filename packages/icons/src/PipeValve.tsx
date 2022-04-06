import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 160c-8.8 0-16 7.2-16 16v16H272v-80h96c8.8 0 16-7.2 16-16s-7.168-16-16-16h-96V48c0-8.83-7.2-16-16-16s-16 7.17-16 16v32h-96c-8.8 0-16 7.17-16 16s7.168 16 16 16h96v80H32v-16c0-8.8-7.17-16-16-16s-16 7.2-16 16v288c0 8.8 7.168 16 16 16s16-7.2 16-16v-16h448v16c0 8.832 7.168 16 16 16s16-7.168 16-16V176c0-8.8-7.2-16-16-16zm-16 256H32V224h448v192z" />
  </svg>
);

const SvgPipeValve = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPipeValve;
