import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from "./pages/client/painel/painel.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { CardComponent } from "./pages/client/painel/card/card.component";
import { FooterComponent } from "./pages/client/painel/footer/footer.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule],
  declarations: [
    PainelComponent,
    CardComponent,
    FooterComponent
  ],
  exports: [RouterModule, PainelComponent]
})
export class AppRoutingModule { }
