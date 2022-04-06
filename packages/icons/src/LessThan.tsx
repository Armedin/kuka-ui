import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M382.6 422.6c-2.7 5.9-8.5 9.4-15.5 9.4-2.203 0-4.453-.469-6.609-1.438L9.375 270.6C3.672 267.1 0 262.3 0 256c0-6.281 3.672-11.98 9.375-14.58l351.1-160c8.094-3.625 17.56-.094 21.19 7.938 3.656 8.062.11 17.53-7.938 21.19L54.67 255.1l319.1 145.4c8.93 4.6 12.43 14.1 8.83 22.1z" />
  </svg>
);

const SvgLessThan = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLessThan;
