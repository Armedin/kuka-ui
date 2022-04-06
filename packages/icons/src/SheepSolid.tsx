import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m384 135.8-14.5 6.3c-12.2 5.2-26.3-.5-31.6-12.6-5.2-12.2.5-26.3 12.6-31.56l47.9-20.5C415.3 50.16 445.5 32 480 32c34.5 0 64.7 18.16 81.6 45.44l47.9 20.5c12.1 5.26 17.8 19.36 12.6 31.56-5.3 12.1-19.4 17.8-31.6 12.6l-14.5-6.3V208c0 44.2-35.8 80-80 80h-32c-44.2 0-80-35.8-80-80v-72.2zm80 24.2c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm64-32c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-176 80c0 61.9 50.1 112 112 112h15.5c.3 2.6.5 5.3.5 8 0 35.3-28.7 64-64 64-.5 0-1.9-.9-1.5-.9l-17.6 94.8c-2.8 15.1-16.1 26.1-31.5 26.1H336c-17.7 0-32.9-14.3-32.9-32v-53.7c-10.8 13.3-28 21.7-48 21.7-18.2 0-35.4-8.4-48-21.7V480c0 17.7-13.4 32-32 32h-28.5c-15.4 0-28.7-11-31.5-26.1l-17.6-94.8c-1.4 0-1 .9-1.5.9-35.35 0-64-28.7-64-64 0-5.3.66-10.5 1.89-15.5C13.72 301.7 0 280.5 0 256s13.72-45.7 33.89-56.5c-1.23-5-1.89-10.2-1.89-15.5 0-35.3 28.65-64 64-64 3.34 0 6.6.3 9.8.8C112.7 92.77 137.9 72 168 72c15 0 28.9 5.19 39.8 13.88C219.5 72.47 236.8 64 256 64c22.9 0 43 12.04 54.3 30.15-7.4 14.35-8.7 31.85-1.8 47.95 8 18.6 24.8 30.6 43.5 33.3V208z" />
  </svg>
);

const SvgSheepSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSheepSolid;