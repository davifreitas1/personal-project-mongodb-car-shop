import { z } from 'zod';
import { zodVehicle } from './IVehicle';

const zodCar = zodVehicle.extend(
  {
    doorsQty: z.number().min(2).max(4),
    seatsQty: z.number().min(2).max(7),
  },
);

type ICar = z.infer<typeof zodCar>;

export { ICar, zodCar };