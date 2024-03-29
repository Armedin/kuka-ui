import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M32 128v256c0 17.7 14.33 32 32 32h274.2l-8 32H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v64c-10.9-.3-21.8 1.6-32 5.6V128c0-17.7-14.3-32-32-32H64c-17.67 0-32 14.3-32 32zm336 160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h256zM96 208c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm441.5 33.4c18.8-18.8 49.2-18.8 67.9 0l17.4 17.3c18.7 18.8 18.7 49.2 0 67.9L469.1 480.3c-6.2 6.2-13.9 10.5-22.3 11.8l-74.9 19.6c-5.5 1.3-11.2-.3-15.2-4.2-4-4-5.6-9.8-4.2-15.2l18.7-74.9c2.1-8.5 6.5-16.2 12.6-22.3l153.7-153.7zm45.3 22.6c-6.3-6.2-16.4-6.2-22.6 0l-24.9 24.8 40 40 24.9-25.7c6.2-5.4 6.2-15.5 0-21.7L582.8 264zM402.2 425.1l-13.1 49.1 49.9-12.3c2.8-.7 5.4-2.1 7.4-4.2l106.3-106.3-40-39.9-106.2 106.2c-2.1 2.1-3.6 4.6-4.3 7.4z" />
  </svg>
);

const SvgMoneyCheckPen = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoneyCheckPen;
