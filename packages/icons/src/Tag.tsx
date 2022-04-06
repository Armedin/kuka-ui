import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M88 144c0-13.3 10.75-24 24-24 13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.25 0-24-10.7-24-24zM0 80c0-26.51 21.49-48 48-48h149.5c17 0 33.2 6.74 45.2 18.75l176 175.95c25 25 25 65.6 0 90.6L285.3 450.7c-25 25-65.6 25-90.6 0l-175.95-176C6.743 262.7 0 246.5 0 229.5V80zm41.37 172.1 176.03 176c12.5 12.5 32.7 12.5 45.2 0l133.5-133.5c12.5-12.5 12.5-32.7 0-45.2l-176-176.03c-6-6-15-9.37-22.6-9.37H48c-8.84 0-16 7.16-16 16v149.5c0 7.6 3.37 16.6 9.37 22.6zm0 0-22.62 22.6z" />
  </svg>
);

const SvgTag = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTag;
