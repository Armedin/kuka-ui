import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M408.1 115.3 300.3 9.4C294.2 3.375 285.8 0 277.2 0H173.9c-8.627 0-17 3.375-23.13 9.375l-107.8 105.9C34.98 123.1 31.73 134.6 34.48 145.6l87.14 342.1C125.3 502 138.3 512 153.3 512H298c14.88 0 27.88-9.1 31.51-24.25l87.14-342.1c2.65-11.05-.55-22.55-8.55-30.35z" />
  </svg>
);

const SvgCoffinSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCoffinSolid;
