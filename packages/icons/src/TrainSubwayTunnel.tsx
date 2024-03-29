import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 496c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V256C0 114.6 114.6 0 256 0s256 114.6 256 256v240c0 8.8-7.2 16-16 16s-16-7.2-16-16V256c0-123.7-100.3-224-224-224S32 132.3 32 256v240zm144-136c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm160 0c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-16-232c44.2 0 80 35.8 80 80v160c0 32.8-19.8 61-48.9 73.4l44.2 43.3c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L313.4 448H198.6l-59.3 59.3c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l43.3-43.3c-28.2-12.4-48-40.6-48-73.4V208c0-44.2 35.8-80 80-80h128zm0 32h-48v96h96v-48c0-26.5-21.5-48-48-48zM144 288v80c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-80H144zm96-128h-48c-26.5 0-48 21.5-48 48v48h96v-96z" />
  </svg>
);

const SvgTrainSubwayTunnel = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrainSubwayTunnel;
