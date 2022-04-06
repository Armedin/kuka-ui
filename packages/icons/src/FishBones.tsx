import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M432.2 96c-8.416 0-16.2 6.876-16.2 16.23v127.8h-48V160.2c0-8.823-7.157-15.96-16-15.96-8.844 0-16 7.139-16 15.96v79.81h-64V160.2c0-8.823-7.157-15.96-16-15.96s-16 7.16-16 15.96v79.81h-64V160.2c0-8.823-7.157-15.96-16-15.96-8.844 0-16 7.139-16 15.96v79.81H56.02L31.19 128.1l37.97 34.85c3.196 2.934 7.006 4.249 10.74 4.249 8.246 0 16.11-6.424 16.11-16a15.95 15.95 0 0 0-5.168-11.75L52.66 104.4c-5.99-5.31-13.34-8.02-20.76-8.02-16.75 0-31.83 13.78-31.83 32.76 0 5.299-1.477-3.092 26.74 126.9C-1.52 386.44.01 377.84.01 382.94c0 18.84 15.2 32.69 31.82 32.69 7.441 0 14.84-2.741 20.95-8.116l38.06-34.97a15.947 15.947 0 0 0 5.162-11.75c0-9.598-7.898-16.08-16.17-16.08-3.708 0-7.491 1.304-10.67 4.216l-37.23 34.11 24.14-111.1H144v79.81c0 8.823 7.157 15.96 16 15.96 8.844 0 16-7.139 16-15.96V271.1h64v79.81c0 8.823 7.157 15.96 16 15.96s16-7.139 16-15.96V271.1h64v79.81c0 8.823 7.157 15.96 16 15.96 8.844 0 16-7.139 16-15.96V271.1h48v127.8c0 10.2 7.8 17.1 16.2 17.1C457.8 416 576 309.4 576 256c0-53.6-118.4-160-143.8-160zM448 371.3V140.7c58.16 41.65 96.01 99.83 96.01 115.3S506.2 329.7 448 371.3z" />
  </svg>
);

const SvgFishBones = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFishBones;
