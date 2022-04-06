import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M170.8 280h42.4L192 237.7 170.8 280zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM274.7 349.5c-3.4 1.7-7.1 2.5-10.7 2.5-8.812 0-17.28-4.859-21.5-13.27L233.2 320h-82.4l-9.367 18.73c-5.906 11.86-20.31 16.7-32.19 10.73-11.88-5.938-16.69-20.34-10.75-32.2l72-144c8.125-16.25 34.81-16.25 42.94 0l72 144C291.4 329.1 286.6 343.5 274.7 349.5zM384 352h-56c-13.25 0-24-10.75-24-24V184c0-13.2 10.8-24 24-24h56c52.94 0 96 43.06 96 96s-43.1 96-96 96zm0-144h-32v96h32c26.47 0 48-21.53 48-48s-21.5-48-48-48z" />
  </svg>
);

const SvgAudioDescriptionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAudioDescriptionSolid;
