import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M325.3 224H416c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64l13.3 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32h-24l21.5 51.7c6.8 16.3-.9 35-17.2 41.8-17.2 6.8-35-.9-41.8-17.2L322.7 384H125.3l-31.76 76.3c-6.8 16.3-25.53 24-41.85 17.2-16.31-6.8-24.03-25.5-17.23-41.8L56 384H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h50.67L96 288H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h90.7l71.8-172.31C199.4 39.77 211.1 32 224 32c12.9 0 24.6 7.77 29.5 19.69L325.3 224zm-69.3 0-32.9-76.8-32 76.8H256zm-90.7 64-14.2 32H296l-13.3-32H165.3z" />
  </svg>
);

const SvgAustralSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAustralSignSolid;
