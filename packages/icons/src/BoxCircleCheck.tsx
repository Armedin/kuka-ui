import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M32 192v224c0 17.7 14.33 32 32 32h211.2c5.8 11.4 12.9 22.2 21 32H64c-35.35 0-64-28.7-64-64V189.6c0-9 1.879-17.8 5.516-26L47.11 70.01C57.38 46.89 80.3 32 105.6 32h236.8c25.3 0 48.2 14.9 58.5 38.01l41.6 93.59c3.6 8.2 5.5 17 5.5 26v2.4H32zm208-32h165.9l-34.2-77c-5.2-11.55-16.6-19-29.3-19H240v96zm-32-96H105.6c-12.65 0-24.11 7.45-29.25 19l-34.22 77H208V64zm291.3 260.7c6.3 6.2 6.3 16.4 0 22.6l-72 72c-6.2 6.3-16.4 6.3-22.6 0l-40-40c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l28.7 28.7 60.7-60.7c6.2-6.3 16.4-6.3 22.6 0zM288 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144 112c61.9 0 112-50.1 112-112s-50.1-112-112-112-112 50.1-112 112 50.1 112 112 112z" />
  </svg>
);

const SvgBoxCircleCheck = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxCircleCheck;
