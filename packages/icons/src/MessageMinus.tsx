import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.838 11.02 15.55 19.12 9.7l124.88-91h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm32 352c0 17.6-14.4 32-32 32H303.9a32.008 32.008 0 0 0-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM336 192H176c-8.8 0-16 7.2-16 16 0 8.834 7.156 15.1 16 15.1h160c8.84 0 16-7.16 16-15.1s-7.2-16-16-16z" />
  </svg>
);

const SvgMessageMinus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageMinus;
