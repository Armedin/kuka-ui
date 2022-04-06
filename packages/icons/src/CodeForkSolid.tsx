import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M160 80c0 32.8-19.7 60.1-48 73.3V192c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-38.7c-28.3-13.2-48-40.5-48-73.3 0-44.18 35.8-80 80-80s80 35.82 80 80c0 32.8-19.7 60.1-48 73.3V192c0 53-43 96-96 96h-48v70.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288h-48c-53.02 0-96-43-96-96v-38.7C19.75 140.1 0 112.8 0 80 0 35.82 35.82 0 80 0c44.2 0 80 35.82 80 80zm-80 24c13.25 0 24-10.75 24-24S93.25 56 80 56 56 66.75 56 80s10.75 24 24 24zm288 0c13.3 0 24-10.75 24-24s-10.7-24-24-24-24 10.75-24 24 10.7 24 24 24zM224 408c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
  </svg>
);

const SvgCodeForkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCodeForkSolid;
