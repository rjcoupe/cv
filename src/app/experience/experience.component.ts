import { Component, OnInit } from '@angular/core';

interface IJob {
  title: string;
  employer: string;
  location: string;
  dateFrom: string;
  dateTo?: string;
  bullets: string[];
  technologies?: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  jobs: IJob[] = [
    {
      title: 'Lead Consultant',
      employer: 'Amido',
      location: 'Remote',
      dateFrom: 'February 2022',
      bullets: []
    },
    {
      title: 'Senior Consultant',
      employer: 'Amido',
      location: 'Remote',
      dateFrom: 'September 2021',
      dateTo: 'February 2022',
      technologies: [
        "AWS Elastic Kubernetes Service",
        "Azure DevOps",
        "Azure Container Registry",
        "Terraform",
        "Forgerock"
      ],
      bullets: [
        "Lead DevOps/Cloud work on major UK government project",
        "Designed and implemented, from scratch, a continuous integration/deployment pipeline enabling developers to deploy to ephemeral environments through git commits",
        "Worked closely with client teams and leadership",
        "Line managed more junior engineers"
      ]
    },
    {
      title: 'DevOps Lead',
      employer: 'Seccl',
      location: 'Remote/Bath',
      dateFrom: 'December 2020',
      dateTo: 'September 2021',
      bullets: [
        "Built and lead the DevOps/Cloud team, focusing on both technical excellence and the personal development of engineers",
        "Maximising developer ROI by proactively removing impediments and improving processes around them",
        "Overhauled team work management, implementing agile practices resulting in a kanban process",
        "Liaising with stakeholders throughout the business on matters concerning cloud and deployment processes"
      ],
      technologies: [
        'AWS Lambda, API Gateway, EC2, Cloudfront & DynamoDB',
        'AWS networking architectures (VPCs - and the routing, subnetting etc. therein) as well as Site to Site VPNs',
        'AWS security tools including Guard Duty and WAF',
        'Containerisation via Docker, AWS ECS and AWS EKS/Kubernetes',
        'MongoDB',
        'Github & Github Actions',
        'Ansible',
        'Jenkins',
        'Terraform',
        'Typescript',
      ]
    },
//     {
//       title: 'Cloud Engineer',
//       employer: 'OneWeb',
//       location: 'Remote',
//       dateFrom: 'October 2020',
//       dateTo: 'December 2020',
//       bullets: [
//         "Since the company's emergence from Chapter 11 bankruptcy, worked to re-architect the entire AWS estate to make better use of well-architected principles and cloud-native technologies",
//         "Introduced agile working practices to the shared services team",
//         "Acted as the main liaison between the Shared Services team and the Fleet Management Segment within the company"
//       ]
//     },
    {
      title: 'Cloud Consultant',
      employer: 'DevOpsGroup',
      location: 'Cardiff',
      dateFrom: 'September 2019',
      dateTo: 'October 2020',
      bullets: [
        'Responsible, as a qualified AWS Well-Architected Lead, for leading Well-Architected Reviews for over 20 distinct clients in order to determine where best to focus efforts on improvement to their cloud estate',
        'Designed, proposed and implemented solutions for clients requiring an enchancement or original creation of cloud strategy',
        'Regularly undertook engineering work alone as well as alongside dedicated engineers'
      ],
      technologies: [
        'Amazon Web Services (AWS) - a very broad range of the technologies and products therein',
        'Kubernetes',
        'A wide array of technologies used by clients as part of the solution design and implementation processes'
      ]
    },
    {
      title: 'Agile Coach',
      employer: 'DevOpsGroup',
      location: 'Cardiff',
      dateFrom: 'January 2019',
      dateTo: 'September 2019',
      bullets: [
        'Taking on a wider range of clients, worked primarily within the scale-up sector to bring client teams up to date in their ways of working',
        'Improved a client team\'s practice sufficiently to prompt the CIO to comment to the effect that the most recently released version was 6 months ahead of expectations due to the engagement',
        'Worked with two teams at the nascent stage of an enterprise transformation, coaching them from project to product team architecture',
        'Pulled double duty as an Academy Coach, line-managing our undergraduate interns to help facilitate their growth and development'
      ]
    },
    {
      title: 'Scrum Master',
      employer: 'DevOpsGroup',
      location: 'Cardiff',
      dateFrom: 'July 2018',
      dateTo: 'December 2018',
      bullets: [
        'Scrum Master for a team operating within a FTSE 350 client organisation',
        'Facilitated effective workflow enabling engineering team to make substantial improvements to prior infrastructure',
        'Ensured effective lines of communication between engineers and stakeholders'
      ]
    },
    {
      title: 'Product Owner',
      employer: 'Sorenson Media',
      location: 'Cardiff',
      dateFrom: 'September 2017',
      dateTo: 'July 2018',
      bullets: [
        "One of a two-person product owning team for Sorenson's flagship Ad Suite product, a television advert-enhancing service with partners including Samsung, Discovery, ESPN and the Sinclair Group",
        "Sole product owner of the Broadcast Data API, a business critical internal product serving several customer-facing platforms",
        "Defined, prioritised managed and communicated to stakeholders the status of multiple releases across different products"
      ]
    },
    {
      title: 'Scrum Master',
      employer: 'Sorenson Media',
      location: 'Cardiff',
      dateFrom: 'June 2016',
      dateTo: 'September 2017',
      bullets: [
        "Scrum Mastered multiple teams across multiple products as needed by the business to ensure a predictable and consistent velocity and throughput of the teams in question",
        "Served as a line manager as an extra facet to the role, taking on a mandate to effectively develop and enable the team members so as to help them realise their full potentials both individually and as a team",
        "Tracked and used various metrics including lead and cycle times to discover and realise potential reductions in waste",
        "Served as a technical lead with responsibility for the technical implementations undertaken for the overall products"
      ]
    },
    {
      title: 'Senior Developer',
      employer: 'Sorenson Media',
      location: 'Cardiff',
      dateFrom: 'September 2015',
      dateTo: 'June 2016',
      bullets: [
        "Contributed to an ethos of quality and dependability of code, prioritising a test-mandating approach to ensure a long term vision",
        "Recognised as a high-profile, hard working member of the team by peers and leadership",
        "On multiple occasions, stepped into traditional Scrum Master roles by leading stand-ups, retrospectives and planning sessions"
      ],
      technologies: [
        'NodeJS',
        'MongoDB',
        'React'
      ]
    },
    {
      title: 'Web Developer',
      employer: 'Imaginet',
      location: 'Cardiff',
      dateFrom: 'February 2014',
      dateTo: 'May 2015',
      bullets: [
        "Worked with an array of clients including national enterprises such as NCP and Natural Balance Foods, creating and maintaining their commercial websites",
        "Implemented back-end solutions integrating technologies such as Atos WorldPay",
        "Designated as the Primary E-Commerce Developer within the company shortly after starting"
      ],
      technologies: [
        'PHP',
        'MySQL'
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
