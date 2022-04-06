import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M463.1 32h-416C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 47.1 48h416c26.51 0 48-21.49 48-48V80c0-26.51-20.6-48-48-48zm-352 376a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h47.1a8 8 0 0 1 8 8l.9 48zm0-128a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h47.1a8 8 0 0 1 8 8v48zm0-128a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h47.1a8 8 0 0 1 8 8l.9 48zm240 248c0 8.836-7.164 16-16 16h-160c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16v96zm0-192c0 8.836-7.164 16-16 16h-160c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16v96zm112 200a8 8 0 0 1-8 8H408c-4.418 0-7.1-3.582-7.1-8v-48a8 8 0 0 1 8-8H456a8 8 0 0 1 8 8v48zm0-128a8 8 0 0 1-8 8H408a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h47.1a8 8 0 0 1 8 8v48zm0-128a8 8 0 0 1-8 8H408a8 8 0 0 1-8-8v-48c0-4.418 3.582-8 7.1-8h47.1a8 8 0 0 1 8 8v48z" />
  </svg>
);

const SvgFilmSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilmSolid;
