import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list'; 
import { NavbarComponent } from '../../components/navbar/navbar.component'; 
import { ContactformComponent } from '../../components/contactform/contactform.component';
import { MatMenuModule } from '@angular/material/menu';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { Clipboard } from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';
import pubblicationsfile from "../../../assets/text/publications.json"
import linksfile from "../../../assets/text/links.json"
import eventsfile from "../../../assets/text/events.json"
import subjectsfile from "../../../assets/text/subjects.json"
import textfile from "../../../assets/text/testi.json"

interface Publication {
  title: string;
  description: string;
  link: string;
}

interface Events {
  title: string;
  description: string;
  location: string;
  date: Date;
}

interface Subjects {
  title: string;
  description: string;
  link: string;
}

interface Links {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatListModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatDividerModule, MatButtonModule, MatIconModule, MatSidenavModule, MatCardModule, NavbarComponent, ContactformComponent, MatMenuModule, ClipboardModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class AppComponent{

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }

  title = 'chiarasava';

  aboutme:string = textfile.aboutme;
  welcome:string = textfile.welcome;
  department:string = textfile.department;
  faculty:string = textfile.faculty;
  address:string = textfile.address;
  mail:string = textfile.mail;
  university_link:string = textfile.university_link;
  
  publications: Publication[] = pubblicationsfile.publications;

  pastevents: Events[] = eventsfile.past;
  upcoming: Events[] = eventsfile.upcoming;

  subjects: Subjects[] = subjectsfile.subjects;

  links: Links[] = linksfile.links;

  isWindowGreaterThan600 = window.innerWidth > 768;

  private intervalId: any;

  ngOnInit(): void {
    this.updateEventLists();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isWindowGreaterThan600 =  window.innerWidth > 768;
  }

  openSection(sectionId: string){
    const elem = document.getElementById(sectionId);
    if(elem){
      elem.scrollIntoView({behavior: 'smooth'});
    }
  }

  formatAboutMe(aboutme: string): string {
    return aboutme.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

  copyToClipboard() {
    this.clipboard.copy("sava@karlin.mff.cuni.cz");
  }

  writeMessage() {
    window.location.href = `mailto:sava@karlin.mff.cuni.cz`;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  // Check and move events from upcoming to past if is expired
  updateEventLists(): void {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    this.upcoming.forEach((event, index) => {
      const eventDate = new Date(event.date);
      if (this.isTheNextDay(eventDate, yesterday)) {
        this.pastevents.push(event);
        this.upcoming.splice(index, 1);
      }
    });
  }

  // Check if event was yesterday
  isTheNextDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

}
