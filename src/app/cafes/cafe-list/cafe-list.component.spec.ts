/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++){
      const cafe = new Cafe (
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.string(),
      );
      component.cafes.push(cafe);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table header', () => {
    expect(debug.queryAll(By.css('thead'))).toHaveSize(1)
  });

  it('should have a table with 3 rows', () => {
    expect(debug.queryAll(By.css('tr.cellFormatTwo'))).toHaveSize(3)
  });

});
