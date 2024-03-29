import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M32 64c17.67 0 32 14.33 32 32v320c0 17.7-14.33 32-32 32S0 433.7 0 416V96c0-17.67 14.33-32 32-32zm214.6 73.4c12.5 12.5 12.5 32.7 0 45.2L205.3 224h229.4l-41.3-41.4c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l96 96c12.5 12.5 12.5 32.7 0 45.2l-96 96c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l41.3-41.4H205.3l41.3 41.4c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0l-96-96c-12.52-12.5-12.52-32.7 0-45.2l96-96c12.5-12.5 32.7-12.5 45.2 0zM640 416c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.67 14.3-32 32-32s32 14.33 32 32v320z" />
  </svg>
);

const SvgArrowsLeftRightToLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsLeftRightToLineSolid;
