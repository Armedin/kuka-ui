import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M235.3 123.3c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l96-96.014c6.2-6.248 16.4-6.248 22.6 0l96 96.014c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L336 54.63V400c0 44.2 35.8 80 80 80h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-61.9 0-112-50.1-112-112v-16c0-44.2-35.8-80-80-80H54.63l68.67 68.7c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-96.014-96c-3-3-4.686-7.1-4.686-11.3 0-4.2 1.686-8.3 4.686-11.3l96.014-96c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6L54.63 272H224c31.3 0 59.7 12.9 80 33.6V54.63l-68.7 68.67z" />
  </svg>
);

const SvgArrowsSplitUpAndLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsSplitUpAndLeft;
