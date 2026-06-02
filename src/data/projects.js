const projects = [
  {
    id: 1,
    title: 'Restaurant Landing Page',
    thumbClass: 'thumb-restaurant',
    icon: '🍽️',
    tags: [
      { label: 'HTML',        highlight: true },
      { label: 'CSS',         highlight: true },
      { label: 'JavaScript',  highlight: true },
      { label: 'UI Design',   highlight: false },
    ],
    description:
      'A fully responsive, visually rich landing page for a restaurant brand — featuring menu sections, a reservation call-to-action, and smooth scroll interactions. Built with vanilla HTML, CSS, and JavaScript.',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Campus E-Commerce Portal',
    thumbClass: 'thumb-ecommerce',
    icon: '🛒',
    tags: [
      { label: 'React',       highlight: true },
      { label: 'JavaScript',  highlight: true },
      { label: 'CSS',         highlight: true },
      { label: 'Auth',        highlight: false },
    ],
    description:
      'A student-facing marketplace where users can create accounts, browse product listings, and complete purchases. Built in React with a component-based architecture, user authentication, and a shopping cart system.',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard App',
    thumbClass: 'thumb-weather',
    icon: '🌤️',
    tags: [
      { label: 'JavaScript',  highlight: true },
      { label: 'REST API',    highlight: true },
      { label: 'CSS',         highlight: false },
    ],
    description:
      'A real-time weather app that fetches live data from a public weather API, displaying current conditions and a 5-day forecast with dynamic background changes based on weather state.',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Personal Blog Platform',
    thumbClass: 'thumb-blog',
    icon: '✍️',
    tags: [
      { label: 'React',       highlight: true },
      { label: 'NestJS',      highlight: true },
      { label: 'PostgreSQL',  highlight: false },
    ],
    description:
      'A full-stack blogging platform with a React frontend and NestJS backend. Features post creation, category filtering, and a clean reading experience — exploring a full frontend-to-API workflow.',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default projects;
