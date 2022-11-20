import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { PlanetContainerComponent } from "./planet-container/planet-container.component"

const routes: Routes = [
  {
    path: "",
    redirectTo: "/earth",
    pathMatch: "full",
  },
  {
    path: ":planet",
    component: PlanetContainerComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
