import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M152.4 256c0-13.3 10.7-24 24-24 13.2 0 24 10.7 24 24s-10.8 24-24 24c-13.3 0-24-10.7-24-24zm208 0c0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24zm-237.5-68.3c-6.4 6-16.6 5.7-22.6-.8-6.02-6.4-5.68-16.6.8-22.6 20-18.7 45.5-31.4 73.7-35.2 5.6-.7 11.4-1.1 17.2-1.1 8.8 0 16 7.2 16 16s-7.2 16-16 16c-4.4 0-8.8.3-13.9.9-20.3 2.8-39.7 12.3-55.2 26.8zM304 144c0-8.8 7.2-16 16-16 5.8 0 11.6.4 17.2 1.1 28.2 3.8 53.7 16.5 73.7 35.2 6.5 6 6.8 16.2.8 22.6-6 6.5-16.2 6.8-22.6.8-15.5-14.5-34.9-24-56.1-26.8-4.2-.6-8.6-.9-13-.9-8.8 0-16-7.2-16-16zm16 240c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm-64-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm256-96c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceHushed = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceHushed;
