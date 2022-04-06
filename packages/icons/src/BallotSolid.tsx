import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zM128 400c0 8.8-7.2 16-16 16H80c-8.75 0-16-7.2-16-16v-32c0-8.7 7.25-16 16-16h32c8.8 0 16 7.3 16 16v32zm0-128c0 8.8-7.2 16-16 16H80c-8.75 0-16-7.2-16-16v-32c0-8.7 7.25-16 16-16h32c8.8 0 16 7.3 16 16v32zm0-128c0 8.8-7.2 16-16 16H80c-8.75 0-16-7.2-16-16v-32c0-8.7 7.25-16 16-16h32c8.8 0 16 7.3 16 16v32zm240 256H208c-8.8 0-16-7.2-16-16s7.164-16 16-16h160c8.838 0 16 7.164 16 16s-7.2 16-16 16zm0-128H208c-8.8 0-16-7.2-16-16s7.164-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0-128H208c-8.8 0-16-7.2-16-16s7.164-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
  </svg>
);

const SvgBallotSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBallotSolid;
