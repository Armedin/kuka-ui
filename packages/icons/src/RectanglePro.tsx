import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M152 168c30.9 0 56 25.1 56 56s-25.1 56-56 56h-40v48c0 8.8-7.2 16-16 16-8.84 0-16-7.2-16-16V184c0-8.8 7.16-16 16-16h56zm24 56c0-13.3-10.7-24-24-24h-40v48h40c13.3 0 24-10.7 24-24zm64-40c0-8.8 7.2-16 16-16h56c30.9 0 56 25.1 56 56 0 21.9-12.6 40.8-30.9 50l28.5 45.5c4.7 7.5 1.5 17.4-5.1 22.1-8.4 4.6-17.4 1.5-22.1-5.1L303.1 280h-32v48c0 8.8-6.3 16-16 16-7.9 0-16-7.2-16-16l.9-144zm32 64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40v48zm288 0v16c0 44.2-35.8 80-80 80s-80-35.8-80-80v-16c0-44.2 35.8-80 80-80s80 35.8 80 80zm-128 16c0 26.5 21.5 48 48 48s48-21.5 48-48v-16c0-26.5-21.5-48-48-48s-48 21.5-48 48v16zM0 96c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm32 0v320c0 17.7 14.33 32 32 32h512c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32z" />
  </svg>
);

const SvgRectanglePro = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRectanglePro;