import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M288 0H96C42.98 0 0 42.98 0 96v352c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V96c0-53.02-43-96-96-96zm64 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V192h224v176c0 8.836 7.164 16 16 16s16-7.164 16-16V192h64v256zm0-288h-64v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H32V96c0-35.35 28.65-64 64-64h192c35.35 0 64 28.65 64 64v64z" />
  </svg>
);

const SvgRefrigerator = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRefrigerator;
