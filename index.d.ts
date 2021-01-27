
export default Versioning;

declare class Versioning {
  constructor(version: string);
  eq(version: string): boolean;
  gt(version: string): boolean;
  gte(version: string): boolean;
  lt(version: string): boolean;
  lte(version: string): boolean;
  valueOf(): number;
  toString(): string;

  static compare(v1: string, v2: string, complete?: boolean): number;
  static eq(v1: string, v2: string): boolean;
  static gt(v1: string, v2: string): boolean;
  static gte(v1: string, v2: string): boolean;
  static lt(v1: string, v2: string): boolean;
  static lte(v1: string, v2: string): boolean;
}
