import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M180.5 141.5C219.7 108.5 272.6 80 336 80c63.4 0 116.3 28.5 155.5 61.5 39 33 66.8 71.6 80.9 99.8 4.8 9.2 4.8 20.2 0 29.4-14.1 27.3-41.9 66.8-80.9 99.8-39.2 33-92.1 61.5-155.5 61.5-63.4 0-116.3-28.5-155.5-61.5-16.2-13.8-30.5-28.6-42.7-43.2l-89.68 52.3c-12.51 7.3-28.36 5.3-38.646-4.9a31.989 31.989 0 0 1-5.258-38.6L50 256 4.216 175.9a31.989 31.989 0 0 1 5.258-38.6c10.286-10.2 26.136-12.2 38.646-4.9l89.68 52.3c12.2-14.6 26.5-29.4 42.7-43.2zM416 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
  </svg>
);

const SvgFishSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFishSolid;
