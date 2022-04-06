import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M319.1 169V64h7.996c13.26 0 24-10.75 24-24V24c0-13.26-10.74-24-24-24H119.1c-13.26 0-24 10.74-24 24v16c0 13.25 10.74 24 24 24h7.992v104.1C61.62 202.9 16 271.9 16 352c0 53.75 20.38 102.8 53.99 139.8C81.87 504.9 99.12 512 116.1 512h213.1c18 0 35.5-7.5 47.5-20.88 32.24-35.75 52.24-82.75 53.49-134.5C433.7 276.8 387.2 205.1 319.1 169zm-56.2 162.5c-54.24-27.12-115.9-29-181.7 3.875 10.5-89.75 90.62-117.9 110.9-128.5V64h63.99v143.3C292.5 226.9 367.5 260.1 367.8 352c-23.5 0-59.9 2-104.9-20.5z" />
  </svg>
);

const SvgFlaskRoundPotionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlaskRoundPotionSolid;
