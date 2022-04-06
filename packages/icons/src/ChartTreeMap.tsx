import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 32c26.5 0 48 21.49 48 48v112c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h128zm0 32H48c-8.84 0-16 7.16-16 16v112c0 8.8 7.16 16 16 16h128c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16zm0 208c26.5 0 48 21.5 48 48v112c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V320c0-26.5 21.49-48 48-48h128zm0 32H48c-8.84 0-16 7.2-16 16v112c0 8.8 7.16 16 16 16h128c8.8 0 16-7.2 16-16V320c0-8.8-7.2-16-16-16zm80-224c0-26.51 21.5-48 48-48h160c26.5 0 48 21.49 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80zm32 0v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16H304c-8.8 0-16 7.16-16 16zm176 112c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h160zm0 32H304c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM256 400c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48v-32zm32 0v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H304c-8.8 0-16 7.2-16 16z" />
  </svg>
);

const SvgChartTreeMap = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartTreeMap;
