import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 0c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.7-64-64-64zm0 96c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32zm16 68h-10.67a16.011 16.011 0 0 0-9.602 3.199l-190.9 143.2c-17 12.72-40.63 12.72-57.63 0L64 164v-36c0-17.67 14.33-32 32-32h304c8.8 0 16-7.16 16-16s-7.2-16-16-16H96c-35.35 0-64 28.65-64 64v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V180c0-8.8-7.2-16-16-16zm-16 220c0 17.64-14.36 32-32 32H96c-17.64 0-32-14.36-32-32V203.1L240 336c14.12 10.61 31.06 16.01 48 16.01s33.9-5.41 48-16.01l176-132.9V384z" />
  </svg>
);

const SvgEnvelopeDot = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEnvelopeDot;
