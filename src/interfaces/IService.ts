export interface IService<T> {
  create(object: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(_id: string): Promise<T | null>,
}