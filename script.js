/**
 * Resume/CV template created with Bootstrap 5
 */
const resume = {
  firstName: 'Michal',
  lastName: 'Červeňanský',
  jobTitle: 'Senior AI Developer',
  phone: '+421 904 171 263',
  email: 'misko.cervenansky@gmail.com',
  website: 'https://www.michal.cervenansky.eu/',
  linkedin: 'https://www.linkedin.com/in/michal-%C4%8Derve%C5%88ansk%C3%BD-453806123/',
  city: 'Brno',
  education: [
    {
      school: 'Masaryk University Brno',
      degree: 'Master',
      graduationDate: '2021',
      description: 'Artificial Intelligence and Data Processing'
    },
    {
      school: 'Masaryk University Brno',
      degree: 'Bachelor',
      graduationDate: '2019',
      description: 'Bioinformatics'
    }
  ],
  skills: [   
    'Python',
    'Java',
    'Large Language Models',
    'RAG',
    'REST API',
    'Docker',

    
  ],
  employmentHistory: [
    {
      jobTitle: 'Senior AI Developer',
      startDate: 'Nov 2024',
      endDate: 'Present',
      employer: 'SAP Signavio',
      city: 'Brno',
      achievements: [
        'I have joined Signavio\'s Process.AI team with the goal of exploring and leveraging large language model (LLM) capabilities alongside BPMN (Business Process Model and Notation). The aim is to deliver actionable process insights and enhance user experience.'
        ]
    },
        {
      jobTitle: 'AI Software Engineer',
      startDate: 'Dec 2023',
      endDate: 'Oct 2024',
      employer: 'Oracle NetSuite',
      city: 'Brno',
      achievements: [
        'As one of the first members of the new NS AI team, I am working on the development of a Retrieval Augmented Generation (RAG) LLM service that aims to improve search experiences and serve as a chatbot.'
        ]
    },
     {
      jobTitle: 'Knowledge System Developer',
      startDate: 'Jun 2022',
      endDate: 'Jan 2024',
      employer: 'Oracle NetSuite',
      city: 'Brno',
      achievements: [
        'As a member of the Knowledge Management team, I developed a library of Python scripts for managing Oracle Knowledge bases, specifically SuiteAnswers and SuiteKnowledge. My primary responsibilities included preparing data for analytics and performing batch updates on content. Additionally, I gained foundational knowledge in Oracle Service Cloud platform development and implemented front-end enhancements for SuiteKnowledge.'
        ]
    },
    {
      jobTitle: 'Software Quality Engineer',
      startDate: 'Feb 2020',
      endDate: 'May 2022',
      employer: 'Red Hat',
      city: 'Brno',
      achievements: [
        'Working on Red Hat Process Automation Manager and jBPM as a Quality engineer I specialised mostly on performance testing the java based application engine as well as managing testing infrastructure(Jenkins), jobs define using configuration as a code. I also worked on setting up Grafana to monitor perfomance of releases and nightly builds. First 18 months I was an intern while finishing my master degree.'
      ]
    },
    {
      jobTitle: 'Bioinformatician',
      startDate: 'Mar 2018',
      endDate: 'Jun 2019',
      employer: 'Institute of Biophysics of the Czech Academy of Sciences',
      city: 'Brno',
      achievements: [
        'I was responsible for creating an SQL based bioinformatic pipeline to enable to efficiently work with annotated sequences (mostly DNA) and to store results of analysis to encourage further research of transposable elements. It was part of my Bachelor thesis as well as a web-based user interface to enable to comfortably work with the pipeline.'
       ]
    }
  ],

  photo: 'Michal_Cervenansky_square_crop.jpg',
}

const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()