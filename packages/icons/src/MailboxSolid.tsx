import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M432 64H244.9c45.4 31.88 75.1 84.5 75.1 144v240h224c17.62 0 32-14.37 32-31.1V208c0-79.5-64.5-144-144-144zm80 207.1c0 8.836-7.162 15.1-16 15.1h-32c-8.836 0-16-7.164-16-15.1V224h-48c-8.799 0-16-7.199-16-15.1s7.201-15.1 16-15.1h96c8.838 0 16 7.164 16 15.1v62.2zM144 64C64.5 64 0 128.5 0 208v207.1c0 17.62 14.38 31.1 32 31.1l256 1.8V208c0-79.5-64.5-144-144-144zm64 160H80c-8.836 0-16-7.164-16-15.1s7.164-15.1 16-15.1h128c8.838 0 16 7.164 16 15.1s-7.2 15.1-16 15.1z" />
  </svg>
);

const SvgMailboxSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMailboxSolid;
