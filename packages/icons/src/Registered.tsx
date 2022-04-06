import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm112-264c0-48.5-39.5-88-88-88h-72c-26.5 0-48 21.5-48 48v192c0 8.8 7.2 16 16 16s16-7.2 16-16v-64h86.95l43.33 72.22C325.3 381.2 330.6 384 336 384c2.812 0 5.656-.719 8.219-2.281 7.594-4.531 10.06-14.38 5.5-21.94l-37.29-62.15C344.9 284.7 368 253.1 368 216zm-88 56h-88v-96c0-8.8 7.2-16 16-16h72c30.88 0 56 25.12 56 56s-25.1 56-56 56z" />
  </svg>
);

const SvgRegistered = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRegistered;
