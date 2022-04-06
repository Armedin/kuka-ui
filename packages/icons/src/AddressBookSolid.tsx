import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M384 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zM240 128c35.35 0 64 28.65 64 64s-28.65 64-64 64c-35.34 0-64-28.65-64-64s28.7-64 64-64zm96 256H144c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80h64c44.18 0 80 35.82 80 80 0 8.8-7.2 16-16 16zM496 64h-16v96h16c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16zm0 128h-16v96h16c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm0 128h-16v96h16c8.836 0 16-7.164 16-16v-64c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgAddressBookSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAddressBookSolid;
