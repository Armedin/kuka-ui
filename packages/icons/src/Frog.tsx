import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 448h-40.81l-109.9-123.6 131.5-71.91C562.5 240.8 576 218.3 576 193.6c0-26.84-15.94-51-40.56-61.53-30.63-13.12-59.45-22.2-88.24-28.06C443.1 63.63 409.4 32 368 32c-38.95 0-71.32 27.86-78.46 64.73C128.7 104.4 0 237.3 0 400c0 44.1 35.88 80 80 80h288c8.844 0 16-7.156 16-16s-7.2-16-16-16H80c-26.47 0-48-21.5-48-48 0-145.2 114.5-263.8 257.8-271.3 7.7 36.2 39.8 63.3 78.2 63.3 35.81 0 65.76-23.68 75.96-56.12 25.68 5.471 51.47 13.86 78.88 25.62A34.853 34.853 0 0 1 544 193.6c0 12.84-7.031 24.62-18.47 30.78l-149.2 81.59c-4.25 2.344-7.25 6.5-8.062 11.28a16.025 16.025 0 0 0 3.781 13.38l128 144C503.1 478 507.4 480 512 480h48c8.844 0 16-7.156 16-16s-7.2-16-16-16zM368 128c15.06 0 29.67 1.078 44.15 2.801C404.8 147.9 387.8 160 368 160c-26.5 0-48-21.5-48-48s21.5-48 48-48c21.82 0 40.08 14.73 45.89 34.71C398.9 97 383.7 96 368 96c-8.844 0-16 7.156-16 16s7.2 16 16 16zm-86.7 237.5-34.16 22.75c-7.344 4.906-9.344 14.81-4.438 22.19 3.098 4.66 8.098 7.16 13.298 7.16 3.062 0 6.156-.875 8.875-2.688l34.16-22.75c18.44-12.31 31-31.06 35.34-52.81s-.031-43.91-12.34-62.34-31.06-31-52.78-35.34C247.3 237.3 225.3 241.7 206.9 253.1l-31.1 21.6c-7.3 4.9-9.3 14.8-4.4 22.2s14.88 9.281 22.19 4.438l31.09-20.72C236 273 249.6 270.3 262.1 273c13.34 2.656 24.88 10.38 32.44 21.72s10.28 24.97 7.594 38.34C300.3 346.4 292.6 357.9 281.3 365.5z" />
  </svg>
);

const SvgFrog = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFrog;
