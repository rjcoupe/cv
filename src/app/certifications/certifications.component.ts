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
        title: 'AWS DevOps Engineer Pro',
        badge: '/assets/badges/AWS_DOE.png'
      },
      {
        title: 'AWS Solutions Architect Associate',
        badge: '/assets/badges/AWS_SAA.png'
      }
    ]
  }

}

interface Cert {
  title: string;
  badge: string;
}