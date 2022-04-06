import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M80 95.1c26.5 0 48-21.5 48-47.1C128 21.5 106.5.9 80 .9S32 21.5 32 47.1c0 27.4 21.5 48 48 48zm272 0H224c-17.6 0-32 14.4-32 32v95.1h-25.4l-33.3-60c-11-21.1-32.8-35.1-56.55-35.1H48c-26.51 0-48 21.49-48 48v102.1c0 18.75 8.25 36.38 22.38 48.62l76 65.13 14.12 92.5c1 5.625 10.12 30.62 36.75 26.25 17.5-2.875 29.25-19.37 26.38-36.75l-14.12-92.5C159 367.4 151.4 353.9 140 344.1l-44-37.7v-78.3l22.96 42.96c5.54 10.44 16.44 16.04 28.24 16.04H352c17.6 0 32-14.4 32-32v-128c0-16.7-14.4-32-32-32zM0 479.9C0 497.65 14.25 511 32 511s32-14.2 32-31.95v-74.54C48 390.89.62 349.88 0 349.38V479.9z" />
  </svg>
);

const SvgPersonCarryBoxSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonCarryBoxSolid;
