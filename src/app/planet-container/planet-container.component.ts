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

  currentImage = ""
  geologyImage = ""

  planet$: Observable<Planet | undefined>

  handleImageChange(data: { type: string; name: string }) {
    const { type, name } = data

    switch (type) {
      case "planet":
        this.geologyImage = ""
        this.currentImage = `/assets/planet-${name}.svg`
        break
      case "internal":
        this.geologyImage = ""
        this.currentImage = `/assets/planet-${name}-${type}.svg`
        break
      case "geology":
        this.currentImage = `/assets/planet-${name}.svg`
        this.geologyImage = `/assets/geology-${name}.png`
        break
    }
  }

  ngOnInit() {
    this.planet$ = this.route.params.pipe(
      switchMap(({ planet: planetName }) => {
        this.geologyImage = ""
        this.currentImage = ""
        return of(
          PLANETS.find((planet) => planet.name.toLowerCase() === planetName)
        )
      })
    )
  }
}
