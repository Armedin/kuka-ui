import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3 0 496.5 15.52 512 34.66 512h378.7c19.14 0 34.64-15.5 34.64-34.7 0-95.7-77.6-173.3-173.3-173.3zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm392-56H472c-13.2 0-24 10.8-24 24s10.75 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
  </svg>
);

const SvgUserMinusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserMinusSolid;
