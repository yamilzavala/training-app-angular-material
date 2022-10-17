import { Component, OnInit, ViewChild,  } from '@angular/core';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'duration', 'calories','date','state']; 
  dataSource = new MatTableDataSource<Exercise>;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private trainingService: TrainingService,
              private _liveAnnouncer: LiveAnnouncer) { 
              }

  ngOnInit(): void {
    this.dataSource.data = this.trainingService.getPastExercises();
    console.log('exercises from table: ', this.trainingService.getPastExercises())
    console.log('dataSource: ', this.dataSource)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filter: Event) {
    this.dataSource.filter = (filter.target as HTMLInputElement).value.trim().toLocaleLowerCase()
  }

  announceSortChange(sortState: Sort) {    
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
