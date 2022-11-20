import { Injectable } from "@angular/core"
import { BehaviorSubject, tap } from "rxjs"
import { PLANETS } from "../assets/data"
import { Planet } from "./planet"

@Injectable({
  providedIn: "root",
})
export class PlanetsService {
  constructor() {}

  private $planetsSource = new BehaviorSubject<Planet[]>(PLANETS)
  planets$ = this.$planetsSource
    .asObservable()
    .pipe(tap(() => console.log("planets$ subscribed")))
}
