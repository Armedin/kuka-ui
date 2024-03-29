import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M40 480c-22.09 0-40-17.9-40-40v-48c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40zm0-32h48c4.42 0 8-3.6 8-8v-48c0-4.4-3.58-8-8-8H40c-4.42 0-8 3.6-8 8v48c0 4.4 3.58 8 8 8zm192 32c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48zm0-32h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM0 232c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40v-48zm32 0v48c0 4.4 3.58 8 8 8h48c4.42 0 8-3.6 8-8v-48c0-4.4-3.58-8-8-8H40c-4.42 0-8 3.6-8 8zm200 88c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48zm0-32h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM0 72c0-22.09 17.91-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40V72zm32 0v48c0 4.4 3.58 8 8 8h48c4.42 0 8-3.6 8-8V72c0-4.42-3.58-8-8-8H40c-4.42 0-8 3.58-8 8zm200 88c-22.1 0-40-17.9-40-40V72c0-22.09 17.9-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40h-48zm0-32h48c4.4 0 8-3.6 8-8V72c0-4.42-3.6-8-8-8h-48c-4.4 0-8 3.58-8 8v48c0 4.4 3.6 8 8 8z" />
  </svg>
);

const SvgGripVertical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGripVertical;
