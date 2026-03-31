export const profile = {
  name: 'Dr. Pranab Kumar Panday',
  title: 'Professor',
  affiliations: ['University of Rajshahi', 'Adjunct / Research Center roles'],
  location: 'Rajshahi, Bangladesh',
  mission: 'Advancing public policy research and governance innovation through evidence-based analysis, with focus on urban development, social accountability, and gender-inclusive governance in South Asia.',
  email: 'pranab@example.edu',
  office: 'Department of Public Administration',
  address: 'University of Rajshahi, Rajshahi 6205, Bangladesh',
  mobile: ['+88 01741-081664 (Cell)', '+88 0721-711923 (Office)', '+88 02588866922 (Residence)'],
  cvUrl: '/cv.pdf',
  calendlyUrl: 'https://calendly.com/pranab-panday',
  scholarUrl: 'https://scholar.google.com/citations?user=example',
  researchGateUrl: 'https://www.researchgate.net/profile/Pranab-Panday',
}

export const impactStats = [
  { label: 'Years teaching & research', value: 27, suffix: '+', verified: true, icon: 'GraduationCap' },
  { label: 'Consultancy projects', value: 50, suffix: '+', verified: true, icon: 'Briefcase' },
  { label: 'Books published', value: 19, suffix: '', verified: true, icon: 'BookOpen' },
  { label: 'Journal articles', value: 54, suffix: '', verified: true, icon: 'FileText' },
  { label: 'Google Scholar citations', value: 1838, suffix: '', verified: true, icon: 'Quote' },
  { label: 'Funded grants', value: 12, suffix: '+', verified: true, icon: 'Award' },
]

export const scholarImpact = {
  citations: 1838,
  hIndex: 22,
  i10Index: 42,
  yearsExperience: 27,
  totalPublications: 54,
  books: 19,
}

export const researchThemes = [
  { id: 'policy', title: 'Public Policy Analysis', short: 'Policy design, implementation & evaluation.', icon: 'Policy' },
  { id: 'urban', title: 'Urban & Local Governance', short: 'Decentralization, municipal governance, urban development.', icon: 'Urban' },
  { id: 'accountability', title: 'Social Accountability', short: 'Citizen engagement, transparency, accountability mechanisms.', icon: 'Accountability' },
  { id: 'gender', title: 'Gender & Governance', short: 'Gender mainstreaming, women in governance, inclusive institutions.', icon: 'Gender' },
  { id: 'comparative', title: 'Comparative Public Administration', short: 'Cross-country and cross-sector comparative research.', icon: 'Comparative' },
  { id: 'sdg', title: 'Sustainable Governance / SDGs', short: 'SDG localization, sustainable development, grant-led research.', icon: 'SDG' },
]

export const skillsData = [
  {
    id: 1,
    title: "Governance & Policy",
    desc: "Expertise in Public Administration, Policy Analysis, and Urban/Rural Governance.",
    icon: "government"
  },
  {
    id: 2,
    title: "Strategic Management",
    desc: "Advanced skills in Performance Management and Gender-focused Governance.",
    icon: "strategy"
  },
  {
    id: 3,
    title: "Research Design",
    desc: "Proven ability to design, implement, and manage large-scale research projects.",
    icon: "research"
  },
  {
    id: 4,
    title: "Academic Leadership",
    desc: "Skilled in curriculum development and academic quality assurance processes.",
    icon: "academy"
  },
  {
    id: 5,
    title: "Consultancy",
    desc: "Extensive experience in collaborative and interdisciplinary research consultancy.",
    icon: "consultant"
  },
  {
    id: 6,
    title: "Technical Tools",
    desc: "Proficient in SPSS, MS Word, Excel, PowerPoint, and MS Access.",
    icon: "tech"
  }
];


export const featuredWork = {
  books: [
    { id: 1, title: 'Governance and Public Policy in Bangladesh', year: 2023, cover: null, doi: null, why: 'Comprehensive volume on governance reforms in Bangladesh.' },
    { id: 2, title: 'Gender and Local Governance', year: 2022, cover: null, doi: null, why: 'Evidence on gender-inclusive local government.' },
    { id: 3, title: 'Social Accountability in South Asia', year: 2021, cover: null, doi: null, why: 'Cross-country analysis of accountability mechanisms.' },
  ],
  articles: [
    { id: 1, title: 'Decentralization and Service Delivery', venue: 'Public Administration Review', year: 2023, doi: '10.1000/xyz', why: 'Impact on local service quality.' },
    { id: 2, title: 'Women in Local Government', venue: 'Governance', year: 2022, doi: '10.1000/abc', why: 'Barriers and enablers to participation.' },
    { id: 3, title: 'Policy Implementation in Developing Contexts', venue: 'Policy Studies Journal', year: 2021, doi: null, why: 'Framework for implementation analysis.' },
  ],
  projects: [
    { id: 1, title: 'UNDP Local Governance Assessment', org: 'UNDP', year: 2023, why: 'National-level policy input.' },
    { id: 2, title: 'Oxfam Gender & Governance Programme', org: 'Oxfam', year: 2022, why: 'Regional capacity building.' },
    { id: 3, title: 'World Vision Baseline Study', org: 'World Vision', year: 2021, why: 'Evidence for programme design.' },
  ],
}

export const timeline = [
  { role: 'Lecturer', org: 'University of Rajshahi', period: '1997', category: 'teaching', achievements: ['Introductory courses in Public Administration'] },
  { role: 'Assistant Professor', org: 'University of Rajshahi', period: '2003', category: 'teaching', achievements: ['Core PA courses', 'Early research publications'] },
  { role: 'Associate Professor', org: 'University of Rajshahi', period: '2010', category: 'teaching', achievements: ['Graduate supervision', 'Consultancy projects'] },
  { role: 'Professor', org: 'University of Rajshahi', period: '2015', category: 'teaching', achievements: ['Department leadership', 'National/international grants'] },
  { role: 'Director, Bureau of Research', org: 'University of Rajshahi', period: '2016–2019', category: 'leadership', achievements: ['Research administration', 'Institutional research strategy'] },
  { role: 'Adjunct Professor', org: 'BRAC University IGS', period: '2018–Present', category: 'teaching', achievements: ['Collaborative teaching', 'Policy advisory'] },
]

// ../data/content.js

export const teachingExperience = [
  {
    role: 'Professor, Department of Public Administration',
    org: 'University of Rajshahi, Bangladesh',
    period: 'June 2012 – Present',
    responsibilities: [
      'Taught courses, including Public Policy Analysis, Public Management, and Urban Policy and Development',
      'Supervised doctoral and master’s theses',
      'Led major research projects'
    ],
    significantContributions: [
      'Developed and integrated new curricula focusing on Social Accountability and Gender and Governance',
      'Advanced research on Women’s Political Participation and Ethnic Conflict in the CHT region',
      'Enhanced departmental strategic planning'
    ]
  },
  {
    role: 'Adjunct Professor, Research Division',
    org: 'Central Queensland University, Australia',
    period: 'November 2022 – October 2025',
    responsibilities: [
      'Design and deliver advanced research-focused Public Policy and Public Management courses',
      'Supervise graduate research projects',
      'Collaborate on international research initiatives'
    ],
    significantContributions: [
      'Fostered interdisciplinary research on Global Governance and International Relations',
      'Supported the development of innovative research methodologies in public administration'
    ]
  },
  {
    role: 'Associate Professor, Department of Public Administration',
    org: 'University of Rajshahi, Bangladesh',
    period: 'February 2007 – June 2012',
    responsibilities: [
      'Instructed courses on public sector policy, comparative policy, and public administration',
      'Conducted research',
      'Participated in departmental and university committees'
    ],
    significantContributions: [
      'Expanded course offerings to include emerging topics such as Human Resources Management and Organization Theory',
      'Mentored junior faculty',
      'Contributed significantly to curriculum development'
    ]
  },
  {
    role: 'Assistant Professor, Department of Public Administration',
    org: 'University of Rajshahi, Bangladesh',
    period: 'October 2001 – February 2007',
    responsibilities: [
      'Taught undergraduate and graduate courses',
      'Developed course materials',
      'Conducted research in public administration and policy'
    ],
    significantContributions: [
      'Introduced innovative teaching approaches',
      'Actively participated in departmental activities',
      'Supported the development of new academic programs in Public Financial Management and NGO roles'
    ]
  },
  {
    role: 'Lecturer, Department of Public Administration',
    org: 'University of Rajshahi, Bangladesh',
    period: 'October 1998 – October 2001',
    responsibilities: [
      'Delivered lectures on foundational topics in Public Administration',
      'Assisted in research projects',
      'Contributed to departmental activities'
    ],
    significantContributions: [
      'Played a role in establishing new undergraduate courses',
      'Supported the development of teaching resources',
      'Laid the groundwork for future academic programs in Urban Policy and Development'
    ]
  }
];

export const educationTimeline = [
  {
    role: 'Postdoctoral Research (Senior Fulbright Fellow)',
    org: 'Cornell University, Ithaca, New York, USA',
    period: '2012',
    achievements: ['Research Title: "Gender Mainstreaming in Bangladesh: The Role of NGOs"']
  },
  {
    role: 'PhD in Public Administration',
    org: 'City University of Hong Kong, Hong Kong',
    period: '2009',
    achievements: ['Dissertation Title: "Women\'s Political Participation in Bangladesh: Institutional Reforms, Actors, and Outcomes"']
  },
  {
    role: 'M.Phil in Public Administration',
    org: 'University of Bergen, Norway',
    period: '2004',
    achievements: ['Dissertation Title: "Problems of Urban Governance in Bangladesh: A Study on the Lack of Coordination in Policy Implementation in the Rajshahi City Corporation"']
  },
  {
    role: 'Master of Social Science (MSS) in Public Administration',
    org: 'University of Rajshahi, Bangladesh',
    period: '1996',
    achievements: ['']
  },
  {
    role: 'Bachelor of Social Science (BSS) (Hons) in Public Administration',
    org: 'University of Rajshahi, Bangladesh',
    period: '1995',
    achievements: ['']
  }
];

export const awards = [
  { title: 'Fulbright Scholar', body: 'Fulbright', year: '2010', type: 'International' },
  { title: 'UGC Research Award', body: 'University Grants Commission', year: '2018', type: 'National' },
  { title: 'Best Paper Award', body: 'APSA Conference', year: '2019', type: 'International' },
  { title: 'University Gold Medal', body: 'University of Rajshahi', year: '1995', type: 'University' },
]

export const partners = [
  'UNDP', 'Oxfam', 'World Vision', 'USAID', 'DFID', 'Asian Development Bank', 'Fulbright',
]

export const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/education', label: 'Education' },
  { path: '/research', label: 'Research & Consultancy' },
  { path: '/publications', label: 'Publications' },
  { path: '/supervisory', label: 'Supervisory' },
  { path: '/teaching', label: 'Teaching & Supervision' },
  { path: '/consultancy', label: 'Consultancy' },
  { path: '/leadership', label: 'Leadership & Service' },
  { path: '/administrative-responsibilities', label: 'Administrative Responsibilities' },
  { path: '/awards', label: 'Awards' },
  { path: '/teaching', label: 'Teaching' },
  { path: '/media', label: 'Media & Talks' },
  { path: '/contact', label: 'Contact' },
]

