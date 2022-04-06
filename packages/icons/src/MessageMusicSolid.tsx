import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1.007h-384c-35.38 0-64 28.62-64 63.1v287.1c0 35.37 28.62 63.1 64 63.1h96v83.1c0 4.5 2.5 8.618 6.625 10.74 4 1.1 8.875 1.581 12.5-1.044l124.9-93.7h144c35.38 0 64-28.62 64-63.1V64C511.1 28.63 483.4.007 447.1.007zm-96 255.093c0 17.62-21.5 31.1-48 31.1s-48-14.37-48-31.1 21.5-31.1 48-31.1c5.375 0 10.75.756 16 2.005v-76.37L224 187.1l-.9 100c0 17.62-21.5 31.1-47.1 31.1s-48-14.37-48-31.1 21.5-31.1 48-31.1c5.4-.9 10.8.7 16 1.1V143.3c0-6.999 4.5-13.12 11.25-15.25l128-47.25c4.75-1.54 10.15-.66 14.25 2.34s6.5 7.75 6.5 12.87l-.9 159.09z" />
  </svg>
);

const SvgMessageMusicSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageMusicSolid;
