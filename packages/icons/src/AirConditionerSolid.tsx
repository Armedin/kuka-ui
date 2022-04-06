import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M528 0H48C21.6 0 0 21.6 0 48v128c0 26.4 21.6 48 48 48h480c26.4 0 48-21.6 48-48V48c0-26.4-21.6-48-48-48zm-16 160H64v-32h448v32zM208 424c0 22.06-17.94 40-40 40s-40-17.9-40-40c0-16.38 9.812-30.94 25.02-37.09 12.28-4.969 18.2-18.97 13.23-31.25-4.984-12.28-18.92-18.16-31.27-13.25C101.6 355.9 80 387.1 80 424c0 48.53 39.47 88 88 88s88-39.47 88-88V256h-48v168zm233-113.6c-12.34-4.906-26.28.969-31.27 13.25-4.969 12.28.953 26.28 13.23 31.25C438.2 361.1 448 375.6 448 392c0 22.06-17.94 40-40 40s-40-17.94-40-40V256h-48v136c0 48.53 39.47 88 88 88s88-39.47 88-88c0-36.9-21.6-68.1-55-81.6z" />
  </svg>
);

const SvgAirConditionerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAirConditionerSolid;
