import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M191.5.013C89.47.263 16 82.1 16 175.1c0 44.38 16.52 84.89 43.52 115.8 16.62 18.88 42.36 58.23 52.24 91.48 0 .25.115.51.115.76l160.3.001c0-.25.083-.511.083-.761 9.875-33.25 35.61-72.61 52.24-91.48C351.5 260.9 368 220.4 368 175.1 368 78.62 288.8-.237 191.5.013zM168 88c0-13.25 10.8-24 24-24s24 10.75 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V88zm24 232c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.3 32-32 32zm-79.8 134.4c.125 6.25 1.855 12.43 5.355 17.68l17.08 25.69C140.6 506.6 150.6 512 161.2 512h61.67a31.92 31.92 0 0 0 26.61-14.27l17.02-25.69c3.5-5.25 5.419-11.44 5.419-17.69L272 415.1H112l.2 39.3z" />
  </svg>
);

const SvgLightbulbExclamationSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLightbulbExclamationSolid;
