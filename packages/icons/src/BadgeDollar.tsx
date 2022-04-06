import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m272.9 161.5-.8.1c6.3.8 22.8 4 28.9 5.6 8.5 2.3 13.6 11 11.4 19.6-2.3 8.5-11.1 13.6-19.6 11.3-4.6-1.2-19.9-4.2-24.8-4.9-14.5-2.3-26.9-.5-35.3 3.3-8.4 3.8-11.9 8.9-12.7 13.6-.8 4.8-.1 7.6.7 9.3.9 1.9 2.6 4 6.1 6.4 7.8 5.3 19.6 8.9 34.9 13.6l.5.1c12.9 4.1 30.9 9.3 43.5 17.6 6.8 5.8 12.9 12.3 16.7 21.1 3.9 8.8 4.7 18.6 2.9 29.1-3.2 18.8-15.6 31.6-31.5 38.4-6.4 2.8-13.5 4.6-20.9 5.5v11.5c0 8.8-7.2 16-16 16s-16-7.2-16-16v-12.2l-.1-.1h-.1c-10.2-1.6-26.7-7.3-37-10.8-2-.7-3.8-1.3-5.2-1.8-8.4-2.7-12.9-12.7-10.1-20.2 2.8-8.4 11.8-12.9 20.2-10.1 2.1.7 3.5.6 6.8 2.3 10.5 3.6 23.2 7.9 30.4 9 15 2.4 27.2 1 35.4-2.5 7.7-3.3 11.5-8.1 12.6-14.4.9-5.5.2-8.8-.7-11-1-2.2-2.8-4.5-6.2-7-7.6-5.5-19.2-9.3-34.4-14.8l-2.2.2c-13.3-4-29.4-8.8-41.4-17-6.8-4.6-13.1-10.7-17.1-19.2-4.1-8.6-5.1-18.2-3.3-28.4 3-17.8 15.7-30.4 31-37.3 6.5-3 13.7-5 21.4-6.2v-11.9c0-8.8 7.2-16 16-16s16 7.2 16 16v12.2zm70.2-115.87c33-5.96 68.4 3.8 93.9 29.35 25.6 25.52 35.3 60.92 29.4 93.92 27.5 18.2 45.6 51 45.6 86.2 0 37-18.1 68.9-45.6 88 5.9 33-3.8 68.4-29.4 93.9-25.5 25.6-60.9 35.3-93.9 29.4-19.1 27.5-51 45.6-87.1 45.6-36.1 0-68.9-18.1-87.1-45.6-33 5.9-68.4-3.8-93.92-29.4-25.55-25.5-35.31-60.9-29.35-93.9C18.08 324 0 292.1 0 255.1c0-35.2 18.08-68 45.63-86.2-5.96-33 3.8-68.4 29.35-93.92 25.52-25.55 60.92-35.31 93.92-29.35C187.1 18.08 219.9 0 255.1 0c37 0 68.9 18.08 88 45.63zM184.4 83.08l-12.7-3.88c-25.4-7.8-54.1-1.63-74.09 18.41C77.57 117.6 71.4 146.3 79.2 171.7l3.88 12.7-11.68 6.2C47.93 203 32 227.7 32 255.1c0 29.2 15.93 53 39.4 66.3l11.68 6.2-3.88 12.7c-7.8 25.4-1.63 54 18.41 74.1 19.99 20 48.69 26.2 74.09 18.4l12.7-3.9 6.2 11.7C203 464.1 227.7 480 256 480c28.3 0 52.1-15.9 65.4-39.4l6.2-11.7 12.7 3.9c25.4 7.8 54 1.6 74.1-18.4 20-20.1 26.2-48.7 18.4-74.1l-3.9-12.7 11.7-6.2c23.5-13.3 39.4-37.1 39.4-66.3 0-27.4-15.9-52.1-39.4-64.5l-11.7-6.2 3.9-12.7c7.8-25.4 1.6-54.1-18.4-74.1-20-20.04-48.7-26.2-74.1-18.4l-12.7 3.88-6.2-11.68c-13.3-23.47-37.1-40.3-65.4-40.3-28.3 0-53 16.83-65.4 40.3l-6.2 11.68z" />
  </svg>
);

const SvgBadgeDollar = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBadgeDollar;
