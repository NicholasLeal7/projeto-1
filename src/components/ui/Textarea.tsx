import './Textarea.scss';

type Props = {
    value: string,
    placeholder: string,
    onChange: (value: string) => void
}
export const Textarea = ({ value, placeholder, onChange }: Props) => {
    return (
        <textarea className='input-default' placeholder={placeholder} onChange={(evt) => onChange(evt.target.value)} value={value}></textarea>
    );
};