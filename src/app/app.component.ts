import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ages: any = {};
  email: string = 'rjcoupe@pm.me';
  phoneNumber: string = '+44 (0) 7460700782'
  sourcesOfPride: any[] = [
    {
      icon: 'fas fa-graduation-cap',
      title: "AWS Certifications",
      text: "progressing from no certifications to 7x AWS-certified, including both Pro and one Specialty certificates, within a year"
    },
    {
      icon: 'fas fa-dice',
      title: "Varied Experiences",
      text: "through my variety of agile roles, I have seen the world through the eyes of a Developer/Engineer, Scrum Master, Product Owner and Agile Coach to realise a thoroughly diverse view of a business's end goals."
    },
    {
      icon: 'fas fa-angle-double-up',
      title: "Ambition",
      text: "in myself, my colleagues and my work. I am always striving to develop whatever and however I can and feel I have had great success in this respect."
    }
  ];

  strengths: string[] = [
    'Adaptable',
    'Personable',
    'Ambitious',
    'Big Picture-focused',
    'Value-driven',
    'Puzzle solver',
    'Approachable',
    'Logical',
    'Process and Systems Thinking'
  ];

  certs: string[] = [
    'Offsec Wireless Professional',
    'Offsec Kali Linux Certified Professional',
    'AWS Solutions Architect (Professional)',
    'AWS DevOps Engineer (Professional)',
    'AWS Security Specialty',
    'AWS Solutions Architect (Associate)',
    'AWS Developer (Associate)',
    'AWS SysOps Administrator (Associate)',
    'AWS Cloud Practitioner',
    'Certified Scrum Master (Scrum Alliance)',
    'Certified Product Owner (Scrum Alliance)',
    'BCS Agile Foundation',
    'BCS DevOps 101'
  ]

  constructor() {}

  ngOnInit() {
    const now: number = Date.now();
    const birthdays: any = {
      isaac: new Date(2013, 4, 26).getTime(),
      holly: new Date(2016, 2, 6).getTime(),
      harry: new Date(2018, 11, 7).getTime()
    }
    Object.keys(birthdays).forEach(name => {
      const diff = now - birthdays[name];
      this.ages[name] = Math.floor(diff / 1000 / 86400 / 365);
    });
  }
}
