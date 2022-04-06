import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32C114.6 32 .014 125.1.014 240c0 49.59 21.39 95 56.99 130.7-12.5 50.39-54.31 95.3-54.81 95.8C0 468.8-.594 472.2.688 475.2 1.1 478.2 4.813 480 8 480c66.31 0 116-31.8 140.6-51.41C181.3 440.9 217.6 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm-88.7 239.9c-3.4 19.2-21 32.1-46.2 32.1a80.54 80.54 0 0 1-12.59-1c-7.41-1.2-15.7-4.2-23.01-6.9-8.312-3-14.06-12.66-11.09-20.97S85 261.1 93.38 264.9c6.979 2.498 14.53 5.449 20.88 6.438C125.7 273.1 135 271 135.8 266.4c1.053-5.912-10.84-8.396-24.56-12.34-12.12-3.531-44.28-12.97-38.63-46 4.062-23.38 27.31-35.91 58-31.09 5.906.906 12.44 2.844 18.59 4.969 8.344 2.875 12.78 12 9.906 20.34C156.3 210.7 147.2 215.1 138.8 212.2c-4.344-1.5-8.938-2.938-13.09-3.594-11.22-1.656-20.72.406-21.5 4.906-1.01 5.688 9.39 7.988 20.19 11.088 17 4.9 48.7 13.9 42.9 47.3zM320 288c0 8.844-7.156 16-16 16s-16-7.2-16-16v-48l-19.19 25.59c-6.062 8.062-19.55 8.062-25.62 0L224 240v48c0 8.844-7.156 16-16 16s-16-7.2-16-16v-96c0-6.875 4.406-12.1 10.94-15.18 6.5-2.094 13.71.059 17.87 5.59L256 229.3l35.19-46.93c4.156-5.531 11.4-7.652 17.87-5.59C315.6 179 320 185.1 320 192v96zm119.3-16.1c-3.4 19.2-21 32.1-46.2 32.1a80.54 80.54 0 0 1-12.59-1c-8.25-1.25-16.56-4.25-23.88-6.906-8.312-3-14.06-12.66-11.09-20.97s10.59-13.16 18.97-10.19c6.979 2.498 14.53 5.449 20.88 6.438 11.44 1.719 20.78-.375 21.56-4.938 1.053-5.912-10.84-8.396-24.56-12.34-12.12-3.531-44.28-12.97-38.63-46 4.031-23.38 27.25-35.91 58-31.09 5.906.906 12.44 2.844 18.59 4.969 8.344 2.875 12.78 12 9.906 20.34-2.875 8.344-11.94 12.81-20.34 9.906-4.344-1.5-8.938-2.938-13.09-3.594-11.19-1.656-20.72.406-21.5 4.906C375.2 219.2 385.6 221.5 396.4 224.6c17 4.9 48.7 13.9 42.9 47.3z" />
  </svg>
);

const SvgCommentSmsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentSmsSolid;
