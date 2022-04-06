import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M264 32c13.3 0 24 10.75 24 24v8h176c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H288v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48c-26.51 0-48-21.5-48-48v-64c0-26.51 21.49-48 48-48h192v-8c0-13.25 10.7-24 24-24zM160 160h80v-32h-80v32zm128-32v32h160v-32H288zM48 448c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48h288v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h80c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-80v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48zm288-96h-80v32h80v-32zm48 32h64v-32h-64v32z" />
  </svg>
);

const SvgChartBulletSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartBulletSolid;
