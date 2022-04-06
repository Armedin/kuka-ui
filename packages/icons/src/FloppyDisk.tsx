import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M350.1 55.44C334.9 40.33 314.9 32 293.5 32H80C35.88 32 0 67.89 0 112v288c0 44.1 35.88 80 80 80h288c44.13 0 80-35.89 80-80V186.5c0-21.38-8.312-41.47-23.44-56.58L350.1 55.44zM96 64h192v96H96V64zm320 336c0 26.47-21.53 48-48 48H80c-26.47 0-48-21.5-48-48V112c0-20.83 13.42-38.43 32-45.05V160c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32V72.02a47.502 47.502 0 0 1 7.438 6.043l74.5 74.5C411 161.6 416 173.7 416 186.5V400zM224 240c-44.13 0-80 35.89-80 80s35.88 80 80 80 80-35.89 80-80-35.9-80-80-80zm0 128c-26.47 0-48-21.53-48-48s21.5-48 48-48 48 21.53 48 48-21.5 48-48 48z" />
  </svg>
);

const SvgFloppyDisk = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFloppyDisk;
