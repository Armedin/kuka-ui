/// <reference types="react" />
export interface SkeletonProps {
    animation?: 'pulse' | 'wave' | 'shimmer' | false;
    children?: React.ReactNode;
    className?: string;
    variant?: 'circle' | 'rectangle' | 'text';
    height?: number | string;
    width?: number | string;
    style?: any;
}
declare const Skeleton: ({ animation, className, height, width, variant, style, children, }: SkeletonProps) => JSX.Element;
export default Skeleton;
