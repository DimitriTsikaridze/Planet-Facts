import { HttpClient } from "@angular/common/http"
import { ChangeDetectionStrategy, Component } from "@angular/core"
import { PlanetsService } from "./planets.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private planetsService: PlanetsService) {}

  ngOnInit() {}
}
