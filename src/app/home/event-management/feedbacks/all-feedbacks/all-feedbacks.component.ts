import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from 'src/service/feedback/feedback.service';

@Component({
  selector: 'app-all-feedbacks',
  templateUrl: './all-feedbacks.component.html',
  styleUrls: ['./all-feedbacks.component.css'],
})
export class AllFeedbacksComponent {
  avlFeedbacks: any = [];
  event_id: string | null;
  constructor(
    private fbSerice: FeedbackService,
    private route: ActivatedRoute
  ) {
    this.event_id = this.route.snapshot.paramMap.get('event_id');
    this.getAllRegistrations();
  }

  getAllRegistrations() {
    this.fbSerice.getFeedbackbyEventId(this.event_id).subscribe((val: any) => {
      if (val.response) {
        this.avlFeedbacks = val.data;
      }
    });
  }

  downloadCSV() {
    this.fbSerice.getFeedbacksCSV(this.event_id).subscribe((val: any) => {
      const url = window.URL.createObjectURL(val);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'feedbacks.csv';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
