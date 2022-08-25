export interface IService<T> {
  create(object: T): Promise<T>,
  read(): Promise<T[]>,
}