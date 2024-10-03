import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TopBarComponent} from './components/topBar/topBar.component'
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
  imports: [CommonModule, RouterModule],
})
export class TopBarModule {}
