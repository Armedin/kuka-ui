import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M341.3 409.3c-8.8 6.8-21.2 8.6-32.4 4.5-16.2-6.1-34-9.5-53.8-9.5-17.9 0-35.8 3.4-52 9.4-11.2 4.2-23.6 2.4-32.4-4.4-4.5-3.5-8.3-8.6-9.9-15.2-1.6-6.6-.5-13.4 2.7-19.4 17.4-32.7 52.4-55.6 92.5-55.6s75.2 22.9 92.5 55.6c3.2 6 4.4 12.8 2.8 19.5-1.6 6.5-5.5 11.6-10 15.1zm-25.7-27.1c-12.9-18.2-34.7-31.1-59.6-31.1s-46.6 12.9-59.6 31c17.7-6.3 38.6-9.8 58.7-9.8 21 0 42 3.5 60.5 9.9zM152.4 240c0-8.1 4-15.3 10.1-19.6l-39.6-13.2c-8.3-2.8-12.9-11.9-10.1-20.3 2.8-8.3 11.9-12.9 20.3-10.1l96 32c8.3 2.8 12 11.9 10.1 20.3-2.8 8.3-11.9 12-20.3 10.1l-19.7-6.6c-.1 2.3 1.2 4.8 1.2 7.4 0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24zm208 0c0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24 0-2.7.4-5.3 1.2-7.7l-20.5 6.9c-8.4 1.9-17.5-1.8-20.3-10.1-2.8-8.4 1.8-17.5 10.1-20.3l96-32c8.4-2.8 17.5 1.8 20.3 10.1 1.9 8.4-1.8 17.5-10.1 20.3l-40 13c7.1 4.3 11.3 11.6 11.3 19.8zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224z" />
  </svg>
);

const SvgFacePouting = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFacePouting;