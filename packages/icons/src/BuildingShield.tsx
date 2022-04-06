import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M320 32H63.1c-16.77 0-32 14.33-32 32v384c0 17.7 15.23 32 32 32h64v-64c0-35.3 29.6-64 64-64 36.2 0 64 28.7 64 64v64H320c1.3 0 2.6-.1 3.9-.2 7.9 8.6 16.6 16.9 26.3 24.6-9 4.9-19.3 7.6-30.2 7.6H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v143l-32 12.8V64c0-17.67-14.3-32-32-32zM159.1 416v64h64v-64c0-17.7-13.4-32-32-32-16.8 0-32 14.3-32 32zm96-160v64h-8c-12.4 0-24-10.7-24-24v-48c0-13.3 11.6-24 24-24H296c8.2 0 15.4 4.1 19.7 10.3l-14.1 5.7H272c-8.8 0-16 7.2-16 16h-.9zm-120-160c14.2 0 24 10.7 24 24v48c0 13.3-9.8 24-24 24h-48c-12.36 0-24-10.7-24-24v-48c0-13.3 11.64-24 24-24h48zm-8 64v-32h-32v32h32zm96-40c0-13.3 11.6-24 24-24H296c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48.9c-12.4 0-24-10.7-24-24v-48zm32 8v32h32v-32h-32zm-120 96c14.2 0 24 10.7 24 24v48c0 13.3-9.8 24-24 24h-48c-12.36 0-24-10.7-24-24v-48c0-13.3 11.64-24 24-24h48zm-8 64v-32h-32v32h32zm433.8-14.3c9.1 3.7 15.1 12.5 15.1 22.3 0 63.3-25.9 168.8-134.8 214.2-5.9 2.4-12.5 2.4-18.4 0C313.9 464.8 287.1 359.3 287.1 296c0-9.8 6-18.6 16-22.3l120-48c5.7-2.3 12.1-2.3 17.8 0l120 48zM416 471.4V263l-95.9 38.4c1.3 52.9 22.5 129.5 95.9 170zM448 263v208.4c73.4-40.5 94.6-117.1 95.9-170L448 263z" />
  </svg>
);

const SvgBuildingShield = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBuildingShield;