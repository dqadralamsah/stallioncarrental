export type Car = {
  id: string;
  name: string;
  transmission: 'manual' | 'automatic';
  engineType: 'gasoline' | 'hybrid' | 'electric';
  passenger: number;
  luggage: number;
  price: {
    daily: number;
    weekly: number;
    monthly: number;
  };
};
