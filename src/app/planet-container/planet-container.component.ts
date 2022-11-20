import { ChangeDetectionStrategy, Component } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { switchMap, of, Observable } from "rxjs"
import { PLANETS } from "../../assets/data"
import { Planet } from "../planet"

@Component({
  selector: "app-planet-container",
  templateUrl: "./planet-container.component.html",
  styleUrls: ["./planet-container.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetContainerComponent {
  constructor(private route: ActivatedRoute) {}

  planet$: Observable<Planet | undefined>

  ngOnInit() {
    this.planet$ = this.route.params.pipe(
      switchMap(({ planet: planetName }) =>
        of(PLANETS.find((planet) => planet.name.toLowerCase() === planetName))
      )
    )
  }
}
