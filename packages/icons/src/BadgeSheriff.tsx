import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M420.3 283.7c-.748 0-1.5.018-2.256.049L401.3 256l16.67-27.78c.756.033 1.508.049 2.256.049 34.11 0 61.87-27.75 61.87-61.87s-27.75-61.87-61.87-61.87c-21.78 0-41.71 11.61-52.76 29.87h-39.13l-22.08-36.79c7.451-10.39 11.56-22.86 11.56-35.74C317.9 27.75 290.1 0 256 0s-61.9 27.75-61.9 61.87c0 12.88 4.109 25.35 11.56 35.74L183.6 134.4h-39.1c-11.1-18.3-31-29.9-52.77-29.9-34.12 0-61.87 27.75-61.87 61.87s27.75 61.87 61.87 61.87c.746 0 1.498-.016 2.254-.049L110.7 256l-16.71 27.8c-.76 0-1.51-.1-2.26-.1-34.12 0-61.87 27.75-61.87 61.87s27.75 61.87 61.87 61.87c21.78 0 41.71-11.62 52.76-29.87h39.13l22.08 36.79c-7.453 10.39-11.56 22.86-11.56 35.74C194.1 484.2 221.9 512 256 512s61.87-27.75 61.87-61.87c0-12.88-4.107-25.35-11.56-35.74l22.08-36.79h39.13c11.05 18.25 30.98 29.87 52.76 29.87 34.11 0 61.87-27.75 61.87-61.87s-27.75-61.9-61.85-61.9zm0 91.8c-10.26 0-19.99-5.535-25.38-14.44l-9.34-15.42H310.3L268.09 416l12.25 17.09c3.639 5.074 5.562 10.98 5.562 17.09C285.9 466.6 272.5 480 256 480s-29.87-13.4-29.87-29.87c0-6.104 1.924-12.01 5.564-17.09l12.25-17.09-42.22-70.36h-75.28l-9.34 15.43c-5.393 8.908-15.12 14.44-25.38 14.44-16.47 0-29.87-13.4-29.87-29.87 0-16.46 13.38-29.85 30.77-29.85l19.02.78L147.1 256l-25.7-44.2-10.6-16.4-19.07.9c-16.47 0-29.87-13.4-29.87-29.87s13.4-29.87 29.87-29.87c10.26 0 19.99 5.533 25.38 14.44l9.34 15.43h75.28l42.22-70.36-12.25-17.11c-3.6-5.08-5.6-10.99-5.6-17.09C226.1 45.4 239.5 32 256 32s29.87 13.4 29.87 29.87c0 6.105-1.924 12.02-5.562 17.09l-12.25 17.08 42.21 70.36h75.28l9.352-16.3c5.391-8.906 15.12-14.44 25.38-14.44 16.47 0 29.87 13.4 29.87 29.87 0 16.46-13.38 29.85-30.68 29.85l-19.08-.84L364 256l26.55 44.25 10.72 16.27 18.98-.78c16.47 0 29.87 13.4 29.87 29.87S436.7 375.5 420.3 375.5zM256 184c-39.7 0-72 32.3-72 72s32.3 72 72 72 72-32.3 72-72-32.3-72-72-72zm0 112c-22.1 0-40-17.9-40-40 0-22.06 17.94-40 40-40s40 17.9 40 40-17.9 40-40 40z" />
  </svg>
);

const SvgBadgeSheriff = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBadgeSheriff;