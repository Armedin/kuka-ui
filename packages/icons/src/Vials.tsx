import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 96c-8.8 0-16 7.2-16 16v144H64V112c0-8.8-7.16-16-16-16s-16 7.2-16 16v288c0 44.1 35.88 80 80 80s80-35.9 80-80V112c0-8.8-7.2-16-16-16zm-16 304c0 26.5-21.5 48-48 48s-48-21.5-48-48V288h96v112zM464 96c-8.8 0-16 7.2-16 16v144h-96V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v288c0 44.13 35.88 80 80 80s80-35.88 80-80V112c0-8.8-7.2-16-16-16zm-16 304c0 26.47-21.53 48-48 48s-48-21.5-48-48V288h96v112zM208 32H16C7.156 32 0 39.16 0 48s7.156 16 16 16h192c8.8 0 16-7.16 16-16s-7.2-16-16-16zm288 0H304c-8.8 0-16 7.16-16 16s7.2 16 16 16h192c8.8 0 16-7.16 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgVials = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVials;
