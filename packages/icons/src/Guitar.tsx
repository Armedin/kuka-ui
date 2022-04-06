import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m501.3 37.47-26.7-26.7C467.7 3.875 458.3 0 448.5 0c-9.83 0-19.1 3.844-26.24 11l-41.08 44.2a24.02 24.02 0 0 0-5.955 11.63l-11.82 59.09L296.8 192.6l-5.6-5.6c-13.9-11.1-29.6-19.9-46.8-23.9-8.5-2-17.3-3.1-26.1-3.1-24.1 0-46.9 8.3-63.8 25.1-9.4 9.4-16.2 20.9-20.2 33.5-6 18.5-23.12 32.63-42.12 34.38-23.79 2.42-45.79 11.52-62.66 28.52C-16.11 327-7.86 409 47.64 464.5 78.89 495.8 118.7 512 155.6 512c28.5 0 55.19-9.597 74.94-29.47 17-16.88 26.25-38.97 28.5-62.72 1.75-18.88 15.97-36.16 34.47-42.16 12.62-3.875 24.03-10.88 33.4-20.25 22.88-22.88 29.75-56.26 21.1-89.76-4-17.25-12.57-33.01-23.82-46.76l-4.79-5.68 11.91-11.92c.01-.01-.01.012 0 0l54.8-54.79 59.04-11.8a23.981 23.981 0 0 0 11.63-5.957l44.47-41.33c14.35-14.313 14.35-37.623.05-51.933zm-197 297.33c-5.75 5.75-12.88 10.12-20.75 12.5-30.75 10-53.5 38-56.38 69.5-1.125 12.12-5.375 29.38-19.25 43.13C191.3 476.5 170.3 480 155.6 480c-30 0-61-13.88-85.25-38.13-24.25-24.38-38.25-55.5-38.25-85.5 0-14.62 3.5-35.63 20.25-52.38C65.95 290.4 83.2 286 95.2 284.9c31.62-3 59.63-25.62 69.63-56.5 2.37-7.8 6.57-14.9 12.37-20.6 13-13 29.5-15.8 41.1-15.8 6.375 0 12.75.75 18.88 2.25 10.22 2.35 20.92 7.85 31.12 15.65l5.59 5.59-45.19 45.21c-.027.027.027-.027 0 0-6.3-2.9-13.3-4.7-20.7-4.7-26.53 0-48 21.47-48 48s21.47 48 48 48 47.1-21.47 47.1-48c0-7.426-1.73-14.41-4.734-20.68.02-.02-.02.02 0 0l45.26-45.25 5.785 5.785c7.75 10.25 13.12 20.75 15.5 31C323.3 298.9 318.4 320.8 304.3 334.8zM224.1 304c0 8.822-7.178 16-16 16s-16-7.178-16-16 7.178-16 16-16 16 7.2 16 16zM479.5 65.97l-42.8 39.83-38.07 7.611 7.613-38.05 38.75-41.72c2.926-2.934 5.998-1.178 6.975-.201l26.7 26.7c1.732 1.73 1.632 4.93.832 5.83z" />
  </svg>
);

const SvgGuitar = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGuitar;
