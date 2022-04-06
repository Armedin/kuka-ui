import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-84.9-284.8-44.19-10.25c-17.52-3.984-35.44 5-42.58 21.52L223.8 190.3c-6.562 15.34-2.312 32.78 10.55 43.41l8.266 6.781C233.5 253.9 221.9 265.5 208.4 274.7l-6.7-8.2c-10.3-12.6-28.1-17.1-43.3-10.7l-47.9 20.5c-.016.016.031-.016 0 0-16.47 7.172-25.55 25.06-21.54 42.56l10.2 44.28C103.1 380.1 118 392 135.5 392 259.3 392 360 291.3 360 167.5c0-18.4-11.9-32.4-28.9-36.3zM135.5 360c-2.5 0-4.562-1.625-5.125-4.062L120.1 311.7c-.563-2.438.719-4.969 3.047-6l47.66-20.44c2.093-.86 4.693-.26 6.093 1.44l15.58 19.02c4.859 5.906 13.25 7.594 20.03 3.906 27.59-15.03 50.13-37.55 65.13-65.13 3.672-6.75 2.031-15.16-3.906-20.03l-18.98-15.56c-1.844-1.516-2.406-3.875-1.453-6.109l20.44-47.7C274.5 153.2 276.5 152 278.5 152c.375 0 .75.047 1.125.14l44.25 10.27C326.4 162.1 328 165 328 167.5 328 273.6 241.6 360 135.5 360z" />
  </svg>
);

const SvgSquarePhoneFlip = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquarePhoneFlip;
