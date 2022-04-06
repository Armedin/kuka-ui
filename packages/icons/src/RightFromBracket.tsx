import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 448H80c-26.47 0-48-21.5-48-48V112c0-26.47 21.53-48 48-48h96c8.8 0 16-7.16 16-16s-7.2-16-16-16H80C35.88 32 0 67.88 0 112v288c0 44.1 35.88 80 80 80h96c8.8 0 16-7.2 16-16s-7.2-16-16-16zm326.6-214.6-128-128c-9.156-9.156-22.91-11.91-34.88-6.938C327.8 103.4 320 115.1 320 128l.092 63.1L176 192c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48l144.1-.001L320 384c0 12.94 7.797 24.62 19.75 29.56 11.97 4.969 25.72 2.219 34.88-6.938l128-128C508.9 272.4 512 264.2 512 256s-3.1-16.4-9.4-22.6zM352 384v-96H176c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h176l-.004-96 128 128L352 384z" />
  </svg>
);

const SvgRightFromBracket = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRightFromBracket;
