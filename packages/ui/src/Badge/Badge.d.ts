export interface BadgeProps {
    color?: 'primary' | 'error' | 'info' | 'success' | 'warning';
    content?: string;
}
declare const Badge: (props: BadgeProps) => JSX.Element;
export default Badge;
