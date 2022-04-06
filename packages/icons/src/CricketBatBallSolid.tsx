import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M407.9 257.1c5.395-5.395 8.092-12.46 8.092-19.54a27.56 27.56 0 0 0-8.092-19.54l-34.35-34.35 129.1-129.1a31.897 31.897 0 0 0 9.374-22.62C511.1 13.72 497.1 0 480 0c-8.188 0-16.38 3.124-22.62 9.374l-129.1 129.1-34.35-34.35c-5.395-5.393-12.46-8.09-19.54-8.09S260.3 98.69 254.9 104.1l-30.9 30v153l153-.006 30.9-29.994zm-216.8-91L8.7 348.5c-5.861 5.863-9.592 13.8-9.592 22.02 0 102.8 108.9 140.6 140.6 140.6 8.217 0 16.16-3.731 22.03-9.594l182.4-182.4-153 .002V166.1zm240 185.9c-44.25 0-80 35.75-80 79.1 0 44.25 35.75 79.1 80 79.1s80-35.75 80-79.1c0-43.3-34.9-79.1-80-79.1z" />
  </svg>
);

const SvgCricketBatBallSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCricketBatBallSolid;
