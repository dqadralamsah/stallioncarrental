export type BodyType = 'sedan' | 'hatchback' | 'mpv' | 'suv' | 'luxury' | 'minibus';

export type Transmission = 'manual' | 'automatic';
export type EngineType = 'gasoline' | 'hybrid';

export type Price = {
  daily: number;
  weekly: number;
  monthly: number;
};

export type Car = {
  id: string;
  name: string;
  bodytype: BodyType;
  transmission: Transmission;
  engineType: EngineType;
  passenger: number;
  luggage: number;
  price: Price;
};
