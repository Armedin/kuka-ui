import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 112h211.8l-62.05 51.72c-6.781 5.656-7.703 15.75-2.047 22.53C326.9 190 331.4 192 336 192c3.609 0 7.234-1.219 10.23-3.719l96-80C445.9 105.3 448 100.7 448 95.1s-2.109-9.248-5.75-12.28l-96-80c-6.797-5.688-16.89-4.719-22.55 2.031-5.656 6.781-4.734 16.88 2.047 22.53L387.8 80H176C78.95 80 0 158.1 0 255.1c0 9.7 7.156 16.9 16 16.9s16.01-7.2 16.01-16c0-79.4 64.58-144 143.99-144zm320 128c-8.844 0-16.01 7.156-16.01 16 0 79.41-64.59 144-143.1 144H124.2l62.05-51.72c6.781-5.656 7.703-15.75 2.047-22.53C182.7 319 172.6 318.1 165.8 323.7l-96 80c-3.69 3.1-5.8 7.5-5.8 11.4s2.109 9.25 5.75 12.28l96 80c3.05 3.42 6.65 4.62 9.35 4.62 4.594 0 9.141-1.969 12.31-5.75 5.656-6.781 4.734-16.88-2.047-22.53L124.2 432H336c97.05 0 176-78.97 176-176 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgArrowsRepeat = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsRepeat;
