import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 112h211.8l-62.05 51.72a15.977 15.977 0 0 0-5.754 12.3C319.1 186.8 329.3 192 336 192c3.609 0 7.234-1.219 10.23-3.719l96-80C445.9 105.3 448 100.7 448 95.1s-2.109-9.248-5.75-12.28l-96-80a15.878 15.878 0 0 0-10.23-3.716c-6.754 0-16.03 5.286-16.03 15.98 0 4.585 1.96 9.139 5.754 12.3L387.8 80H176C78.95 80 0 158.1 0 255.1c0 9.7 7.156 16.9 16 16.9s16.01-7.2 16.01-16c0-79.4 64.58-144 143.99-144zm96 208c8.844 0 16-7.156 16-16v-96c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v80c0 8.8 7.2 16 16 16zm224-80c-8.844 0-16.01 7.156-16.01 16 0 79.41-64.59 144-143.1 144H124.2l62.05-51.72a15.977 15.977 0 0 0 5.754-12.3c0-10.72-9.208-15.96-15.1-15.96a16.045 16.045 0 0 0-10.26 3.703l-96 80C66.11 406.8 64 411.3 64 416s2.109 9.25 5.75 12.28l96 80c3.05 2.52 6.65 3.72 9.35 3.72 6.715 0 16.02-5.265 16.02-15.98 0-4.585-1.96-9.139-5.754-12.3L124.2 432H336c97.05 0 176-78.97 176-176 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgArrowsRepeat1 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsRepeat1;
