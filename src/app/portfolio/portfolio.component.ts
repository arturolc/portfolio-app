import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  public projects = [];
  constructor(private _projectService: ProjectService) { }

    ngOnInit() {
      this._projectService.getProjects()
        .subscribe(data => this.projects = data);
    }
}

