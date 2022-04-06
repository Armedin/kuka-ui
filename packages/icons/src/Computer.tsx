import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 320V96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64h-97.8l21.3 64H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.84 0-16-7.2-16-16s7.16-16 16-16h60.5l21.3-64H64c-35.35 0-64-28.7-64-64zM384 64H64c-17.67 0-32 14.33-32 32v224c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32zM273.8 448l-21.3-64h-57l-21.3 64h99.6zM536 336c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zM480 80c0-26.51 21.5-48 48-48h64c26.5 0 48 21.49 48 48v352c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V80zm32 0v48h96V80c0-8.84-7.2-16-16-16h-64c-8.8 0-16 7.16-16 16zm0 80v32h96v-32h-96zm16 288h64c8.8 0 16-7.2 16-16V224h-96v208c0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgComputer = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgComputer;
