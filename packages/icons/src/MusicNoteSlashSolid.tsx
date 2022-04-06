import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M630.8 469.1 384 275.7V148.1l72.1-21.38c13.62-3.1 22.1-16.5 22.1-30.75V31.98c0-10.13-4.75-19.64-12.88-25.64-7.1-6.002-18.5-7.877-28.12-5.002l-96.62 28.5C329.1 33.95 319.1 46.33 319.1 60.33v165.2L38.81 5.111A23.961 23.961 0 0 0 24.03.001C16.905 0 9.84 3.158 5.12 9.189c-8.187 10.44-6.37 25.53 4.068 33.7L601.2 506.9c10.5 8.203 25.57 6.328 33.69-4.078 8.21-10.422 6.31-25.522-4.09-33.722zm-359.7-118c-61.86 0-111.1 35.82-111.1 80s50.14 79.1 111.1 79.1 111.1-35.82 111.1-79.1-48.3-80-111.1-80z" />
  </svg>
);

const SvgMusicNoteSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMusicNoteSlashSolid;
