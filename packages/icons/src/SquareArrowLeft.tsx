import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M336 240H150.6l68.69-68.69c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-96 96C97.56 247.8 96 251.9 96 256s1.562 8.184 4.688 11.31l96 96c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62L150.6 272H336c8.844 0 16-7.154 16-15.1 0-9.7-7.2-16.9-16-16.9zm48-208H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320z" />
  </svg>
);

const SvgSquareArrowLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowLeft;
