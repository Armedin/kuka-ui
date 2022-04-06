import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 224H341.87l31.07-48.83c1.979.297 3.941.83 5.924.83 13.22 0 26.16-6.547 33.78-18.53l61.09-96c11.84-18.62 6.375-43.36-12.28-55.22-18.59-11.84-43.34-6.359-55.22 12.28l-61.09 96c-8.783 13.81-7.955 30.94.62 43.73L303.9 224h-57.5l13.35-48.96c15.14-2.33 28.37-12.79 32.65-28.51l26.19-96c5.812-21.31-6.75-43.31-28.06-49.13-21.28-5.75-43.31 6.734-49.13 28.06l-26.19 96c-4.31 15.84 1.59 31.94 13.59 41.64L213.2 224H32c-17.69 0-32 14.3-32 32v64c0 52.13 25.44 98.07 64.14 127.3-.01.2-.14.5-.14.7v48c0 8.8 7.16 16 16 16s16-7.2 16-16v-29.56c19.6 8.66 41.2 13.56 64 13.56h128c22.78 0 44.37-4.943 64-13.56V496c0 8.844 7.156 16 16 16s16-7.156 16-16v-48c0-.248-.129-.455-.14-.701C422.6 418.1 448 372.1 448 320v-64h48c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-123.8-92.3 61.09-96c2.406-3.719 7.406-4.797 11.03-2.453a7.987 7.987 0 0 1 2.469 11.05l-61.09 96a8.024 8.024 0 0 1-6.75 3.703 7.922 7.922 0 0 1-4.281-1.25c-3.768-2.35-4.868-7.35-2.468-11.05zm-99.9-93.81c1.156-4.234 5.625-6.703 9.812-5.609 4.281 1.156 6.781 5.562 5.625 9.828l-26.19 96c-.969 3.547-4.188 5.891-7.719 5.891a8.044 8.044 0 0 1-2.094-.281C247.4 142.6 244.9 138.2 246.1 133.9l26.2-96.01zM416 320c0 70.58-57.42 128-128 128H160c-70.58 0-128-57.42-128-128v-64h32v48c0 8.8 7.16 16 16 16s16-7.2 16-16v-48h32v32c0 8.844 7.156 16 16 16s16-7.2 16-16v-32h256v64z" />
  </svg>
);

const SvgFonduePot = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFonduePot;