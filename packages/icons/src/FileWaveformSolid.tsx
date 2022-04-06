import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M320 0v128h128L320 0zm-32 128V0H112C85.49 0 64 21.49 64 48v176H16c-8.836 0-16 7.2-16 16v32c0 8.8 7.164 16 16 16h128c6.062 0 11.59 3.438 14.31 8.844L176 332.2l49.69-99.38c5.438-10.81 23.19-10.81 28.62 0L281.9 288H352c8.844 0 16 7.156 16 16s-7.2 16-16 16h-80c-6.062 0-11.59-3.438-14.31-8.844L240 275.8l-49.69 99.38C187.6 380.6 182.1 384 176 384s-11.59-3.438-14.31-8.844L134.1 320H64v144c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H320.9c-18.6 0-32.9-14.3-32.9-32z" />
  </svg>
);

const SvgFileWaveformSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileWaveformSolid;
