import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M286.2 140.7c17.9-19.6 49.1-19.6 67.9 0l17.3 17.4c18.8 18.7 18.8 49.1 0 67.8L245.1 352.3c-6.2 6.2-13.9 10.5-22.3 11.8l-74.9 19.6c-5.5 1.3-11.2-.3-15.2-4.2-4-4-5.6-9.8-4.2-15.2l18.7-74.9c2.1-8.5 6.5-16.2 12.6-22.3l126.4-126.4zm45.3 22.6c-6.3-6.2-16.4-6.2-22.7 0l-21.4 21.5 40 40 21.4-21.5c6.3-6.2 6.3-16.4 0-22.6l-17.3-17.4zM178.2 297.1l-13.1 49.1 49.9-12.3c2.8-.7 5.4-2.2 7.4-4.2l82.4-82.3-40-40-82.3 82.3c-2.1 2.1-3.6 4.6-4.3 7.4zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgPenCircle = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPenCircle;