/** Navbar: main items with optional submenu. Column 2 = menu, Column 3 = Contact + theme + CV */
export const navMenu = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/education', label: 'Education' },
  {
    label: 'Research & Work',
    children: [
      { path: '/research', label: 'Research & Consultancy' },
      { path: '/publications', label: 'Publications' },
      { path: '/administrative-responsibilities', label: 'Administrative Responsibilities' },
    ],
  },
  {
    label: 'Academic',
    children: [
      { path: '/teaching', label: 'Teaching' },
      { path: '/supervisory', label: 'Supervisory' },
    ],
  },
  {
    path: '/awards', label: 'Awards'
  },
]



export const courses = {
  undergrad: [
    { title: 'Introduction to Public Administration', outcomes: 'Foundations of PA', topics: 'Theories, institutions', assessment: 'Exam, assignments' },
  ],
  masters: [
    { title: 'Public Policy Analysis', outcomes: 'Policy cycle, evaluation', topics: 'Agenda-setting, implementation', assessment: 'Research paper, exam' },
    { title: 'Governance and Development', outcomes: 'Governance concepts', topics: 'Accountability, participation', assessment: 'Case study, exam' },
  ],
  phd: [
    { title: 'Advanced Research Methods', outcomes: 'Quantitative & qualitative design', topics: 'Mixed methods, ethics', assessment: 'Proposal, seminar' },
  ],
}

export const supervision = {
  completed: [
    { degree: 'PhD', title: 'Local Government and Service Delivery', year: 2022, student: 'Student Name' },
    { degree: 'MPhil', title: 'Gender in Urban Governance', year: 2021, student: 'Student Name' },
  ],
  examiner: [
    { role: 'External Examiner', org: 'University of Dhaka', period: '2020–present' },
  ],
}

export const grants = [
  { id: 1, title: 'SDG Localization in Bangladesh', sponsor: 'UNDP', duration: '2022–2024', budget: 'USD 120,000', role: 'PI', objective: 'Assess local government capacity for SDG implementation.', theme: 'sdg' },
  { id: 2, title: 'Gender and Governance', sponsor: 'Oxfam', duration: '2021–2023', budget: 'USD 80,000', role: 'Component Lead', objective: 'Research on women in local councils.', theme: 'gender' },
]

export const consultancyList = [
  { org: 'UNDP', role: 'Policy Specialist', period: '2023', objective: 'Local governance assessment', deliverables: 'Report, recommendations' },
  { org: 'Oxfam', role: 'Research Lead', period: '2022', objective: 'Gender & governance baseline', deliverables: 'Baseline report' },
  { org: 'World Vision', role: 'Evaluator', period: '2021', objective: 'Programme evaluation', deliverables: 'Evaluation report' },
]

export const leadership = [
  { role: 'Director', org: 'Research Center', period: '2018–present', outcomes: ['Research coordination', 'Partnership development'] },
  { role: 'QAC Member', org: 'University', period: '2016–2020', outcomes: ['Quality assurance', 'Curriculum review'] },
]

export const talks = [
  { title: 'Keynote: Governance in South Asia', event: 'APSA Conference', date: '2023', type: 'Keynote', theme: 'Governance' },
  { title: 'Webinar: Gender and Local Government', event: 'Online', date: '2022', type: 'Webinar', theme: 'Gender' },
]


