import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core"
import { PlanetsService } from "../planets.service"
import { Observable } from "rxjs"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(private planetsService: PlanetsService) {}

  links$: Observable<any>

  ngOnInit(): void {
    this.links$ = this.planetsService.planets$
  }
}
