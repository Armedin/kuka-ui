import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M406.1 61.65c9.3 1.44 13.3 12.94 6.5 19.76l-38 36.69 9 52c.5 9.4-8.3 16.6-16.9 12.3l-46.5-24.5-46.9 24.8c-8.6 4.3-18.3-2.9-16.9-12.2l9-52.1-38-36.99c-6.8-6.82-2.8-18.32 6.5-19.76l52.3-7.54 23.6-47.778c4.3-8.621 16.5-8.262 20.4 0l23.6 47.778 52.3 7.54zM384 256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32V288c0-17.7 14.3-32 32-32h128zm-224 64c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32V352c0-17.7 14.33-32 32-32h128zm288 96c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32v-64z" />
  </svg>
);

const SvgRankingStarSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRankingStarSolid;
