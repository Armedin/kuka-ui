import { HTMLAttributes } from 'react';
export interface BadgeProps extends HTMLAttributes<any> {
    color?: 'primary' | 'error' | 'info' | 'success' | 'warning';
    content?: string;
    onRemove?: () => void;
}
declare const Badge: (props: BadgeProps) => JSX.Element;
export default Badge;
