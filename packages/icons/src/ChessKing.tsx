import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M367.1 448H79.97c-26.47 0-48.01 21.53-48.01 47.1 0 9.7 7.16 16.9 16 16.9S64 504.8 64 496s7.17-16 16-16h288c8.828 0 16 7.188 16 16 0 8.844 7.171 16 16.01 16s16-7.156 16-16c-.01-26.5-21.51-48-48.91-48zm56.1-267.8c-9-12.6-23.5-20.2-39-20.2H240V96h48c8.844 0 15.99-7.157 15.99-16S296.8 64 288 64h-48V16c0-8.844-7.172-16-16.02-16S208 7.156 208 16v48h-48c-8.8 0-16.9 7.16-16.9 16s8.1 16 16.9 16h48v64H63.81c-15.47 0-30.03 7.6-38.98 20.2-9 12.8-11.25 29.2-6.1 43.7l61.72 181.3c2.859 8.375 11.94 12.75 20.3 10 8.359-2.844 12.84-11.94 9.984-20.31L48.95 213.4c-3.82-10.8 4.32-21.4 14.86-21.4h320.4c10.6 0 18.66 10.66 14.86 21.41l-64.28 181.3c-2.953 8.312 1.406 17.47 9.734 20.44 11.23 3.977 18.65-4.749 20.42-9.75l64.28-181.3c5.176-14.7 2.976-31.1-6.024-43.9z" />
  </svg>
);

const SvgChessKing = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChessKing;
