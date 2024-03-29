import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M80 136c0-13.3 10.75-24 24-24 13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.25 0-24-10.7-24-24zM204.1 32c12.7 0 25 5.06 34 14.06L410.7 218.7c25 25 25 65.6 0 90.6L277.3 442.7c-25 25-65.6 25-90.6 0L14.06 270.1C5.057 261.1 0 248.8 0 236.1V80c0-26.51 21.49-48 48-48h156.1zM36.69 247.4 209.4 420.1c12.5 12.5 32.7 12.5 45.2 0l133.5-133.5c12.5-12.5 12.5-32.7 0-45.2L215.4 68.69c-3-3-7-4.69-11.3-4.69H48c-8.84 0-16 7.16-16 16v156.1c0 4.3 1.69 8.3 4.69 11.3zM308.4 36.95c6.1-6.39 16.3-6.62 22.7-.52L472.4 171.5c52.7 50.4 52.7 134.6 0 185L347.8 475.6c-6.4 6.1-16.5 5.8-22.6-.5-6.1-6.4-5.9-16.6.5-22.7l124.6-119c39.5-37.8 39.5-101 0-138.8L308.9 59.57c-6.3-6.11-6.6-16.23-.5-22.62z" />
  </svg>
);

const SvgTags = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTags;
