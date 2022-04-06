import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M607.9 161.8c15.3 8.8 20.7 28.3 11.9 43.6-8.8 15.4-28.3 20.7-43.7 12L312 66.43 47.88 217.4c-15.34 8.7-34.89 3.4-43.658-12-8.769-15.3-3.437-34.8 11.908-43.6L288.2 6.324c14.7-8.432 32.9-8.432 47.6 0L607.9 161.8zM241.8 160h140.4c32.9 0 63.9 21.3 75.3 53.1l28.3 79.3c20.1 8.5 34.2 28.4 34.2 51.6v136c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32v-32H184v32c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32V344c0-23.2 14.1-43.1 34.2-51.6l28.3-79.3c11.4-31.8 41.5-53.1 75.3-53.1zm0 64c-6.7 0-12.8 4.3-15 10.6L207.7 288h208.6l-19.1-53.4c-3.1-6.3-8.3-10.6-15-10.6H241.8zM184 392c13.3 0 24-10.7 24-24s-10.7-24-24-24c-13.2 0-24 10.7-24 24s10.8 24 24 24zm256-48c-13.2 0-24 10.7-24 24s10.8 24 24 24c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
  </svg>
);

const SvgCarGarageSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCarGarageSolid;
