import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M192 496c0 8.8 7.3 16 16 16h32c8.8 0 16-7.2 16-16V320h-64v176zM544 0h-32v496c0 8.75 7.25 16 16 16h32c8.75 0 16-7.25 16-16V32c0-17.75-14.2-32-32-32zM64 128c26.5 0 48-21.5 48-48S90.5 32 64 32 16 53.5 16 80s21.5 48 48 48zm160 96h-50.9l-45.2-45.2C115.8 166.6 99.75 160 82.75 160H64c-17.12 0-33.25 6.8-45.25 18.8C6.75 190.92.03 207.02.03 224.15L0 480c0 17.75 14.25 32 31.88 32s32-14.25 32-32L64 379.3c.875.5 1.625 1.375 2.5 1.75L95.63 424v56c0 17.75 14.25 32 32 32 17.62 0 32-14.25 32-32v-56.5c0-9.875-2.375-19.75-6.75-28.62l-41.13-61.25V253l20.88 20.88C141.8 283 153.8 288 166.5 288H224c17.75 0 32-14.25 32-32s-14.2-32-32-32zM192 32v160h64V0h-32c-17.7 0-32 14.25-32 32zm96 0 31.5 223.1-30.88 154.6C284.3 431.3 301.6 448 320 448c15.25 0 27.99-9.125 32.24-30.38C353.3 434.5 366.9 448 384 448c17.75 0 32-14.25 32-32 0 17.75 14.25 32 32 32s32-14.25 32-32V0H288v32z" />
  </svg>
);

const SvgPersonBoothSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonBoothSolid;