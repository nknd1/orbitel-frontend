export class TariffModel {
  private _tariff_id: number;
  private _tariff_name: string;
  private _price_per_month: number;
  private _speed: string;

  get speed(): string {
    return this._speed;
  }

  set speed(value: string) {
    this._speed = value;
  }
  get price_per_month(): number {
    return this._price_per_month;
  }

  set price_per_month(value: number) {
    this._price_per_month = value;
  }
  get tariff_name(): string {
    return this._tariff_name;
  }

  set tariff_name(value: string) {
    this._tariff_name = value;
  }
  get tariff_id(): number {
    return this._tariff_id;
  }

  set tariff_id(value: number) {
    this._tariff_id = value;
  }

  constructor() {
    this._tariff_id = 0;
    this._tariff_name = '';
    this._price_per_month = 0;
    this._speed = '';
  }
}

