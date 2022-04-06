import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96H272l-64-64H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zm-336.9 96c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 15.2-32 32-32zm287 215.6c-2.8 5.2-8.2 8.4-14.1 8.4H112a15.993 15.993 0 0 1-14.26-8.75 15.999 15.999 0 0 1 1.333-16.68l70-96C172.1 290.4 176.9 288 181.1 288s10.8 2.4 13.8 6.6l22.35 30.66 62.74-94.11c2.11-4.45 7.11-7.15 13.31-7.15s10.35 2.672 13.31 7.125l106.7 160c3.29 4.875 3.59 11.175.79 16.475z" />
  </svg>
);

const SvgFolderImageSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderImageSolid;
