// Utils idea (optional): Use these fields for filtering/search
// - startYear / endYear: numeric for time range filter
// - categories: array of strings for category filter
// - sponsor: string for sponsor search
// - title: string for title search

export const researchGrants = [
  {
    id: 'g1',
    type: 'grant',
    title:
      "People's Voice in Local Governance: Exploring the State of People's Participation in Public Forums in Union Parishads in Bangladesh",
    sponsor: 'Faculty of Social Science, University of Rajshahi',
    durationText: '18/07/2025 – 30/06/2025',
    startYear: 2025,
    endYear: 2025,
    budget: 'US$ 4000',
    role: null,
    collaborators: [],
    objective:
      "To assess the present state of citizen engagement in the public forums established by the Local Government (Union Parishad) Act 2009, namely the Ward Shava and Open Budget Meetings.",
    categories: ['Local Governance', 'Citizen Participation', 'Public Forums'],
  },
  {
    id: 'g2',
    type: 'grant',
    title:
      "Empowering Voices: Examining the State of Inclusion of Marginalised Communities in Local Government Decision-Making in Rajshahi District of Bangladesh",
    sponsor: 'Faculty of Social Science, University of Rajshahi',
    durationText: '01/07/2024 – 30/06/2025',
    startYear: 2024,
    endYear: 2025,
    budget: 'US$ 4000',
    role: null,
    collaborators: [],
    objective:
      "To assess the effectiveness of the digitalisation of the cash transfer system within Bangladesh's Social Safety Net (SSN) programmes.",
    categories: ['Inclusion', 'Marginalised Communities', 'Local Governance', 'Social Safety Net', 'Digitalisation'],
  },
  {
    id: 'g3',
    type: 'grant',
    title:
      "Transforming Social Safety Net (SSN): Digitising Cash Transfers in Bangladesh's SSN Programs",
    sponsor: 'Faculty of Social Science, University of Rajshahi',
    durationText: '01/01/2024 – 31/12/2024',
    startYear: 2024,
    endYear: 2024,
    budget: 'US$ 4000',
    role: null,
    collaborators: [],
    objective:
      'To analyse the existing methods, practices, and procedures employed to promote inclusivity in the decision-making in local government.',
    categories: ['Social Safety Net', 'Digital Governance', 'Inclusion', 'Local Governance'],
  },
  {
    id: 'g4',
    type: 'grant',
    title:
      'Attaining Global Goals at the Local Level in Bangladesh: A Study on the Role of Union Parishads in Attaining SDGs',
    sponsor: 'Bangladesh Civil Service Administration Academy, Dhaka',
    durationText: '01/11/2023 – 30/06/2024',
    startYear: 2023,
    endYear: 2024,
    budget: '$8000',
    role: null,
    collaborators: [],
    objective:
      'Investigate the role of Union Parishads in achieving Sustainable Development Goals (SDGs) at the local level.',
    categories: ['SDGs', 'Local Governance', 'Public Policy'],
  },
  {
    id: 'g5',
    type: 'grant',
    title: 'Challenges and Prospects of Resource Mobilization in Local Government Bodies',
    sponsor: 'Faculty of Social Science, University of Rajshahi',
    durationText: '01/07/2022 – 31/12/2024',
    startYear: 2022,
    endYear: 2024,
    budget: 'US$ 5000',
    role: null,
    collaborators: [],
    objective:
      'Analyse resource mobilisation challenges in selected Union Parishads in Rajshahi District.',
    categories: ['Resource Mobilisation', 'Local Governance', 'Public Finance'],
  },
  {
    id: 'g6',
    type: 'grant',
    title:
      "The Feedback State: Hearing & Responding to Bangladeshi Citizens during the COVID-19 Pandemic",
    sponsor: 'CLEAR Grant, IDS, Manchester University',
    durationText: '01/09/2022 – 30/09/2023',
    startYear: 2022,
    endYear: 2023,
    budget: '£100,000',
    role: 'Component Lead',
    collaborators: [
      'Professor Naomi Hossain (Washington University)',
      'Professor Shuvra Chowdhury (University of Rajshahi)',
      'Professor Zahir Uddin (Jahangirnagar University)',
      'BRAC Institute of Governance and Development (BIGD)',
      'Manusher Jonno Foundation, Dhaka',
    ],
    objective:
      'Study the state-citizen feedback loop during the COVID-19 pandemic.',
    categories: ['COVID-19', 'Governance', 'Citizen Feedback', 'Public Policy'],
  },
  {
    id: 'g7',
    type: 'grant',
    title:
      'Ensuring Accountability of Service Providers through Citizen Charter: A Study on Selected Union Parishads in Rajshahi District',
    sponsor: 'Faculty of Social Science, University of Rajshahi',
    durationText: '01/07/2021 – 31/12/2023',
    startYear: 2021,
    endYear: 2023,
    budget: '$5000',
    role: null,
    collaborators: [],
    objective:
      'Examine the effectiveness of Citizen Charters in selected Union Parishads in Rajshahi District.',
    categories: ['Accountability', 'Citizen Charter', 'Service Delivery', 'Local Governance'],
  },
  {
    id: 'g8',
    type: 'grant',
    title:
      "Citizens' Trust in Local Governance: A Study of Union Parishads in Rajshahi District",
    sponsor: 'Faculty of Social Sciences, University of Rajshahi',
    durationText: '15/11/2018 – 14/11/2019',
    startYear: 2018,
    endYear: 2019,
    budget: 'US$ 2500',
    role: null,
    collaborators: [],
    objective:
      'Assess citizen trust in local governance in Union Parishads within Rajshahi District.',
    categories: ['Trust', 'Local Governance', 'Citizen Engagement'],
  },
  {
    id: 'g9',
    type: 'grant',
    title: 'Gender Transformative Social Accountability for an Inclusive WASH',
    sponsor: 'Australian Government Aid',
    durationText: '2018 – 2021',
    startYear: 2018,
    endYear: 2021,
    budget: null,
    role: null,
    collaborators: [
      'Dr. Keren Winterford (University Technology Sydney)',
      'World Vision Australia',
      'World Vision Bangladesh',
    ],
    objective:
      'Promote gender-transformative social accountability in WASH programs.',
    categories: ['WASH', 'Gender', 'Social Accountability', 'Governance'],
  },
  {
    id: 'g10',
    type: 'grant',
    title:
      "Analysing the Role of Union Digital Center in Ensuring People's Access to Services in Bangladesh: A Study on Some Selected Union Parishads in Rajshahi District",
    sponsor: 'Faculty of Social Sciences, University of Rajshahi, Bangladesh',
    durationText: '15/09/2017 – 14/06/2019',
    startYear: 2017,
    endYear: 2019,
    budget: 'US$ 2,500',
    role: null,
    collaborators: ['Harold Sougoto Baroi'],
    objective:
      'To analyse how Union Digital Centers facilitate access to public services in rural areas of Bangladesh.',
    categories: ['Digital Governance', 'Service Delivery', 'Local Governance'],
  },
  {
    id: 'g11',
    type: 'grant',
    title: 'A Formative Research on Social Accountability',
    sponsor: 'World Vision, Bangladesh',
    durationText: '2017 – 2018',
    startYear: 2017,
    endYear: 2018,
    budget: 'US$ 18,500',
    role: null,
    collaborators: [],
    objective:
      'To conduct formative research to understand and improve social accountability mechanisms in Bangladesh.',
    categories: ['Social Accountability', 'Governance'],
  },
  {
    id: 'g12',
    type: 'grant',
    title:
      'Gender Responsive Budgeting at the Local Level in Bangladesh: A Study on Selected Union Parishads of Rajshahi District',
    sponsor: 'University Grants Commission of Bangladesh',
    durationText: '01/02/2017 – 31/12/2018',
    startYear: 2017,
    endYear: 2018,
    budget: 'US$ 2,750',
    role: null,
    collaborators: ['Shuvra Chowdhury'],
    objective:
      'To evaluate the implementation and impact of gender-responsive budgeting practices at the local government level.',
    categories: ['Gender', 'Budgeting', 'Public Finance', 'Local Governance'],
  },
  {
    id: 'g13',
    type: 'grant',
    title:
      'Role of Citizen Charter (CC) in the Service Delivery Process at the Local Level in Bangladesh: A Study on Selected Union Parishads in Rajshahi District',
    sponsor: 'Faculty of Social Sciences, University of Rajshahi, Bangladesh',
    durationText: '01/11/2016 – 31/10/2017',
    startYear: 2016,
    endYear: 2017,
    budget: 'US$ 2,500',
    role: null,
    collaborators: ['Shuvra Chowdhury'],
    objective:
      'To assess the impact of Citizen Charters on the efficiency and effectiveness of local service delivery.',
    categories: ['Citizen Charter', 'Service Delivery', 'Accountability', 'Local Governance'],
  },
  {
    id: 'g14',
    type: 'grant',
    title:
      'Network-based Coordination in Urban Policy Implementation in Bangladesh: A Study on Chittagong and Rajshahi City Corporation',
    sponsor: 'Department of Administration and Organization Theory, University of Bergen, Norway',
    durationText: '2011 – 2012',
    startYear: 2011,
    endYear: 2012,
    budget: 'US$ 2,500',
    role: null,
    collaborators: ['Associate Professor Ishtiaq Jamil'],
    objective:
      'To investigate how network-based coordination affects the implementation of urban policies in Bangladesh.',
    categories: ['Urban Policy', 'Coordination', 'Governance'],
  },
  {
    id: 'g15',
    type: 'grant',
    title:
      "Impact of Local Government Reforms on Women's Economic Freedom in Bangladesh",
    sponsor: 'Faculty of Social Sciences, University of Rajshahi, Bangladesh',
    durationText: '2009 – 2010',
    startYear: 2009,
    endYear: 2010,
    budget: 'US$ 900',
    role: null,
    collaborators: [],
    objective:
      "To explore the effects of local government reforms on enhancing women's economic freedom in Bangladesh.",
    categories: ['Gender', 'Local Governance', 'Reform', 'Economic Empowerment'],
  },
]

