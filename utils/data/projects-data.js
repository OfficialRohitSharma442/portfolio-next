import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
      id: 1,
        name: 'TSTA Academy – Full Stack EdTech Platform',
        description: "Architected and built a complete SaaS EdTech platform including a custom CMS, admin panel, and SSR workflow. I developed scalable REST APIs using Node.js, PostgreSQL, and Sequelize ORM. Implemented secure authentication with OAuth (Google/Facebook), JWT, and RBAC policies. Integrated HDFC payment gateway with secure webhook processing for automated enrollment. Optimized application performance by 40% and managed production deployment on AWS (EC2, Nginx, S3, CloudFront) with CI/CD pipelines.",
        tools: ['Next.js', 'Node.js', 'PostgreSQL', 'Sequelize ORM', 'AWS EC2', 'AWS S3', 'AWS CloudFront', 'Nginx', 'HDFC Payment Gateway', 'Redis'],
        role: 'Full Stack Developer',
        code: '', // Yahan Github link daal dena agar public hai
        demo: 'https://tstradingacademy.com/', // Yahan live link daal dena
        image: crefin,
    },
{
        id: 2, // ID apne sequence ke hisaab se adjust kar lena
        name: 'Broker-Pad – Real Estate CRM Platform',
        description: "Developed a cross-platform Real Estate CRM solution featuring a React Native mobile app (Android/iOS) and a React.js web dashboard. Built a robust backend using Node.js and Express with MongoDB to manage properties, leads, and role-based access. Implemented secure JWT authentication and integrated Firebase for real-time notifications and storage. Managed the complete lifecycle from database design to deployment on Play Store and TestFlight.",
        tools: ['React Native', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Firebase', 'JWT'],
        role: 'Full Stack Developer',
        code: '', // Private repo hai to blank chhod dena ya 'Private' likh dena
        demo: '', // Play store link ya website link yahan daal sakte ho
        image: crefin, // Upar 'import brokerPad from ...' lagana mat bhoolna
    },
    {
        id: 3,
        name: 'Human Resource Management System',
        description: 'Developed HRMS - HR365, a cloud-based Human Resource Management System that integrates key HR functions including Employee Directory, Time Off Manager, Onboarding, Timesheet, Expense Tracker, and Recruitment Management. Designed to streamline HR operations, enhance employee engagement, and support compliance, the platform delivers real-time insights and automation to improve productivity and decision-making.',
        tools: ['Tailwind CSS', "Spfx", "React js", "TypeScript", "Azure", "redux", "RTK query"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 4,
        name: 'Timesheet 365',
        description: 'My team and I Developed a cloud-based timesheet app for small to medium-sized businesses, enhancing project management and billing accuracy. Simplified time reporting with an intuitive interface. Integrated user-friendly approval processes in SharePoint. Created real-time reports accessible on desktop and mobile. Used React, Redux, RTK Query, and SharePoint for backend development.',
        tools: ['React', 'SCSS', 'Express', 'TypeScript', 'MongoDB', 'Azure', 'Git'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 5,
        name: 'Time of Manager (Leave Management Application)',
        description: "My team and I Developed advanced leave management features, including manager approval workflows, automated leave approval, and multi-tier approval structures. Collaborated with cross-functional teams to gather requirements,design solutions, and ensure seamless integration..",
        tools: ['ReactJS', 'Fluent UI', 'Redux', 'Sun Editor', "Calendar", "Sharepoint", 'SCSS'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },