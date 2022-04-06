import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M544 32c17.64 0 32 14.36 32 32v288c0 1.273-.582 2.357-.727 3.592l27.49 21.7C606.1 369.5 608 360.1 608 352V64c0-35.35-28.65-64-64-64H124.9l40.53 32H544zm-80 448h-50.49l-18.96-63.22L353 384H96c-17.64 0-32-14.36-32-32V155.8l-32-25.2V352c0 35.35 28.65 64 64 64h149.7l-19.2 64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.836 0 16-7.164 16-16s-7.2-16-16-16zm-204.1 0 19.2-64h81.79l19.2 64H259.9zm374 3.4L25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4z" />
  </svg>
);

const SvgDisplaySlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDisplaySlash;
