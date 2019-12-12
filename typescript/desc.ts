@Component({
  selector: 'app'
})
class Greeter {
  public greeting: string;
  private abc: any;
  constructor() {
  }

  _greet

  @enumerable(true)
  set greet(greet) {
    this._greet = greet;
  }

  get greet() {
    return this._greet;
  }


}

function Component(option: any) {
  return function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }
}

function enumerable(value: boolean, ...arg) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}