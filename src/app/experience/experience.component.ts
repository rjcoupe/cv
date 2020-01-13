import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  jobs: any[] = [
    {
      title: 'Cloud Consultant',
      employer: 'DevOpsGroup',
      location: 'Cardiff',
      dateFrom: 'September 2019',
      dateTo: 'Present',
      bullets: [
        'Responsible, as a qualified AWS Well-Architected Lead, for leading Well-Architected Reviews for clients in order to determine where best to focus efforts on improvement to their cloud estate',
        'Designed and proposed solutions for clients requiring an enchancement or original creation of cloud strategy'
      ]
    },
    {
      title: 'Associate Agile Coach',
      employer: 'DevOpsGroup',
      location: 'Cardiff',
      dateFrom: 'January 2019',
      dateTo: 'September 2019',
      bullets: [
        'Taking on a wider range of clients, worked primarily within the scale-up sector to bring client teams up to date in their ways of working',
        'Improved a client team\'s practice sufficiently to prompt the CIO to comment to the effect that the most recently released version was 6 months ahead of expectations due to the engagement',
        'Worked with two teams at the nascent stage of an enterprise transformation, coaching them from project to product team architecture'
      ]
    },
    {
      title: 'Senior Scrum Master',
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
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
