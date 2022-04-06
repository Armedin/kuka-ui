import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M187.3 68.69c6.3 6.24 6.3 16.38 0 22.62L91.31 187.3c-6.24 6.3-16.38 6.3-22.62 0-6.25-6.2-6.25-16.4 0-22.6l96.01-96.01c6.2-6.25 16.4-6.25 22.6 0zm-64 214.61c-6.2 6.3-16.4 6.3-22.6 0-6.26-6.2-6.26-16.4 0-22.6l160-160c6.2-6.26 16.4-6.26 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-160 160zM0 64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v284.1c0 12.7-5.1 25-14.1 34L254.1 497.9c-9 9-21.3 14.1-34 14.1H64c-35.35 0-64-28.7-64-64V64zm352 0c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32v384c0 17.7 14.33 32 32 32h128V368c0-26.5 21.5-48 48-48h112V64zm-.5 288H240c-8.8 0-16 7.2-16 16v111.5c2.8-.7 5.4-2.1 7.4-4.2l115.9-115.9c2.1-2 3.5-4.6 4.2-7.4z" />
  </svg>
);

const SvgSheetPlastic = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSheetPlastic;
