import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 16c0-8.836 7.16-16 16-16h416c8.8 0 16 7.164 16 16 0 8.84-7.2 16-16 16H48c-8.84 0-16-7.16-16-16zM16 80c0-8.84 7.16-16 16-16h448c8.8 0 16 7.16 16 16s-7.2 16-16 16H32c-8.84 0-16-7.16-16-16zm216 244c0-11.9 10.7-20 24-20s24 8.1 24 20c0 11-10.7 20-24 20s-24-9-24-20zm-136-4c0-70.7 71.6-128 160-128s160 57.3 160 128-71.6 128-160 128S96 390.7 96 320zm160 96c77.7 0 128-49.3 128-96s-50.3-96-128-96-128 49.3-128 96 50.3 96 128 96zm196.2-288c32.9 0 57.9 28.3 54.9 61.1l-23.9 272c-2.6 28.8-26.8 50.9-55.7 50.9H84.53c-28.96 0-53.15-22.1-55.77-50.9l-24.729-272C1.05 156.3 26.87 128 59.8 128h392.4zM60.63 458.2c1.12 12.3 11.49 21.8 23.9 21.8H427.5c12.4 0 22.7-9.5 23.9-21.8l24.7-272c1.3-14.1-9.8-26.2-23.9-26.2H59.8c-14.11 0-25.18 12.1-23.9 26.2l24.73 272z" />
  </svg>
);

const SvgAlbumCollection = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlbumCollection;
