import { User } from "@/types/user";

export const user: User = {
    name: 'Niko',
    profession: 'Web Developer',
    biography: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est corporis quos, aliquid ipsa tempore incidunt officiis numquam molestiae eum distinctio deleniti nisi dolore. Quidem pariatur quia a, iusto odit facilis?',
    profilePic: 'https://wallpapers.com/images/high/shadow-boy-white-eyes-unique-cool-pfp-nft-13yuypusuweug9xn.webp',
    contact: {
        email: 'nicolasleal73@hotmail.com',
        phoneNumber: '11969566534',
        telephoneNumber: '1136095868'
    },
    socialMedia: {
        github: 'https://github.com/NicholasLeal7',
        linkedin: 'https://www.linkedin.com/in/nicolasalmeida/'
    },
    education: [
        {
            course: 'Bachelor of Science in Computer Science',
            institute: 'University of Technology',
            period: '2015 - 2019',
            description: 'Focused on software development, data structures, and algorithms.'
        },
        {
            course: 'Master in Web Development',
            institute: 'Tech University',
            period: '2020 - 2022',
            description: 'Specialized in advanced web technologies and frameworks.'
        }
    ],
    experience: [
        {
            profession: 'Front-end Developer',
            company: 'Tech Solutions Inc.',
            period: '2019 - 2021',
            description: 'Developed user-friendly web interfaces using React and TypeScript.'
        },
        {
            profession: 'Full Stack Developer',
            company: 'Innovatech',
            period: '2021 - 2023',
            description: 'Worked on various projects, primarily using Node.js and Express for backend development.'
        },
        {
            profession: 'Senior Software Engineer',
            company: 'Global Tech Corp.',
            period: '2023 - Present',
            description: 'Leading a team of developers to build scalable web applications and improve system architecture.'
        }
    ]
};