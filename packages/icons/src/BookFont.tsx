import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 368V48c0-26.51-21.5-48-48-48H80C35.82 0 0 35.82 0 80v368c0 35.35 28.65 64 64 64h368c8.844 0 16-7.156 16-16s-7.2-16-16-16h-16v-66.95c18.6-6.65 32-24.25 32-45.05zm-64 112H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320v64zm16-96H64c-11.71 0-22.55 3.389-32 8.9V80c0-26.51 21.49-48 48-48h320c8.8 0 16 7.16 16 16v320c0 8.8-7.2 16-16 16zM238.3 104.8c-5.438-10.84-23.19-10.84-28.62 0l-96 192c-3.98 8-.78 17.6 7.12 21.5 7.906 3.906 17.52.75 21.47-7.156L169.9 256h108.2l27.58 55.16C308.5 316.8 314.1 320 320 320c2.406 0 4.844-.547 7.141-1.688 7.906-3.953 11.11-13.56 7.156-21.47L238.3 104.8zM185.9 224l38.1-76.2 38.1 76.2h-76.2z" />
  </svg>
);

const SvgBookFont = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookFont;
