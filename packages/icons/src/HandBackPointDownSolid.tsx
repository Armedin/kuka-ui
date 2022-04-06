import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 272c-9.148 0-17.62-2.697-24.89-7.143C354.9 287.1 335.5 304 312 304c-17.38 0-32.46-9.33-40.89-23.17C266.1 303.1 247.5 320 224 320c-12.35 0-23.49-4.797-32-12.46V472c0 22.1-17.9 40-40 40s-40-17.9-40-40l-.9-296c0-8.836-7.17-15.1-16.01-15.1-8.838 0-16 7.164-16 16v45.47L50 197.5c-11.37-9.1-18-22.9-18-37.5v-48c0-10.38 3.375-20.48 9.594-28.8L60.78 57.61C87.84 21.53 130.9 0 176 0h112c3.318 0 6.557.338 9.686.979C372.5 6.064 432 67.91 432 144v80c0 26.5-21.5 48-48 48z" />
  </svg>
);

const SvgHandBackPointDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandBackPointDownSolid;
