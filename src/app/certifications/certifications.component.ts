import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  certs: Cert[];
  constructor() { }

  ngOnInit() {
    this.certs = [
      {
        title: 'AWS DevOps Engineer (Professional)',
        badge: 'assets/badges/AWS_DOE.png'
      },
      {
        title: 'AWS Solutions Architect (Associate)',
        badge: 'assets/badges/AWS_SAA.png'
      },
      {
        title: 'AWS Cloud Practitioner',
        badge: 'assets/badges/AWS_CP.png'
      },
      {
        title: 'Scrum Alliance Certified Scrum Master',
        badge: 'assets/badges/SA_CSM.png'
      },
      {
        title: 'Scrum Alliance Certified Product Owner',
        badge: 'assets/badges/SA_CSPO.png'
      }
    ]
  }

}

interface Cert {
  title: string;
  badge: string;
}