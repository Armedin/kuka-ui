import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 48c0-8.84 7.164-16 16-16h32c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16H16C7.164 96 0 88.84 0 80V48zm0 96c0-8.8 7.164-16 16-16h32c8.84 0 16 7.2 16 16v32c0 8.8-7.16 16-16 16H16c-8.836 0-16-7.2-16-16v-32zm48 80c8.84 0 16 7.2 16 16v32c0 8.8-7.16 16-16 16H16c-8.836 0-16-7.2-16-16v-32c0-8.8 7.164-16 16-16h32zM0 336c0-8.8 7.164-16 16-16h32c8.84 0 16 7.2 16 16v32c0 8.8-7.16 16-16 16H16c-8.836 0-16-7.2-16-16v-32zm48 80c8.84 0 16 7.2 16 16v32c0 8.8-7.16 16-16 16H16c-8.836 0-16-7.2-16-16v-32c0-8.8 7.164-16 16-16h32zM96 48c0-8.84 7.2-16 16-16h32c8.8 0 16 7.16 16 16v32c0 8.84-7.2 16-16 16h-32c-8.8 0-16-7.16-16-16V48zm48 80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32zM96 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm48 80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32zM96 432c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zM240 32c8.8 0 16 7.16 16 16v32c0 8.84-7.2 16-16 16h-32c-8.8 0-16-7.16-16-16V48c0-8.84 7.2-16 16-16h32zm-48 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm48 80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32zm-48 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm48 80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32zm48-368c0-8.84 7.2-16 16-16h32c8.8 0 16 7.16 16 16v32c0 8.84-7.2 16-16 16h-32c-8.8 0-16-7.16-16-16V48zm48 80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32zm-48 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm48 80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32zm-48 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zM432 32c8.8 0 16 7.16 16 16v32c0 8.84-7.2 16-16 16h-32c-8.8 0-16-7.16-16-16V48c0-8.84 7.2-16 16-16h32zm-48 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm48 80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32zm-48 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm48 80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32z" />
  </svg>
);

const SvgGrid5Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGrid5Solid;