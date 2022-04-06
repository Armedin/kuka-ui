import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 368c43.4 0 73.1-21.8 91.9-42.5 5.8-6.7 15.9-7.4 22.6-1.6 6.7 5.8 7.4 15.9 1.6 22.6-22.3 25.6-61 53.5-116.1 53.5-55.1 0-93.8-27.9-116.1-53.5-5.8-6.7-5.1-16.8 1.6-22.6 6.7-5.8 16.8-5.1 22.6 1.6C182 346.2 212.6 368 256 368zm-55.6-160c0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24zm112 0c0-13.3 10.7-24 24-24 13.2 0 24 10.7 24 24s-10.8 24-24 24c-13.3 0-24-10.7-24-24zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceSmile = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceSmile;
