import { ChangeDetectionStrategy, Component, Input } from "@angular/core"
import { Planet } from "../../planet"

@Component({
  selector: "app-planet-stats",
  templateUrl: "./planet-stats.component.html",
  styleUrls: ["./planet-stats.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetStatsComponent {
  @Input("stats") planet: Planet
}
