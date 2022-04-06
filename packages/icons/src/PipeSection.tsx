import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 96c-8.8 0-16 7.2-16 16v16H32v-16c0-8.8-7.17-16-16-16s-16 7.2-16 16v288c0 8.8 7.168 16 16 16s16-7.2 16-16v-16h576v16c0 8.832 7.168 16 16 16s16-7.168 16-16V112c0-8.8-7.2-16-16-16zm-16 256H32V160h576v192z" />
  </svg>
);

const SvgPipeSection = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPipeSection;
