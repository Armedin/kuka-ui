import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M112 0c8.8 0 16 7.164 16 16v16h64V16c0-8.836 7.2-16 16-16s16 7.164 16 16v16h64V16c0-8.836 7.2-16 16-16s16 7.164 16 16v16h64V16c0-8.836 7.2-16 16-16s16 7.164 16 16v114.7c18.6 6.6 32 24.4 32 45.3v48c0 .9-.9 1.8-.1 2.7 18.7 6.5 32.1 24.4 32.1 45.3v80c0 .9-.9 1.8-.1 2.7 18.7 6.6 32.1 24.4 32.1 45.3v64c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-20.9 13.41-38.7 32.11-45.3-.07-.9-.11-1.8-.11-2.7v-80c0-20.9 13.41-38.8 32.11-45.3-.07-.9-.11-1.8-.11-2.7v-48c0-20.9 13.36-38.7 32-45.3V16c0-8.836 7.2-16 16-16zm112 480h64c0-17.7-14.3-32-32-32s-32 14.3-32 32zm96 0h64v-96H128v96h64c0-35.3 28.7-64 64-64s64 28.7 64 64zM128 128h256V64H128v64zm-16 32c-8.8 0-16 7.2-16 16v48h64v-64h-48zm48 192h48v-16c0-26.5 21.5-48 48-48s48 21.5 48 48v16h48v-96H160v96zm112-144v16h48v-64H192v64h48v-16c0-8.8 7.2-16 16-16s16 7.2 16 16zm0 144v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h32zm144-128v-48c0-8.8-7.2-16-16-16h-48v64h64zm-32 32v96h64v-80c0-8.8-7.2-16-16-16h-48zm32 224h48c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-48v96zM80 256c-8.84 0-16 7.2-16 16v80h64v-96H80zm16 128H48c-8.84 0-16 7.2-16 16v64c0 8.8 7.16 16 16 16h48v-96z" />
  </svg>
);

const SvgGopuram = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGopuram;