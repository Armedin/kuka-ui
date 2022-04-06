import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M294.4 44.8c6-8.06 15.5-12.8 25.6-12.8h224c17.7 0 32 14.33 32 32s-14.3 32-32 32H336l-86.4 115.2c-6 8.1-15.5 12.8-25.6 12.8H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h176l86.4-115.2zM141.9 320H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h512c17.7 0 32 14.3 32 32s-14.3 32-32 32H216.5l57.6 96H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-11.2 0-21.7-5.9-27.4-15.5L141.9 320z" />
  </svg>
);

const SvgDiagramSankeySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramSankeySolid;
