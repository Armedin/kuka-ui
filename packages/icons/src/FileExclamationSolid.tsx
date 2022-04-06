import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M224 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm-56 88c0-13.2 10.8-24 24-24s24 10.75 24 24v112c0 13.25-10.75 24-24 24s-24-10.75-24-24V216zm56 199.1c0 18.6-14.3 32.9-32 32.9s-32-14.33-32-32c0-.178.102-.326.102-.502.273-16.55 13.14-29.68 29.42-30.1.878-.998 1.578-2.298 2.478-2.298s1.617.43 2.477.5c16.28 1.315 29.15 14.45 29.42 30.1.003 2 .103 2.1.103 1.4zM256 0v128h128L256 0z" />
  </svg>
);

const SvgFileExclamationSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileExclamationSolid;
