import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M112 358.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80-44.18 0-80-35.8-80-80 0-32.8 19.75-61 48-73.3V153.3C19.75 140.1 0 112.8 0 80 0 35.82 35.82 0 80 0c44.2 0 80 35.82 80 80 0 32.8-19.7 60.1-48 73.3v205.4zM80 56c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.75-24-24-24zm0 352c-13.25 0-24 10.7-24 24s10.75 24 24 24 24-10.7 24-24-10.75-24-24-24zm208 24c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80zm80 24c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm48-376c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-26.51 21.5-48 48-48s48 21.49 48 48zm-96 160c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z" />
  </svg>
);

const SvgCodePullRequestDraftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCodePullRequestDraftSolid;
