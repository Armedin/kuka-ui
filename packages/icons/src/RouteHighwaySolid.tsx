import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M245.1 7.371c37.6 22.519 84 24.299 123.1 4.729l1.5-.72c15.2-7.597 33.7-2.002 42.1 12.74l32 56c5.3 9.29 5.6 20.58.8 30.18l-16.2 32.5c-8.2 16.3-12.4 34.2-12.4 52.4 0 15 2.8 28.9 8.4 43.6l14.3 35.7c6.1 15.4 9.3 31.9 9.3 48.5 0 49.5-28 94.8-72.2 116.9l-137.5 68.7c-9 4.5-19.6 4.5-28.6 0L72.24 439.9C27.97 417.8 0 372.5 0 323c0-16.6 3.172-33.1 9.348-48.5l14.262-35.7c5.54-14.7 8.39-28.6 8.39-43.6 0-18.2-4.24-36.1-12.38-52.4L3.378 110.3c-4.785-9.6-4.47-20.89.838-30.18l32.004-56c8.42-14.742 26.9-20.337 42.09-12.74l1.44.72C118.9 31.67 165.3 29.89 202.9 7.371l4.6-2.811c10.2-6.08 22.8-6.08 33 0l4.6 2.811zM95.97 192c.02 1.1.03 2.2.03 3.2 0 23.1-4.4 46-12.97 67.4l-14.26 35.6A66.9 66.9 0 0 0 64 323c0 25.3 14.27 48.4 36.9 59.7L224 444.2l123.1-61.5c22.6-11.3 36.9-34.4 36.9-59.7 0-8.5-1.6-16.9-4.8-24.8l-15.1-35.6c-7.7-21.4-12.1-44.3-12.1-67.4V192H95.97z" />
  </svg>
);

const SvgRouteHighwaySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRouteHighwaySolid;
