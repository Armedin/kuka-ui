import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M267.3 100.7c-3.1-3.14-7.2-4.7-11.3-4.7s-8.2 1.56-11.3 4.7l-80 80c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L240 150.6V304c0 8.8 7.2 16 16 16s16-7.156 16-16V150.6l52.69 52.69c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62L267.3 100.7zM448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.838 11.03 15.55 19.12 9.7l124.88-91h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm32 352c0 17.6-14.4 32-32 32H303.9a32.004 32.004 0 0 0-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288z" />
  </svg>
);

const SvgMessageArrowUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageArrowUp;
