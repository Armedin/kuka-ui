import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 320c8.8 0 16 7.2 16 16v96c0 44.1-35.9 80-80 80H80c-44.13 0-80-35.9-80-80v-96c0-8.8 7.156-16 16-16 8.84 0 16 7.2 16 16v96c0 26.5 21.53 48 48 48h288c26.5 0 48-21.5 48-48v-96c0-8.8 7.2-16 16-16zM224 0c8.2 0 16.4 3.125 22.6 9.375l128 128.025c9.2 9.1 11.9 22.9 7 34.8-5 12-16.7 19.8-29.6 19.8l-64-.1V336c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48l-.9-144.1-63.1.1a31.96 31.96 0 0 1-29.56-19.8c-4.97-11.9-2.22-25.7 6.94-34.8L201.4 9.375C207.6 3.125 215.8 0 224 0zm0 32L96 160h96v176c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V160h96L224 32z" />
  </svg>
);

const SvgUpFromBracket = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpFromBracket;
