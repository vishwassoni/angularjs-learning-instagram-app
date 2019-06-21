import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  studentName = 'Angular Student';

  getButtonType() {
    return 'Dont Press';
  }
  changeColor(): void {
    this.studentName = 'TypeScript Student';
  }
  funMethod(danger): void {
    console.log(danger.value);
  }
}
