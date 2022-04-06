import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M627.3 227.3c9.439-2.781 14.81-12.65 12-22.04-3.039-10.21-13.57-14.52-22.14-11.95l-11.27 3.33c-8.086-15.15-20.68-27.55-36.4-35.43l2.888-11.06c1.867-7.158-1.9-22.19-17.26-22.19-7.92 0-15.14 5.288-17.23 13.28l-2.865 10.97c-7.701-.28-26.9-.648-48.75 13.63l-8.673-8.74c-3.777-3.873-15.44-9.779-25.19-.37-7.062 6.823-7.225 18.04-.371 25.07l9.14 9.374c-11.96 18.85-10.27 28.38-15.88 46.61-8.023-3.758-11.44-5.943-16.66-5.943-6.69 0-13.09 3.763-16.13 10.19-4.188 8.856-.36 19.42 8.546 23.58l8.797 4.115c-14.91 22.05-34.42 33.57-34.83 33.83L391.1 294.7c-3.9-8.901-14.4-13.001-23.4-9.101-9 3.959-13.08 14.42-9.115 23.39l4.041 9.127c-16.38 4.559-27.93 4.345-46.15 16.94l-9.996-9.012c-6.969-6.303-18.28-6.33-25.15 1.235-6.609 7.26-6.053 18.47 1.24 25.04l9.713 8.756c-8.49 14.18-12.74 30.77-11.64 48.17l-11.86 3.512c-9.428 2.793-14.8 12.66-11.99 22.05 2.781 9.385 12.69 14.71 22.15 11.94l11.34-3.359c8.287 15.49 20.99 27.86 36.38 35.57l-2.839 10.85c-2.482 9.477 3.224 19.16 12.75 21.62 9.566 2.482 19.25-3.221 21.72-12.69l2.82-10.78a83.613 83.613 0 0 0 16.75-1.102c11.37-1.893 22.23-5.074 33.1-8.24l3.379 9.455c3.305 9.225 13.5 14.11 22.75 10.76 9.266-3.279 14.1-13.41 10.81-22.65l-3.498-9.792c15.41-6.654 30.08-14.46 43.95-23.57l6.321 8.429c5.891 7.84 17.05 9.443 24.93 3.602 7.885-5.863 9.498-16.97 3.617-24.82l-6.457-8.611c12.66-10.78 24.33-22.54 34.96-35.33l8.816 6.413c7.932 5.795 19.07 4.074 24.89-3.855 5.809-7.908 4.072-18.1-3.874-24.77l-8.885-6.465c8.893-13.88 16.54-28.52 22.99-43.91l10.47 3.59c9.334 3.186 19.43-1.719 22.64-10.99 3.211-9.258-1.739-19.35-11.04-22.53l-10.33-3.541c5.744-20.5 9.424-31.81 8.338-49.26L627.3 227.3zM416 416c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32c0 17.7-14.3 32-32 32zM272.3 226.4c9-3.959 13.08-14.42 9.115-23.39l-4.015-9.11c16.38-4.561 27.93-4.345 46.15-16.94l9.996 9.012c6.969 6.301 18.28 6.326 25.15-1.236 6.609-7.26 6.053-18.47-1.24-25.04l-9.713-8.756c8.49-14.18 12.74-30.77 11.64-48.18l11.86-3.511c9.428-2.793 14.8-12.66 11.99-22.05-2.781-9.385-12.69-14.71-22.15-11.94l-11.34 3.357C341.5 53.13 328.8 40.76 313.4 33.05l2.838-10.85C318.7 12.73 313 3.04 303.5.581c-9.566-2.482-19.25 3.222-21.72 12.69l-2.82 10.78a82.985 82.985 0 0 0-16.76 1.099c-11.4 1.89-23.1 5.07-33.1 8.24l-3.4-9.46c-3.3-9.22-13.5-14.103-23.6-10.76-8.4 3.28-13.2 13.42-9.9 22.65l3.498 9.793C180.2 52.27 165.6 60.07 151.7 69.19l-6.3-8.43c-5.9-7.84-17.1-9.44-24.9-3.6-7.9 5.86-10.4 16.97-3.7 24.82l6.457 8.611C110.6 101.4 98.96 113.1 88.34 125.9l-8.82-6.4c-7.932-5.795-19.08-4.074-24.89 3.855-5.809 7.908-4.07 19 3.875 24.77l8.885 6.465C58.5 168.5 50.86 183.1 44.41 198.5l-10.48-3.6c-9.334-3.186-19.44 1.721-22.64 10.99-3.204 9.31 1.75 19.41 11.05 22.51l10.33 3.541C26.93 252.5 23.25 263.8 24.33 281.2l-11.58 3.5c-9.441 2.7-14.811 12.6-12.006 22 3.041 10.21 13.57 14.52 22.14 11.95l11.27-3.33c8.086 15.15 20.68 27.55 36.39 35.43l-2.887 11.06C65.792 368.966 69.56 384 84.917 384c7.92 0 15.14-5.287 17.23-13.28l2.863-10.97c7.701.277 26.9.646 48.76-13.63l8.59 8.809c3.777 3.873 15.44 9.779 25.19.37 7.062-6.823 7.225-18.04.371-25.07l-9.14-9.374c11.96-18.85 10.27-28.38 15.88-46.61 8.025 3.756 11.44 5.943 16.66 5.943 6.69 0 13.09-3.762 16.13-10.19 4.149-8.898.349-19.398-8.551-23.598l-8.8-4.1c14.9-22.1 34.4-33.6 34.8-33.8l3.922 8.856C252.8 226.2 263.3 230.3 272.3 226.4zM128 256c-17.7 0-32-14.3-32-32.9 0-17.67 14.33-32 32-32s32 14.33 32 32c0 18.6-14.3 32.9-32 32.9zm80-96c-8.836 0-16-7.164-16-16 0-8.838 7.164-16 16-16s16 7.162 16 16c0 8.8-7.2 16-16 16z" />
  </svg>
);

const SvgBacteriaSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBacteriaSolid;
