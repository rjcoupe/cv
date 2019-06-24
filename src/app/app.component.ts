import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sourcesOfPride: any[] = [
    {
      icon: 'fas fa-rocket',
      title: "Sorenson Media Ad Suite's Growth",
      text: 'from a team of under 10 developers to a multi-team, LeSS-employing framework of nearly 30 engineers'
    },
    {
      icon: 'fas fa-dice',
      title: "Varied Experiences",
      text: "through my variety of Scrum roles at Sorenson Media; I have seen the world through the eyes of a Developer, Scrum Master and Product Owner to realise a thoroughly diverse view of a business's end goals."
    },
    {
      icon: 'fas fa-angle-double-up',
      title: "Ambition",
      text: "in myself, my colleagues and my work. I am always striving to develop whatever and however I can and feel I have had great success in this respect."
    }
  ];

  strengths: string[] = [
    'Adaptable', 'Personable', 'Ambitious', 'Big Picture-focused', 'Quality-driven', 'Puzzle solver', 'Approachable', 'Logical', 'Process and Systems Thinking'
  ];

  certs: string[] = [
    'AWS Solutions Architect (Associate)',
    'AWS Cloud Practitioner',
    'Certified Scrum Master (Scrum Alliance)',
    'Certified Product Owner (Scrum Alliance)',
    'BCS Agile Foundation',
    'BCS DevOps 101'
  ]
}
