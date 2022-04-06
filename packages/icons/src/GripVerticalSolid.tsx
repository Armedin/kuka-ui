import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M88 352c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40v-48c0-22.1 17.91-40 40-40h48zm192 0c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48zM40 320c-22.09 0-40-17.9-40-40v-48c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40zm240-128c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48zM40 160c-22.09 0-40-17.9-40-40V72c0-22.09 17.91-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40H40zM280 32c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40V72c0-22.09 17.9-40 40-40h48z" />
  </svg>
);

const SvgGripVerticalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGripVerticalSolid;
