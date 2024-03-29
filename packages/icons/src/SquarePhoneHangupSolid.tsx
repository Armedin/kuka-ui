import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm3.1 246.2-27.41 43.85c-3.988 6.396-11.99 9.009-19.06 6.248l-54.81-21.92c-6.441-2.596-10.42-9.162-9.721-16.07l3.449-34.61c-36.49-12.46-76.29-12.47-112.8-.003l3.445 34.61C171.8 297.2 167.8 303.8 161.3 306.4l-54.82 21.93c-7.037 2.797-15.11.095-19.07-6.259l-27.4-43.85C56.16 272 57.06 264.1 62.25 258.9c89.18-89.18 234.3-89.2 323.5-.002C390.9 264.1 391.8 272 387.1 278.2z" />
  </svg>
);

const SvgSquarePhoneHangupSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquarePhoneHangupSolid;
