import { ChangeDetectionStrategy, Component } from "@angular/core"
import { PLANETS } from "../../assets/data"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  links = PLANETS.map((planet) => planet.name)
}
