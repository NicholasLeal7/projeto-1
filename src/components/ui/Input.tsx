import './Input.scss';

type Props = {
    value: string,
    placeholder: string,
    onChange: (value: string) => void
}
export const Input = ({ value, placeholder, onChange }: Props) => {
    return (
        <input className='input-default' type="text" value={value} placeholder={placeholder} onChange={(evt) => onChange(evt.target.value)} />
    );
};