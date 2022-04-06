import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M64 480h232.2c8.9 11.8 21.1 22.3 33.5 31.3-3.1.4-6.4.7-9.7.7H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h156.1c12.7 0 25 5.057 34 14.06L369.9 129.9c9 9 14.1 21.3 14.1 34v34.7c-11.2 3.2-21.9 7.4-32 12.6V192H240c-26.5 0-48-21.5-48-48V32H64c-17.67 0-32 14.33-32 32v384c0 17.7 14.33 32 32 32zm283.3-327.4L231.4 36.69c-2-2.07-4.6-3.51-7.4-4.21V144c0 8.8 7.2 16 16 16h111.5c-.7-2.8-2.1-5.4-4.2-7.4zM512 367.1c0 9.7-7.2 16-16 16H368c-8.8 0-16-6.3-16-16 0-7.9 7.2-16 16-16h128c8.8 0 16 8.1 16 16zm-224 .9c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144 112c61.9 0 112-50.1 112-112s-50.1-112-112-112-112 50.1-112 112 50.1 112 112 112z" />
  </svg>
);

const SvgFileCircleMinus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileCircleMinus;
