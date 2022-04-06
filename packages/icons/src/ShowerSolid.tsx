import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 384c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32c0-17.7-14.3-32-32-32zm128-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32c0-17.7-14.3-32-32-32zm64-64c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32c0-17.7-14.3-32-32-32zM288 320c0-17.67-14.33-32-32-32s-32 14.33-32 32 14.33 32 32 32 32-14.3 32-32zm32-96c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32c0-17.7-14.3-32-32-32zm64 0c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32c0 17.7 14.3 32 32 32zm-32 96c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32c0-17.7-14.3-32-32-32zm-4.7-228.69L335.99 80c-6.248-6.248-16.38-6.248-22.63 0l-6.631 6.631c-35.15-26.29-81.81-29.16-119.6-8.779L170.5 61.25c-38.3-38.3-106.85-42.92-148.52 9.91C7.027 90.11 0 114.3 0 138.4V464c0 8.8 7.164 16 16 16h32c8.84 0 16-7.2 16-16V131.9c0-19.78 16.09-35.87 35.88-35.87 9.438 0 18.69 3.828 25.38 10.5l16.61 16.61C121.5 160.9 124.3 207.6 150.6 242.7l-6.6 6.7c-6.248 6.248-6.248 16.38 0 22.63l11.31 11.31c6.248 6.25 16.38 6.25 22.63 0l169.4-169.4c6.26-6.24 6.26-16.38-.04-22.63z" />
  </svg>
);

const SvgShowerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShowerSolid;