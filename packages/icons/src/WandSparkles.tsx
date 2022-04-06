import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M399.1 191.1c8.844 0 15.1-7.154 15.1-16v-28l87.92-95.82c.016 0-.016.031 0 0 11.19-12.32 10.78-31.24-1.082-43.12-11.44-11.35-31.06-11.97-43.11-1.06l-273.1 248H144c-8.844 0-15.1 7.148-15.1 15.1v36.88l-117.5 106c-6.547 5.938-10.29 14.1-10.51 22.88-.219 8.82 3.117 17.17 9.367 23.46l41.4 41.41C56.82 508.7 64.87 512 73.42 512c9.141 0 17.53-3.695 23.74-10.52l279.2-309.5h22.74zm-41.8-26L73.4 480l-41.44-41.4 122.7-110.8a16.02 16.02 0 0 0 5.297-11.91V287.9h32.79c3.969 0 7.812-1.473 10.75-4.16l271.2-247.3-86.61 94.33a15.926 15.926 0 0 0-4.217 10.81v18.23H369.2c-4.5-.01-8.8 1.89-11.9 5.29zM16 160h48v48c0 8.844 7.153 15.1 15.1 15.1S96 216.8 96 208v-48h48c8.844 0 15.98-7.142 15.98-15.99S152.8 128 144 128H96V80c0-8.844-7.156-15.1-15.1-15.1S64 71.16 64 80v48H16c-8.844 0-16 7.2-16 16s7.156 16 16 16zm176-80h32v32c0 8.8 7.2 16 16 16s16-7.2 16-16V80h32c8.844 0 16-7.156 16-16s-7.2-16-16-16h-32V16c0-8.844-7.2-16-16-16s-16 7.156-16 16v32h-32c-8.8 0-16 7.16-16 16s7.2 16 16 16zm304 272h-48v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.844 0-15.99 7.152-15.99 15.1S359.2 384 368 384h48v48c0 8.844 7.157 16 16 16s16-7.2 16-16v-48h48c8.844 0 15.99-7.152 15.99-15.1S504.8 352 496 352z" />
  </svg>
);

const SvgWandSparkles = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWandSparkles;
