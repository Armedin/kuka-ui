import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M392 176.1c-9.785 0-18.85 2.744-26.87 7.174-7.195-22.62-28.15-39.17-53.13-39.17-5.525 0-10.76 1.051-15.81 2.549 0 0 7.808-89.09 7.808-90.73 0-21.37-16.72-55.91-55.72-55.91-28.59 0-53.48 21.86-56.06 51.04L180.2 186.5 123.8 50.12c-8.923-21.5-29.84-34.53-51.84-34.53-29.49 0-55.93 23.37-55.93 55.93 0 7.28 1.437 14.56 4.303 21.49l72.23 174.4c-26.08 8.406-44.52 32.87-44.52 60.69v63.98c0 19.89 8.998 38.29 24.72 50.5l46.03 35.8C146.7 500 181.6 512 216.9 512h79.06C379.8 512 448 443.8 448 360V232.1c0-30.9-25.1-56-56-56zM288 200c0-13.23 10.78-24 24-24s24 10.77 24 24v96c0 13.23-10.78 24-24 24s-24-10.8-24-24v-96zM224.1 53.85c1.094-12.5 11.68-21.88 23.94-21.88 12.79 0 23.97 10.31 23.97 23.96 0 .71-.031 1.425-.094 2.141L261.4 176.4c-3.393 7.213-5.434 15.17-5.434 23.65v37.75l-.866 10.8c-9.529-5.328-20.38-8.396-31.67-8.396-4.216 0-8.495.428-12.79 1.325l-3.24.671 16.7-188.35zM49.87 80.75a23.805 23.805 0 0 1-1.86-9.19c0-12.57 9.966-23.99 24.02-23.99 9.43 0 18.33 5.603 22.17 14.81l76.5 184.72c.412.986 1.146 1.693 1.721 2.551L124.1 260 49.87 80.75zM296 480h-79.1c-28.28 0-56.18-9.561-78.56-26.93l-46.03-35.79c-7.717-6.014-12.34-15.46-12.34-25.26v-63.98c0-14.1 10.62-28.15 25.28-31.29L217.2 272.8a32.504 32.504 0 0 1 6.566-.672c15.79 0 32.22 12.48 32.22 31.98 0 14.74-10.29 28.03-25.28 31.25l-74.06 15.86c-7.528 1.603-12.67 8.238-12.67 15.62 0 9.759 8.252 16.02 16.01 16.02 1.109 0 2.229-.12 3.344-.37l74.06-15.86c16.94-3.634 30.8-13.73 39.72-27.1 9.6 7.714 21.62 12.53 34.87 12.53 9.785 0 18.85-2.745 26.87-7.175 7.193 22.62 28.15 39.16 53.13 39.16 7.822 0 15.26-1.635 22.03-4.545C404.7 436.4 355.5 480 296 480zm120-152c0 13.23-10.78 23.99-24 23.99s-24.1-10.85-24.1-24.08l.106-95.89c0-13.23 10.78-23.99 23.1-23.99 13.22 0 24 10.76 24 23.99V328z" />
  </svg>
);

const SvgHandPeace = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandPeace;