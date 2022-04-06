import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 216c0-55.09-43.06-100.3-97.31-103.8C439.2 66.75 399.6 32 352 32c-18.97 0-37.09 5.469-52.59 15.69C278.7 18.22 244.6 0 208 0 146.3 0 96 50.25 96 112c0 2.719.09 5.438.309 8.188C57.84 136.1 32 173.7 32 216c0 57.3 46.66 104 104 104h304c57.3 0 104-46.7 104-104zm-480 0c0-32.59 22.19-61.13 53.97-69.38 8.219-2.156 13.34-10.34 11.66-18.66C128.6 122.8 128 117.5 128 112c0-44.12 35.9-80 80-80 30.97 0 59.41 18.31 72.47 46.63 2.188 4.781 6.594 8.188 11.78 9.062 5.188 1.094 10.47-.75 14.16-4.531C318.6 70.81 334.8 64 352 64c35.28 0 64 28.72 64 64 0 8.844 7.156 16 16 16h8c39.7 0 72 32.3 72 72s-32.3 72-72 72H136c-39.69 0-72-32.3-72-72zm55.2 137.7c-7.906-3.938-17.47-.719-21.47 7.156l-64 128c-3.938 7.906-.75 17.5 7.156 21.47C43.16 511.5 45.59 512 48 512c5.844 0 11.5-3.25 14.31-8.844l64-128c3.99-7.856.79-17.456-7.11-21.456zm256 0c-7.875-3.938-17.5-.719-21.47 7.156l-64 128c-3.938 7.906-.75 17.5 7.156 21.47C299.2 511.5 301.6 512 304 512c5.844 0 11.5-3.25 14.31-8.844l64-128c3.99-7.856.79-17.456-7.11-21.456zM519.4 384c-4.406-7.688-14.22-10.28-21.84-5.844L480 388.3V368c0-8.844-7.156-16-16-16s-16 7.2-16 16v20.3l-17.56-10.14C422.8 373.8 413 376.3 408.6 384c-4.438 7.656-1.812 17.44 5.844 21.84L432 416l-17.59 10.16c-7.61 4.44-10.21 14.14-5.81 21.84 2.938 5.125 8.344 8 13.84 8a15.87 15.87 0 0 0 8-2.156L448 443.7V464c0 8.844 7.156 16 16 16s16-7.156 16-16v-20.3l17.56 10.14a15.865 15.865 0 0 0 8 2.156c5.5 0 10.91-2.875 13.84-8 4.438-7.656 1.812-17.44-5.844-21.84L495.1 416l17.59-10.16c8.51-4.44 11.11-14.14 6.71-21.84zm-256 0c-4.406-7.688-14.22-10.28-21.84-5.844L224 388.3V368c0-8.8-7.2-16-16-16s-16 7.2-16 16v20.3l-17.56-10.14C166.8 373.8 157 376.3 152.6 384c-4.438 7.656-1.812 17.44 5.844 21.84L176 416l-17.59 10.16c-7.61 4.44-10.21 14.14-5.81 21.84 2.938 5.125 8.344 8 13.84 8a15.87 15.87 0 0 0 8-2.156L192 443.7V464c0 8.8 7.2 16 16 16s16-7.2 16-16v-20.3l17.56 10.14c2.54 1.46 5.24 2.16 8.04 2.16 5.5 0 10.91-2.875 13.84-8 4.438-7.656 1.812-17.44-5.844-21.84L239.1 416l17.59-10.16c8.51-4.44 11.11-14.14 6.71-21.84z" />
  </svg>
);

const SvgCloudSleet = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloudSleet;