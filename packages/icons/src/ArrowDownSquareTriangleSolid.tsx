import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M320 224h128c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32H320c-17.67 0-31.1 14.33-31.1 32v128c-.9 17.7 13.4 32 31.1 32zm172.1 214.9-83.13-137.1c-11.12-18.38-38.75-18.38-49.88 0l-83.25 137.1c-11 18.25 2.75 41.13 25 41.13h166.3c22.26-.03 35.96-22.93 24.96-41.13zM192.4 330.7 160 366.1V64.03C160 46.33 145.67 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-11.42-12.45-31.63-14.43-45.22-1.969-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z" />
  </svg>
);

const SvgArrowDownSquareTriangleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownSquareTriangleSolid;
