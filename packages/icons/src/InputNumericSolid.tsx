import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M104 184c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v120h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h16v-96h-8c-13.3 0-24-10.7-24-24zm179.5 45.9c-7.7 10.8-22.7 13.3-33.4 5.6-10.8-7.7-13.3-22.7-5.6-33.4l11.1-15.6c23.7-33.3 72.3-35.7 99.2-4.9 21.3 23.5 20.8 60.9-1.1 84.7L318.8 304H352c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88c-9.5 0-18.2-5.6-22-14.4-3.8-8.7-2.1-18.9 4.4-25.9l72-78c5.3-5.8 5.4-14.6.3-20.5-6.6-7.4-18.3-6.9-24.1 1.2l-11.1 15.5zM576 64c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h512zm0 64H64v256h512V128z" />
  </svg>
);

const SvgInputNumericSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgInputNumericSolid;
