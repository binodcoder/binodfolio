const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://binodcoder.github.io/binodfolio',
  title: 'BB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Binod Bhandari',
  role: 'Graduate Software Engineer',
  description:
    'MSc Computer Science graduate with distinction and experience developing mobile and web applications using Flutter, Spring Boot, and MySQL. Skilled in delivering innovative, user-focused solutions, including GDPR-compliant platforms. Seeking to contribute technical expertise to an administrative/IT system role in the UK.',
  resume:
    'https://1drv.ms/b/c/c4e7f71ed159e7bf/EdzGTkMLvL1IkaYFhuqx27sBkwS6loLtk0jJDLeuK8IoVg?e=AUARhX',
  social: {
    linkedin: 'https://www.linkedin.com/in/binodcoder/',
    github: 'https://github.com/binodcoder',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'During my postgraduate program, I built web and mobile applications for a job portal, incorporating advanced security measures such as JWT authentication and AES-256 encryption. The platform features job posting, application management, and user role-based access, ensuring a seamless experience for all stakeholders. I also prioritized GDPR compliance and developed a responsive user interface tailored for both web and mobile platforms, delivering a secure and user-friendly solution.',
    stack: ['Flutter', 'BLoC', 'Spring Boot'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'I developed a mobile app designed for waitstaff in restaurants and hotels to streamline food order management, enhancing efficiency and accuracy in service. The app gained traction quickly, achieving over 100 downloads, reflecting its practicality and user-focused design.',
    stack: ['Flutter', 'Provider', 'MVC'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      ' As part of my postgraduate studies, I built an offline blogging platform that empowers users with full control over their posts and media, ensuring privacy and accessibility even without an internet connection. The platform features intuitive navigation and a robust search functionality, enabling users to effortlessly manage and locate their content. This project highlights my ability to design and develop user-centric solutions tailored for seamless offline experiences.',
    stack: ['Flutter', 'BLoC', 'SQLite'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Material UI',
  'Jest',
  'Java',
  'Spring Boot',
  'MySQL',
  'MongoDB',
  'Dart',
  'Flutter',
  'BloC',
  'Mokito',
  'JUnit',
  'RESTful API',
  'Clean Code',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'binodcoder@mail.com',
}

export { header, about, projects, skills, contact }
