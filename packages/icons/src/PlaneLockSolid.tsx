import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M192 93.68C192 59.53 221 0 256 0c36 0 64 59.53 64 93.68v84.62l101.8 58.1c-3.8 11.2-5.8 23.2-5.8 35.6v24.6c-17.9 10.3-30.3 29.1-31.8 50.9L320 329.1V400l57.6 43.2c4 3 6.4 6.9 6.4 12.8v41.1c0 8.6-6.3 14.9-14.9 14.9-.4 0-1.7-.2-3-.5L256 480l-110.1 31.5c-1.3.3-2.6.5-3.9.5-7.7 0-14-6.3-14-14.9V456c0-5.9 2.4-9.8 6.4-12.8L192 400v-70.9L20.4 378.2C10.17 381.1 0 373.4 0 362.8v-65.5c0-5.8 3.076-11.1 8.062-13.9L192 178.3V93.68zM528 192c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80zm0 48c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgPlaneLockSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlaneLockSolid;
