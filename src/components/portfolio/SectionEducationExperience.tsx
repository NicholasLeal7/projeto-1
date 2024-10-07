import { EducationExperienceItem } from '../ui/EducationExperienceItem';
import './SectionEducationExperience.scss';
import { user } from '@/data/user';

export const SectionEducationExperience = () => {
    return (
        <section className="section-education-experience" id="education_and_experience_portfolio">
            <div className="education-experience-content">
                <div className="education-experience-bullet">
                    <h2>Educação</h2>
                    <div className="education-experience-area">
                        {user.education.map((val) => {
                            return <EducationExperienceItem key={Math.random() * 100} label={val.course} subtitle={val.institute} description={val.description} period={val.period} />
                        })}
                    </div>
                </div>

                <div className="education-experience-bullet">
                    <h2>Experiência</h2>
                    <div className="education-experience-area">
                        {user.experience.map((val) => {
                            return <EducationExperienceItem key={Math.random() * 100} label={val.profession} subtitle={val.company} description={val.description} period={val.period} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};