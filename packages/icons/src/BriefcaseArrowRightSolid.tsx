import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96h-80V48c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zM176 48h160v48H176V48zm200.1 256.1-80 80c-9.375 9.375-24.56 9.375-33.94 0-3.86-3.8-6.16-9.9-6.16-16.1s2.344-12.28 7.031-16.97L302.1 312H152c-13.2 0-24-10.7-24-24s10.75-24 24-24h150.1l-39.03-39.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l80 80c9.29 9.37 9.29 24.57-.91 33.07z" />
  </svg>
);

const SvgBriefcaseArrowRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBriefcaseArrowRightSolid;
