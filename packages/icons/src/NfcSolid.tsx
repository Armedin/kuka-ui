import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm0 352c0 17.64-14.36 32-32 32H96c-17.64 0-32-14.36-32-32V128c0-17.64 14.36-32 32-32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H96v256h256V128H240v82.94c18.6 6.611 32 24.19 32 45.06 0 26.51-21.49 48-48 48s-48-21.5-48-48c0-20.87 13.4-38.45 32-45.06V112c0-8.8 7.2-16 16-16h128c17.64 0 32 14.36 32 32v256z" />
  </svg>
);

const SvgNfcSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNfcSolid;
