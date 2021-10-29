import { Component, OnInit, ViewChild } from '@angular/core';
import { ColleaguesService } from '../service/colleagues.service';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddColleagueComponent } from '../add-colleague/add-colleague.component';

@Component({
  selector: 'app-colleagues',
  templateUrl: './colleagues.component.html',
  styleUrls: ['./colleagues.component.css'],
})
export class ColleaguesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'job',
    'action',
  ];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  colleagues: any = [];
  dataSource: any = [];

  constructor(
    private colleagueService: ColleaguesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.colleagueService.getColleagues().subscribe((data: any) => {
      this.colleagues = data;
      this.dataSource = new MatTableDataSource<any>(this.colleagues);
    });
  }

  openDialog(action: any, obj: any) {
    obj.action = action;
    let dialogRef = this.dialog.open(AddColleagueComponent, { data: obj });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addColleague(result.data);
      } else if (result.event == 'Update') {
        this.updateColleague(result.data);
      } else if (result.event == 'Delete') {
        this.deleteColleague(result.data);
      }
    });
  }

  addColleague(obj: any) {
    this.colleagueService.createColleague(obj);
    obj.id = this.colleagues.length + 1;
    this.colleagues.push(obj);
    this.table.renderRows();
  }

  updateColleague(obj: any) {
    this.colleagueService.updateColleague(obj);
    this.colleagues = this.colleagues.filter((item: any) => {
      if (item.id == obj.id) {
        item.firstname = obj.firstname;
        item.lastname = obj.lastname;
        item.email = obj.email;
        item.job = obj.job;
      }
      return true;
    });
  }

  deleteColleague(obj: any) {
    this.colleagueService.deleteColleague(obj.id);
    this.colleagues = this.colleagues.filter((item: any) => item.id != obj.id);
  }
}
