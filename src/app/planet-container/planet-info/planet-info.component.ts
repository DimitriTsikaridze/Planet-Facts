import { ChangeDetectionStrategy, Component, Input } from "@angular/core"
import { Planet } from "../../planet"

@Component({
  selector: "app-planet-info",
  templateUrl: "./planet-info.component.html",
  styleUrls: ["./planet-info.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetInfoComponent {
  @Input("info") planet: Planet
}
