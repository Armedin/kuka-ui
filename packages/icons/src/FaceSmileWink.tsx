import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 368c43.4 0 73.1-21.8 91.9-42.5 5.8-6.7 15.9-7.4 22.6-1.6 6.7 5.8 7.4 15.9 1.6 22.6-22.3 25.6-61 53.5-116.1 53.5-55.1 0-93.8-27.9-116.1-53.5-5.8-6.7-5.1-16.8 1.6-22.6 6.7-5.8 16.8-5.1 22.6 1.6C182 346.2 212.6 368 256 368zm-55.6-160c0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24zm78 28.8c-7.1-5.3-8.5-15.3-3.2-22.4 30.4-40.5 91.2-40.5 121.6 0 5.3 7.1 3.9 17.1-3.2 22.4-7.1 5.3-17.1 3.9-22.4-3.2-17.6-23.5-52.8-23.5-70.4 0-5.3 7.1-15.3 8.5-22.4 3.2zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceSmileWink = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceSmileWink;
