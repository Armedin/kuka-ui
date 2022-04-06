import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M160 320h320c53 0 96-43 96-96s-43-96-96-96c-.625 0-1.125.25-1.625.25C479.5 123 480 117.6 480 112c0-44.25-35.8-80-80-80-24.62 0-46.25 11.25-61 28.75C320.4 24.75 283.2 0 240 0c-61.9 0-112 50.12-112 112 0 7.25.75 14.25 2.125 21.25C91.75 145.8 64 181.5 64 224c0 53 43 96 96 96zm40 144H87.1C74.8 464 64 474.8 64 487.1S74.8 512 87.1 512H200c13.2 0 24-10.8 24-24s-10.8-24-24-24zm416 0H295.1c-12.3 0-23.1 10.8-23.1 23.1s10.8 24.9 23.1 24.9H616c13.2 0 24-10.8 24-23.1S629.2 464 616 464zm-40-64c0-13.2-10.8-24-24-24H24c-13.2 0-24 10.8-24 23.1C0 413.2 10.8 424 23.1 424h528c14.1 0 24.9-10.8 24.9-24z" />
  </svg>
);

const SvgCloudFogSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloudFogSolid;
