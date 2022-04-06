import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 416V96c0-35.34-28.65-64-64-64H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.3 0 64-28.7 64-64zm-32 0c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zM315.3 187.3c6.25-6.25 6.25-16.38 0-22.62-3.1-3.08-7.2-4.68-11.3-4.68s-8.188 1.562-11.31 4.688L160 297.4V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v127.6c0 8.812 7.141 15.97 15.95 16l128 .375C280.8 352 287.1 344.9 288 336c.031-8.812-7.109-16-15.95-16.03l-89.15-.27 132.4-132.4z" />
  </svg>
);

const SvgSquareArrowDownLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowDownLeft;
