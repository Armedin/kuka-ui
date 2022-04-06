import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 192c-8.8 0-16 7.2-16 16v256c0 8.836-7.164 16-16 16H48c-8.84 0-16-7.2-16-16V208c0-8.8-7.16-16-16-16s-16 7.2-16 16v256c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-47.1V208c0-8.8-7.2-16-16-16zM64.88 276.3c.28 1 .55 2 1 2.9.435.863 1.012 1.605 1.607 2.385.695.91 1.393 1.75 2.264 2.49.295.25.443.604.76.836l132.8 97.72C218.7 393.1 236.9 399.1 256 399.1s37.3-6.023 52.7-17.4l132.8-97.72c.316-.232.465-.586.76-.836.87-.74 1.568-1.58 2.264-2.49.595-.78 1.172-1.52 1.607-2.385.457-.898.726-1.84 1.01-2.826.302-1.06.558-2.078.64-3.176.019.533.219.133.219-.267V48c0-26.47-21.5-48-48-48H112C85.53 0 64 21.53 64 48v224c0 .412.203.758.234 1.162.086 1.138.336 2.138.646 3.138zM96 48c0-8.81 7.2-16 16-16h288c8.8 0 16 7.19 16 16v215.9l-126.3 92.92c-19.78 14.62-47.64 14.62-67.45 0L96 263.9V48zm256 191.1c0-8.838-7.164-16-16-16H176c-8.836 0-16 7.162-16 16 0 8.836 7.164 15.1 16 15.1h160c8.8.9 16-5.4 16-15.1zm-176-80h160c8.836 0 16-7.164 16-15.1 0-8.838-7.164-15.1-16-15.1H176c-8.836 0-16 7.162-16 15.1 0 8.8 7.2 15.1 16 15.1z" />
  </svg>
);

const SvgEnvelopeOpenText = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEnvelopeOpenText;
