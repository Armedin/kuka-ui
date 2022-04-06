import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M339.4 448H96c-17.67 0-32-14.33-32-32s14.33-32 32-32h224.8c-.5-5.3-.8-10.6-.8-16 0-80.54 54.16-148.3 128-169.2V48c0-26.51-21.5-48-48-48H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h299c-23.4-16.4-42.5-38.4-55.6-64zM496 224c-79.5 0-144 64.5-144 143.1 0 80.4 64.5 144.9 144 144.9s144-64.46 144-144c0-79.5-64.5-144-144-144zm67.3 147.3c-6.25 6.25-16.38 6.25-22.62 0L512 342.6V432c0 8.836-7.164 15.1-16 15.1s-16-6.3-16-15.1v-89.38l-28.69 28.69c-6.25 6.25-16.38 6.25-22.62 0s-6.25-16.38 0-22.62l56-56c6.25-6.25 16.38-6.25 22.62 0l56 56C566.4 351.8 568 355.9 568 360s-1.6 8.2-4.7 11.3z" />
  </svg>
);

const SvgBookCircleArrowUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookCircleArrowUpSolid;