export const publicationsByType = {
  "books": [
    {
      "id": "b1",
      "type": "book",
      "citation": "Panday, P. K. and Ahsan, A. H. M. Kamrul (2025). Inclusive Governance and Marginalised Communities in South Asia: The Case of Bangladesh. London and New delhi: Oxford University Press (Accepted).",
      "authors": "Panday, P. K. and Ahsan, A. H. M. Kamrul",
      "year": "2025",
      "title": "Inclusive Governance and Marginalised Communities in South Asia: The Case of Bangladesh",
      "venue": "London and New delhi: Oxford University Press",
      "doi": null,
      "status": "Accepted",
      "tags": [
        "Governance"
      ]
    },
    {
      "id": "b2",
      "type": "book",
      "citation": "Panday, P. K. and Ahsan, A. H. M. Kamrul (2025). Resource Mobilisation in South Asia: Local Governance and Financial Sustainability in Bangladesh. London: Routledge (In Press)",
      "authors": "Panday, P. K. and Ahsan, A. H. M. Kamrul",
      "year": "2025",
      "title": "Resource Mobilisation in South Asia: Local Governance and Financial Sustainability in Bangladesh",
      "venue": "London: Routledge",
      "doi": null,
      "status": "In Press",
      "tags": [
        "Governance"
      ]
    },
    {
      "id": "b3",
      "type": "book",
      "citation": "Panday, P. K. and Ahsan, A. H. M. Kamrul (2025). Digital Revolution for the Vulnerable: The Untold Story of Bangladesh's Social Safety Net Transformation, Singapore: Palgrave Macmillan (In Press).",
      "authors": "Panday, P. K. and Ahsan, A. H. M. Kamrul",
      "year": "2025",
      "title": "Digital Revolution for the Vulnerable: The Untold Story of Bangladesh's Social Safety Net Transformation, Singapore: Palgrave Macmillan",
      "venue": null,
      "doi": null,
      "status": "In Press",
      "tags": [
        "Digital Governance"
      ]
    },
    {
      "id": "b4",
      "type": "book",
      "citation": "Panday, P. K. and Ahsan, A. H. M. Kamrul (2025). Accountability in Local Governance in South Asia: The Role of Citizen Charters in Bangladesh. Singapore: Springer (In Press).",
      "authors": "Panday, P. K. and Ahsan, A. H. M. Kamrul",
      "year": "2025",
      "title": "Accountability in Local Governance in South Asia: The Role of Citizen Charters in Bangladesh",
      "venue": "Singapore: Springer",
      "doi": null,
      "status": "In Press",
      "tags": [
        "Governance",
        "Accountability",
        "Citizen Engagement"
      ]
    },
    {
      "id": "b5",
      "type": "book",
      "citation": "Panday, P. K., & Maruf, A. (2025). Local government transformation and citizen engagement in Bangladesh. London: Routledge.",
      "authors": "Panday, P. K., & Maruf, A",
      "year": "2025",
      "title": "Local government transformation and citizen engagement in Bangladesh",
      "venue": "London: Routledge.",
      "doi": null,
      "status": null,
      "tags": [
        "Local Governance",
        "Citizen Engagement"
      ]
    },
    {
      "id": "b6",
      "type": "book",
      "citation": "Panday, P. K. (2024). Triumph over adversity: Bangladesh's success in battling COVID-19—State, society, economy and politics. Dhaka: Katha Prokash.",
      "authors": "Panday, P. K",
      "year": "2024",
      "title": "Triumph over adversity: Bangladesh's success in battling COVID-19—State, society, economy and politics",
      "venue": "Dhaka: Katha Prokash.",
      "doi": null,
      "status": null,
      "tags": [
        "COVID-19"
      ]
    },
    {
      "id": "b7",
      "type": "book",
      "citation": "Panday, P. K., & Chowdhury, S. (2023). Citizen charter and local service delivery in Bangladesh. London: Palgrave Macmillan.",
      "authors": "Panday, P. K., & Chowdhury, S",
      "year": "2023",
      "title": "Citizen charter and local service delivery in Bangladesh",
      "venue": "London: Palgrave Macmillan.",
      "doi": null,
      "status": null,
      "tags": [
        "Citizen Engagement"
      ]
    },
    {
      "id": "b8",
      "type": "book",
      "citation": "Panday, P. K., & Chowdhury, S. (2021a). Gender-responsive budgeting in South Asia: Experience of Bangladeshi local governance. London: Routledge.",
      "authors": "Panday, P. K., & Chowdhury, S",
      "year": "2021a",
      "title": "Gender-responsive budgeting in South Asia: Experience of Bangladeshi local governance",
      "venue": "London: Routledge.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Governance"
      ]
    },
    {
      "id": "b9",
      "type": "book",
      "citation": "Panday, P. K. (2021). A Tale of a Successful Leader: Corona Pandemic and Government Responses in Bangladesh. Dhaka: Bateshwar Barnon.",
      "authors": "Panday, P. K",
      "year": "2021",
      "title": "A Tale of a Successful Leader: Corona Pandemic and Government Responses in Bangladesh",
      "venue": "Dhaka: Bateshwar Barnon.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "b10",
      "type": "book",
      "citation": "Panday, P. K. (2020). Bangladesh: Essays on contemporary politics and governance. Dhaka: A H D Publications.",
      "authors": "Panday, P. K",
      "year": "2020",
      "title": "Bangladesh: Essays on contemporary politics and governance",
      "venue": "Dhaka: A H D Publications.",
      "doi": null,
      "status": null,
      "tags": [
        "Governance"
      ]
    },
    {
      "id": "b11",
      "type": "book",
      "citation": "Panday, P. K. (2020). The face of urbanisation and urban poverty in Bangladesh: Explaining the slum development initiatives in the light of global experiences. London: Palgrave Macmillan.",
      "authors": "Panday, P. K",
      "year": "2020",
      "title": "The face of urbanisation and urban poverty in Bangladesh: Explaining the slum development initiatives in the light of global experiences",
      "venue": "London: Palgrave Macmillan.",
      "doi": null,
      "status": null,
      "tags": [
        "Urban"
      ]
    },
    {
      "id": "b12",
      "type": "book",
      "citation": "Majumdar, M. J. H., & Panday, P. K. (2019). Government and NGOs in South Asia: Local collaboration in Bangladesh. London: Routledge.",
      "authors": "Majumdar, M. J. H., & Panday, P. K",
      "year": "2019",
      "title": "Government and NGOs in South Asia: Local collaboration in Bangladesh",
      "venue": "London: Routledge.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "b13",
      "type": "book",
      "citation": "Panday, P. K. (2019). From a Bottomless Basket to an Emerging Economy. Dhaka: AHDP Publishing House.",
      "authors": "Panday, P. K",
      "year": "2019",
      "title": "From a Bottomless Basket to an Emerging Economy",
      "venue": "Dhaka: AHDP Publishing House.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "b14",
      "type": "book",
      "citation": "Chowdhury, M. S., & Panday, P. K. (2018). Strengthening local governance in Bangladesh: Reforms, participation and accountability. New York: Springer.",
      "authors": "Chowdhury, M. S., & Panday, P. K",
      "year": "2018",
      "title": "Strengthening local governance in Bangladesh: Reforms, participation and accountability",
      "venue": "New York: Springer.",
      "doi": null,
      "status": null,
      "tags": [
        "Governance",
        "Accountability"
      ]
    },
    {
      "id": "b15",
      "type": "book",
      "citation": "Panday, P. K. (2017). Reforming urban governance in Bangladesh: The city corporation. London: Palgrave Macmillan.",
      "authors": "Panday, P. K",
      "year": "2017",
      "title": "Reforming urban governance in Bangladesh: The city corporation",
      "venue": "London: Palgrave Macmillan.",
      "doi": null,
      "status": null,
      "tags": [
        "Urban",
        "Governance"
      ]
    },
    {
      "id": "b16",
      "type": "book",
      "citation": "Panday, P. K. (2016). Women empowerment in South Asia: NGO interventions and agency building in Bangladesh. London: Routledge.",
      "authors": "Panday, P. K",
      "year": "2016",
      "title": "Women empowerment in South Asia: NGO interventions and agency building in Bangladesh",
      "venue": "London: Routledge.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "b17",
      "type": "book",
      "citation": "Panday, P. K. (2013). Women's political participation in Bangladesh: Institutional reforms, actors, and outcomes. New York & New Delhi: Springer.",
      "authors": "Panday, P. K",
      "year": "2013",
      "title": "Women's political participation in Bangladesh: Institutional reforms, actors, and outcomes",
      "venue": "New York & New Delhi: Springer.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "b18",
      "type": "book",
      "citation": "Ullah, A. K. M., & Panday, P. K. (Eds.). (2008). Theorising international migration: Integrating the context of Bangladesh. Germany: VDM Verlag Dr Mueller.",
      "authors": "Ullah, A. K. M., & Panday, P. K. (Eds.)",
      "year": "2008",
      "title": "Theorising international migration: Integrating the context of Bangladesh",
      "venue": "Germany: VDM Verlag Dr Mueller.",
      "doi": null,
      "status": null,
      "tags": [
        "Migration"
      ]
    },
    {
      "id": "b19",
      "type": "book",
      "citation": "Panday, P. K. (2008). Problems of urban governance in Bangladesh. India: Serials Publications.",
      "authors": "Panday, P. K",
      "year": "2008",
      "title": "Problems of urban governance in Bangladesh",
      "venue": "India: Serials Publications.",
      "doi": null,
      "status": null,
      "tags": [
        "Urban",
        "Governance"
      ]
    }
  ],
  "bookManuscripts": [
    {
      "id": "bm1",
      "type": "book_manuscript",
      "citation": "Panday, P. K. (2025). Trust in Local Government in Developing Countries: Lessons from Bangladesh. USA: Springer.",
      "authors": "Panday, P. K",
      "year": "2025",
      "title": "Trust in Local Government in Developing Countries: Lessons from Bangladesh",
      "venue": "USA: Springer.",
      "doi": null,
      "status": "Under Review",
      "tags": [
        "Local Governance"
      ]
    },
    {
      "id": "bm2",
      "type": "book_manuscript",
      "citation": "Panday, P. K. and Baroi, H. S (2025). Connecting Communities: Digital Governance and Local Service Delivery in Bangladesh. Peter Lang.",
      "authors": "Panday, P. K. and Baroi, H. S",
      "year": "2025",
      "title": "Connecting Communities: Digital Governance and Local Service Delivery in Bangladesh",
      "venue": "Peter Lang.",
      "doi": null,
      "status": "Under Review",
      "tags": [
        "Governance",
        "Digital Governance"
      ]
    }
  ],
  "chapters": [
    {
      "id": "c1",
      "type": "chapter",
      "citation": "Baroi, H.S., Panday, P.K. (2025). Empowering Communities: Unpacking the Role of ICT in Decentralization: A Case Study of Bangladesh's Union Digital Centre Initiative. In: Chhetri, D.P., Datta, P.K., Fernando, R.L.S., Shameem, A. (eds) Making Democratic Decentralization Work in South Asia. South Asian Public Administration. Springer, Cham. https://doi.org/10.1007/978-3-031-94468-0_18",
      "authors": "Baroi, H.S., Panday, P.K",
      "year": "2025",
      "title": "Empowering Communities: Unpacking the Role of ICT in Decentralization: A Case Study of Bangladesh's Union Digital Centre Initiative",
      "venue": "In: Chhetri, D.P., Datta, P.K., Fernando, R.L.S., Shameem, A. (eds) Making Democratic Decentralization Work in South Asia. South Asian Public Administration. Springer, Cham. https://doi.org/10.1007/978-3-031-94468-0_18",
      "doi": "10.1007/978-3-031-94468-0_18",
      "status": null,
      "tags": [
        "Digital Governance",
        "Decentralization"
      ]
    },
    {
      "id": "c2",
      "type": "chapter",
      "citation": "Panday, P. K., and Majumdar, J. H. (2025). Institutionalisation of Social Accountability in Local Governance: Role of NGOs in Bangladesh. In Onyango, G., and Jamil, I. (Eds). Routledge Handbook of Public Policy in the Global South. London: Routledge (In Press).",
      "authors": "Panday, P. K., and Majumdar, J. H",
      "year": "2025",
      "title": "Institutionalisation of Social Accountability in Local Governance: Role of NGOs in Bangladesh. In Onyango, G., and Jamil, I. (Eds). Routledge Handbook of Public Policy in the Global South",
      "venue": "London: Routledge",
      "doi": null,
      "status": "In Press",
      "tags": [
        "Governance",
        "Public Policy",
        "Accountability"
      ]
    },
    {
      "id": "c3",
      "type": "chapter",
      "citation": "Baroi, H. S., & Panday, P. K. (2024). Understanding Union Digital Centre (UDC) and its impact on service delivery at the local level. In S. Dhal, N. Singh, & A. M. Nasrullah (Eds.), Mapping governance innovations: Perspectives from South Asia. London: Routledge.",
      "authors": "Baroi, H. S., & Panday, P. K",
      "year": "2024",
      "title": "Understanding Union Digital Centre (UDC) and its impact on service delivery at the local level. In S. Dhal, N. Singh, & A. M. Nasrullah (Eds.), Mapping governance innovations: Perspectives from South Asia",
      "venue": "London: Routledge.",
      "doi": null,
      "status": null,
      "tags": [
        "Governance",
        "Digital Governance"
      ]
    },
    {
      "id": "c4",
      "type": "chapter",
      "citation": "Panday, P. K. (2022). Political empowerment of women through institution building: Role of NGOs in Bangladesh. In R. K. Kothari (Ed.), South Asia: Issues, challenges and prospects. New Delhi: Atlantic Publishers and Distributors.",
      "authors": "Panday, P. K",
      "year": "2022",
      "title": "Political empowerment of women through institution building: Role of NGOs in Bangladesh. In R. K. Kothari (Ed.), South Asia: Issues, challenges and prospects",
      "venue": "New Delhi: Atlantic Publishers and Distributors.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "c5",
      "type": "chapter",
      "citation": "Panday, P. K., & Majumdar, M. J. H. (2021). Local governments' provisions and sections in disaster: Lessons learned from the post-pandemic era. In S. Roy & D. Mandi (Eds.), Gender and the politics of disaster recovery: Dealing with the aftermath. London: Routledge.",
      "authors": "Panday, P. K., & Majumdar, M. J. H",
      "year": "2021",
      "title": "Local governments' provisions and sections in disaster: Lessons learned from the post-pandemic era. In S. Roy & D. Mandi (Eds.), Gender and the politics of disaster recovery: Dealing with the aftermath",
      "venue": "London: Routledge.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Local Governance",
        "Disaster"
      ]
    },
    {
      "id": "c6",
      "type": "chapter",
      "citation": "Panday, P. K., & Majumdar, M. J. H. (2021). Role of local government bodies in the new normal and the next normal: Bangladesh experience. In J. Chathukulam (Ed.), Local government in post-pandemic era. UK: Cambridge Scholars Publishing.",
      "authors": "Panday, P. K., & Majumdar, M. J. H",
      "year": "2021",
      "title": "Role of local government bodies in the new normal and the next normal: Bangladesh experience. In J. Chathukulam (Ed.), Local government in post-pandemic era",
      "venue": "UK: Cambridge Scholars Publishing.",
      "doi": null,
      "status": null,
      "tags": [
        "Local Governance"
      ]
    },
    {
      "id": "c7",
      "type": "chapter",
      "citation": "Panday, P. K. (2020). Politicians, bureaucrats and the working of Upazila Parishad in Bangladesh. In N. U. Ahmed (Ed.), Parliament, public policy, local government, and public service delivery in Bangladesh. Dhaka: University Press Limited.",
      "authors": "Panday, P. K",
      "year": "2020",
      "title": "Politicians, bureaucrats and the working of Upazila Parishad in Bangladesh. In N. U. Ahmed (Ed.), Parliament, public policy, local government, and public service delivery in Bangladesh",
      "venue": "Dhaka: University Press Limited.",
      "doi": null,
      "status": null,
      "tags": [
        "Local Governance",
        "Public Policy"
      ]
    },
    {
      "id": "c8",
      "type": "chapter",
      "citation": "Panday, P. K. (2018). Administrative system in Bangladesh: Reform initiative with failed outcomes. In I. Jamil et al. (Eds.), Civil service management and administrative system in South Asia. UK: Palgrave Macmillan.",
      "authors": "Panday, P. K",
      "year": "2018",
      "title": "Administrative system in Bangladesh: Reform initiative with failed outcomes. In I. Jamil et al. (Eds.), Civil service management and administrative system in South Asia",
      "venue": "UK: Palgrave Macmillan.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "c9",
      "type": "chapter",
      "citation": "Panday, P. K. (2017). Bureaucracy and politicians: Dynamics and challenges. In A. Farazmand (Ed.), Global encyclopedia of public administration, public policy, and governance. USA: Springer.",
      "authors": "Panday, P. K",
      "year": "2017",
      "title": "Bureaucracy and politicians: Dynamics and challenges. In A. Farazmand (Ed.), Global encyclopedia of public administration, public policy, and governance",
      "venue": "USA: Springer.",
      "doi": null,
      "status": null,
      "tags": [
        "Governance",
        "Public Policy"
      ]
    },
    {
      "id": "c10",
      "type": "chapter",
      "citation": "Panday, P. K. (2016). Women's participation in politics at the local level in Bangladesh: A perspective from good governance. In N. Ahmed (Ed.), Public policy and governance in Bangladesh: Forty years of experience. UK: Routledge.",
      "authors": "Panday, P. K",
      "year": "2016",
      "title": "Women's participation in politics at the local level in Bangladesh: A perspective from good governance. In N. Ahmed (Ed.), Public policy and governance in Bangladesh: Forty years of experience",
      "venue": "UK: Routledge.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Governance",
        "Public Policy"
      ]
    },
    {
      "id": "c11",
      "type": "chapter",
      "citation": "Panday, P. K., & Jamil, I. (2015). Conflict in the Chittagong Hill Tracts of Bangladesh: An unimplemented accord and continued violence. In J. Chima (Ed.), Comparative ethnonationalism in South Asia. UK: Routledge.",
      "authors": "Panday, P. K., & Jamil, I",
      "year": "2015",
      "title": "Conflict in the Chittagong Hill Tracts of Bangladesh: An unimplemented accord and continued violence. In J. Chima (Ed.), Comparative ethnonationalism in South Asia",
      "venue": "UK: Routledge.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "c12",
      "type": "chapter",
      "citation": "Panday, P. K., & Rabbani, G. (2013). Freedom of information in Bangladesh: Policy dynamics, present state and challenges. In M. Sabharwal & E. Berman (Eds.), Public administration in South Asia: India, Bangladesh, and Pakistan. UK: Routledge.",
      "authors": "Panday, P. K., & Rabbani, G",
      "year": "2013",
      "title": "Freedom of information in Bangladesh: Policy dynamics, present state and challenges. In M. Sabharwal & E. Berman (Eds.), Public administration in South Asia: India, Bangladesh, and Pakistan",
      "venue": "UK: Routledge.",
      "doi": null,
      "status": null,
      "tags": [
        "Public Policy"
      ]
    },
    {
      "id": "c13",
      "type": "chapter",
      "citation": "Panday, P. K. (2013). Women's political participation in Bangladesh: Role of political parties. In I. Jamil et al. (Eds.), In search of better governance in South Asia and beyond. USA: Springer.",
      "authors": "Panday, P. K",
      "year": "2013",
      "title": "Women's political participation in Bangladesh: Role of political parties. In I. Jamil et al. (Eds.), In search of better governance in South Asia and beyond",
      "venue": "USA: Springer.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Governance"
      ]
    },
    {
      "id": "c14",
      "type": "chapter",
      "citation": "Jamil, I., & Panday, P. K. (2012). The elusive Chittagong Hill Tract peace accord and the plight of the indigenous people. In N. Uddin (Ed.), Politics of peace: A case of Chittagong Hill Tracks in Bangladesh. Dhaka: Institute of Culture & Development Research.",
      "authors": "Jamil, I., & Panday, P. K",
      "year": "2012",
      "title": "The elusive Chittagong Hill Tract peace accord and the plight of the indigenous people. In N. Uddin (Ed.), Politics of peace: A case of Chittagong Hill Tracks in Bangladesh",
      "venue": "Dhaka: Institute of Culture & Development Research.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "c15",
      "type": "chapter",
      "citation": "Panday, P. K., & Asaduzzaman, M. (2011). Politics, problems and trends of decentralised local governance in Bangladesh. In I. Jamil et al. (Eds.), Understanding governance and public policy in Bangladesh. Dhaka: North South University.",
      "authors": "Panday, P. K., & Asaduzzaman, M",
      "year": "2011",
      "title": "Politics, problems and trends of decentralised local governance in Bangladesh. In I. Jamil et al. (Eds.), Understanding governance and public policy in Bangladesh",
      "venue": "Dhaka: North South University.",
      "doi": null,
      "status": null,
      "tags": [
        "Governance",
        "Public Policy",
        "Decentralization"
      ]
    },
    {
      "id": "c16",
      "type": "chapter",
      "citation": "Panday, P. K., & Jamil, I. (2011). Academic standard versus political loyalty in higher educational institutions in Bangladesh: The case of Rajshahi University. In S. A. Saber et al. (Eds.), Governance and human capital: 21st-century agenda. India: Sterling Publishers.",
      "authors": "Panday, P. K., & Jamil, I",
      "year": "2011",
      "title": "Academic standard versus political loyalty in higher educational institutions in Bangladesh: The case of Rajshahi University. In S. A. Saber et al. (Eds.), Governance and human capital: 21st-century agenda",
      "venue": "India: Sterling Publishers.",
      "doi": null,
      "status": null,
      "tags": [
        "Governance"
      ]
    },
    {
      "id": "c17",
      "type": "chapter",
      "citation": "Panday, P. K., & Jamil, I. (2010). Analysing the parliamentary election of 2008 in Bangladesh and its aftermath. In J. Vartola et al. (Eds.), Towards good governance in South Asia. Finland: University of Tampere Press.",
      "authors": "Panday, P. K., & Jamil, I",
      "year": "2010",
      "title": "Analysing the parliamentary election of 2008 in Bangladesh and its aftermath. In J. Vartola et al. (Eds.), Towards good governance in South Asia",
      "venue": "Finland: University of Tampere Press.",
      "doi": null,
      "status": null,
      "tags": [
        "Governance"
      ]
    }
  ],
  "articles": [
    {
      "id": "a1",
      "type": "article",
      "citation": "Panday, P. K. (2026). Book Review: Citizenship and Genocide Cards. International Migration Review, 0(0): 1-3. https://doi.org/10.1177/01979183251413179 (online first)",
      "authors": "Panday, P. K",
      "year": "2026",
      "title": "Book Review: Citizenship and Genocide Cards",
      "venue": "International Migration Review, 0(0): 1-3. https://doi.org/10.1177/01979183251413179",
      "doi": "10.1177/01979183251413179",
      "status": "online first",
      "tags": [
        "Citizen Engagement"
      ]
    },
    {
      "id": "a2",
      "type": "article",
      "citation": "Panday, P. K. and Alam, Q. (2025). Nested Feminisms: How Institutional Designs Shape Women's Activism in Australia and Bangladesh, Politics and Policy, 53(6): e70096.",
      "authors": "Panday, P. K. and Alam, Q",
      "year": "2025",
      "title": "Nested Feminisms: How Institutional Designs Shape Women's Activism in Australia and Bangladesh, Politics and Policy, 53(6): e70096",
      "venue": "",
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Public Policy"
      ]
    },
    {
      "id": "a3",
      "type": "article",
      "citation": "Panday, P. K. (2025). The Rohingya: An Ethnography of ‘Subhuman’ Life By N. Uddin, Unveiling Statelessness: Critical Reflections on Uddin’s Rohingya Ethnography, Journal of Refugee Studies, V. 38(4). 1246–1250",
      "authors": "Panday, P. K",
      "year": "2025",
      "title": "The Rohingya: An Ethnography of ‘Subhuman’ Life By N",
      "venue": "Uddin, Unveiling Statelessness: Critical Reflections on Uddin’s Rohingya Ethnography, Journal of Refugee Studies, V. 38(4). 1246–1250",
      "doi": null,
      "status": null,
      "tags": [
        "Refugees"
      ]
    },
    {
      "id": "a4",
      "type": "article",
      "citation": "Panday, P. K. and Alam, Q. (2025). Empowering Women in Politics through Institutional Engagement: Lessons from Women Development Forum in Bangladesh. Development in Practice, 1–13.",
      "authors": "Panday, P. K. and Alam, Q",
      "year": "2025",
      "title": "Empowering Women in Politics through Institutional Engagement: Lessons from Women Development Forum in Bangladesh",
      "venue": "Development in Practice, 1–13.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "a5",
      "type": "article",
      "citation": "Panday, P. K. (2025). The Role of Union Parishads in Attaining SDG 16.6 in Bangladesh: From Policy to Practice, Bangladesh Journal of Administration Management, 37(2): 46-78.",
      "authors": "Panday, P. K",
      "year": "2025",
      "title": "The Role of Union Parishads in Attaining SDG 16",
      "venue": "6 in Bangladesh: From Policy to Practice, Bangladesh Journal of Administration Management, 37(2): 46-78.",
      "doi": null,
      "status": null,
      "tags": [
        "SDGs"
      ]
    },
    {
      "id": "a6",
      "type": "article",
      "citation": "Ahsan, A. H. M. K., Chakma, B., Panday, P. K., Huque, A. S., & Prodip, M. A. (2024). Does implementation of Citizen's Charter make any difference in service delivery? Comparing the performance of local councils between plain and hilly areas: A case of Bangladesh. Sage Open, 12(2), 1–12.",
      "authors": "Ahsan, A. H. M. K., Chakma, B., Panday, P. K., Huque, A. S., & Prodip, M. A",
      "year": "2024",
      "title": "Does implementation of Citizen's Charter make any difference in service delivery? Comparing the performance of local councils between plain and hilly areas: A case of Bangladesh",
      "venue": "Sage Open, 12(2), 1–12.",
      "doi": null,
      "status": null,
      "tags": [
        "Citizen Engagement"
      ]
    },
    {
      "id": "a7",
      "type": "article",
      "citation": "Panday, P. K. (2023). Democratic deficits in developing countries: Bangladesh scenario. Journal of Asian and African Studies. https://doi.org/10.1177/00219096231146689",
      "authors": "Panday, P. K",
      "year": "2023",
      "title": "Democratic deficits in developing countries: Bangladesh scenario",
      "venue": "Journal of Asian and African Studies. https://doi.org/10.1177/00219096231146689",
      "doi": "10.1177/00219096231146689",
      "status": null,
      "tags": []
    },
    {
      "id": "a8",
      "type": "article",
      "citation": "Ahsan, A. H. M. K., & Panday, P. K. (2023). Looking into inter-organisational coordination from a cultural perspective: A study on public organisations at the subnational level in Bangladesh. Local Development and Society, 4(1), 229–247.",
      "authors": "Ahsan, A. H. M. K., & Panday, P. K",
      "year": "2023",
      "title": "Looking into inter-organisational coordination from a cultural perspective: A study on public organisations at the subnational level in Bangladesh",
      "venue": "Local Development and Society, 4(1), 229–247.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a9",
      "type": "article",
      "citation": "Panday, P. K., & Majumdar, M. J. H. (2021). GO-NGO teamwork for strengthening local governance: A review of extant literature in the context of Bangladesh. South Asian Survey, 38(3), 1–22.",
      "authors": "Panday, P. K., & Majumdar, M. J. H",
      "year": "2021",
      "title": "GO-NGO teamwork for strengthening local governance: A review of extant literature in the context of Bangladesh",
      "venue": "South Asian Survey, 38(3), 1–22.",
      "doi": null,
      "status": null,
      "tags": [
        "Governance"
      ]
    },
    {
      "id": "a10",
      "type": "article",
      "citation": "Panday, P. K., & Chowdhury, S. (2020). Responsiveness of local government officials: Insights and lessons from participatory planning and budgeting. Asia Pacific Journal of Public Administration, 42(1), 1–20.",
      "authors": "Panday, P. K., & Chowdhury, S",
      "year": "2020",
      "title": "Responsiveness of local government officials: Insights and lessons from participatory planning and budgeting",
      "venue": "Asia Pacific Journal of Public Administration, 42(1), 1–20.",
      "doi": null,
      "status": null,
      "tags": [
        "Local Governance"
      ]
    },
    {
      "id": "a11",
      "type": "article",
      "citation": "Panday, P. K. (2019). Public participation in local governments in Bangladesh: Experience, challenges, and the future. Asia Pacific Journal of Public Administration, 41(2), 85–96.",
      "authors": "Panday, P. K",
      "year": "2019",
      "title": "Public participation in local governments in Bangladesh: Experience, challenges, and the future",
      "venue": "Asia Pacific Journal of Public Administration, 41(2), 85–96.",
      "doi": null,
      "status": null,
      "tags": [
        "Local Governance"
      ]
    },
    {
      "id": "a12",
      "type": "article",
      "citation": "Haque, A. S., & Panday, P. K. (2018). Local institutions and governance in Bangladesh: Progress, pitfalls, and potentials. South Asian Journal, October, 127–133.",
      "authors": "Haque, A. S., & Panday, P. K",
      "year": "2018",
      "title": "Local institutions and governance in Bangladesh: Progress, pitfalls, and potentials",
      "venue": "South Asian Journal, October, 127–133.",
      "doi": null,
      "status": null,
      "tags": [
        "Governance"
      ]
    },
    {
      "id": "a13",
      "type": "article",
      "citation": "Panday, P. K., & Baroi, H. S. (2018). NGOs in local governance in Bangladesh: A new wave in development disclosure. South Asian Survey, 22(2), 156–170.",
      "authors": "Panday, P. K., & Baroi, H. S",
      "year": "2018",
      "title": "NGOs in local governance in Bangladesh: A new wave in development disclosure",
      "venue": "South Asian Survey, 22(2), 156–170.",
      "doi": null,
      "status": null,
      "tags": [
        "Governance"
      ]
    },
    {
      "id": "a14",
      "type": "article",
      "citation": "Ahsan, A. H. M. K., Chowdhury, S., & Panday, P. K. (2018). Do legal prescriptions ensure public accountability? Insights and lessons from local governments in Bangladesh. Asia Pacific Journal of Public Administration, 40(1), 57–67.",
      "authors": "Ahsan, A. H. M. K., Chowdhury, S., & Panday, P. K",
      "year": "2018",
      "title": "Do legal prescriptions ensure public accountability? Insights and lessons from local governments in Bangladesh",
      "venue": "Asia Pacific Journal of Public Administration, 40(1), 57–67.",
      "doi": null,
      "status": null,
      "tags": [
        "Local Governance",
        "Accountability"
      ]
    },
    {
      "id": "a15",
      "type": "article",
      "citation": "Panday, P. K. (2018). Making innovations work: Local government-NGO partnership and collaborative governance in rural Bangladesh. Development in Practice, 28(1), 215–237.",
      "authors": "Panday, P. K",
      "year": "2018",
      "title": "Making innovations work: Local government-NGO partnership and collaborative governance in rural Bangladesh",
      "venue": "Development in Practice, 28(1), 215–237.",
      "doi": null,
      "status": null,
      "tags": [
        "Local Governance",
        "Governance"
      ]
    },
    {
      "id": "a16",
      "type": "article",
      "citation": "Panday, P. K. (2017). Decentralisation without decentralisation: Bangladesh's failed attempt to transfer power from central to the local level. Asia Pacific Journal of Public Administration, 39(3), 177–188.",
      "authors": "Panday, P. K",
      "year": "2017",
      "title": "Decentralisation without decentralisation: Bangladesh's failed attempt to transfer power from central to the local level",
      "venue": "Asia Pacific Journal of Public Administration, 39(3), 177–188.",
      "doi": null,
      "status": null,
      "tags": [
        "Decentralization"
      ]
    },
    {
      "id": "a17",
      "type": "article",
      "citation": "Panday, P. K. (2016). Politics of land grabbing: The Vested Property Act and the exploitation of Hindu communities in Bangladesh. International Journal of Minority and Group Rights, 23, 382–401.",
      "authors": "Panday, P. K",
      "year": "2016",
      "title": "Politics of land grabbing: The Vested Property Act and the exploitation of Hindu communities in Bangladesh",
      "venue": "International Journal of Minority and Group Rights, 23, 382–401.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a18",
      "type": "article",
      "citation": "Baroi, H. S., & Panday, P. K. (2015). Does access to information facilitate the empowerment of citizens? Answer lies within: A recent example of Bangladesh. South Asian Journal of Policy and Governance, 37(2), 1–18.",
      "authors": "Baroi, H. S., & Panday, P. K",
      "year": "2015",
      "title": "Does access to information facilitate the empowerment of citizens? Answer lies within: A recent example of Bangladesh",
      "venue": "South Asian Journal of Policy and Governance, 37(2), 1–18.",
      "doi": null,
      "status": null,
      "tags": [
        "Citizen Engagement"
      ]
    },
    {
      "id": "a19",
      "type": "article",
      "citation": "Panday, P. K., & Feldman, S. (2015). Gender mainstreaming in politics in Bangladesh: Role of NGOs. Asian Journal of Political Science, 23(3), 301–320.",
      "authors": "Panday, P. K., & Feldman, S",
      "year": "2015",
      "title": "Gender mainstreaming in politics in Bangladesh: Role of NGOs",
      "venue": "Asian Journal of Political Science, 23(3), 301–320.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "a20",
      "type": "article",
      "citation": "Panday, P. K. (2015). Does institutional change ensure gender mainstreaming in politics? Bangladesh experience. South Asian Journal of Public Policy and Governance, 36(1), 1–19.",
      "authors": "Panday, P. K",
      "year": "2015",
      "title": "Does institutional change ensure gender mainstreaming in politics? Bangladesh experience",
      "venue": "South Asian Journal of Public Policy and Governance, 36(1), 1–19.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "a21",
      "type": "article",
      "citation": "Panday, P. K., & Li, L. C. (2014). Women's political participation in Bangladesh: Role of women's organisations. International Journal of Public Administration, 37(1), 724– 736.",
      "authors": "Panday, P. K., & Li, L. C",
      "year": "2014",
      "title": "Women's political participation in Bangladesh: Role of women's organisations",
      "venue": "International Journal of Public Administration, 37(1), 724– 736.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "a22",
      "type": "article",
      "citation": "Ahsan, A. H. M., & Panday, P. K. (2013). Problems of coordination in field administration in Bangladesh: Does informal communication matter? International Journal of Public Administration, 36(8), 588–599.",
      "authors": "Ahsan, A. H. M., & Panday, P. K",
      "year": "2013",
      "title": "Problems of coordination in field administration in Bangladesh: Does informal communication matter? International Journal of Public Administration, 36(8), 588–599",
      "venue": "",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a23",
      "type": "article",
      "citation": "Panday, P. K. (2012). Social welfare in East Asia after the Asian economic crisis: A comparative study on changing responses of Hong Kong and South Korea. Indian Journal of Social Work, 73(2), 225–237.",
      "authors": "Panday, P. K",
      "year": "2012",
      "title": "Social welfare in East Asia after the Asian economic crisis: A comparative study on changing responses of Hong Kong and South Korea",
      "venue": "Indian Journal of Social Work, 73(2), 225–237.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a24",
      "type": "article",
      "citation": "Jamil, I., & Panday, P. K. (2012). Inter-organisational coordination and corruption in urban policy implementation in Bangladesh: A case of Rajshahi City Corporation. International Journal of Public Administration, 35(5), 352–366.",
      "authors": "Jamil, I., & Panday, P. K",
      "year": "2012",
      "title": "Inter-organisational coordination and corruption in urban policy implementation in Bangladesh: A case of Rajshahi City Corporation",
      "venue": "International Journal of Public Administration, 35(5), 352–366.",
      "doi": null,
      "status": null,
      "tags": [
        "Urban",
        "Public Policy",
        "Corruption"
      ]
    },
    {
      "id": "a25",
      "type": "article",
      "citation": "Panday, P. K., & Rabbani, G. (2014). Good governance at the grassroots: Evidence from Bangladesh. South Asian Survey, 18(2), 293–315.",
      "authors": "Panday, P. K., & Rabbani, G",
      "year": "2014",
      "title": "Good governance at the grassroots: Evidence from Bangladesh",
      "venue": "South Asian Survey, 18(2), 293–315.",
      "doi": null,
      "status": null,
      "tags": [
        "Governance"
      ]
    },
    {
      "id": "a26",
      "type": "article",
      "citation": "Panday, P. K. (2011). Local government system in Bangladesh: How far is it decentralised? Lexlocalis - Journal of Local Self-Government, 9(3), 205–230.",
      "authors": "Panday, P. K",
      "year": "2011",
      "title": "Local government system in Bangladesh: How far is it decentralised? Lexlocalis - Journal of Local Self-Government, 9(3), 205–230",
      "venue": "",
      "doi": null,
      "status": null,
      "tags": [
        "Local Governance",
        "Decentralization"
      ]
    },
    {
      "id": "a27",
      "type": "article",
      "citation": "Panday, P. K., & Jamil, I. (2011). Challenges of coordination in implementing urban policy: The Bangladesh experience. Public Organization Review: A Global Journal, 11(2), 155–176.",
      "authors": "Panday, P. K., & Jamil, I",
      "year": "2011",
      "title": "Challenges of coordination in implementing urban policy: The Bangladesh experience",
      "venue": "Public Organization Review: A Global Journal, 11(2), 155–176.",
      "doi": null,
      "status": null,
      "tags": [
        "Urban",
        "Public Policy"
      ]
    },
    {
      "id": "a28",
      "type": "article",
      "citation": "Panday, P. K., & Mollah, A. H. (2011). The judicial system of Bangladesh: An overview from a historical viewpoint. International Journal of Law and Management, 53(1), 6–31.",
      "authors": "Panday, P. K., & Mollah, A. H",
      "year": "2011",
      "title": "The judicial system of Bangladesh: An overview from a historical viewpoint",
      "venue": "International Journal of Law and Management, 53(1), 6–31.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a29",
      "type": "article",
      "citation": "Panday, P. K. (2010). Can local government reform empower women socially in Bangladesh? Journal of Critical Studies in Business and Society, 1(1-2), 94–119.",
      "authors": "Panday, P. K",
      "year": "2010",
      "title": "Can local government reform empower women socially in Bangladesh? Journal of Critical Studies in Business and Society, 1(1-2), 94–119",
      "venue": "",
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Local Governance"
      ]
    },
    {
      "id": "a30",
      "type": "article",
      "citation": "Panday, P. K., & Jamil, I. (2010). Policy-making in urban Bangladesh: Whose domination? Nepalese Journal of Public Policy and Governance, XXVII(2), 17–31.",
      "authors": "Panday, P. K., & Jamil, I",
      "year": "2010",
      "title": "Policy-making in urban Bangladesh: Whose domination? Nepalese Journal of Public Policy and Governance, XXVII(2), 17–31",
      "venue": "",
      "doi": null,
      "status": null,
      "tags": [
        "Urban",
        "Governance",
        "Public Policy"
      ]
    },
    {
      "id": "a31",
      "type": "article",
      "citation": "Panday, P. K., & Jamil, I. (2009). Conflict in the Chittagong Hill Tracts of Bangladesh: An unimplemented accord and continued violence. Asian Survey, 49(6), 1052–1070.",
      "authors": "Panday, P. K., & Jamil, I",
      "year": "2009",
      "title": "Conflict in the Chittagong Hill Tracts of Bangladesh: An unimplemented accord and continued violence",
      "venue": "Asian Survey, 49(6), 1052–1070.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a32",
      "type": "article",
      "citation": "Panday, P. K. (2009). Resistance in the process of women's political participation in local governance: The Bangladesh experience. Philippine Journal of Public Administration, 53(2), 133–148.",
      "authors": "Panday, P. K",
      "year": "2009",
      "title": "Resistance in the process of women's political participation in local governance: The Bangladesh experience",
      "venue": "Philippine Journal of Public Administration, 53(2), 133–148.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Governance"
      ]
    },
    {
      "id": "a33",
      "type": "article",
      "citation": "Panday, P. K., & Panday, P. K. (2008). The development of the urban government system in Bangladesh: Does coordination exist? Local Government Studies, 34(5), 559– 575.",
      "authors": "Panday, P. K., & Panday, P. K",
      "year": "2008",
      "title": "The development of the urban government system in Bangladesh: Does coordination exist? Local Government Studies, 34(5), 559– 575",
      "venue": "",
      "doi": null,
      "status": null,
      "tags": [
        "Urban",
        "Local Governance"
      ]
    },
    {
      "id": "a34",
      "type": "article",
      "citation": "Jamil, I., & Panday, P. K. (2008). The elusive Chittagong Hill Tract Peace Accord and the plight of the indigenous people. Commonwealth and Comparative Politics, 46(4), 464–489.",
      "authors": "Jamil, I., & Panday, P. K",
      "year": "2008",
      "title": "The elusive Chittagong Hill Tract Peace Accord and the plight of the indigenous people",
      "venue": "Commonwealth and Comparative Politics, 46(4), 464–489.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a35",
      "type": "article",
      "citation": "Panday, P. K. (2008). Representation without participation: Quotas for women in Bangladesh. International Political Science Review, 29(4), 489–512.",
      "authors": "Panday, P. K",
      "year": "2008",
      "title": "Representation without participation: Quotas for women in Bangladesh",
      "venue": "International Political Science Review, 29(4), 489–512.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "a36",
      "type": "article",
      "citation": "Panday, P. K. (2008). The extent of adequacies of poverty alleviation strategies: Hong Kong and China perspectives. Journal of Comparative Social Welfare, 24(2), 179–189.",
      "authors": "Panday, P. K",
      "year": "2008",
      "title": "The extent of adequacies of poverty alleviation strategies: Hong Kong and China perspectives",
      "venue": "Journal of Comparative Social Welfare, 24(2), 179–189.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a37",
      "type": "article",
      "citation": "Panday, P. K. (2007). Policy implementation in urban Bangladesh: Role of intra- organizational coordination. Public Organization Review: A Global Journal, 7(3), 237– 259.",
      "authors": "Panday, P. K",
      "year": "2007",
      "title": "Policy implementation in urban Bangladesh: Role of intra- organizational coordination",
      "venue": "Public Organization Review: A Global Journal, 7(3), 237– 259.",
      "doi": null,
      "status": null,
      "tags": [
        "Urban",
        "Public Policy"
      ]
    },
    {
      "id": "a38",
      "type": "article",
      "citation": "Ullah, A. K. M., & Panday, P. K. (2007). Remitting money to Bangladesh: What do migrants prefer? Asian and Pacific Migration Journal, 16(1), 121–137.",
      "authors": "Ullah, A. K. M., & Panday, P. K",
      "year": "2007",
      "title": "Remitting money to Bangladesh: What do migrants prefer? Asian and Pacific Migration Journal, 16(1), 121–137",
      "venue": "",
      "doi": null,
      "status": null,
      "tags": [
        "Migration"
      ]
    },
    {
      "id": "a39",
      "type": "article",
      "citation": "Sarker, P. C., & Panday, P. K. (2007). Promotion and impact of a water and sanitation program in rural Bangladesh. Asia Pacific Journal of Social Work and Development, 17(2), 18–29.",
      "authors": "Sarker, P. C., & Panday, P. K",
      "year": "2007",
      "title": "Promotion and impact of a water and sanitation program in rural Bangladesh",
      "venue": "Asia Pacific Journal of Social Work and Development, 17(2), 18–29.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a40",
      "type": "article",
      "citation": "Panday, P. K. (2007). Women's political participation in Bangladesh and India: Symbolic or real? Journal of Bangladesh Studies, 8(2), 26–44.",
      "authors": "Panday, P. K",
      "year": "2007",
      "title": "Women's political participation in Bangladesh and India: Symbolic or real? Journal of Bangladesh Studies, 8(2), 26–44",
      "venue": "",
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "a41",
      "type": "article",
      "citation": "Panday, P. K. (2006). Central-local relations, inter-organisational coordination, and policy implementation in urban Bangladesh. Asia Pacific Journal of Public Administration, 28(1), 41–58.",
      "authors": "Panday, P. K",
      "year": "2006",
      "title": "Central-local relations, inter-organisational coordination, and policy implementation in urban Bangladesh",
      "venue": "Asia Pacific Journal of Public Administration, 28(1), 41–58.",
      "doi": null,
      "status": null,
      "tags": [
        "Urban",
        "Public Policy"
      ]
    },
    {
      "id": "a42",
      "type": "article",
      "citation": "Panday, P. K., & Panday, P. K. (2006). Gender and HIV/AIDS: Bangladesh perspective. Asian Journal of Social Policy, 2(2), 31–52.",
      "authors": "Panday, P. K., & Panday, P. K",
      "year": "2006",
      "title": "Gender and HIV/AIDS: Bangladesh perspective",
      "venue": "Asian Journal of Social Policy, 2(2), 31–52.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "a43",
      "type": "article",
      "citation": "Panday, P. K., & Sarker, P. C. (2006). Trafficking in women and children in Bangladesh: A national issue in global perspective. Asian Journal of Social Policy, 2(2), 1–13.",
      "authors": "Panday, P. K., & Sarker, P. C",
      "year": "2006",
      "title": "Trafficking in women and children in Bangladesh: A national issue in global perspective",
      "venue": "Asian Journal of Social Policy, 2(2), 1–13.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "a44",
      "type": "article",
      "citation": "Keya, M. K., Sarker, P. C., & Panday, P. K. (2006). Perceived stress in kinship network system among the people of Bangladesh. Journal of Societal and Social Policy, 5(2), 1–11.",
      "authors": "Keya, M. K., Sarker, P. C., & Panday, P. K",
      "year": "2006",
      "title": "Perceived stress in kinship network system among the people of Bangladesh",
      "venue": "Journal of Societal and Social Policy, 5(2), 1–11.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a45",
      "type": "article",
      "citation": "Haq, P. A., & Panday, P. K. (2005). Accountability in bureaucracy: Bangladesh experience. Public Fund Digest, 5(1).",
      "authors": "Haq, P. A., & Panday, P. K",
      "year": "2005",
      "title": "Accountability in bureaucracy: Bangladesh experience",
      "venue": "Public Fund Digest, 5(1).",
      "doi": null,
      "status": null,
      "tags": [
        "Accountability"
      ]
    },
    {
      "id": "a46",
      "type": "article",
      "citation": "Panday, P. K. (2005). Organisation behavior, change, and different approach perspectives: A comparative discussion. Indian Journal of Political Science (IJPS), LXVI(2).",
      "authors": "Panday, P. K",
      "year": "2005",
      "title": "Organisation behavior, change, and different approach perspectives: A comparative discussion",
      "venue": "Indian Journal of Political Science (IJPS), LXVI(2).",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a47",
      "type": "article",
      "citation": "Panday, P. K. and P. K. Panday (2005) Women Empowerment through their Participation in the Decision Making Process in Bangladesh: The Case of Union Parishad, Pakistan Journal of Women's Studies: Alam-E- Niswan, Vol. 12(2).",
      "authors": null,
      "year": null,
      "title": "Panday, P. K. and P. K. Panday (2005) Women Empowerment through their Participation in the Decision Making Process in Bangladesh: The Case of Union Parishad, Pakistan Journal of Women's Studies: Alam-E- Niswan, Vol. 12(2).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "a48",
      "type": "article",
      "citation": "Panday, P. K. (2005) Human Rights and Good Governance in Bangladesh: A Quest for Measuring the Status of Good Governance at the Stake of Violation of Human Rights in Bangladesh, Pakistan Journal of Social Science, Vol. 3(9).",
      "authors": null,
      "year": null,
      "title": "Panday, P. K. (2005) Human Rights and Good Governance in Bangladesh: A Quest for Measuring the Status of Good Governance at the Stake of Violation of Human Rights in Bangladesh, Pakistan Journal of Social Science, Vol. 3(9).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Governance"
      ]
    },
    {
      "id": "a49",
      "type": "article",
      "citation": "Panday, P. K. (2004). Issues in implementation of public policies: The involvement of the army in the law and order sector in Bangladesh. Social Change, 34(2).",
      "authors": "Panday, P. K",
      "year": "2004",
      "title": "Issues in implementation of public policies: The involvement of the army in the law and order sector in Bangladesh",
      "venue": "Social Change, 34(2).",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a50",
      "type": "article",
      "citation": "Panday, P. K. (2004). Political culture in Bangladesh: Does leadership matter? Social Change, 34(4).",
      "authors": "Panday, P. K",
      "year": "2004",
      "title": "Political culture in Bangladesh: Does leadership matter? Social Change, 34(4)",
      "venue": "",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a51",
      "type": "article",
      "citation": "Panday, P. K. (2004) Development Planning in Bangladesh: An Evaluation of the Performance of Five-Year Plans, Rajshahi University Studies, Part-C, Vol. 12, 2004.",
      "authors": null,
      "year": null,
      "title": "Panday, P. K. (2004) Development Planning in Bangladesh: An Evaluation of the Performance of Five-Year Plans, Rajshahi University Studies, Part-C, Vol. 12, 2004.",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a52",
      "type": "article",
      "citation": "Panday, P. K. (2004) The Fifth Five-Year Plan of Bangladesh: Some Comments, Socialist Perspective, Vol. 31(3-4).",
      "authors": null,
      "year": null,
      "title": "Panday, P. K. (2004) The Fifth Five-Year Plan of Bangladesh: Some Comments, Socialist Perspective, Vol. 31(3-4).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "a53",
      "type": "article",
      "citation": "Panday, P. K. (2002). Women's participation in local government: The Bangladesh experience. Regional Studies, XX(3).",
      "authors": "Panday, P. K",
      "year": "2002",
      "title": "Women's participation in local government: The Bangladesh experience",
      "venue": "Regional Studies, XX(3).",
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Local Governance"
      ]
    },
    {
      "id": "a54",
      "type": "article",
      "citation": "Panday, P. K. (2001). The role of bureaucratic elite in the policy-making process in Bangladesh. Socialist Perspective: A Quarterly Journal of Social Sciences, 29(1-2).",
      "authors": "Panday, P. K",
      "year": "2001",
      "title": "The role of bureaucratic elite in the policy-making process in Bangladesh",
      "venue": "Socialist Perspective: A Quarterly Journal of Social Sciences, 29(1-2).",
      "doi": null,
      "status": null,
      "tags": [
        "Public Policy"
      ]
    }
  ],
  "articlesUnderReview": [
    {
      "id": "au1",
      "type": "article_under_review",
      "citation": "Panday, P. K. (2024). Unlocking Accountability: How Citizen Charters Hold the Key to Service Delivery – A Local Government Perspective from Bangladesh. Administration and Society, Sage.",
      "authors": "Panday, P. K",
      "year": "2024",
      "title": "Unlocking Accountability: How Citizen Charters Hold the Key to Service Delivery – A Local Government Perspective from Bangladesh",
      "venue": "Administration and Society, Sage.",
      "doi": null,
      "status": "Under Review",
      "tags": [
        "Local Governance",
        "Accountability",
        "Citizen Engagement"
      ]
    },
    {
      "id": "au2",
      "type": "article_under_review",
      "citation": "Panday, P. K. (2024). Bridging the Gap in Local Government: Addressing Power Distance and Patron-Client Relationships in Public Accountability Practices in Bangladesh. Public Organisation Review. Springer.",
      "authors": "Panday, P. K",
      "year": "2024",
      "title": "Bridging the Gap in Local Government: Addressing Power Distance and Patron-Client Relationships in Public Accountability Practices in Bangladesh",
      "venue": "Public Organisation Review. Springer.",
      "doi": null,
      "status": "Under Review",
      "tags": [
        "Local Governance",
        "Accountability"
      ]
    }
  ],
  "reports": [
    {
      "id": "r1",
      "type": "report",
      "citation": "Ahmed, Z., Aziz, S. S., Chowdhury, S., Hassan, M., Hoque, R., Hossain, N., Panday, P. K., & Ul-Mutahara, M. (2023). The feedback state: Listening and responding to Bangladesh's citizens during the COVID-19 pandemic: Research findings. Dhaka: Manusher Jonno Foundation.",
      "authors": "Ahmed, Z., Aziz, S. S., Chowdhury, S., Hassan, M., Hoque, R., Hossain, N., Panday, P. K., & Ul-Mutahara, M",
      "year": "2023",
      "title": "The feedback state: Listening and responding to Bangladesh's citizens during the COVID-19 pandemic: Research findings",
      "venue": "Dhaka: Manusher Jonno Foundation.",
      "doi": null,
      "status": null,
      "tags": [
        "Citizen Engagement",
        "COVID-19"
      ]
    },
    {
      "id": "r2",
      "type": "report",
      "citation": "Winterford, K., Panday, P. K., Baroi, H. S., Ahsan, A. H. M. K., Megaw, T., & Willetts, J. (2020). Learning report from the Nobo Jatra program: Gender- transformative social accountability for inclusive WASH. Prepared for World Vision Bangladesh.",
      "authors": "Winterford, K., Panday, P. K., Baroi, H. S., Ahsan, A. H. M. K., Megaw, T., & Willetts, J",
      "year": "2020",
      "title": "Learning report from the Nobo Jatra program: Gender- transformative social accountability for inclusive WASH",
      "venue": "Prepared for World Vision Bangladesh.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Accountability",
        "WASH"
      ]
    },
    {
      "id": "r3",
      "type": "report",
      "citation": "Panday, P. K., & Quamrul, A. (2020). Role of institutions in the political empowerment of women: A study on women development forum in Bangladesh. Proceedings of the Annual Australian and New Zealand Academy of Management Conference, \"Wicked Solutions to Wicked Problems: The Challenges Facing Management Research and Practice\", December 3–5, Cairns, Queensland, Australia.",
      "authors": "Panday, P. K., & Quamrul, A",
      "year": "2020",
      "title": "Role of institutions in the political empowerment of women: A study on women development forum in Bangladesh",
      "venue": "Proceedings of the Annual Australian and New Zealand Academy of Management Conference, \"Wicked Solutions to Wicked Problems: The Challenges Facing Management Research and Practice\", December 3–5, Cairns, Queensland, Australia.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "r4",
      "type": "report",
      "citation": "Panday, P. K. (2016). Effectiveness of committees of Upazila Parishads. Upazila Parishad Governance Project (UZGP), UNDP, Dhaka.",
      "authors": "Panday, P. K",
      "year": "2016",
      "title": "Effectiveness of committees of Upazila Parishads",
      "venue": "Upazila Parishad Governance Project (UZGP), UNDP, Dhaka.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "r5",
      "type": "report",
      "citation": "Boex, J. N., Ahmed, M., Monem, M., & Panday, P. K. (2015). Policy research on local government system in Bangladesh. Dhaka: UNDP.",
      "authors": "Boex, J. N., Ahmed, M., Monem, M., & Panday, P. K",
      "year": "2015",
      "title": "Policy research on local government system in Bangladesh",
      "venue": "Dhaka: UNDP.",
      "doi": null,
      "status": null,
      "tags": [
        "Local Governance",
        "Public Policy"
      ]
    },
    {
      "id": "r6",
      "type": "report",
      "citation": "Panday, P. K. (2015). Challenges faced by women farmers, small-holders, and sharecroppers in Bangladesh. Dhaka: Oxfam, Bangladesh.",
      "authors": "Panday, P. K",
      "year": "2015",
      "title": "Challenges faced by women farmers, small-holders, and sharecroppers in Bangladesh",
      "venue": "Dhaka: Oxfam, Bangladesh.",
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "r7",
      "type": "report",
      "citation": "Panday, P. K. (2015). Livelihood options, essential services, and social protection mechanisms in Char land: Governance issues and challenges. Dhaka: Oxfam, Bangladesh.",
      "authors": "Panday, P. K",
      "year": "2015",
      "title": "Livelihood options, essential services, and social protection mechanisms in Char land: Governance issues and challenges",
      "venue": "Dhaka: Oxfam, Bangladesh.",
      "doi": null,
      "status": null,
      "tags": [
        "Governance"
      ]
    },
    {
      "id": "r8",
      "type": "report",
      "citation": "Panday, P. K. (2014). Identifying the issues and concerns on the fair prices of agricultural products. Dhaka: Oxfam, Bangladesh.",
      "authors": "Panday, P. K",
      "year": "2014",
      "title": "Identifying the issues and concerns on the fair prices of agricultural products",
      "venue": "Dhaka: Oxfam, Bangladesh.",
      "doi": null,
      "status": null,
      "tags": []
    },
    {
      "id": "r9",
      "type": "report",
      "citation": "Panday, P. K. (2013). A study on the effectiveness of existing food security interventions. Dhaka: Oxfam, Bangladesh.",
      "authors": "Panday, P. K",
      "year": "2013",
      "title": "A study on the effectiveness of existing food security interventions",
      "venue": "Dhaka: Oxfam, Bangladesh.",
      "doi": null,
      "status": null,
      "tags": []
    }
  ],
  "conference": [
    {
      "id": "p1",
      "type": "conference",
      "citation": "Keynote Address: Presented \"Transformative Leadership in Public Administration: Navigating Global Challenges for Sustainable Governance\" at the international conference hosted by Haluoleo University in Kendari, Indonesia, on 4-5 November 2023.",
      "authors": null,
      "year": "2023",
      "title": "Keynote Address: Presented \"Transformative Leadership in Public Administration: Navigating Global Challenges for Sustainable Governance\" at the international conference hosted by Haluoleo University in Kendari, Indonesia, on 4-5 November 2023.",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Governance"
      ]
    },
    {
      "id": "p2",
      "type": "conference",
      "citation": "Webinar Presentation: Presented a paper titled \"Public Managers' Attitude towards Citizen Participation and its Determinants: A Qualitative Analysis of Local Governance in Rural Bangladesh\" at the international webinar on \"Grassroots Participation and Local Development: Learnings from the 'People's Plan Campaign' in Kerala (India) and 'Batho Pele Initiative' in South Africa,\" jointly organised by the Centre for Rural Management (CRM), Kerala, India, The Ghana Institute of Management and Public Administration (GIMPA), Ghana, and the National School of Government (theNSG), South Africa, from 25-27 May 2022 (with Muhammad Jahangir Hossain Majumdar).",
      "authors": null,
      "year": "2022",
      "title": "Webinar Presentation: Presented a paper titled \"Public Managers' Attitude towards Citizen Participation and its Determinants: A Qualitative Analysis of Local Governance in Rural Bangladesh\" at the international webinar on \"Grassroots Participation and Local Development: Learnings from the 'People's Plan Campaign' in Kerala (India) and 'Batho Pele Initiative' in South Africa,\" jointly organised by the Centre for Rural Management (CRM), Kerala, India, The Ghana Institute of Management and Public Administration (GIMPA), Ghana, and the National School of Government (theNSG), South Africa, from 25-27 May 2022 (with Muhammad Jahangir Hossain Majumdar).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Governance",
        "Citizen Engagement"
      ]
    },
    {
      "id": "p3",
      "type": "conference",
      "citation": "Conference Presentation: Presented a paper titled \"Role of Local Governments during and Post COVID-19 Pandemic Situation: Bangladesh Experience\" at the conference \"Rethinking the Role of Local Governments in a Post Covid-19 World,\" jointly organised by the Centre for Gandhian Studies, Central University of Kerala, and the Centre for Rural Management (CRM) Kottayam, Kerala, India, from 10-14 December 2020 (Virtual).",
      "authors": null,
      "year": "2020",
      "title": "Conference Presentation: Presented a paper titled \"Role of Local Governments during and Post COVID-19 Pandemic Situation: Bangladesh Experience\" at the conference \"Rethinking the Role of Local Governments in a Post Covid-19 World,\" jointly organised by the Centre for Gandhian Studies, Central University of Kerala, and the Centre for Rural Management (CRM) Kottayam, Kerala, India, from 10-14 December 2020 (Virtual).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Local Governance",
        "COVID-19"
      ]
    },
    {
      "id": "p4",
      "type": "conference",
      "citation": "Conference Presentation: Presented a paper titled \"Understanding Union Digital Centre and Its Impact on Service Delivery at the Local Level: A Case of a Successful E-governance Model in Bangladesh\" at the NASPAA South Asia Virtual Conference held on 12-14 November 2021 at New Delhi, India (Virtual) (with Harold Sougoto Baroi).",
      "authors": null,
      "year": "2021",
      "title": "Conference Presentation: Presented a paper titled \"Understanding Union Digital Centre and Its Impact on Service Delivery at the Local Level: A Case of a Successful E-governance Model in Bangladesh\" at the NASPAA South Asia Virtual Conference held on 12-14 November 2021 at New Delhi, India (Virtual) (with Harold Sougoto Baroi).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Governance",
        "Digital Governance"
      ]
    },
    {
      "id": "p5",
      "type": "conference",
      "citation": "Conference Presentation: Presented a paper titled \"Role of Institution in the Political Empowerment of Women: A Study on Women Development Forum in Bangladesh\" at the 33rd Australia and New Zealand Academy of Management (ANZAM) Conference held on 3-6 December 2019 at Cairns, Australia (with Professor Md. Quamrul Alam).",
      "authors": null,
      "year": "2019",
      "title": "Conference Presentation: Presented a paper titled \"Role of Institution in the Political Empowerment of Women: A Study on Women Development Forum in Bangladesh\" at the 33rd Australia and New Zealand Academy of Management (ANZAM) Conference held on 3-6 December 2019 at Cairns, Australia (with Professor Md. Quamrul Alam).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "p6",
      "type": "conference",
      "citation": "Conference Presentation: Presented a paper titled \"Barriers for the Empowerment of Elected Women Representatives\" at the International Conference on \"Towards Effective, Accountable and Inclusive LGIs: Learning from South Asia and Beyond,\" organised by the Local Government Division, Ministry of Local Government, Rural Development and Cooperatives, Government of Bangladesh (in association with the National Institute of Local Governance, and Upazila Governance Project & Union Parishad Governance Project of UNDP, Bangladesh) on 10-11 December 2016 at DPHE Auditorium, Dhaka.",
      "authors": null,
      "year": "2016",
      "title": "Conference Presentation: Presented a paper titled \"Barriers for the Empowerment of Elected Women Representatives\" at the International Conference on \"Towards Effective, Accountable and Inclusive LGIs: Learning from South Asia and Beyond,\" organised by the Local Government Division, Ministry of Local Government, Rural Development and Cooperatives, Government of Bangladesh (in association with the National Institute of Local Governance, and Upazila Governance Project & Union Parishad Governance Project of UNDP, Bangladesh) on 10-11 December 2016 at DPHE Auditorium, Dhaka.",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Local Governance",
        "Governance"
      ]
    },
    {
      "id": "p7",
      "type": "conference",
      "citation": "Conference Presentation: Presented a paper titled \"Effectiveness of Committees of Upazila Parishads\" at the International Conference on \"Towards Effective, Accountable and Inclusive LGIs: Learning from South Asia and Beyond,\" organised by the Local Government Division, Ministry of Local Government, Rural Development and Cooperatives, Government of Bangladesh (in association with the National Institute of Local Governance, and Upazila Governance Project & Union Parishad Governance Project of UNDP, Bangladesh) on 10-11 December 2016 at DPHE Auditorium, Dhaka.",
      "authors": null,
      "year": "2016",
      "title": "Conference Presentation: Presented a paper titled \"Effectiveness of Committees of Upazila Parishads\" at the International Conference on \"Towards Effective, Accountable and Inclusive LGIs: Learning from South Asia and Beyond,\" organised by the Local Government Division, Ministry of Local Government, Rural Development and Cooperatives, Government of Bangladesh (in association with the National Institute of Local Governance, and Upazila Governance Project & Union Parishad Governance Project of UNDP, Bangladesh) on 10-11 December 2016 at DPHE Auditorium, Dhaka.",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Local Governance",
        "Governance"
      ]
    },
    {
      "id": "p8",
      "type": "conference",
      "citation": "Conference Presentation: Presented a paper titled \"Administrative System in Bangladesh: Reform Initiatives without Outcomes\" at the International Conference on \"Public Sectors Human Resource Management in SAARC Countries,\" organised by the NORHED Project titled \"Policy and Governance Studies in South Asia\" (a joint project of the Department of Administration and Organization Theory, University of Bergen, Norway, Central Department of Public Administration, Tribhuvan University, Nepal, Department of Sociology and Political Science, North South University, Bangladesh, and the Department of Political Science, University of Peradeniya, Sri Lanka), held on 23-26 March 2016 in Kathmandu, Nepal (Sponsorship Awarded).",
      "authors": null,
      "year": "2016",
      "title": "Conference Presentation: Presented a paper titled \"Administrative System in Bangladesh: Reform Initiatives without Outcomes\" at the International Conference on \"Public Sectors Human Resource Management in SAARC Countries,\" organised by the NORHED Project titled \"Policy and Governance Studies in South Asia\" (a joint project of the Department of Administration and Organization Theory, University of Bergen, Norway, Central Department of Public Administration, Tribhuvan University, Nepal, Department of Sociology and Political Science, North South University, Bangladesh, and the Department of Political Science, University of Peradeniya, Sri Lanka), held on 23-26 March 2016 in Kathmandu, Nepal (Sponsorship Awarded).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Governance",
        "Public Policy"
      ]
    },
    {
      "id": "p9",
      "type": "conference",
      "citation": "Conference Presentation: Presented a paper titled \"Women's Political Participation in Bangladesh: An Institutional Reforms Perspective\" at the conference \"Development Challenges in the Asia Pacific: Millennium Development Goals and Beyond,\" organised by the Network of Asia-Pacific Schools and Institutes of Public Administration and Governance (NAPSIPAG) in association with Sri Lankan Institute of Development Studies and Monash University, Australia, held on 5-7 December 2012 in Colombo, Sri Lanka (Sponsorship Awarded).",
      "authors": null,
      "year": "2012",
      "title": "Conference Presentation: Presented a paper titled \"Women's Political Participation in Bangladesh: An Institutional Reforms Perspective\" at the conference \"Development Challenges in the Asia Pacific: Millennium Development Goals and Beyond,\" organised by the Network of Asia-Pacific Schools and Institutes of Public Administration and Governance (NAPSIPAG) in association with Sri Lankan Institute of Development Studies and Monash University, Australia, held on 5-7 December 2012 in Colombo, Sri Lanka (Sponsorship Awarded).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Governance"
      ]
    },
    {
      "id": "p10",
      "type": "conference",
      "citation": "Conference Presentation: Presented a paper titled \"Women's Political Participation in Bangladesh: Role of Political Parties\" at the international conference \"In Search of Better Governance: Challenges and Prospects,\" held on 29-30 June 2011 in Kathmandu, Nepal, organised by the Central Department of Public Administration, Tribhuvan University, Nepal, and the Department of Administration and Organization Theory, University of Bergen, Norway.",
      "authors": null,
      "year": "2011",
      "title": "Conference Presentation: Presented a paper titled \"Women's Political Participation in Bangladesh: Role of Political Parties\" at the international conference \"In Search of Better Governance: Challenges and Prospects,\" held on 29-30 June 2011 in Kathmandu, Nepal, organised by the Central Department of Public Administration, Tribhuvan University, Nepal, and the Department of Administration and Organization Theory, University of Bergen, Norway.",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Governance"
      ]
    },
    {
      "id": "p11",
      "type": "conference",
      "citation": "Conference Sponsorship: Awarded sponsorship to attend an international conference on \"Human Capital and Good Governance: Transition towards Knowledge-based Development and Well-being\" held at the University Utara Malaysia (UUM) on 11-13 December 2010, organised by the Ministry of Higher Education, Malaysia, in association with the College of Law, Government, and International Studies, UUM, and the Network of Asia-Pacific Schools and Institutes of Public Administration and Governance (NAPSIPAG) (did not attend).",
      "authors": null,
      "year": "2010",
      "title": "Conference Sponsorship: Awarded sponsorship to attend an international conference on \"Human Capital and Good Governance: Transition towards Knowledge-based Development and Well-being\" held at the University Utara Malaysia (UUM) on 11-13 December 2010, organised by the Ministry of Higher Education, Malaysia, in association with the College of Law, Government, and International Studies, UUM, and the Network of Asia-Pacific Schools and Institutes of Public Administration and Governance (NAPSIPAG) (did not attend).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Governance"
      ]
    },
    {
      "id": "p12",
      "type": "conference",
      "citation": "Conference Presentation: Presented a paper titled \"Women's Political Participation in Bangladesh: Role of Women Organizations\" at the international conference \"Good Governance in the Asia-Pacific: Civil and Political Society,\" held on 9-10 December 2010 at the City University of Hong Kong (Sponsorship Awarded).",
      "authors": null,
      "year": "2010",
      "title": "Conference Presentation: Presented a paper titled \"Women's Political Participation in Bangladesh: Role of Women Organizations\" at the international conference \"Good Governance in the Asia-Pacific: Civil and Political Society,\" held on 9-10 December 2010 at the City University of Hong Kong (Sponsorship Awarded).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Governance"
      ]
    },
    {
      "id": "p13",
      "type": "conference",
      "citation": "Conference Presentation: Presented a paper titled \"Resistance in the Process of Women's Participation in Local Government: Bangladesh Experience\" at the conference \"Public Administration and Governance at the Forefront of Change: Dimensions, Dynamics, Dysfunction and Solutions,\" organised by the Network of Asia-Pacific Schools and Institutes of Public Administration and Governance (NAPSIPAG) in association with the National College of Public Administration and Governance (NCPAG), University of the Philippines (UP), held on 5-7 December 2007 in Manila, Philippines (ADB Sponsorship Awarded).",
      "authors": null,
      "year": "2007",
      "title": "Conference Presentation: Presented a paper titled \"Resistance in the Process of Women's Participation in Local Government: Bangladesh Experience\" at the conference \"Public Administration and Governance at the Forefront of Change: Dimensions, Dynamics, Dysfunction and Solutions,\" organised by the Network of Asia-Pacific Schools and Institutes of Public Administration and Governance (NAPSIPAG) in association with the National College of Public Administration and Governance (NCPAG), University of the Philippines (UP), held on 5-7 December 2007 in Manila, Philippines (ADB Sponsorship Awarded).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Gender",
        "Local Governance",
        "Governance"
      ]
    },
    {
      "id": "p14",
      "type": "conference",
      "citation": "Conference Presentation: Presented a paper titled \"Trafficking of Women and Children in Bangladesh\" at the conference \"Emerging Population Issues in the Asia Pacific Region: Challenges for the Twenty-First Century,\" organised by the International Institute for Population Sciences (Deemed University), Mumbai, India, from 10-13 December 2006 (Sponsorship Awarded).",
      "authors": null,
      "year": "2006",
      "title": "Conference Presentation: Presented a paper titled \"Trafficking of Women and Children in Bangladesh\" at the conference \"Emerging Population Issues in the Asia Pacific Region: Challenges for the Twenty-First Century,\" organised by the International Institute for Population Sciences (Deemed University), Mumbai, India, from 10-13 December 2006 (Sponsorship Awarded).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Gender"
      ]
    },
    {
      "id": "p15",
      "type": "conference",
      "citation": "Conference Sponsorship: Awarded Asian Development Bank Sponsorship for presenting a paper titled \"Policy-Making in Urban Bangladesh: Domination of Whom?\" at the conference \"Innovation, Policy Transfer and Governance: How They Can Best Contribute to Social and Human Development,\" organised by the Network of Asia- Pacific Schools and Institutes of Public Administration and Governance (NAPSIPAG) at the University of Sydney, Australia, on 4-5 December 2006 (did not attend).",
      "authors": null,
      "year": "2006",
      "title": "Conference Sponsorship: Awarded Asian Development Bank Sponsorship for presenting a paper titled \"Policy-Making in Urban Bangladesh: Domination of Whom?\" at the conference \"Innovation, Policy Transfer and Governance: How They Can Best Contribute to Social and Human Development,\" organised by the Network of Asia- Pacific Schools and Institutes of Public Administration and Governance (NAPSIPAG) at the University of Sydney, Australia, on 4-5 December 2006 (did not attend).",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": [
        "Urban",
        "Governance",
        "Public Policy"
      ]
    },
    {
      "id": "p16",
      "type": "conference",
      "citation": "Conference Attendance: Attended the International Conference on \"Continuing Transformations on Public Administration,\" organised by the Department of Public and Social Administration, City University of Hong Kong, on 21-22 March 2006.",
      "authors": null,
      "year": "2006",
      "title": "Conference Attendance: Attended the International Conference on \"Continuing Transformations on Public Administration,\" organised by the Department of Public and Social Administration, City University of Hong Kong, on 21-22 March 2006.",
      "venue": null,
      "doi": null,
      "status": null,
      "tags": []
    }
  ]
};

export const allPublications = (() => {
  return Object.entries(publicationsByType).flatMap(([group, items]) =>
    items.map((p) => ({ ...p, group }))
  );
})();
