import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 16C86 16 0 216.6 0 316s85.1 180 192 180c105.1 0 192-80.63 192-180S297.1 16 192 16zm0 448c-88.22 0-160-66.39-160-148 0-93.7 82.2-268 160-268s160 174.3 160 268c0 81.6-71.8 148-160 148zm-56.8-346.9C100.7 160.7 64 240.4 64 304c0 8.8 7.16 16 16 16s16-7.2 16-16c0-54.19 32.59-126.9 64.13-165.1 5.547-6.875 4.469-16.94-2.406-22.5-6.824-7.3-16.924-5.4-22.524.7z" />
  </svg>
);

const SvgEgg = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEgg;
