import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M204.2 50.47c-12-4.969-25.69-2.25-34.86 6.938L124.7 102.1 43.31 20.71c-6.248-6.25-16.38-6.25-22.62 0-6.248 6.246-6.248 16.38 0 22.62l81.39 81.38-44.69 44.69c-6.12 6.1-9.37 14.3-9.37 21.7 0 4.125.813 8.312 2.453 12.28C55.45 216.3 67.05 224 80.03 224H192c17.67 0 32-14.33 32-32V80.03c0-13-7.8-24.59-19.8-29.56zM192 192H80.03l111.1-112s0-.094 0 0l.87 112zm128 32h111.1c13 0 24.59-7.766 29.56-19.77s2.25-25.69-6.938-34.86l-44.67-44.67 81.39-81.39c6.248-6.25 6.248-16.38 0-22.62-6.248-6.25-16.38-6.25-22.62 0l-81.38 81.38L342.6 57.39c-6.156-6.125-14.28-9.375-22.59-9.375-4.125 0-8.312.813-12.28 2.453C295.8 55.45 288 67.05 288 80.03V192c0 17.7 14.3 32 32 32zm0-143.97 112 111.1s.094 0 0 0L320 192V80.03zm89.9 307.27 44.68-44.68c6.125-6.156 9.375-14.28 9.375-22.59 0-4.125-.813-8.312-2.453-12.28C456.5 295.8 444.1 288 431.1 288H320c-17.67 0-32 14.33-32 32v111.1c0 13 7.766 24.59 19.77 29.56s25.69 2.25 34.86-6.938l44.67-44.67 81.39 81.39c6.248 6.25 16.38 6.25 22.62 0 6.248-6.246 6.248-16.38 0-22.62L409.9 387.3zM320 432s0 .1 0 0V320h111.1L320 432zM192 288H80.03c-13 0-24.59 7.766-29.56 19.77s-2.25 25.69 6.938 34.86l44.67 44.67-81.39 81.39c-6.248 6.25-6.248 16.38 0 22.62 6.248 6.25 16.38 6.25 22.62 0l81.38-81.38 44.68 44.68c6.156 6.125 14.28 9.375 22.59 9.375 4.125 0 8.312-.813 12.28-2.453C216.3 456.5 224 444.1 224 431.1V320c0-17.7-14.3-32-32-32zm0 143.1L80 320s-.094 0 0 0h112v111.1z" />
  </svg>
);

const SvgMinimize = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMinimize;
