import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v85.8c0 9.838 11.03 15.55 19.12 9.699L304 415.1h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm32 352c0 17.6-14.4 32-32 32H303.9a32.004 32.004 0 0 0-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM358.1 113.2c-1.9-.8-4-1.2-6.1-1.2H224c-8.8 0-16 7.2-16 16s7.2 16 16 16h89.38L180.7 276.7c-6.25 6.25-6.25 16.38 0 22.62 3.1 3.08 7.2 4.68 11.3 4.68s8.188-1.562 11.31-4.688L336 166.6V256c0 8.844 7.156 16 16 16s16-7.156 16-16V128c0-2.082-.422-4.154-1.23-6.109-1.67-4.791-4.77-6.991-8.67-8.691z" />
  </svg>
);

const SvgMessageArrowUpRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageArrowUpRight;
