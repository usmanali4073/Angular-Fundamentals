import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "events";

@Component({
  selector: "app-upvote",
  template: `
    <div class="voingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
          <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
        </div>
      </div>
      <div class="badge badge-inverse votingCount">
        <div>{{ count }}</div>
      </div>
    </div>
  `,
  styleUrls:['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count: Number;
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClick() {
  this.vote.emit( {} );
  }
}
