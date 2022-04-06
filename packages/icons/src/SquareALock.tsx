import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M32 96v320c0 17.7 14.33 32 32 32h256v32H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v65.1c-11.3 1.7-22.1 5-32 9.7V96c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32zm206.3 40.8 91 182c-5.9 9.7-9.3 21-9.3 33.2v19.8l-17.9-36.7H145.9l-19.6 40.1c-3.9 7.9-13.6 11.1-21.5 7.1-7.86-3.9-11.06-13.6-7.11-21.5l112.01-224c2.7-5.4 8.2-8.8 13.4-8.8 7 0 12.5 3.4 15.2 8.8zm-76.4 166.3h124.2L224 179.8l-62.1 123.3zM464 192c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80zm0 32c-26.5 0-48 21.5-48 48v48h96v-48c0-26.5-21.5-48-48-48zm-80 128v128h160V352H384z" />
  </svg>
);

const SvgSquareALock = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareALock;
