import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M222.1 17.94c18.7-18.744 49.1-18.744 67.8 0L336 64h64c26.5 0 48 21.49 48 48v64l45.6 45.6c18.7 18.7 18.7 49.1 0 67.9L448 335.1V400c0 26.5-21.5 48-48 48h-64.9l-45.2 45.1c-18.7 18.8-49.1 18.8-67.8 0L176.9 448H112c-26.51 0-48-21.5-48-48v-64.9l-45.59-45.6c-18.743-18.8-18.743-49.2 0-67.9L64 176v-64c0-26.51 21.49-48 48-48h63.1l47-46.06zM169.4 166.5c-4.5 12.5 2.1 26.2 13.7 30.7 13.4 4.4 27.1-2.1 31.5-14.6l.5-1.3c1.1-3.2 4.1-5.3 7.5-5.3h58.3c8.3 0 15.1 6.8 15.1 15.1 0 5.5-2.9 10.5-7.6 13.2l-44.3 25.4c-7.5 4.3-12.1 12.2-12.1 20.8V264c0 13.3 10.7 24 24 24 13.1 0 23.8-10.5 23.1-23.6l33.2-18.5c19.6-11.2 31.7-32.1 31.7-54.8 0-34.8-28.3-63.1-63.1-63.1h-58.3c-23.7 0-44.8 14.9-52.8 37.3l-.4 1.2zM256 320c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
  </svg>
);

const SvgSealQuestionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSealQuestionSolid;