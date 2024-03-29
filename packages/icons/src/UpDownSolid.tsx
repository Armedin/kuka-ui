import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="m249.6 392.3-104 112c-9.094 9.781-26.09 9.781-35.19 0l-103.1-112c-6.484-6.984-8.219-17.17-4.406-25.92S14.45 352 24 352h56V160H24c-9.55 0-18.188-5.7-22.001-14.4-3.812-8.8-2.077-18.9 4.407-25.9l104-112c9.094-9.781 26.09-9.781 35.19 0l104 112a24.014 24.014 0 0 1 4.406 25.92C250.2 154.3 241.5 160 232 160h-56v192h56c9.547 0 18.19 5.656 22 14.41s2.1 18.89-4.4 25.89z" />
  </svg>
);

const SvgUpDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpDownSolid;
