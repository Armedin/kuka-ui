import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M89.3 293.9 207.8 320h32.31l118.5-26.09c15.48-3.408 26.17-17.43 25.24-33.11l-6.906-117C372.8 63.19 305.5 0 224 0 170.4 0 123.4 27.6 96 69.22V32c8.836 0 16-7.164 16-16 0-8.838-7.2-16-16-16H80c-8.84 0-16 7.162-16 16 0 0 .29 247.7.398 247.6.462 14.5 10.392 27.1 24.902 30.3zm240.4-137.7.813 13.76c-25.14 13.92-64.23 43.82-72.69 97.02L248 269.1v-97.6l81.7-15.3zM224 48c46.57 0 85.95 30.06 99.72 72H124.2c13.7-41.86 53.2-72 99.8-72zM118.3 156.2l81.7 15.3v97.63l-9.8-3.03c-8.5-52.3-47.6-82.2-72.7-96.2l.8-13.7zM320 352H128C57.31 352 0 409.31 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32 0-70.7-57.3-128-128-128zM160 464l64-48 64 48H160z" />
  </svg>
);

const SvgUserBountyHunterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserBountyHunterSolid;
