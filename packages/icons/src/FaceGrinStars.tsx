import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M379.8 304.7c12.3-3.6 24.2 7.1 19.1 18.8-24.1 54.5-79 92.6-142.9 92.6-63.8 0-118.7-38.1-142.8-92.6-5.1-11.7 6.8-22.4 19.1-18.8 37.3 11.2 79.3 17.4 123.7 17.4 44.5 0 86.5-6.2 123.8-17.4zm-34.7 41.1c-27.7 5.5-57.9 8.3-89.1 8.3-31.1 0-61.3-2.8-89.9-8.3 22.6 23.6 54.5 38.3 89.9 38.3 35.5 0 67.4-14.7 89.1-38.3zM159.1 104c7.1 0 12.7 3.5 15.3 9.1l19.3 40.5 44.5 5.8c6.1.8 11.2 5.1 13.1 10.9 1.9 5.9.3 12.3-4.2 16.6l-32.5 30.8 8.2 44.1c1.1 6.1-1.4 12.2-6.4 15.9-5 3.6-11.6 4-17 1.1l-40.3-21.4-38.5 21.4c-5.4 2.9-12 2.5-17-1.1-5.02-3.7-7.48-9.8-6.36-15.9l8.16-44.1-32.5-30.8c-4.47-4.3-6.11-10.7-4.2-16.6 1.9-5.8 7.01-10.1 13.12-10.9l44.48-5.8 19.3-40.5c2.6-5.6 8.2-9.1 13.5-9.1zm0 53.2-7.7 18c-2.3 4.9-7 8.2-12.4 8.9l-19.8 2.7 14.5 13.7c4 3.7 5.7 9.2 4.8 14.5l-3.7 19.7 17.6-9.6c4.7-2.5 10.5-2.5 15.2 0l17.6 9.6-3.7-19.7c-.9-5.3.8-10.8 4.8-14.5l14.4-13.7-19.8-2.7c-5.3-.7-10-4-12.3-8.9l-9.5-18zM352 104c6.2 0 11.8 3.5 14.4 9.1l19.3 40.5 44.5 5.8c6.1.8 11.2 5.1 13.1 10.9 1.9 5.9.3 12.3-4.2 16.6l-32.5 30.8 8.2 44.1c1.1 6.1-1.4 12.2-6.4 15.9-5 3.6-11.6 4-17 1.1L352 257.4l-39.4 21.4c-5.4 2.9-12 2.5-17-1.1-5-3.7-7.5-9.8-6.4-15.9l8.2-44.1-32.5-30.8c-4.5-4.3-6.1-10.7-4.2-16.6 1.9-5.8 7-10.1 13.1-10.9l44.5-5.8 19.3-40.5c2.6-5.6 8.2-9.1 14.4-9.1zm0 53.2-8.6 18c-2.3 4.9-7 8.2-12.4 8.9l-19.7 2.7 14.4 13.7c4 3.7 5.7 9.2 4.8 14.5l-3.7 19.7 17.6-9.6c4.7-2.5 10.5-2.5 15.2 0l17.6 9.6-3.7-19.7c-.9-5.3.8-10.8 4.8-14.5l14.5-13.7-20.7-2.7c-4.5-.7-9.2-4-11.5-8.9l-8.6-18zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224z" />
  </svg>
);

const SvgFaceGrinStars = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceGrinStars;
