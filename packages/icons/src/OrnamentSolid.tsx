import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M287.1 153.9V112c0-8.75-7.26-16-16.01-16h-24.9c5.498-9.375 8.887-20.25 8.887-32 0-35.25-28.75-64-63.98-64S127.1 28.75 127.1 64c0 11.75 3.368 22.62 8.866 32H111.1c-7.9 0-15.11 7.3-15.11 16l.002 41.94C66.88 170.8 42.74 195 25.87 224h332.1c-16.87-29-40.87-53.2-70.87-70.1zM191.9 96c-17.5 0-32-14.5-32-32s14.51-32 32.01-32 31.97 14.5 31.97 32-14.48 32-31.98 32zm-.8 416c70.98 0 132.8-38.75 166-96H25.87c33.24 57.3 95.13 96 165.23 96zm181.5-256H11.39C4.271 276.1 0 297.5 0 320s4.068 44 11.19 64h361.6c7.11-20 11.21-41.5 11.21-64-.1-22.5-4.3-43.9-11.4-64z" />
  </svg>
);

const SvgOrnamentSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOrnamentSolid;
