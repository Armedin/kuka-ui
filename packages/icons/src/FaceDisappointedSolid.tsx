import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm316.1 154.7c5.9 6.6 16 7.1 22.6 1.2 6.6-6.8 7.1-16 1.2-22.6-16.1-17.9-44.2-37.3-84.8-37.3-38.8 0-66.9 19.4-83 37.3-5.9 6.6-5.4 15.8 1.2 22.6 6.6 5.9 15.8 5.4 22.6-1.2 11.7-13 31.6-26.7 59.2-26.7 29.4 0 49.3 13.7 61 26.7zm-104.8-166c-6.2-6.3-16.4-6.3-22.6 0l-7.4 7.4c-18.8 18.8-43.1 31.3-69.4 35.7l-2.5.4c-8.7 1.5-14.64 9.7-13.18 18.4 1.45 8.7 9.68 14.6 18.38 13.2l2.5-.4c32.9-5.5 63.3-21.1 86.8-44.7l7.4-7.4c6.3-6.2 6.3-16.4 0-22.6zm96.8 30c23.5 23.6 53 39.2 86.8 44.7l2.5.4c8.7 1.4 16.9-4.5 18.4-13.2 1.4-8.7-4.5-16.9-13.2-18.4l-2.4-.4c-26.4-4.4-50.7-16.9-69.5-35.7l-7.4-7.4c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l7.4 7.4z" />
  </svg>
);

const SvgFaceDisappointedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceDisappointedSolid;
