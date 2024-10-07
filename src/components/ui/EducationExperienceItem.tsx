import './EducationExperienceItem.scss';

type Props = {
    label: string,
    subtitle: string,
    period: string,
    description: string
}
export const EducationExperienceItem = ({ label, subtitle, period, description }: Props) => {
    return (
        <div className="education-experience-item">
            <div className='label'>{label}</div>
            <div className="subtitle">{subtitle}</div>
            <div className="period">{period}</div>
            <p>{description}</p>
        </div>
    );
};