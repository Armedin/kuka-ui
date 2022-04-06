import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M32 351.1c-17.6 0-32 15.3-32 32v95.99c0 17.6 14.4 31.1 31.99 32l32 .005v-159.1L32 351.1zM480 32.02C480 14.61 465.95 0 448.01 0c-11.74 0-23.03 6.468-28.64 17.69l-167.2 334.3H95.97V512h108.2c24.41 0 46.34-13.56 57.25-35.38l215.2-430.3c2.28-4.61 3.38-9.49 3.38-14.3zM608 416H416c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32v-32c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgHockeyStickPuckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHockeyStickPuckSolid;
