import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 384c53 0 96-85.1 96-192C512 86.9 469 0 416 0s-96 86-96 192 43 192 96 192zm0-256c17.62 0 31.1 28.62 31.1 64s-13.5 64-31.1 64-32-28.62-32-64 14.4-64 32-64zm-128.9 64c0-83.6 23.68-153.5 60.44-192H96C43 0 0 86 0 192s43 192 96 192h252.4c-36.7-38.5-61.3-108.4-61.3-192zm135 223.7L128 416v64c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V343c-21.7 42.5-52.9 69.6-89.9 72.7z" />
  </svg>
);

const SvgToiletPaperBlankUnderSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgToiletPaperBlankUnderSolid;
