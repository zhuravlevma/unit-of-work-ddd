export abstract class UnitOfWork {
  abstract transaction<T>(fn: () => Promise<T>): Promise<T>;
}
