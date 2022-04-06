import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M179.2 377.6c3.1 4.1 7.8 6.4 12.8 6.4a16.003 16.003 0 0 0 14.318-8.844L256 275.8l17.69 35.38C276.4 316.6 281.9 320 288 320h64c8.844 0 16-7.156 16-16s-7.2-16-16-16h-54.13l-27.56-55.16c-5.438-10.84-23.19-10.84-28.62 0l-52.41 104.8-32.48-43.24c-3-4-7.8-6.4-12.8-6.4H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h120l43.2 57.6zm250.1-252.3L322.8 18.8C310.7 6.742 294.5 0 277.5 0H128C92.65 0 64 28.65 64 64v160c0 8.836 7.164 16 16 16 8.84 0 16-7.2 16-16V64c0-17.67 14.33-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256c0 17.67-14.33 32-32 32H128c-17.67 0-32-14.33-32-32v-64c0-8.836-7.162-16-16-16-8.84 0-16 7.2-16 16l.006 64c0 35.35 28.65 64 64 64H384c35.35 0 64-28.65 64-64V170.5c0-17-6.7-33.2-18.7-45.2zM304 160c-8.8 0-16-7.2-16-16V34.08c4.477 1.566 8.666 3.846 12.12 7.299l106.5 106.5c3.48 3.421 5.78 7.621 7.28 12.121H304z" />
  </svg>
);

const SvgFileWaveform = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileWaveform;
