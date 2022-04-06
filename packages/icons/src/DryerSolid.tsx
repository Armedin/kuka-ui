import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 0H64C28.65 0 0 28.65 0 64v400c0 26.4 21.6 48 48 48h352c26.4 0 48-21.6 48-48V64c0-35.35-28.7-64-64-64zM184 64c13.3 0 24 10.75 24 24s-10.7 24-24 24-24-10.7-24-24 10.8-24 24-24zM64 88c0-13.25 10.75-24 24-24s24 10.75 24 24-10.7 24-24 24-24-10.7-24-24zm160 360c-79.5 0-143.1-64.5-143.1-144-.89-79.5 63.6-144 143.1-144s143.1 64.5 143.1 144S303.5 448 224 448zm0-256c-56.4 0-102.5 41.8-110.4 96H184c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-70.4c7.9 54.2 54 96 110.4 96 61.83 0 111.1-50.17 111.1-112 0-61.8-49.3-112-111.1-112z" />
  </svg>
);

const SvgDryerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDryerSolid;
