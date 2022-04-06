import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 0H368.9c-12.1 0-24.59 7.766-29.56 19.77-4.969 12-2.25 25.69 6.938 34.86L390.1 99.3l-97.39 97.39c-6.248 6.25-6.248 16.38 0 22.62 6.248 6.25 16.38 6.25 22.62 0l97.38-97.38 44.68 44.68c6.156 6.125 14.28 9.375 22.59 9.375 4.125 0 8.312-.813 12.28-2.453C504.3 168.5 512 156.1 512 143.1V32c0-17.67-14.3-32-32-32zm0 143.1L368 32s-.094 0 0 0h112v111.1zM31.1 512h111.1c12.1 0 24.59-7.766 29.56-19.77 4.969-12 2.25-25.69-6.937-34.86l-44.67-44.67 97.39-97.39c6.248-6.25 6.248-16.38 0-22.62-6.248-6.25-16.38-6.25-22.62 0l-97.38 97.38L54.62 345.4c-6.156-6.125-14.28-9.375-22.59-9.375-4.125 0-8.312.813-12.28 2.453C7.75 343.5 0 355 0 368v112c0 17.7 14.33 32 31.1 32zm0-144 112 111.1s.094 0 0 0l-112 .9V368z" />
  </svg>
);

const SvgUpRightAndDownLeftFromCenter = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpRightAndDownLeftFromCenter;