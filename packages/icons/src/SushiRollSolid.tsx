import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 480C100.3 480 0 429.9 0 368V144C0 82.14 100.3 32 224 32s224 50.14 224 112v224c0 61.9-100.3 112-224 112zm84.2-281.6c-35.3-13.5-63.8-36-82-63.4-16 3.9-36.3 10.6-56.8 20.9-18.6 9.3-36.6 21.2-52.3 36 29.1 10 66.2 16.1 106 16.1 31.8 0 60.7-3.5 85.1-9.6zM64 144c0 10.4 6.16 20.1 17.09 28.8 20.41-23.2 45.01-40.4 70.31-52.7 20.1-10.1 40.2-17.2 57.5-21.91-1.7-5.82-3.8-11.75-3.8-17.75C125.7 84.18 64 111.2 64 144zm304.6 27.4c9.9-8.3 15.4-17.6 15.4-27.4 0-32.4-60.1-59.15-138.2-63.41 9.3 42.41 53.3 85.31 122.8 90.81z" />
  </svg>
);

const SvgSushiRollSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSushiRollSolid;
