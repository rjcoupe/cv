import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  jobs: any[] = [
    {
      title: 'Product Owner',
      employer: 'Sorenson Media',
      location: 'Cardiff',
      dateFrom: 'September 2017',
      dateTo: 'Present',
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
        "Served as a line manager and technical lead as an extra facet to the role, taking on a mandate to effectively develop and enable the team members so as to help them realise their full potentials",
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
