import { z } from 'zod';
import { zodVehicle } from './IVehicle';

const zodMotorcycle = zodVehicle.extend(
  {
    category: z.enum(['Street', 'Custom', 'Trail']),
    engineCapacity: z.number().max(2500),
  },
);

type IMotorcycle = z.infer<typeof zodMotorcycle>;

export { IMotorcycle, zodMotorcycle };