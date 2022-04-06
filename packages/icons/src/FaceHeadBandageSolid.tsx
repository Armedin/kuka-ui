import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M368.1 12.79c15.8-3.207 31-5.832 48.1-7.85 7.1-.887 14.3.649 20.5 4.362 29.2 17.628 55 40.278 76.2 66.758a32.09 32.09 0 0 1 6.8 16.79c5.6 2.62 9.4 6.81 13.6 12.05 15.8 25.7 26.8 54 34.9 84.1 2.6 11.1-.9 22.8-10.1 30.7-3.8 4.4-9.5 7.2-15.6 7.4 1 10.1 1.5 19.4 1.5 28.9 0 141.4-114.6 256-256 256-102.1 0-190.24-59.8-231.34-146.2-5.07 2-10.67 2.7-16.29 2-12.1-1.7-22.18-10.1-26-21.7C5.037 317.7 0 287.4 0 256c0-3.4.06-6.8.178-10.2.251-7.2 2.921-14.1 7.578-19.6 2.414-2.8 4.854-5.7 7.324-8.5-6.925-8.6-9.68-18.5-7.241-28.7 7.181-30.1 19.101-58.4 34.911-84.1a32.103 32.103 0 0 1 19.74-14.26 977.98 977.98 0 0 1 37.32-8.2C146.6 31.75 213.6 0 288 0c27.1 0 54.9 4.491 80.1 12.79zm-225 94.41c-.8.2-1.6.3-2.4.4-23.9 3.8-47.48 8.6-70.72 14.2-7.43 12-13.89 24.7-19.28 38-4.03 9.9-7.46 19.3-10.24 30.7-.52 1.9-1.02 3.9-1.49 5.9 11.9-3.5 23.91-6.9 35.13-9.9 7.82-1.8 14.77-3.5 21.75-5.1C141.6 171 188.8 164.3 237 161.5c16.9-1 33.9-2.4 50.1-2.4 10.1 0 19.2 1 28.4 1.3.2 0-.4 0 .7.1 63.6 2 125.4 10.9 184.8 26 12.1 3 24.1 6.4 36 9.9-3-12.6-6.9-24.8-11.7-36.6-6.2-13.1-11.7-25.7-19-37.6-.1-.1-.2-.3-.3-.4-30.6-7.4-61.8-13.3-93.4-17.5-2.2-1.2-4.4-.6-7.5-.9-37.8-4.87-78-8.3-118-8.3-22.2 0-45.2 1.75-67.9 3.41-25.6 1.89-51 4.79-76.1 8.69zM50.33 226.4c-6.21 6.7-12.27 13.5-18.17 20.5-.11 3-.16 5.2-.16 9.1 0 13.2.99 26.1 2.91 38.7 2.16 14.2 5.48 28 9.86 41.4 7.64-11.4 15.71-22.4 24.16-33.1 31.06-39.3 67.47-74.2 107.17-103.7-42.5 5.8-84.81 14.9-125.77 27.1zm158.07 44.7c17.6 0 32-13.4 32-32 0-13.2-9.2-25.2-21.9-29.5-14.6 9.5-28.6 19.6-42.1 30.4 0 17.7 14.3 31.1 32 31.1zM458.7 65.2a254.075 254.075 0 0 0-38.6-28.5c-41.2 5.13-81.2 14.4-119.5 27.38 60 .77 118.7 7.05 175.6 18.36-5.6-6.02-11.4-11.77-17.5-17.24zm-85.5 332.3c6.6 6 16.7 4.6 22.6-1 6-6.6 5.5-16.7-1-22.7-21.6-19.5-54.6-37.8-98.8-37.8-16.4 0-31.4 2.5-44.8 6.8-8.4 2.6-13.1 11.6-10.5 20 2.7 8.4 11.7 13.1 20.1 10.5 10.4-3.3 22.1-5.3 35.2-5.3 34.8 0 60.4 14.2 77.2 29.5zm-4.8-126.4c17.6 0 32-13.4 32-32 0-16.8-14.4-32-32-32-17.7 0-32 15.2-32 32 0 18.6 14.3 32 32 32z" />
  </svg>
);

const SvgFaceHeadBandageSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceHeadBandageSolid;
