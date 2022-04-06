import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M496 320c-86.73 0-158.6-62.8-173.2-145.4-30.8-4.2-63.9-6.1-99.7-6.5V88.02c0-20.67-24.28-31.47-39.69-18.17l-176 152c-11.09 9.562-11.06 26.75 0 36.31l176 152c15.38 13.3 39.69 2.547 39.69-18.16v-87.9c155.1 2.234 221.9 40.73 176.6 185.8-5.031 16.09 14.41 28.56 28.06 18.62C472.4 476.6 512 415.8 512 354.3c0-12.56-1.17-24.02-2.852-34.99-4.348.39-8.748.69-13.148.69zm0-320c-79.6 0-144 64.38-144 144s64.4 144 144 144 144-64.4 144-144S575.6 0 496 0zm48 160h-54.25c-5.35 0-9.75-4.4-9.75-9.7V80c0-8.84 7.2-16 16-16s16 7.16 16 16v48h32c8.838 0 16 7.162 16 16 0 8.8-7.2 16-16 16z" />
  </svg>
);

const SvgReplyClockSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgReplyClockSolid;
