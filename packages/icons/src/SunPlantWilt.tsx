import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M192.4 160.9c0 17.6-14.3 31.9-31.9 31.9-17.7 0-32-14.3-32-31.9 0-17.7 14.3-32 32-32 17.6 0 31.9 14.3 31.9 32zM159.9 0c5.8 0 11.2 3.226 14 8.402l27.5 50.968 54.7-16.62c6.5-1.69 12.6-.14 16.8 4.02 4.2 4.16 5.7 10.27 4 15.91l-16.6 55.42 51 27.5c5.2 2.8 8.4 8.2 8.4 14.1s-3.2 10.4-8.4 14.1l-51 27.4 16.6 55.5c1.7 5.6.2 11.7-4 15.9-4.2 4.1-10.3 5.7-16.8 4l-54.7-17.5-27.5 51.8c-2.8 5.2-8.2 8.4-14 8.4-6.8 0-11.3-3.2-14.1-8.4l-27.5-51.8-55.58 17.5c-5.64 1.7-11.74.1-15.9-4-4.16-4.2-5.7-10.3-4.01-15.9l16.63-55.5-51.022-27.4C3.233 170.1 0 165.6 0 159.7s3.233-11.3 8.418-14.1l51.022-27.5-16.63-55.42a16.002 16.002 0 0 1 4.01-15.91 15.99 15.99 0 0 1 15.9-4.02l55.58 16.62 27.5-50.968C148.6 3.226 153.1 0 159.9 0zm0 49.69-19.7 36.34c-3.6 6.68-11.4 9.91-18.6 7.73L81.99 81.92l11.85 39.48c2.19 7.3-1.05 15.1-7.74 18.7l-36.34 19.6 36.34 19.5c6.69 3.6 9.93 11.4 7.74 18.7l-11.85 39.5 39.61-11.8c7.2-2.2 15 1 18.6 7.7l19.7 36.3 19.6-36.3c3.6-6.7 11.4-9.9 18.6-7.7l39.6 11.8-11.8-39.5c-2.2-7.3 1-15.1 7.7-18.7l35.5-19.5-35.5-19.6c-6.7-3.6-9.9-11.4-7.7-18.7l11.8-39.48-39.6 11.84c-7.2 2.18-15-1.05-18.6-7.73l-19.6-36.34zM496.2 480.1H624c8.9 0 16 7.1 16 16 0 8.8-7.1 16-16 16H16.62c-8.832 0-15.995-7.2-15.995-16 0-8.9 7.163-16 15.995-16H464.2V264.7c0-22.1-17.9-40-40-40-22 0-39.9 17.9-39.9 40v9.6c11.4 2.5 20.8 7.9 29.9 16.2 12 12.1 18 28.9 18 48 0 14.3-7.4 30.7-16.5 45.2-9.4 15.1-22.3 30.8-36.5 44.2-6.1 5.8-15.7 5.8-21.9 0-14.2-13.4-27.1-29-36.5-44.1-9-14.5-16.5-30.9-16.5-45.3 0-19.1 6.1-35.9 18-48 8.3-8.3 18.6-13.7 30-16.2v-9.6c0-40.6 32.2-72 71.9-72 13.9 0 28.5 4.5 40 12.1v-43.9c0-35.3 28.6-63.93 63.9-63.93s64 28.63 64 63.93v49.5c11.4 2.5 21.7 7.9 29 16.2 12.8 12.1 18.9 28.9 18.9 48 0 13.5-7.4 30.8-16.5 45.2-9.4 14.3-22.3 30.9-36.5 44.3-6.1 5.8-15.8 5.8-21.9 0-14.2-13.4-27.1-29-36.5-44.2-9-14.4-16.5-30.8-16.5-45.3 0-19.1 6.1-35.9 18-48 8.3-8.3 18.6-13.7 30-16.2v-49.5c0-17.6-14.3-32.8-32-32.8-17.6 0-31.9 15.2-31.9 32.8v319.2zM368.3 304.6c-10.6 0-18.2 3.3-23.2 7.5-5 5.9-8.8 14.1-8.8 26.4 0 5 3.3 15 11.6 28.3 5.5 8.8 12.5 18 20.4 26.6 7.8-8.7 14.8-17.9 20.3-26.6 8.3-13.4 11.6-23.4 11.6-28.3 0-12.3-3.8-20.5-8.7-26.4-5-4.2-12.7-7.5-23.2-7.5zm228.1-1.7c8.3-13.4 11.6-23.4 11.6-28.3 0-12.3-3.8-20.4-8.8-25.5-4.9-5-12.6-8.4-23.1-8.4-10.6 0-18.2 3.4-23.2 8.4-5 5.1-8.8 13.2-8.8 25.5 0 5.1 3.3 15.1 11.6 27.5 5.5 9.6 12.5 18.8 20.4 27.5 7.8-8.7 14.8-17.9 20.3-26.7z" />
  </svg>
);

const SvgSunPlantWilt = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSunPlantWilt;
