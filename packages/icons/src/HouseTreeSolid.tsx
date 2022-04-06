import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M393.4 9.373c12.5-12.496 32.7-12.496 45.2 0l128 128.027c9.2 9.1 11.9 22.9 7 34.8-5 12-16.7 19.8-29.6 19.8h-29.4l85.5 108c8.6 9.6 10.1 22.8 4.7 33.9-5.3 10.2-16.5 18.1-28.8 18.1h-29.4l85.5 108c8.6 9.6 10.1 22.8 4.7 33.9-5.3 10.2-16.5 18.1-28.8 18.1H400c10-13.4 16-30 16-48V277.1c0-22.4-9.4-43.8-25.9-59l-107.2-98.2L393.4 9.373zM15.57 241.7l144.03-132c18.3-16.79 46.5-16.79 64.8 0l144 132c10 9.1 15.6 22 15.6 35.4V464c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V277.1c0-13.4 5.647-26.3 15.57-35.4zM144 344c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v48z" />
  </svg>
);

const SvgHouseTreeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHouseTreeSolid;
