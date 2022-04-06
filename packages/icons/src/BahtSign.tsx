import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M160 16v48h24c57.4 0 104 46.6 104 104 0 31.3-13.9 59.4-35.8 78.5 39.6 14.7 67.8 52.8 67.8 97.5 0 57.4-46.6 104-104 104h-56v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H41.74C18.69 448 0 429.3 0 406.3V101.6C0 80.82 16.82 64 37.57 64H128V16c0-8.836 7.2-16 16-16s16 7.164 16 16zm-32 80H37.57c-3.08 0-5.57 2.49-5.57 5.6V240h96V96zm56 144c39.8 0 72-32.2 72-72s-32.2-72-72-72h-24v144h24zm-56 32H32v134.3c0 5.3 4.36 9.7 9.74 9.7H128V272zm88 144c39.8 0 72-32.2 72-72s-32.2-72-72-72h-56v144h56z" />
  </svg>
);

const SvgBahtSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBahtSign;
