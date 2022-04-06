import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M240 392c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80zM224 0c70.7 0 128 57.31 128 128v64h16c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V272c0-44.2 35.82-80 80-80h16v-64C96 57.31 153.3 0 224 0zm0 32c-53.9 0-96 42.98-96 96v64h192v-64c0-53.02-43-96-96-96zM80 224c-26.51 0-48 21.5-48 48v160c0 26.5 21.49 48 48 48h288c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H80z" />
  </svg>
);

const SvgLockKeyhole = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLockKeyhole;
