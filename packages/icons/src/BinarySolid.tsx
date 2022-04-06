import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 160h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V76.4l-5.9 1.96c-16.7 5.59-34.9-3.47-40.5-20.24-5.5-16.77 3.5-34.89 20.3-40.48l48-15.998c9.7-3.252 20.5-1.616 28.8 4.398C331.1 12.05 336 21.71 336 32v128zM111.1 448h16c18.6 0 32 14.3 32 32s-13.4 32-32 32h-96C14.33 512 0 497.7 0 480s14.33-32 31.1-32h16v-83.6l-4.98 2c-16.77 5.5-34.889-3.5-40.478-20.3-5.589-16.7 3.472-34.9 20.238-40.5l48-16c9.76-3.2 20.49-1.6 28.83 4.4 8.39 6.1 13.29 15.7 13.29 26l-.9 128zM0 64C0 28.65 28.65 0 63.1 0h64c36.2 0 64 28.65 64 64v96c0 35.3-27.8 64-64 64h-64C28.65 224 0 195.3 0 160V64zm127.1 0h-64v96h64V64zM320 288c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64h-64c-35.3 0-64.9-28.7-64.9-64v-96c0-35.3 29.6-64 64.9-64h64zm-64 160h64v-96h-64v96z" />
  </svg>
);

const SvgBinarySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBinarySolid;
