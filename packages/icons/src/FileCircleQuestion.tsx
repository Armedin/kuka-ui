import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M64 480h232.2c8.9 11.8 21.1 22.3 33.5 31.3-3.1.4-6.4.7-9.7.7H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h156.1c12.7 0 25 5.057 34 14.06L369.9 129.9c9 9 14.1 21.3 14.1 34v34.7c-11.2 3.2-21.9 7.4-32 12.6V192H240c-26.5 0-48-21.5-48-48V32H64c-17.67 0-32 14.33-32 32v384c0 17.7 14.33 32 32 32zm283.3-327.4L231.4 36.69c-2-2.07-4.6-3.51-7.4-4.21V144c0 8.8 7.2 16 16 16h111.5c-.7-2.8-2.1-5.4-4.2-7.4zM416 432c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm-48-102.4c0-23 18.6-41.6 41.6-41.6h40.5c25.3 0 45.9 20.6 45.9 45.9 0 16.2-9.4 32.7-24.5 40.7l-23.8 12.5c-1.4 7.3-7.9 12.9-15.7 12.9-8.8 0-16-7.2-16-16v-6.8c0-5.9 3.3-11.3 8.6-14.1l32-16.8c4.5-2.5 7.4-7.2 7.4-12.4 0-7.7-6.2-13.9-13.9-13.9h-40.5c-5.3 0-9.6 4.3-9.6 9.6v6.4c0 8.8-7.2 16-16 16s-16-7.2-16-16v-6.4zM576 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zM432 256c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112z" />
  </svg>
);

const SvgFileCircleQuestion = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileCircleQuestion;
