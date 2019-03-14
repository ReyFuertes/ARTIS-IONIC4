import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Refresher } from '@ionic/angular';
import { environment } from 'src/environments/environment';

declare var require: any;
const algoliasearch = require('algoliasearch/dist/algoliasearch.js');

@Component({
  selector: 'app-modal-option',
  templateUrl: './modal-option.component.html',
  styleUrls: ['./modal-option.component.scss']
})
export class ModalOptionComponent implements OnInit {
  public options: any[] = [];
  public cred = environment.algolia;
  public client: any;
  public index: any;
  public searchQuery: any;

  @ViewChild("refresherRef") refresherRef: Refresher;

  constructor(public modalService: ModalService) {
    this.client = algoliasearch(this.cred.app_id, this.cred.api_key, { protocol: 'https'});

    this.index = this.client.initIndex('schools');
  }

  ngOnInit(): void {
  }

  public onSelect(option: any): void {
    this.modalService.change.emit(option);
    this.modalService.close();
  }

  public onClose(): void {
    this.modalService.close();
  }

  public onSearch(keyword: string): void {
    this.index.search({
      query: this.searchQuery
    }).then(response => {
      this.options = response.hits;
      console.log(response.hits);
    })
  }
}
