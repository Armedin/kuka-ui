import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M534.7 192C507.2 99.47 421.5 32 320 32c-101.5 0-187.2 67.47-214.7 160H72.07C100.5 81.59 200.7 0 320 0c119.3 0 219.5 81.59 247.9 192h-33.2zm-270.3-16c0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24 0-8.1 4-15.3 10.1-19.6l-39.6-13.2c-8.3-2.8-12.9-11.9-10.1-20.3 2.8-8.3 11.9-12.9 20.3-10.1l96 32c8.3 2.8 12 11.9 10.1 20.3-2.8 8.3-11.9 12-20.3 10.1l-19.7-6.6c-.1 2.3 1.2 4.8 1.2 7.4zm112 0c0-2.7.4-5.3 1.2-7.7l-20.5 6.9c-8.4 1.9-17.5-1.8-20.3-10.1-2.8-8.4 1.8-17.5 10.1-20.3l96-32c8.4-2.8 17.5 1.8 20.3 10.1 1.9 8.4-1.8 17.5-10.1 20.3l-40 13c7.1 4.3 11.3 11.6 11.3 19.8 0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24zm7.6 176v32h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-32v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-32h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h32v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16zm-64 32h32v-32h-32v32zm250.4-84.1c6.7 5.7 7.5 15.8 1.7 22.5l-96 112c-5.7 6.7-15.8 7.5-22.5 1.7-6.7-5.7-7.5-15.8-1.7-22.5l96-112c5.7-6.7 15.8-7.5 22.5-1.7zM496 320c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm32 96c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zM208 288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16zm24 136c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zM128 305.8c4.6.8 8.7 1.7 12.1 2.6 8.6 2.3 13.6 11.1 11.4 19.6-2.3 8.6-11.1 13.6-19.6 11.4-8-2.1-18.5-3.9-26.8-3-4.1.5-6.34 1.5-7.4 2.2-.6.4-1.19 1-1.52 2.9-1.08 1-.15 1.6-.11 1.8.11.1.48.6 1.49 1.2 3.64 2.5 9.64 4.4 19.24 7.3l.7.2c7.9 2.5 19.1 5.8 27.6 11.1 4.7 4.3 9.3 9.1 12.1 15.6 2.9 6.7 3.4 13.8 2.2 21.2-2 11.5-7.9 20.4-17 25.9-4.9 3-10.2 4.6-15.3 5.4v.8c0 8.8-7.2 16-16 16s-15.99-7.2-15.99-16v-3c-8.09-1.8-15.29-4.2-20.17-5.8-8.38-2.8-12.91-11.9-10.12-20.3 2.79-8.3 11.86-12.9 20.24-10.1 9.46 2.3 21.84 7 32.04 7.1 4.9-.8 7.6-.8 8.7-1.5h.1c.4-.3 1.4-.8 1.9-4 .2-1.2.2-1.9-.7-2.3.8-.4.8-.6.7-.6 0-.1-.2-.7-1.6-1.6-3.5-2.6-9.3-4.6-18.7-7.4l-2.4-.5c-6.85-2.3-17.44-5.5-25.52-11-4.69-3.2-9.42-7.7-12.45-14.1-3.09-6.5-3.74-13.6-2.49-20.9 1.76-10.2 6.99-18.1 14.51-23.5 5.29-3.7 11.21-5.8 15.95-7V304c0-8.8 8.1-16 16-16 9.7 0 16 7.2 16 16l.9 1.8zm-31.93 37.5.03.1s-.01 0 0 0c0 0-.01-.1-.03-.1zM0 288c0-35.3 28.65-64 64-64h512c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V288zm32 160c0 17.7 14.33 32 32 32h512c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H64c-17.67 0-32 14.3-32 32v160z" />
  </svg>
);

const SvgFaceSwear = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceSwear;
