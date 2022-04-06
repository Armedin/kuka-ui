import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M301.2 34.98c-4.201-1.895-8.727-2.902-13.16-2.902-7.697 0-15.29 2.876-21.27 8.192L131.8 160.1H48c-26.51 0-48 21.45-48 47.96v95.92c0 26.51 21.49 47.96 48 47.96h83.84l134.9 119.8A32.167 32.167 0 0 0 288 479.8c4.438 0 8.959-.93 13.16-2.835C312.7 471.8 320 460.5 320 447.9V64.12c0-12.59-7.3-23.98-18.8-29.14zM287.1 447.1l-144-128H48c-8.822 0-16-7.16-16-15.96v-96c0-8.801 7.178-15.96 16-15.96h95.1l143.1-127.1c.008-.008-.004.004 0 0l.9 383.02zM520.9 34.7c-7.328-4.906-17.27-2.953-22.2 4.391-4.922 7.344-2.953 17.28 4.391 22.2C568.8 105.3 608 178.1 608 256s-39.22 150.7-104.9 194.7c-7.344 4.922-9.312 14.86-4.391 22.2C501.8 477.5 506.9 480 512 480a15.95 15.95 0 0 0 8.891-2.703C595.5 427.3 640 344.6 640 255.1S595.5 84.66 520.9 34.7zm-61.5 64c-7.344-4.922-17.28-2.953-22.2 4.391s-2.953 17.28 4.391 22.2C485.7 154.8 512 203.7 512 256s-26.33 101.2-70.44 130.7c-7.344 4.922-9.312 14.86-4.391 22.2 3.131 4.6 8.131 7.1 13.331 7.1a15.95 15.95 0 0 0 8.891-2.703C512.4 377.8 544 318.1 544 255.1s-31.6-120.9-84.6-156.4zm-53 80c-7.328-4.922-17.28-2.953-22.2 4.391s-2.953 17.28 4.391 22.2C405.8 216.8 416 235.7 416 256s-10.23 39.23-27.38 50.7c-7.344 4.922-9.312 14.86-4.391 22.2 3.071 4.6 8.171 7.1 13.271 7.1a15.95 15.95 0 0 0 8.891-2.703C432.5 315.9 448 286.1 448 255.1s-15.5-59-41.6-76.4z" />
  </svg>
);

const SvgVolumeHigh = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVolumeHigh;
