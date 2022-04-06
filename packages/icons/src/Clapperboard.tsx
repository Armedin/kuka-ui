import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-14.6 32-96 96H230.6l96-96h106.8zm-152 0-96 96H78.63l96-96H281.4zM32 96c0-17.64 14.36-32 32-32h65.38l-96 96H32V96zm448 320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V192h448v224zm0-256h-97.38l87.17-87.17C476 78.67 480 86.82 480 96v64z" />
  </svg>
);

const SvgClapperboard = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClapperboard;
