import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
  }).compileComponents().then( result => {
    console.log(result);
  })
  component = new AppComponent()

  }))

/*   it('Debe crear app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Debe tener el título 'unitest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unitest');
  });

  it('Div con clase content dentro un span y tener el texto "unitest app is running"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('unitest app is running!');
  }); */
  it('!Correcto¡, la variable tiene el nombre del proyecto', () => {
    let myVar: string = component.title;
    expect(myVar).toEqual('unitest')
  });

  it('!Correcto¡, la variable "Positivo" es verdadero', () => {
    let positivo: boolean = component.positivo;
    expect(positivo).toBeTruthy();
  });

  it('!Correcto¡, la función suma calcula correctamente', () => {
    let a:number = 5;
    let b:number = 10;
    expect(component.sumar(a,b)).toBe(15);
  });

  it('!Correcto¡, existe el método suma y funciona', ()=>{
    let metodo = spyOn(component, ['sumar'] as never);

    component.sumar(3,3);

    expect(metodo).toHaveBeenCalled();

  })
});
