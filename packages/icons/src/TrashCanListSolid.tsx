import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M268.2 0c12.1 0 23.2 6.848 28.6 17.69L304 32h80c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32h80l7.2-14.31C124.6 6.848 135.7 0 147.8 0h120.4zM384 464c0 26.5-21.5 48-48 48H79.1c-25.61 0-48-21.5-48-48V128H384v336zM159.1 208c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16v224c0 8.8 8.1 16 16 16 9.7 0 16-7.2 16-16V208zm128 0c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16v224c0 8.8 8.1 16 16 16 9.7 0 16-7.2 16-16V208zM608 128c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-17.7 0-32-14.3-32-32s14.3-32 32-32h128zm-32 128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96zM448 416c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32z" />
  </svg>
);

const SvgTrashCanListSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrashCanListSolid;
