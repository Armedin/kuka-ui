import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M448 32H128C57.31 32 0 89.31 0 160v256c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V160c0-70.69-57.3-128-128-128zM96 448H64c-17.64 0-32-14.36-32-32V288h64v160zm0-192H32v-96c0-41.66 26.84-76.85 64-90.1V256zm352 192H128V288h64v48c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-48h64v160zM224 336V208c0-8.9 7.1-16 16-16h96c8.9 0 16 7.1 16 16v128c0 8.875-7.125 16-16 16h-96c-8.9 0-16-7.1-16-16zm224-80h-64v-48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v48h-64V64h320v192zm96 160c0 17.64-14.36 32-32 32h-32V288h64v128zm0-160h-64V69.9c37.2 13.25 64 48.4 64 90.1v96zm-256 64c8.875 0 16-7.125 16-16v-64c0-8.9-7.1-16-16-16s-16 7.1-16 16v64c0 8.9 7.1 16 16 16z" />
  </svg>
);

const SvgTreasureChest = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTreasureChest;
