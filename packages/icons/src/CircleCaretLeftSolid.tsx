import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm48 360c0 9.531-5.656 18.19-14.41 22-3.09 1.3-6.29 2-9.59 2-5.938 0-11.8-2.219-16.33-6.406l-112-104C146.8 269 144 262.7 144 256s2.781-13.03 7.672-17.59l112-104C270.7 127.9 280.9 126.3 289.6 130c8.7 3.8 14.4 12.5 14.4 22v208z" />
  </svg>
);

const SvgCircleCaretLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleCaretLeftSolid;
