import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M592 352H263.4C173.84 352 86 374.83 8.1 418.05c-10.73 5.947-10.73 21.95 0 27.9C85.99 489.2 173.8 512 263.4 512H592c26.51 0 48-21.49 48-48v-64c0-26.5-21.5-48-48-48zM263.4 480c-73.88 0-146.4-16.5-212.6-48 60.13-28.62 125.5-44.13 192.4-46.88L324.4 480h-61zm103.2 0-82.25-96h116l82.25 96h-116zM608 464c0 8.836-7.162 16-16 16h-67.14l-82.25-96H592c8.838 0 16 7.164 16 16v64zM454.4 156.8c36.1 27 57.6 70.1 57.6 115.2 0 8.8 7.2 16 16 16s16-7.2 16-16c0-55.09-26.31-107.7-70.39-140.8C437.5 104.2 416 61.06 416 16c0-8.844-7.2-16-16-16s-16 7.156-16 16c0 55.09 26.3 107.7 70.4 140.8zm96 0c36.1 27 57.6 70.1 57.6 115.2 0 8.8 7.2 16 16 16s16-7.2 16-16c0-55.09-26.31-107.7-70.39-140.8C533.5 104.2 512 61.06 512 16c0-8.844-7.2-16-16-16s-16 7.156-16 16c0 55.09 26.3 107.7 70.4 140.8z" />
  </svg>
);

const SvgJoint = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgJoint;
