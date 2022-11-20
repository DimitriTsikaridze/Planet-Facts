import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from "@angular/core"
import { Planet } from "../../planet"

@Component({
  selector: "app-planet-info",
  templateUrl: "./planet-info.component.html",
  styleUrls: ["./planet-info.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetInfoComponent {
  @Input("info") planet: Planet

  @Output() changeImage = new EventEmitter<{ type: string; name: string }>()

  handleImageChange(type: string, name: string) {
    this.changeImage.emit({ type, name: name.toLowerCase() })
  }
}