export const consultancyExperiences = [
  {
    id: 'c1',
    type: 'consultancy',
    title:
      'National Consultant for Political Economy Analysis (PEA) of Multi-Stakeholder Initiative for Peace and Stability (MIPS) Project',
    sponsor: 'The Hunger Project Bangladesh (Financed by FCDO)',
    durationText: '2023 – 2024',
    startYear: 2023,
    endYear: 2024,
    objective:
      "To analyse the political economy aspects affecting Bangladesh's peace and stability initiatives and provide actionable recommendations for the MIPS Project.",
    categories: ['Political Economy', 'Peace & Stability', 'Governance', 'Consultancy'],
  },
  {
    id: 'c2',
    type: 'consultancy',
    title: 'Team Leader, Baseline Study of Activating Village Court-III',
    sponsor: 'UNDP, Bangladesh',
    durationText: '2023 – 2024',
    startYear: 2023,
    endYear: 2024,
    objective:
      'To conduct a baseline study assessing the current status and effectiveness of the Village Court system and identify key areas for improvement.',
    categories: ['Baseline Study', 'Justice', 'Evaluation', 'UNDP', 'Consultancy'],
  },
  {
    id: 'c3',
    type: 'consultancy',
    title: 'National Consultant, Mid-Term Evaluation of National Urban Poverty Reduction Programme (NUPRP)',
    sponsor: 'UNDP, Bangladesh',
    durationText: '2022',
    startYear: 2022,
    endYear: 2022,
    objective:
      'To evaluate the progress and impact of the NUPRP, identifying strengths, weaknesses, and recommendations for course correction.',
    categories: ['Mid-Term Evaluation', 'Urban Poverty', 'UNDP', 'Consultancy'],
  },
  {
    id: 'c4',
    type: 'consultancy',
    title: 'Team Leader, End Line Evaluation of Strengthening Participation and Active Citizenship in Bangladesh (SPACB) Project',
    sponsor: 'The Asia Foundation, Dhaka (Financed by FCDO)',
    durationText: '2022',
    startYear: 2022,
    endYear: 2022,
    objective:
      'To perform an end-line evaluation of the SPACB Project, assessing the outcomes, impacts, and overall effectiveness in strengthening civic participation and active citizenship.',
    categories: ['Endline Evaluation', 'Civic Participation', 'FCDO', 'Consultancy'],
  },
  {
    id: 'c5',
    type: 'consultancy',
    title: 'Policy Specialist, Effective and Accountable Local Governance (EALG)',
    sponsor: 'UNDP, Dhaka',
    durationText: '2021',
    startYear: 2021,
    endYear: 2021,
    objective:
      'To provide expertise on policy development and implementation to enhance the effectiveness and accountability of local governance structures.',
    categories: ['Policy', 'Local Governance', 'Accountability', 'UNDP', 'Consultancy'],
  },
  {
    id: 'c6',
    type: 'consultancy',
    title: 'Team Leader, Final Evaluation of Economic Empowerment of Rural Women (EERW) Programme',
    sponsor: 'Bangladesh Red Crescent Society, Dhaka',
    durationText: '2021',
    startYear: 2021,
    endYear: 2021,
    objective:
      "To lead the final evaluation of the EERW Programme, assessing its impact on the economic empowerment of rural women and providing recommendations for future initiatives.",
    categories: ['Final Evaluation', 'Gender', 'Economic Empowerment', 'Consultancy'],
  },
  {
    id: 'c7',
    type: 'consultancy',
    title: 'Team Leader, Baseline Study of Activating Village Court in Bangladesh (Phase II)',
    sponsor: 'UNDP, Dhaka',
    durationText: '2020',
    startYear: 2020,
    endYear: 2020,
    objective:
      'Conduct a baseline study for Phase II of the Activating Village Court project, focusing on identifying initial conditions and critical challenges.',
    categories: ['Baseline Study', 'Justice', 'UNDP', 'Consultancy'],
  },
  {
    id: 'c8',
    type: 'consultancy',
    title: 'National Consultant, Proposing Structure and Developing Operational Modality/Guideline for UZP Development and Coordination Committee (UZDCC)',
    sponsor: 'UNDP, Dhaka',
    durationText: '2020',
    startYear: 2020,
    endYear: 2020,
    objective:
      'To propose and develop a structure and operational modality for the UZDCC, integrating lessons learned from previous experiences of UDCC.',
    categories: ['Guidelines', 'Institutional Design', 'UNDP', 'Consultancy'],
  },
  {
    id: 'c9',
    type: 'consultancy',
    title: 'National Consultant, Mid-term Evaluation of HYSAWA Project',
    sponsor: 'S.D.C., Dhaka',
    durationText: '2020',
    startYear: 2020,
    endYear: 2020,
    objective:
      'To conduct a mid-term evaluation of the HYSAWA Project, assessing its progress, challenges, and effectiveness in achieving its goals.',
    categories: ['Mid-Term Evaluation', 'WASH', 'SDC', 'Consultancy'],
  },
  {
    id: 'c10',
    type: 'consultancy',
    title: 'Country Research Lead, Evaluation Research for Governance and Social Accountability',
    sponsor: 'Nobo Jatra Project, World Vision Bangladesh',
    durationText: '2019 – 2020',
    startYear: 2019,
    endYear: 2020,
    objective:
      'To lead evaluation research on governance and social accountability under the Nobo Jatra Project, focusing on effectiveness and impact.',
    categories: ['Research Lead', 'Governance', 'Social Accountability', 'World Vision', 'Consultancy'],
  },
  {
  id: 'c11',
  type: 'consultancy',
  title: 'National Consultant for Reviewing Roles and Responsibilities of Line Agency Committees and UP/UZP Standing Committees (SCs)',
  sponsor: 'EALG Project, UNDP, Dhaka',
  durationText: '2019',
  startYear: 2019,
  endYear: 2019,
  objective:
    'To review and develop terms of reference and guidelines for the standing committees of Union Parishads and Upazila Parishads, enhancing their effectiveness and clarity of roles.',
  categories: ['Governance', 'Institutional Reform', 'UNDP', 'Consultancy'],
},
{
  id: 'c12',
  type: 'consultancy',
  title: 'Team Leader, Feasibility Study for the Selection of Intervention Areas of Urban Management of Migration and Livelihood (UMML)',
  sponsor: 'UMIMCC II Project, G.I.Z., Dhaka, Bangladesh',
  durationText: '2018',
  startYear: 2018,
  endYear: 2018,
  objective:
    'To lead a feasibility study to identify and select intervention areas for improving urban management related to migration and livelihood.',
  categories: ['Urban Governance', 'Migration', 'Feasibility Study', 'Consultancy'],
},
{
  id: 'c13',
  type: 'consultancy',
  title: 'National Consultant, Midterm Evaluation of Policy Reforms on Local Governance (PROLOG-II) Project',
  sponsor: 'World Bank (Financed by SDC)',
  durationText: '2018',
  startYear: 2018,
  endYear: 2018,
  objective:
    'To conduct a midterm evaluation of the PROLOG-II Project, assessing effectiveness and impact of policy reforms on local governance.',
  categories: ['Evaluation', 'Local Governance', 'World Bank', 'Consultancy'],
},
{
  id: 'c14',
  type: 'consultancy',
  title: 'Part-Time Local Governance Adviser',
  sponsor: 'Nobo Jatra Project, World Vision Bangladesh (Financed by USAID)',
  durationText: '2018',
  startYear: 2018,
  endYear: 2018,
  objective:
    'To provide advisory support on local governance aspects within the Nobo Jatra Project.',
  categories: ['Advisory', 'Local Governance', 'USAID', 'Consultancy'],
},
{
  id: 'c15',
  type: 'consultancy',
  title: 'National Consultant, Empirical Research on Corruption and Violent Extremism in Asia-Pacific Region: Bangladesh Country Study',
  sponsor: 'UNDP, Dhaka & Singapore',
  durationText: '2017',
  startYear: 2017,
  endYear: 2017,
  objective:
    'To conduct empirical research to analyse linkages between corruption and violent extremism in Bangladesh.',
  categories: ['Corruption', 'Violent Extremism', 'Research', 'UNDP', 'Consultancy'],
},
{
  id: 'c16',
  type: 'consultancy',
  title: 'National Consultant, Formative Research on Social Accountability',
  sponsor: 'Nobo Jatra Project, World Vision Bangladesh',
  durationText: '2017',
  startYear: 2017,
  endYear: 2017,
  objective:
    'To conduct formative research focusing on social accountability mechanisms.',
  categories: ['Social Accountability', 'Governance', 'Consultancy'],
},
{
  id: 'c17',
  type: 'consultancy',
  title: "National Consultant, Context Analysis and Documentation for Women's Political Empowerment",
  sponsor: 'Aparajita-Phase-II, Helvetas Swiss Intercooperation',
  durationText: '2017',
  startYear: 2017,
  endYear: 2017,
  objective:
    "Conduct context analysis highlighting opportunities and challenges influencing women's political empowerment.",
  categories: ['Women Empowerment', 'Political Participation', 'Consultancy'],
},
{
  id: 'c18',
  type: 'consultancy',
  title: 'National Consultant, Action Research on Social Safety Net/Social Protection for Dalits and Adibashis',
  sponsor: 'MNMC Foundation, Rangpur',
  durationText: '2017',
  startYear: 2017,
  endYear: 2017,
  objective:
    'To conduct action research on social safety net and protection services for Dalits and Adibashis.',
  categories: ['Social Protection', 'Marginalised Groups', 'Research', 'Consultancy'],
},
{
  id: 'c19',
  type: 'consultancy',
  title: 'National Consultant, Guidelines for Legal Rights Violation Support for Dalit and Adibashis',
  sponsor: 'MNMC Foundation, Rangpur',
  durationText: '2017',
  startYear: 2017,
  endYear: 2017,
  objective:
    'To develop guidelines supporting legal rights violations affecting Dalit and Adibashi communities.',
  categories: ['Human Rights', 'Legal Support', 'Consultancy'],
},
{
  id: 'c20',
  type: 'consultancy',
  title: 'National Consultant, Research on Women Development Forums (WDF)',
  sponsor: 'Upazila Governance Project (UZGP), UNDP, Dhaka',
  durationText: '2016',
  startYear: 2016,
  endYear: 2016,
  objective:
    "To research Women's Development Forums to assess their impact on women's empowerment and governance.",
  categories: ['Women Empowerment', 'Governance', 'UNDP', 'Consultancy'],
},

// Continue pattern...

{
  id: 'c49',
  type: 'consultancy',
  title: 'Team Leader, Citizen Charter Survey on Urban Government Bodies',
  sponsor: 'University of Bergen, Norway',
  durationText: '2009–2010',
  startYear: 2009,
  endYear: 2010,
  objective:
    'To lead a survey on Citizen Charters in urban government bodies, assessing implementation and effectiveness.',
  categories: ['Citizen Charter', 'Urban Governance', 'Survey', 'Consultancy'],
},
{
  id: 'c50',
  type: 'consultancy',
  title: 'Co-investigator, Governance Assessment of GFATM HIV/AIDS Partners',
  sponsor: 'Save the Children, USA',
  durationText: '2009',
  startYear: 2009,
  endYear: 2009,
  objective:
    'To co-investigate governance assessment of GFATM HIV/AIDS partners.',
  categories: ['Health Governance', 'HIV/AIDS', 'Assessment', 'Consultancy'],
}
  
]
// ✅ Combined list (use this in your page)
export const allGrantsAndConsultancy = [
  ...researchGrants.map((x) => ({ ...x, group: 'Research Grants' })),
  ...consultancyExperiences.map((x) => ({ ...x, group: 'Consultancy' })),
]

// ✅ Category list for filter UI (dropdown/buttons)
export const grantsConsultancyCategories = (() => {
  const set = new Set()
  allGrantsAndConsultancy.forEach((item) => {
    ;(item.categories || []).forEach((c) => set.add(c))
  })
  return Array.from(set).sort()
})()

// ✅ Year range defaults (auto-detect min/max)
export const grantsConsultancyYearRange = (() => {
  const years = allGrantsAndConsultancy
    .flatMap((i) => [i.startYear, i.endYear])
    .filter((y) => typeof y === 'number' && !Number.isNaN(y))

  const min = years.length ? Math.min(...years) : 2000
  const max = years.length ? Math.max(...years) : new Date().getFullYear()

  return { min, max }
})()
