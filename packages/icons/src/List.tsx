import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 72c0-13.25 10.75-24 24-24h48c13.3 0 24 10.75 24 24v48c0 13.3-10.7 24-24 24H40c-13.25 0-24-10.7-24-24V72zm64 40V80H48v32h32zm416-32c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16 0-8.84 7.2-16 16-16h320zm0 160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h320zm0 160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h320zM88 208c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H40c-13.25 0-24-10.7-24-24v-48c0-13.3 10.75-24 24-24h48zm-40 32v32h32v-32H48zM16 392c0-13.3 10.75-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H40c-13.25 0-24-10.7-24-24v-48zm64 40v-32H48v32h32z" />
  </svg>
);

const SvgList = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgList;
