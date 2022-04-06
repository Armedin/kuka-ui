import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M352 32c40.84 0 78.41 22.71 98.06 59.27 5.764 10.72 16.79 16.86 28.21 16.86 4.814 0 9.697-1.09 14.29-3.385C504.2 98.94 516.1 96 528 96c44.1 0 80 35.9 80 80s-35.9 80-80 80h-60.13a31.99 31.99 0 0 0-21.04 7.893C434.2 274.9 413.1 288 384 288c-29.23 0-50.27-13.08-62.77-24.05-5.83-5.15-13.33-7.95-21.13-7.95H144c-61.76 0-112-50.2-112-112S82.24 32 144 32c30.69 0 59.4 12.38 80.85 34.85 6.05 6.32 14.45 9.9 23.15 9.9s17.1-3.58 23.1-9.9C292.6 44.38 321.3 32 352 32zm0-32c-41 0-77.75 17.25-104 44.75C221.8 17.25 185 0 144 0 64.5 0 0 64.5 0 144s64.5 144 144 144h156.1c22.5 19.8 51.7 32 83.9 32s61.25-12.25 83.88-32H528c61.9 0 112-50.1 112-112S589.87 64 528 64c-18 0-34.75 4.625-49.75 12.12C453.1 30.1 406.8 0 352 0zm272 384H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.801 0 16-7.201 16-16 0-8.8-7.2-16-16-16zm-64 96H240c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c8.801 0 16-7.201 16-16 0-8.8-7.2-16-16-16zm-416 0H16c-8.801 0-16 7.2-16 16s7.199 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgSmog = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSmog;