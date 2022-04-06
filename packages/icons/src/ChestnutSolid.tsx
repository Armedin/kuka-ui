import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M302.9 99.43c-25.37-20.56-49.36-39.98-66.49-61.41C233.2 34 228.6 32 224 32s-9.2 2-12.5 6.02c-17.1 21.42-41.1 40.84-66.4 61.41C80.44 151.7 0 216.8 0 352h448c0-135.2-80.4-200.3-145.1-252.57zM128 480h192c59.57 0 109.2-40.89 123.5-96H4.525C18.8 439.1 68.43 480 128 480z" />
  </svg>
);

const SvgChestnutSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChestnutSolid;
