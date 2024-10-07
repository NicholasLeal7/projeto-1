import './Button.scss';

type Props = {
    label: string,
    style?: {
        height?: string,
        fontWeight?: string,
        width?: string
    }
}
export const Button = ({ label, style }: Props) => {
    return (
        <div className="btn-default" style={style}>
            {label}
        </div>
    );
};