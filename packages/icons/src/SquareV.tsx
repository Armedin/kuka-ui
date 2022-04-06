import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-72.8-286.3c-7.938-3.969-17.5-.719-21.47 7.156L224 332.2l-97.7-195.4c-4-8.7-13.5-11.1-21.5-7.1-7.906 3.969-11.11 13.56-7.156 21.47l112 224C212.4 380.6 217.9 384 224 384s11.59-3.438 14.31-8.844l112-224c3.99-7.856.79-17.456-7.11-21.456z" />
  </svg>
);

const SvgSquareV = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareV;
