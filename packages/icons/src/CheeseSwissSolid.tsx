import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M368 336c-26.5 0-48-21.5-48-47.1L0 288v159.1C0 465.6 14.38 480 32 480h448c17.62 0 32-14.38 32-31.1V288l-96-.005C416 314.5 394.5 336 368 336zm-192 96c-26.5 0-48-21.5-48-47.1s21.5-47.1 48-47.1 48 19.7 48 46.2-21.5 48-48 48zM299.9 32.01c-7.75-.25-15.25 2.25-21.12 6.999L217 87.01c12.62 20.87 7.625 47.75-11.5 62.75-19.3 15.04-46.6 13.14-63.6-4.26L0 255.1l512-.012C512 136.1 417.1 38.26 299.9 32.01z" />
  </svg>
);

const SvgCheeseSwissSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCheeseSwissSolid;
