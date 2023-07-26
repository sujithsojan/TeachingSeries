import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonsComponent } from "./persons/persons.component";
import { PersonsInputComponent } from "./persons-input/persons-input.component";

const routes: Routes = [
  {path: '', component: PersonsComponent},
  {path:'input', component: PersonsInputComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
