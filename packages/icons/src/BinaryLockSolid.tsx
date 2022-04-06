import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M322.7 6.04C331.1 12.05 336 21.71 336 32v128h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V76.4l-5.9 1.96c-16.7 5.59-34.9-3.47-40.4-20.24-5.6-16.77 3.4-34.89 20.2-40.48l48-15.998c9.7-3.252 20.5-1.616 28.8 4.398zM98.72 294c8.38 6.1 13.28 15.7 13.28 26v128h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H32.01C14.34 512 .009 497.7.009 480s14.331-32 32.001-32h16v-83.6l-5.88 2c-16.77 5.5-34.89-3.5-40.479-20.3-5.589-16.7 3.472-34.9 20.239-40.5l48-16c9.76-3.2 20.49-1.6 28.83 4.4zM128 0c35.4 0 64 28.65 64 64v96c0 35.3-28.6 64-64 64H64.01C28.66 224 .009 195.3.009 160V64C.009 28.65 28.66 0 64.01 0H128zM64.01 160H128V64H64.01v96zM192 352c0-35.3 28.7-64 64-64h64c35.4 0 64 28.7 64 64v96c0 35.3-28.6 64-64 64h-64c-35.3 0-64-28.7-64-64v-96zm128 0h-64v96h64v-96zm208-160.9c44.2 0 80 36.7 80 80v48c17.7 0 32 15.2 32 32.9v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32.9 32-32.9v-48c0-43.3 35.8-80 80-80zm0 48c-17.7 0-32 15.2-32 32v48h64v-48c0-16.8-14.3-32-32-32z" />
  </svg>
);

const SvgBinaryLockSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBinaryLockSolid;