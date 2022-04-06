import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M277.4 303.1c-11-5.4-25.7-9.3-39.1-11.2-6.5-1.8-11.1-7-10.2-13.6.9-6.5 7-11.1 13.6-10.2 15 2.1 32.3 6.6 46.2 13.4 7 3.4 13.7 7.7 18.8 13.1 5.2 4.5 9.3 12.6 9.3 20.5 0 9.7-4.1 16.9-9.3 22.3-5.1 5.4-11.8 9.7-18.8 13.1-1-.4-2.1 1-3.2 1.5 1.1.5 2.2 1 3.2 1.5 7 3.4 13.7 7.7 18.8 13.1 5.2 4.5 9.3 12.6 9.3 21.4 0 8.8-4.1 16-9.3 21.4-5.1 5.4-11.8 9.7-18.8 13.1-13.9 6.8-31.2 11.3-46.2 13.4-6.6.9-12.7-3.7-13.6-10.2-.9-6.6 3.7-12.7 10.2-13.6 13.4-1.9 28.1-5.8 39.1-11.2 5.5-2.7 9.5-5.5 11.9-8 2.4-2.5 2.7-4.1 2.7-4.9 0-.8-.3-2.4-2.7-4.9-2.4-2.5-6.4-5.3-11.9-8-10.9-5.4-25.5-9.3-38.8-11.2-.9-.1-1.8-.3-2.7-.6-1.7-.6-3.2-1.6-4.4-2.8-1.2-1.2-2.2-2.7-2.8-4.4-.5-1.3-1.6-2.7-1.6-4.1 0-1.4 1.1-2.8 1.6-4.1.6-1.7 1.6-3.2 2.8-4.4 1.2-1.2 2.7-2.2 4.4-2.8.9-.3 1.8-.5 2.7-.6 13.3-1.9 27.9-5.8 38.8-11.2 5.5-2.7 9.5-5.5 11.9-8 2.4-2.5 2.7-4.1 2.7-5.8 0 .1-.3-1.5-2.7-4-2.4-2.5-6.4-5.3-11.9-8zm-66.2-69.5c-17.6-23.5-52.8-23.5-70.4 0-5.3 7.1-15.3 8.5-22.4 3.2-7.1-5.3-8.5-15.3-3.2-22.4 30.4-40.5 91.2-40.5 121.6 0 5.3 7.1 3.9 17.1-3.2 22.4-7.1 5.3-17.1 3.9-22.4-3.2zm67.2 3.2c-7.1-5.3-8.5-15.3-3.2-22.4 30.4-40.5 91.2-40.5 121.6 0 5.3 7.1 3.9 17.1-3.2 22.4-7.1 5.3-17.1 3.9-22.4-3.2-17.6-23.5-52.8-23.5-70.4 0-5.3 7.1-15.3 8.5-22.4 3.2zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceKissClosedEyes = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceKissClosedEyes;
