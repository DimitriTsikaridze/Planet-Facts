import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HeaderComponent } from "./header/header.component"
import { PlanetContainerComponent } from "./planet-container/planet-container.component"
import { PlanetInfoComponent } from "./planet-container/planet-info/planet-info.component"
import { PlanetStatsComponent } from "./planet-container/planet-stats/planet-stats.component"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanetContainerComponent,
    PlanetStatsComponent,
    PlanetInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
