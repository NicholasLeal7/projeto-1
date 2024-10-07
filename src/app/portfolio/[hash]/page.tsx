import { HeaderPortfolio } from '@/components/portfolio/HeaderPortfolio';
import './page.scss';
import { SectionHomePortfolio } from '@/components/portfolio/SectionHomePortfolio';
import { SectionContact } from '@/components/portfolio/SectionContact';
import { SectionEducationExperience } from '@/components/portfolio/SectionEducationExperience';
import { FooterPortfolio } from '@/components/portfolio/Footer';

export default function Page() {
    return (
        <div className="portfolio-page dark">
            <main className="portfolio-main" id='home_portfolio'>
                <HeaderPortfolio />
                <SectionHomePortfolio />
                <SectionEducationExperience />
                <SectionContact />
            </main>
            <FooterPortfolio />
        </div>
    );
};