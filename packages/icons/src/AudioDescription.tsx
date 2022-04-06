import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M206.3 168.8c-5.438-10.84-23.19-10.84-28.62 0l-80 160c-3.953 7.906-.75 17.52 7.156 21.47 7.922 3.906 17.5.734 21.47-7.156L145.9 304h92.2l19.58 39.16C260.5 348.8 266.1 352 272 352c2.406 0 4.844-.547 7.141-1.688 7.906-3.953 11.11-13.56 7.156-21.47L206.3 168.8zM161.9 272l30.1-60.2 30.1 60.2h-60.2zM384 160h-64c-8.844 0-16 7.156-16 16v160c0 8.844 7.156 16 16 16h64c52.94 0 96-43.06 96-96s-43.1-96-96-96zm0 160h-48V192h48c35.3 0 64 28.7 64 64s-28.7 64-64 64zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32v320z" />
  </svg>
);

const SvgAudioDescription = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAudioDescription;
