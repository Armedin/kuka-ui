import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M480 32H96C43.06 32 0 75.06 0 128v192c0 50.88 39.9 92.23 89.1 95.39 3.324-5.879 7.242-11.51 12.19-16.45L147.6 352H96c-17.66 0-32-14.34-32-32V128c0-17.66 14.34-32 32-32h384c17.66 0 32 14.34 32 32v192c0 17.66-14.34 32-32 32h-51.58l45.96 47.5c4.738 4.738 8.473 10.19 11.69 15.89C536.1 412.2 576 370.9 576 320V128c0-52.94-43.1-96-96-96zM307.6 296.1c-5.5-5.4-12.5-8.1-19.6-8.1a27.285 27.285 0 0 0-19.45 8.109l-132.5 136.8C118.8 450.2 131.1 480 155.7 480h264.7c24.6 0 36.89-29.77 19.54-47.13L307.6 296.1z" />
  </svg>
);

const SvgAirplaySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAirplaySolid;
