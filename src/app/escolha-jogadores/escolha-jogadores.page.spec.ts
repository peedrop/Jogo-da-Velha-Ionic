import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaJogadoresPage } from './escolha-jogadores.page';

describe('EscolhaJogadoresPage', () => {
  let component: EscolhaJogadoresPage;
  let fixture: ComponentFixture<EscolhaJogadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaJogadoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaJogadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
