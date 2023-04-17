import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

import * as html2pdf from 'html2pdf.js'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent {

  name:string = 'Hosne Mobarak';

  download(){
    var element = document.getElementById('resume');

    var opt = {
      margin:       0,
      filename:     `${this.name}.pdf`,
      pagebreak: {mode: ['css', 'legacy']},
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
 
  // New Promise-based usage:
  html2pdf().set(opt).from(element).save();
  }

}
