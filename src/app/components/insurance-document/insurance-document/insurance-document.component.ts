import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InsuranceDocumentService} from "../../../services/insurance-document.service";
import {InsuranceDocumentModel} from "../../../model/insurance-document/insurance-document-model";

@Component({
  selector: 'app-insurance-document',
  templateUrl: './insurance-document.component.html',
  styleUrls: ['./insurance-document.component.css']
})
export class InsuranceDocumentComponent implements OnInit {
  // @ts-ignore
  images: InsuranceDocumentModel[];
  defaultImage: string = "assets/images/loading.gif";

  constructor(private docService: InsuranceDocumentService,
              private route: ActivatedRoute) {
    console.log("InsuranceDocumentComponent => constructor");
  }

  private toChar(p: string): string {
    let res: string = "";
    p.split(",")
      .map(c => Number(c))
      .forEach(c => res += String.fromCharCode(c));

    return res;
  }

  ngOnInit(): void {
    console.log("InsuranceDocumentComponent => ngOnInit");
    localStorage.setItem("t", this.toChar(this.route.snapshot.params["t"]));
    // @ts-ignore
    this.getImages(this.route.snapshot.params['filter'], localStorage.getItem("t"));
  }

  getImages(filter: string, token: string) {
    this.docService.getImages(filter, token).subscribe({
      next: v => {
        v.data.forEach(value => value.imageUrl = value.imageUrl.replace("localhost", "172.16.11.116"));
        this.images = v.data;
      },
      error: e => console.log("*** getImages() error ==> " + e),
      complete: () => console.log(this.images)
    });
  }

}
