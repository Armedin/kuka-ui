import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 8.3-.4 16.6-1.2 24.7 0 .5 0 1.1-.1 1.6l-14.8 200.1c-1.2 16.7-15.1 29.6-31.9 29.6-16.8 0-30.7-12.9-31.9-29.6l-2.8-38c-5 4.6-10.2 9.1-15.6 13.3l-11.5 32.9c-4.5 12.8-16.6 21.4-30.2 21.4-11.5 0-21.9-6.1-27.5-15.7-27.6 10.2-57.4 15.7-88.5 15.7-69.4 0-132.3-27.6-178.4-72.4-5.73 5.3-13.34 8.4-21.6 8.4-15.64 0-28.99-11.3-31.56-26.7L6.455 313.4A257.538 257.538 0 0 1 0 256C0 114.6 114.6 0 256 0s256 114.6 256 256zM56 416l20.05-120.3C78.12 283.3 68.56 272 56 272s-22.12 11.3-20.05 23.7L56 416zm316 64 28-80v-40h-56v40l28 80zm-20-176h-8v40h55.3c-3.8-22.7-23.5-40-47.3-40zm-24 40v-40h-64v40h64zm0 56v-40h-64v40l32 48 32-48zm-144-96v40h64v-40h-64zm0 56v40h64v-40h-64zm-16-16v-40h-8c-23.8 0-43.5 17.3-47.3 40H168zm0 56v-40h-55.3c3.8 22.7 23.5 40 47.3 40h8zm8.4-224c-17.7 0-32 14.3-32 32s14.3 32 32 32c17.6 0 32-14.3 32-32s-14.4-32-32-32zm160 64c17.6 0 32-14.3 32-32s-14.4-32-32-32c-17.7 0-32 14.3-32 32s14.3 32 32 32zM464 480l21.8-232.1c.3-12.8-8.9-23.9-21.8-23.9s-23 11.1-21.8 23.9L464 480z" />
  </svg>
);

const SvgFaceIciclesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceIciclesSolid;