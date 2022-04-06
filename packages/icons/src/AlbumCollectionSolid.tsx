import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 24C32 10.75 42.75 0 56 0h400c13.3 0 24 10.75 24 24s-10.7 24-24 24H56c-13.25 0-24-10.75-24-24zm192 328c0-13.3 14.3-24 32-24s32 10.7 32 24-14.3 24-32 24-32-10.7-32-24zm240-192c13.8 0 26.9 5.9 35.1 16.2 10 10.4 14.2 24.1 12.5 36.9l-32 256c-3 24-23.4 42.9-47.6 42.9H80c-24.21 0-44.63-18.9-47.63-42.9l-32-256c-1.707-12.8 2.534-26.5 11.65-36.9A48.028 48.028 0 0 1 48 160h416zm-208 48c-101.6 0-184 60.9-184 136s82.4 136 184 136 184-60.9 184-136-82.4-136-184-136zM472 80c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H40c-13.25 0-24-10.7-24-24 0-13.25 10.75-24 24-24h432z" />
  </svg>
);

const SvgAlbumCollectionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlbumCollectionSolid;
