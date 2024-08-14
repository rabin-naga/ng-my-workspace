import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [CommonModule, TestRoutingModule, HelloComponent],
  exports: [HelloComponent],
})
export class TestModule {}
