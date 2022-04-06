import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 368V48c0-26.51-21.5-48-48-48H80C35.82 0 0 35.82 0 80v368c0 35.34 28.65 64 64 64h368c8.844 0 16-7.156 16-16s-7.2-16-16-16h-16v-66.95c18.6-6.65 32-24.25 32-45.05zm-64 112H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320v64zm16-96H64c-11.71 0-22.55 3.391-32 8.898V80c0-26.51 21.49-48 48-48h320c8.8 0 16 7.16 16 16v320c0 8.8-7.2 16-16 16zm-80-224.9h-48v-48c0-8.836-7.164-16-16-16l-32 .9c-8.8 0-16 7.2-16 15.1V160h-48c-8.8 0-16 7.2-16 15.1V208c0 8.836 7.164 15.1 16 15.1l48-.002v48C208 280.8 215.2 288 224 288l32-.003c8.836 0 16-7.163 16-15.1v-48l48-.002c8.836 0 16-7.16 16-15.1V175.1c0-7.9-7.2-16-16-16z" />
  </svg>
);

const SvgBookMedical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookMedical;
