import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96h-64V48c0-26.47-21.5-48-48-48H176c-26.5 0-48 21.53-48 48v48H64c-35.35 0-64 28.7-64 64v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160c0-35.3-28.7-64-64-64zM160 48c0-8.83 7.2-16 16-16h160c8.8 0 16 7.17 16 16v48H160V48zm320 368c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V160c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32v256zM379.3 276.7l-79.98-79.98c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L329.4 272H144c-8.8 0-16 7.2-16 16s7.156 16 16 16h185.4l-52.69 52.69c-6.25 6.25-6.25 16.38 0 22.62C279.8 382.4 283.9 384 288 384s8.188-1.562 11.31-4.688l79.98-79.98a16.007 16.007 0 0 0 3.477-5.223 15.998 15.998 0 0 0 0-12.22C381.1 279.9 380.8 278.1 379.3 276.7z" />
  </svg>
);

const SvgBriefcaseArrowRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBriefcaseArrowRight;
