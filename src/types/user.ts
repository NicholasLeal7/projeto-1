export type User = {
    name: string,
    profession: string,
    biography: string,
    profilePic: string,
    contact: {
        email: string,
        phoneNumber: string,
        telephoneNumber?: string
    },
    socialMedia?: {
        linkedin?: string,
        github?: string,
        twitter?: string,
        instagram?: string,
        facebook?: string
    },
    education: {
        course: string,
        institute: string,
        period: string,
        description: string
    }[],
    experience: {
        profession: string,
        company: string,
        period: string,
        description: string
    }[]
};