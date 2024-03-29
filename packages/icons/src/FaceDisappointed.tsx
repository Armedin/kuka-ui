import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 384c-28.5 0-48.4 13.7-60.1 26.7-6.8 6.6-16 7.1-22.6 1.2-6.6-6.8-7.1-16-1.2-22.6 16.1-17.9 44.2-37.3 83.9-37.3s67.8 19.4 83.9 37.3c5.9 6.6 5.4 15.8-1.2 22.6-6.6 5.9-16.7 5.4-22.6-1.2-11.7-13-31.6-26.7-60.1-26.7zm-44.7-116.7-7.4 7.4c-23.5 23.6-53.9 39.2-86.8 44.7l-2.5.4c-8.7 1.4-16.93-4.5-18.38-13.2-1.46-8.7 4.48-16.9 13.18-18.4l2.5-.4c26.3-4.4 50.6-16.9 69.4-35.7l7.4-7.4c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm89.4 0c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l7.4 7.4c18.8 18.8 43.1 31.3 69.5 35.7l2.4.4c8.7 1.5 14.6 9.7 13.2 18.4-1.5 8.7-9.7 14.6-18.4 13.2l-2.5-.4c-33.8-5.5-63.3-21.1-86.8-44.7l-7.4-7.4zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceDisappointed = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceDisappointed;
