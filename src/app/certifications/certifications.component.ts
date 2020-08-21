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
        title: 'AWS Cloud Practitioner',
        badge: 'assets/badges/AWS_CP.png'
      },
      {
        title: 'AWS Solutions Architect (Associate)',
        badge: 'assets/badges/AWS_SAA.png'
      },
      {
        title: 'AWS Developer (Associate)',
        badge: 'assets/badges/AWS_DVA.png'
      },
      {
        title: 'AWS SysOps Administrator (Associate)',
        badge: 'assets/badges/AWS_SOA.png'
      },
      {
        title: 'AWS Solutions Architect (Professional)',
        badge: 'assets/badges/AWS_SAP.png'
      },
      {
        title: 'AWS DevOps Engineer (Professional)',
        badge: 'assets/badges/AWS_DOE.png'
      },
      {
        title: 'AWS Security Specialty',
        badge: 'assets/badges/AWS_SCS.png'
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