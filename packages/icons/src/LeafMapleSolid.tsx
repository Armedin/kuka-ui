import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m503.6 166.5-37.36-22.32 9.904-89.02c.629-5.594-1.428-10.71-5.023-14.29-3.621-3.56-8.721-5.62-14.321-4.99l-89.02 9.902-22.31-37.36c-3.322-5.516-8.996-8.336-14.7-8.414-5.705-.078-11.44 2.586-14.89 8.039L226 149.3l16.7-65.03c2.758-12.66-8.648-23.82-21.19-20.69L195.7 77.5l-45.5-51.53c-6.893-8.652-20.18-8.652-27.08 0L77.56 77.5l-25.7-13.92c-12.54-3.133-24.07 8.023-21.19 20.69l33.1 160.6-37.24 16.03c-14.04 6.016-14.04 25.83 0 31.97l109.2 49.48-128.7 128.7C2.344 475.7 0 481.9 0 487.1a23.93 23.93 0 0 0 7.031 16.97C11.72 509.7 17.84 511.1 24 511.1s12.28-2.344 16.97-7.031l128.7-128.7 49.47 109.2c6.143 14.04 25.95 14.04 31.97 0l16.05-37.24 160.6 33.1c12.66 2.883 23.82-8.648 20.69-21.19l-13.92-25.7 51.53-45.51c8.65-6.898 8.65-20.19 0-27.08l-51.53-45.51 13.92-25.83c3.133-12.54-8.025-23.95-20.69-21.19l-65.07 16.67 141.3-89.89c5.453-3.449 8.117-9.186 8.039-14.89C511.9 175.5 509.1 169.8 503.6 166.5zm-188.3 52.8-96 96c-3.1 3.1-7.2 3.8-11.3 3.8s-8.2-.7-11.3-3.8c-6.25-6.25-6.25-16.37 0-22.62l96-96c6.25-6.25 16.38-6.25 22.62 0 6.28 6.22 6.28 16.42-.02 22.62z" />
  </svg>
);

const SvgLeafMapleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLeafMapleSolid;