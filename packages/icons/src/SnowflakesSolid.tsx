import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M443.7 127.9c-8.797-15.34-28.07-20.5-43.26-11.66l-25.75 14.88 5.416-20.41c3.391-12.81-4.258-25.94-16.96-29.38-12.62-3.438-25.6 4.188-29.02 16.97l-17.826 67-60.6 35.3v-70.7l48.61-49.02c9.29-9.33 9.19-24.52-.11-33.9-9.3-9.37-24.3-9.32-33.6.05l-14.9 15.03.2-30.06c0-17.69-14.36-32-31.88-32S192.3 14.31 192.3 32v30.06l-14.9-15.03c-9.3-9.37-24.4-9.42-33.7-.05-9.293 9.375-9.387 24.56-.094 33.94l48.62 49.02v70.64L131.6 165.3l-17.7-66.96c-3.391-12.78-16.37-20.44-29.02-16.97-12.73 3.44-20.38 16.57-16.99 29.43l5.416 20.41L47.56 116.3c-15.24-8.9-34.5-3.6-43.268 11.6-8.75 15.31-3.62 34.89 11.56 43.73l25.88 15.09-20.342 5.58c-12.68 3.438-20.25 16.61-16.86 29.42C7.382 232.4 17.1 239.4 27.6 239.4c2.045 0 3.962-.25 6.021-.813l66.34-17.92L160.5 256l-60.54 35.3-66.34-17.9c-12.61-4.3-25.679 4.1-29.087 16.9-3.391 12.81 4.172 25.98 16.86 29.42l20.34 5.505-25.88 15.09c-15.18 8.844-20.31 28.42-11.56 43.73C10.18 394.3 20.92 400 31.89 400c5.373 0 10.68-1.375 15.67-4.281l25.75-14.88-5.416 20.41c-3.391 12.81 4.258 25.94 16.96 29.38 2.061.563 4.121.813 6.164.813 10.5 0 20.01-7.062 22.86-17.78l17.76-66.91 60.63-35.32v70.64l-48.62 49.02c-9.293 9.375-9.199 24.56.094 33.94 9.29 9.375 24.33 9.328 33.63-.047l14.9-15.03V480c0 17.69 14.19 32 31.71 32s31.88-14.31 31.88-32l-.154-30.06 14.9 15.03C275.2 469.7 281.3 472 287.4 472s12.21-2.297 16.86-6.984c9.293-9.375 9.387-24.56.094-33.94l-48.61-49.02V311.4l60.62 35.31 17.76 66.91c2.85 10.72 12.36 17.78 22.86 17.78 2.043 0 4.104-.25 6.164-.813 12.7-3.438 20.35-16.56 16.96-29.38l-5.416-20.41 25.75 14.88C405.4 398.6 410.7 400 416.1 400c10.96 0 21.71-5.688 27.6-15.94 8.75-15.31 3.62-34.89-11.56-43.73l-25.88-15.09 20.34-5.505c12.68-3.438 20.25-16.61 16.86-29.42-3.408-12.81-16.45-20.38-29.09-16.94l-66.34 17.92L287.4 256l60.54-35.29 66.34 17.92c2.059.563 3.976.813 6.021.813 10.5 0 20.22-7.032 23.07-17.75 3.391-12.81-4.172-25.98-16.86-29.42l-20.34-5.506L432.1 171.7c15.2-8.9 20.3-28.4 11.6-43.8zM609.9 256l23.03-23.03c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-23.03 23.03-23.03-23.03c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L542 256l-23.03 23.03c-9.375 9.375-9.375 24.56 0 33.94 4.73 4.73 10.83 7.03 16.13 7.03s12.28-2.344 16.97-7.031l23.03-23.03 23.03 23.03C603.7 317.7 609.8 320 615.1 320s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L609.9 256zM543.1 97.94l23.03 23.03c5.57 4.73 11.67 7.03 16.97 7.03s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L577.9 64l23.03-23.03c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-23.03 23.03-23.03-23.03c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L510 64l-23.03 23.03c-9.375 9.375-9.375 24.56 0 33.94 4.73 4.73 10.83 7.03 16.13 7.03s12.28-2.344 16.97-7.031L543.1 97.94z" />
  </svg>
);

const SvgSnowflakesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSnowflakesSolid;
