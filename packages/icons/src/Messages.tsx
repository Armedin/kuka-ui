import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 128H448v32h128c17.64 0 32 14.36 32 32v192c0 17.64-14.36 32-32 32h-64v49.57L424.4 416H320c-17.64 0-32-14.36-32-32v-32l-32-.004v31.98c0 35.25 28.75 63.1 63.1 63.1L416 448l108.9 61.63c2.2 1.67 4.7 2.37 7.1 2.37 6.3 0 12-4.9 12-12v-52.03h32c35.25 0 64-28.75 64-63.1V191.1c0-34.4-28.7-63.1-64-63.1zM416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.3 28.75 320 64 320l32 .01V372c0 7.1 5.8 12 12 12 2.375 0 4.875-.75 7.125-2.375L224 320l128-.075c35.3-.025 64-28.625 64-63.925zm-200.4 32L128 337.6V288H64c-17.64 0-32-14.4-32-32V64c0-17.64 14.36-32 32-32h288c17.64 0 32 14.36 32 32v192c0 17.64-14.36 32-32 32H215.6z" />
  </svg>
);

const SvgMessages = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessages;
