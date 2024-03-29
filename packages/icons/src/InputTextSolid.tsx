import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M184 160c9.5 0 18.1 5.6 21.9 14.3l64 144c5.4 12.1 0 26.2-12.2 31.6-12.1 5.4-26.2 0-31.6-12.2l-4.4-9.7h-75.4l-4.4 9.7c-5.4 12.2-19.5 17.6-31.6 12.2-12.16-5.4-17.61-19.5-12.23-31.6l64.03-144c3.8-8.7 12.4-14.3 21.9-14.3zm-16.4 120h32.8L184 243.1 167.6 280zM304 184c0-13.3 10.7-24 24-24h52c33.1 0 60 26.9 60 60 0 9.2-2.1 17.9-5.8 25.7 13.3 11 21.8 27.7 21.8 46.3 0 33.1-26.9 60-60 60h-68c-13.3 0-24-10.7-24-24V184zm48 24v24h28c6.6 0 12-5.4 12-12s-5.4-12-12-12h-28zm0 96h44c6.6 0 12-5.4 12-12s-5.4-12-12-12h-44v24zM0 128c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm64 256h512V128H64v256z" />
  </svg>
);

const SvgInputTextSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgInputTextSolid;
