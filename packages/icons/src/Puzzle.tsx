import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H320c-17.67 0-32 14.33-32 32v24c0 17.67 14.33 32 32 32h16c8.836 0 16 7.162 16 16 0 8.836-7.164 16-16 16h-16c-17.67 0-32 14.33-32 32v24c0 17.67 14.33 32 32 32h32c0 26.5 21.5 48 48 48s48-21.5 48-48h32c17.67 0 32-14.33 32-32V64c0-35.35-28.7-64-64-64zm32 176h-48c-8.8 0-16 7.2-16 16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-8.838-7.164-16-16-16h-48v-24h16c26.51 0 48-21.49 48-48s-21.49-48-48-48h-16V32h128c17.67 0 32 14.33 32 32v112zm-64 96h-64c-8.836 0-16 7.162-16 16v32c0 8.834-7.164 16-16 16s-16-7.166-16-16v-32c0-8.838-7.164-16-16-16h-48V96c0-17.67-14.33-32-32-32H64C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V304c0-17.7-14.3-32-32-32zM32 128c0-17.67 14.33-32 32-32h144v176h-32v-16c0-26.51-21.49-48-48-48s-48 21.5-48 48v16H32V128zm176 352H64c-17.67 0-32-14.33-32-32V304h64c8.836 0 16-7.164 16-16v-32c0-8.838 7.164-16 16-16s16 7.2 16 16v32c0 8.836 7.164 16 16 16h48v32h-16c-26.51 0-48 21.49-48 48s21.49 48 48 48h16v48zm208-32c0 17.67-14.33 32-32 32H240v-64c0-8.836-7.164-16-16-16h-32c-8.836 0-16-7.166-16-16 0-8.836 7.164-16 16-16h32c8.836 0 16-7.166 16-16v-48h32v16c0 26.51 21.49 48 48 48s48-21.49 48-48v-16h48v144z" />
  </svg>
);

const SvgPuzzle = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPuzzle;
