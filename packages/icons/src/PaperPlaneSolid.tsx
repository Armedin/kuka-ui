import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m511.6 36.86-64 415.1a32.008 32.008 0 0 1-31.65 27.147c-4.188 0-8.319-.815-12.29-2.472l-122.6-51.1-50.86 76.29C226.3 508.5 219.8 512 212.8 512c-11.5 0-20.8-9.3-20.8-20.8v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96 122.3 360.3 19.69 317.5C8.438 312.8.812 302.2.062 289.1s5.47-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" />
  </svg>
);

const SvgPaperPlaneSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPaperPlaneSolid;