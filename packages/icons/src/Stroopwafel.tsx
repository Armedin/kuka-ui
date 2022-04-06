import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16zm0 448c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm150.6-208 20.69-20.69c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L384 233.4l-42.16-42.16 35.91-35.91c6.25-6.23 6.25-16.43.05-22.63s-16.38-6.25-22.62 0l-35.91 35.91L278.6 128l20.69-20.69c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L256 105.4l-20.7-20.71c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L233.4 128 192 169.4l-36.7-36.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L169.4 192 128 233.4l-20.7-20.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L105.4 256l-20.71 20.7c-6.25 6.25-6.25 16.38 0 22.62C87.81 302.4 91.91 304 96 304s8.188-1.562 11.31-4.688L128 278.6l40.59 40.59-35.91 35.91c-6.25 6.25-6.25 16.38 0 22.62 3.12 3.18 7.22 4.68 11.32 4.68s8.188-1.562 11.31-4.688l35.91-35.91L233.4 384l-20.69 20.69c-6.25 6.25-6.25 16.38 0 22.62C215.8 430.4 219.9 432 224 432s8.188-1.562 11.31-4.688L256 406.6l20.69 20.69C279.8 430.4 283.9 432 288 432s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L278.6 384l41.4-41.4 35.13 35.13c3.125 3.125 7.219 4.688 11.31 4.688s8.188-1.562 11.31-4.688c6.25-6.23 6.25-16.33.05-22.63L342.6 320l41.4-41.4 20.69 20.69C407.8 302.4 411.9 304 416 304s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L406.6 256zM256 150.6l40.59 40.59-41.39 41.41-40.6-40.6 41.4-41.4zM150.6 256l41.4-41.4 40.59 40.59-41.39 41.41-40.6-40.6zM256 361.4l-42.2-42.2 41.38-41.38L297.4 320 256 361.4zm64-64-42.16-42.16 41.38-41.38L361.4 256 320 297.4z" />
  </svg>
);

const SvgStroopwafel = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStroopwafel;
