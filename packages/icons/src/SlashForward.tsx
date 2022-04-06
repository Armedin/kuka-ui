import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M312.2 2.281c-7.469-4.484-17.34-2.125-21.94 5.484l-288 480c-4.562 7.578-2.094 17.41 5.5 21.95C10.34 511.3 13.19 512 16 512c5.406 0 10.72-2.766 13.72-7.766l288-480c4.58-7.574 2.08-17.406-5.52-21.953z" />
  </svg>
);

const SvgSlashForward = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSlashForward;
