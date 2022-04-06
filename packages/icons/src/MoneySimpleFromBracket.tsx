import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M80 32c-26.51 0-48 21.49-48 48v96c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V80C0 35.82 35.82 0 80 0h480c44.2 0 80 35.82 80 80v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-26.51-21.5-48-48-48H80zm416 64c8.8 0 16 7.2 16 16v344c0 30.9-25.1 56-56 56H184c-30.9 0-56-25.1-56-56V112c0-8.8 7.2-16 16-16s16 7.2 16 16v344c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V112c0-8.8 7.2-16 16-16zM320 368c-59.9 0-112-40.4-112-96s52.1-96 112-96c59 0 112 40.4 112 96s-53 96-112 96zm-80-96c0 32.7 32.1 64 80 64 47 0 80-31.3 80-64s-33-64-80-64c-47.9 0-80 31.3-80 64z" />
  </svg>
);

const SvgMoneySimpleFromBracket = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoneySimpleFromBracket;
