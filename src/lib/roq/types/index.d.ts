/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model movie
 *
 */
export type movie = $Result.DefaultSelection<Prisma.$moviePayload>;
/**
 * Model profile
 *
 */
export type profile = $Result.DefaultSelection<Prisma.$profilePayload>;
/**
 * Model provider
 *
 */
export type provider = $Result.DefaultSelection<Prisma.$providerPayload>;
/**
 * Model series
 *
 */
export type series = $Result.DefaultSelection<Prisma.$seriesPayload>;
/**
 * Model subscription
 *
 */
export type subscription = $Result.DefaultSelection<Prisma.$subscriptionPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model watchlist
 *
 */
export type watchlist = $Result.DefaultSelection<Prisma.$watchlistPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Movies
 * const movies = await prisma.movie.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Movies
   * const movies = await prisma.movie.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **movie** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Movies
   * const movies = await prisma.movie.findMany()
   * ```
   */
  get movie(): Prisma.movieDelegate<ExtArgs>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **profile** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   */
  get profile(): Prisma.profileDelegate<ExtArgs>;

  /**
   * `prisma.provider`: Exposes CRUD operations for the **provider** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Providers
   * const providers = await prisma.provider.findMany()
   * ```
   */
  get provider(): Prisma.providerDelegate<ExtArgs>;

  /**
   * `prisma.series`: Exposes CRUD operations for the **series** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Series
   * const series = await prisma.series.findMany()
   * ```
   */
  get series(): Prisma.seriesDelegate<ExtArgs>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **subscription** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subscriptions
   * const subscriptions = await prisma.subscription.findMany()
   * ```
   */
  get subscription(): Prisma.subscriptionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.watchlist`: Exposes CRUD operations for the **watchlist** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Watchlists
   * const watchlists = await prisma.watchlist.findMany()
   * ```
   */
  get watchlist(): Prisma.watchlistDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    movie: 'movie';
    profile: 'profile';
    provider: 'provider';
    series: 'series';
    subscription: 'subscription';
    user: 'user';
    watchlist: 'watchlist';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'movie' | 'profile' | 'provider' | 'series' | 'subscription' | 'user' | 'watchlist';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      movie: {
        payload: Prisma.$moviePayload<ExtArgs>;
        fields: Prisma.movieFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.movieFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.movieFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          findFirst: {
            args: Prisma.movieFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.movieFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          findMany: {
            args: Prisma.movieFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>[];
          };
          create: {
            args: Prisma.movieCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          createMany: {
            args: Prisma.movieCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.movieDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          update: {
            args: Prisma.movieUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          deleteMany: {
            args: Prisma.movieDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.movieUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.movieUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMovie>;
          };
          groupBy: {
            args: Prisma.movieGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MovieGroupByOutputType>[];
          };
          count: {
            args: Prisma.movieCountArgs<ExtArgs>;
            result: $Utils.Optional<MovieCountAggregateOutputType> | number;
          };
        };
      };
      profile: {
        payload: Prisma.$profilePayload<ExtArgs>;
        fields: Prisma.profileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.profileFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.profileFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>;
          };
          findFirst: {
            args: Prisma.profileFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.profileFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>;
          };
          findMany: {
            args: Prisma.profileFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>[];
          };
          create: {
            args: Prisma.profileCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>;
          };
          createMany: {
            args: Prisma.profileCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.profileDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>;
          };
          update: {
            args: Prisma.profileUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>;
          };
          deleteMany: {
            args: Prisma.profileDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.profileUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.profileUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>;
          };
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProfile>;
          };
          groupBy: {
            args: Prisma.profileGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProfileGroupByOutputType>[];
          };
          count: {
            args: Prisma.profileCountArgs<ExtArgs>;
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number;
          };
        };
      };
      provider: {
        payload: Prisma.$providerPayload<ExtArgs>;
        fields: Prisma.providerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.providerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$providerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.providerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$providerPayload>;
          };
          findFirst: {
            args: Prisma.providerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$providerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.providerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$providerPayload>;
          };
          findMany: {
            args: Prisma.providerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$providerPayload>[];
          };
          create: {
            args: Prisma.providerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$providerPayload>;
          };
          createMany: {
            args: Prisma.providerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.providerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$providerPayload>;
          };
          update: {
            args: Prisma.providerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$providerPayload>;
          };
          deleteMany: {
            args: Prisma.providerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.providerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.providerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$providerPayload>;
          };
          aggregate: {
            args: Prisma.ProviderAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProvider>;
          };
          groupBy: {
            args: Prisma.providerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProviderGroupByOutputType>[];
          };
          count: {
            args: Prisma.providerCountArgs<ExtArgs>;
            result: $Utils.Optional<ProviderCountAggregateOutputType> | number;
          };
        };
      };
      series: {
        payload: Prisma.$seriesPayload<ExtArgs>;
        fields: Prisma.seriesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.seriesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seriesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.seriesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>;
          };
          findFirst: {
            args: Prisma.seriesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seriesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.seriesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>;
          };
          findMany: {
            args: Prisma.seriesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>[];
          };
          create: {
            args: Prisma.seriesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>;
          };
          createMany: {
            args: Prisma.seriesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.seriesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>;
          };
          update: {
            args: Prisma.seriesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>;
          };
          deleteMany: {
            args: Prisma.seriesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.seriesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.seriesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>;
          };
          aggregate: {
            args: Prisma.SeriesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSeries>;
          };
          groupBy: {
            args: Prisma.seriesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SeriesGroupByOutputType>[];
          };
          count: {
            args: Prisma.seriesCountArgs<ExtArgs>;
            result: $Utils.Optional<SeriesCountAggregateOutputType> | number;
          };
        };
      };
      subscription: {
        payload: Prisma.$subscriptionPayload<ExtArgs>;
        fields: Prisma.subscriptionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.subscriptionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.subscriptionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>;
          };
          findFirst: {
            args: Prisma.subscriptionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.subscriptionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>;
          };
          findMany: {
            args: Prisma.subscriptionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>[];
          };
          create: {
            args: Prisma.subscriptionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>;
          };
          createMany: {
            args: Prisma.subscriptionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.subscriptionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>;
          };
          update: {
            args: Prisma.subscriptionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>;
          };
          deleteMany: {
            args: Prisma.subscriptionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.subscriptionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.subscriptionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>;
          };
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubscription>;
          };
          groupBy: {
            args: Prisma.subscriptionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubscriptionGroupByOutputType>[];
          };
          count: {
            args: Prisma.subscriptionCountArgs<ExtArgs>;
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      watchlist: {
        payload: Prisma.$watchlistPayload<ExtArgs>;
        fields: Prisma.watchlistFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.watchlistFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$watchlistPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.watchlistFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$watchlistPayload>;
          };
          findFirst: {
            args: Prisma.watchlistFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$watchlistPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.watchlistFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$watchlistPayload>;
          };
          findMany: {
            args: Prisma.watchlistFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$watchlistPayload>[];
          };
          create: {
            args: Prisma.watchlistCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$watchlistPayload>;
          };
          createMany: {
            args: Prisma.watchlistCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.watchlistDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$watchlistPayload>;
          };
          update: {
            args: Prisma.watchlistUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$watchlistPayload>;
          };
          deleteMany: {
            args: Prisma.watchlistDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.watchlistUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.watchlistUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$watchlistPayload>;
          };
          aggregate: {
            args: Prisma.WatchlistAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateWatchlist>;
          };
          groupBy: {
            args: Prisma.watchlistGroupByArgs<ExtArgs>;
            result: $Utils.Optional<WatchlistGroupByOutputType>[];
          };
          count: {
            args: Prisma.watchlistCountArgs<ExtArgs>;
            result: $Utils.Optional<WatchlistCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    watchlist: number;
  };

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlist?: boolean | MovieCountOutputTypeCountWatchlistArgs;
  };

  // Custom InputTypes

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountWatchlistArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: watchlistWhereInput;
  };

  /**
   * Count Type ProviderCountOutputType
   */

  export type ProviderCountOutputType = {
    movie: number;
    series: number;
    user: number;
  };

  export type ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | ProviderCountOutputTypeCountMovieArgs;
    series?: boolean | ProviderCountOutputTypeCountSeriesArgs;
    user?: boolean | ProviderCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: ProviderCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountMovieArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: movieWhereInput;
  };

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountSeriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: seriesWhereInput;
  };

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: userWhereInput;
    };

  /**
   * Count Type SeriesCountOutputType
   */

  export type SeriesCountOutputType = {
    watchlist: number;
  };

  export type SeriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlist?: boolean | SeriesCountOutputTypeCountWatchlistArgs;
  };

  // Custom InputTypes

  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCountOutputType
     */
    select?: SeriesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeCountWatchlistArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: watchlistWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    profile: number;
    watchlist: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserCountOutputTypeCountProfileArgs;
    watchlist?: boolean | UserCountOutputTypeCountWatchlistArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: profileWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchlistArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: watchlistWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  export type MovieAvgAggregateOutputType = {
    rating: number | null;
    duration: number | null;
  };

  export type MovieSumAggregateOutputType = {
    rating: number | null;
    duration: number | null;
  };

  export type MovieMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    genre: string | null;
    release_date: Date | null;
    rating: number | null;
    duration: number | null;
    provider_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MovieMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    genre: string | null;
    release_date: Date | null;
    rating: number | null;
    duration: number | null;
    provider_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MovieCountAggregateOutputType = {
    id: number;
    title: number;
    genre: number;
    release_date: number;
    rating: number;
    duration: number;
    provider_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type MovieAvgAggregateInputType = {
    rating?: true;
    duration?: true;
  };

  export type MovieSumAggregateInputType = {
    rating?: true;
    duration?: true;
  };

  export type MovieMinAggregateInputType = {
    id?: true;
    title?: true;
    genre?: true;
    release_date?: true;
    rating?: true;
    duration?: true;
    provider_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MovieMaxAggregateInputType = {
    id?: true;
    title?: true;
    genre?: true;
    release_date?: true;
    rating?: true;
    duration?: true;
    provider_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MovieCountAggregateInputType = {
    id?: true;
    title?: true;
    genre?: true;
    release_date?: true;
    rating?: true;
    duration?: true;
    provider_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movie to aggregate.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned movies
     **/
    _count?: true | MovieCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MovieAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MovieSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MovieMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MovieMaxAggregateInputType;
  };

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
    [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>;
  };

  export type movieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieWhereInput;
    orderBy?: movieOrderByWithAggregationInput | movieOrderByWithAggregationInput[];
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum;
    having?: movieScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovieCountAggregateInputType | true;
    _avg?: MovieAvgAggregateInputType;
    _sum?: MovieSumAggregateInputType;
    _min?: MovieMinAggregateInputType;
    _max?: MovieMaxAggregateInputType;
  };

  export type MovieGroupByOutputType = {
    id: string;
    title: string;
    genre: string;
    release_date: Date;
    rating: number | null;
    duration: number | null;
    provider_id: string;
    created_at: Date;
    updated_at: Date;
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  type GetMovieGroupByPayload<T extends movieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MovieGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
          : GetScalarType<T[P], MovieGroupByOutputType[P]>;
      }
    >
  >;

  export type movieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      genre?: boolean;
      release_date?: boolean;
      rating?: boolean;
      duration?: boolean;
      provider_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      provider?: boolean | providerDefaultArgs<ExtArgs>;
      watchlist?: boolean | movie$watchlistArgs<ExtArgs>;
      _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['movie']
  >;

  export type movieSelectScalar = {
    id?: boolean;
    title?: boolean;
    genre?: boolean;
    release_date?: boolean;
    rating?: boolean;
    duration?: boolean;
    provider_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type movieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | providerDefaultArgs<ExtArgs>;
    watchlist?: boolean | movie$watchlistArgs<ExtArgs>;
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $moviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'movie';
    objects: {
      provider: Prisma.$providerPayload<ExtArgs>;
      watchlist: Prisma.$watchlistPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        genre: string;
        release_date: Date;
        rating: number | null;
        duration: number | null;
        provider_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['movie']
    >;
    composites: {};
  };

  type movieGetPayload<S extends boolean | null | undefined | movieDefaultArgs> = $Result.GetResult<
    Prisma.$moviePayload,
    S
  >;

  type movieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    movieFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: MovieCountAggregateInputType | true;
  };

  export interface movieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movie']; meta: { name: 'movie' } };
    /**
     * Find zero or one Movie that matches the filter.
     * @param {movieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends movieFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, movieFindUniqueArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Movie that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {movieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends movieFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends movieFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindFirstArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends movieFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     *
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends movieFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Movie.
     * @param {movieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     *
     **/
    create<T extends movieCreateArgs<ExtArgs>>(
      args: SelectSubset<T, movieCreateArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Movies.
     *     @param {movieCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movie = await prisma.movie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends movieCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Movie.
     * @param {movieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     *
     **/
    delete<T extends movieDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, movieDeleteArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Movie.
     * @param {movieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends movieUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpdateArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Movies.
     * @param {movieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends movieDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends movieUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Movie.
     * @param {movieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     **/
    upsert<T extends movieUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpsertArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
     **/
    count<T extends movieCountArgs>(
      args?: Subset<T, movieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MovieAggregateArgs>(
      args: Subset<T, MovieAggregateArgs>,
    ): Prisma.PrismaPromise<GetMovieAggregateType<T>>;

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends movieGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movieGroupByArgs['orderBy'] }
        : { orderBy?: movieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, movieGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the movie model
     */
    readonly fields: movieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movieClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    provider<T extends providerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, providerDefaultArgs<ExtArgs>>,
    ): Prisma__providerClient<
      $Result.GetResult<Prisma.$providerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    watchlist<T extends movie$watchlistArgs<ExtArgs> = {}>(
      args?: Subset<T, movie$watchlistArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$watchlistPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the movie model
   */
  interface movieFieldRefs {
    readonly id: FieldRef<'movie', 'String'>;
    readonly title: FieldRef<'movie', 'String'>;
    readonly genre: FieldRef<'movie', 'String'>;
    readonly release_date: FieldRef<'movie', 'DateTime'>;
    readonly rating: FieldRef<'movie', 'Int'>;
    readonly duration: FieldRef<'movie', 'Int'>;
    readonly provider_id: FieldRef<'movie', 'String'>;
    readonly created_at: FieldRef<'movie', 'DateTime'>;
    readonly updated_at: FieldRef<'movie', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * movie findUnique
   */
  export type movieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie findUniqueOrThrow
   */
  export type movieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie findFirst
   */
  export type movieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * movie findFirstOrThrow
   */
  export type movieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * movie findMany
   */
  export type movieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movies to fetch.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing movies.
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * movie create
   */
  export type movieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * The data needed to create a movie.
     */
    data: XOR<movieCreateInput, movieUncheckedCreateInput>;
  };

  /**
   * movie createMany
   */
  export type movieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movies.
     */
    data: movieCreateManyInput | movieCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * movie update
   */
  export type movieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * The data needed to update a movie.
     */
    data: XOR<movieUpdateInput, movieUncheckedUpdateInput>;
    /**
     * Choose, which movie to update.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie updateMany
   */
  export type movieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movies.
     */
    data: XOR<movieUpdateManyMutationInput, movieUncheckedUpdateManyInput>;
    /**
     * Filter which movies to update
     */
    where?: movieWhereInput;
  };

  /**
   * movie upsert
   */
  export type movieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * The filter to search for the movie to update in case it exists.
     */
    where: movieWhereUniqueInput;
    /**
     * In case the movie found by the `where` argument doesn't exist, create a new movie with this data.
     */
    create: XOR<movieCreateInput, movieUncheckedCreateInput>;
    /**
     * In case the movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movieUpdateInput, movieUncheckedUpdateInput>;
  };

  /**
   * movie delete
   */
  export type movieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter which movie to delete.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie deleteMany
   */
  export type movieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to delete
     */
    where?: movieWhereInput;
  };

  /**
   * movie.watchlist
   */
  export type movie$watchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude<ExtArgs> | null;
    where?: watchlistWhereInput;
    orderBy?: watchlistOrderByWithRelationInput | watchlistOrderByWithRelationInput[];
    cursor?: watchlistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[];
  };

  /**
   * movie without action
   */
  export type movieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
  };

  /**
   * Model profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  export type ProfileMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    first_name: string | null;
    last_name: string | null;
    birth_date: Date | null;
    gender: string | null;
    location: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProfileMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    first_name: string | null;
    last_name: string | null;
    birth_date: Date | null;
    gender: string | null;
    location: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProfileCountAggregateOutputType = {
    id: number;
    user_id: number;
    first_name: number;
    last_name: number;
    birth_date: number;
    gender: number;
    location: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProfileMinAggregateInputType = {
    id?: true;
    user_id?: true;
    first_name?: true;
    last_name?: true;
    birth_date?: true;
    gender?: true;
    location?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProfileMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    first_name?: true;
    last_name?: true;
    birth_date?: true;
    gender?: true;
    location?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProfileCountAggregateInputType = {
    id?: true;
    user_id?: true;
    first_name?: true;
    last_name?: true;
    birth_date?: true;
    gender?: true;
    location?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profile to aggregate.
     */
    where?: profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned profiles
     **/
    _count?: true | ProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProfileMaxAggregateInputType;
  };

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>;
  };

  export type profileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profileWhereInput;
    orderBy?: profileOrderByWithAggregationInput | profileOrderByWithAggregationInput[];
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum;
    having?: profileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileCountAggregateInputType | true;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
  };

  export type ProfileGroupByOutputType = {
    id: string;
    user_id: string;
    first_name: string | null;
    last_name: string | null;
    birth_date: Date | null;
    gender: string | null;
    location: string | null;
    created_at: Date;
    updated_at: Date;
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  type GetProfileGroupByPayload<T extends profileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProfileGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
          : GetScalarType<T[P], ProfileGroupByOutputType[P]>;
      }
    >
  >;

  export type profileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      birth_date?: boolean;
      gender?: boolean;
      location?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type profileSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    birth_date?: boolean;
    gender?: boolean;
    location?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type profileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $profilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'profile';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        first_name: string | null;
        last_name: string | null;
        birth_date: Date | null;
        gender: string | null;
        location: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['profile']
    >;
    composites: {};
  };

  type profileGetPayload<S extends boolean | null | undefined | profileDefaultArgs> = $Result.GetResult<
    Prisma.$profilePayload,
    S
  >;

  type profileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    profileFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ProfileCountAggregateInputType | true;
  };

  export interface profileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profile']; meta: { name: 'profile' } };
    /**
     * Find zero or one Profile that matches the filter.
     * @param {profileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends profileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, profileFindUniqueArgs<ExtArgs>>,
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {profileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends profileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, profileFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__profileClient<
      $Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends profileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, profileFindFirstArgs<ExtArgs>>,
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends profileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, profileFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     *
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends profileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, profileFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Profile.
     * @param {profileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     *
     **/
    create<T extends profileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, profileCreateArgs<ExtArgs>>,
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Profiles.
     *     @param {profileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends profileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, profileCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Profile.
     * @param {profileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     *
     **/
    delete<T extends profileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, profileDeleteArgs<ExtArgs>>,
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Profile.
     * @param {profileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends profileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, profileUpdateArgs<ExtArgs>>,
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Profiles.
     * @param {profileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends profileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, profileDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends profileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, profileUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Profile.
     * @param {profileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     **/
    upsert<T extends profileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, profileUpsertArgs<ExtArgs>>,
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
     **/
    count<T extends profileCountArgs>(
      args?: Subset<T, profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProfileAggregateArgs>(
      args: Subset<T, ProfileAggregateArgs>,
    ): Prisma.PrismaPromise<GetProfileAggregateType<T>>;

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends profileGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profileGroupByArgs['orderBy'] }
        : { orderBy?: profileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, profileGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the profile model
     */
    readonly fields: profileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the profile model
   */
  interface profileFieldRefs {
    readonly id: FieldRef<'profile', 'String'>;
    readonly user_id: FieldRef<'profile', 'String'>;
    readonly first_name: FieldRef<'profile', 'String'>;
    readonly last_name: FieldRef<'profile', 'String'>;
    readonly birth_date: FieldRef<'profile', 'DateTime'>;
    readonly gender: FieldRef<'profile', 'String'>;
    readonly location: FieldRef<'profile', 'String'>;
    readonly created_at: FieldRef<'profile', 'DateTime'>;
    readonly updated_at: FieldRef<'profile', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * profile findUnique
   */
  export type profileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput;
  };

  /**
   * profile findUniqueOrThrow
   */
  export type profileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput;
  };

  /**
   * profile findFirst
   */
  export type profileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * profile findFirstOrThrow
   */
  export type profileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * profile findMany
   */
  export type profileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * Filter, which profiles to fetch.
     */
    where?: profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing profiles.
     */
    cursor?: profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profiles.
     */
    skip?: number;
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * profile create
   */
  export type profileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * The data needed to create a profile.
     */
    data: XOR<profileCreateInput, profileUncheckedCreateInput>;
  };

  /**
   * profile createMany
   */
  export type profileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profileCreateManyInput | profileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * profile update
   */
  export type profileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * The data needed to update a profile.
     */
    data: XOR<profileUpdateInput, profileUncheckedUpdateInput>;
    /**
     * Choose, which profile to update.
     */
    where: profileWhereUniqueInput;
  };

  /**
   * profile updateMany
   */
  export type profileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>;
    /**
     * Filter which profiles to update
     */
    where?: profileWhereInput;
  };

  /**
   * profile upsert
   */
  export type profileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * The filter to search for the profile to update in case it exists.
     */
    where: profileWhereUniqueInput;
    /**
     * In case the profile found by the `where` argument doesn't exist, create a new profile with this data.
     */
    create: XOR<profileCreateInput, profileUncheckedCreateInput>;
    /**
     * In case the profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profileUpdateInput, profileUncheckedUpdateInput>;
  };

  /**
   * profile delete
   */
  export type profileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * Filter which profile to delete.
     */
    where: profileWhereUniqueInput;
  };

  /**
   * profile deleteMany
   */
  export type profileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profileWhereInput;
  };

  /**
   * profile without action
   */
  export type profileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null;
  };

  /**
   * Model provider
   */

  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null;
    _min: ProviderMinAggregateOutputType | null;
    _max: ProviderMaxAggregateOutputType | null;
  };

  export type ProviderMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProviderMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProviderCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProviderMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProviderMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProviderCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which provider to aggregate.
     */
    where?: providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of providers to fetch.
     */
    orderBy?: providerOrderByWithRelationInput | providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned providers
     **/
    _count?: true | ProviderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProviderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProviderMaxAggregateInputType;
  };

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
    [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>;
  };

  export type providerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: providerWhereInput;
    orderBy?: providerOrderByWithAggregationInput | providerOrderByWithAggregationInput[];
    by: ProviderScalarFieldEnum[] | ProviderScalarFieldEnum;
    having?: providerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProviderCountAggregateInputType | true;
    _min?: ProviderMinAggregateInputType;
    _max?: ProviderMaxAggregateInputType;
  };

  export type ProviderGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: ProviderCountAggregateOutputType | null;
    _min: ProviderMinAggregateOutputType | null;
    _max: ProviderMaxAggregateOutputType | null;
  };

  type GetProviderGroupByPayload<T extends providerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProviderGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
          : GetScalarType<T[P], ProviderGroupByOutputType[P]>;
      }
    >
  >;

  export type providerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        movie?: boolean | provider$movieArgs<ExtArgs>;
        series?: boolean | provider$seriesArgs<ExtArgs>;
        user?: boolean | provider$userArgs<ExtArgs>;
        _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['provider']
    >;

  export type providerSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type providerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | provider$movieArgs<ExtArgs>;
    series?: boolean | provider$seriesArgs<ExtArgs>;
    user?: boolean | provider$userArgs<ExtArgs>;
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $providerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'provider';
    objects: {
      movie: Prisma.$moviePayload<ExtArgs>[];
      series: Prisma.$seriesPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['provider']
    >;
    composites: {};
  };

  type providerGetPayload<S extends boolean | null | undefined | providerDefaultArgs> = $Result.GetResult<
    Prisma.$providerPayload,
    S
  >;

  type providerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    providerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ProviderCountAggregateInputType | true;
  };

  export interface providerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['provider']; meta: { name: 'provider' } };
    /**
     * Find zero or one Provider that matches the filter.
     * @param {providerFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends providerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, providerFindUniqueArgs<ExtArgs>>,
    ): Prisma__providerClient<
      $Result.GetResult<Prisma.$providerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Provider that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {providerFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends providerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, providerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__providerClient<
      $Result.GetResult<Prisma.$providerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providerFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends providerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, providerFindFirstArgs<ExtArgs>>,
    ): Prisma__providerClient<
      $Result.GetResult<Prisma.$providerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providerFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends providerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, providerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__providerClient<
      $Result.GetResult<Prisma.$providerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     *
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends providerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, providerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Provider.
     * @param {providerCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     *
     **/
    create<T extends providerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, providerCreateArgs<ExtArgs>>,
    ): Prisma__providerClient<$Result.GetResult<Prisma.$providerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Providers.
     *     @param {providerCreateManyArgs} args - Arguments to create many Providers.
     *     @example
     *     // Create many Providers
     *     const provider = await prisma.provider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends providerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, providerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Provider.
     * @param {providerDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     *
     **/
    delete<T extends providerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, providerDeleteArgs<ExtArgs>>,
    ): Prisma__providerClient<$Result.GetResult<Prisma.$providerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Provider.
     * @param {providerUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends providerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, providerUpdateArgs<ExtArgs>>,
    ): Prisma__providerClient<$Result.GetResult<Prisma.$providerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Providers.
     * @param {providerDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends providerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, providerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends providerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, providerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Provider.
     * @param {providerUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     **/
    upsert<T extends providerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, providerUpsertArgs<ExtArgs>>,
    ): Prisma__providerClient<$Result.GetResult<Prisma.$providerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providerCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
     **/
    count<T extends providerCountArgs>(
      args?: Subset<T, providerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProviderAggregateArgs>(
      args: Subset<T, ProviderAggregateArgs>,
    ): Prisma.PrismaPromise<GetProviderAggregateType<T>>;

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends providerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: providerGroupByArgs['orderBy'] }
        : { orderBy?: providerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, providerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the provider model
     */
    readonly fields: providerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__providerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movie<T extends provider$movieArgs<ExtArgs> = {}>(
      args?: Subset<T, provider$movieArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findMany'> | Null>;

    series<T extends provider$seriesArgs<ExtArgs> = {}>(
      args?: Subset<T, provider$seriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends provider$userArgs<ExtArgs> = {}>(
      args?: Subset<T, provider$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the provider model
   */
  interface providerFieldRefs {
    readonly id: FieldRef<'provider', 'String'>;
    readonly description: FieldRef<'provider', 'String'>;
    readonly name: FieldRef<'provider', 'String'>;
    readonly created_at: FieldRef<'provider', 'DateTime'>;
    readonly updated_at: FieldRef<'provider', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * provider findUnique
   */
  export type providerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provider
     */
    select?: providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providerInclude<ExtArgs> | null;
    /**
     * Filter, which provider to fetch.
     */
    where: providerWhereUniqueInput;
  };

  /**
   * provider findUniqueOrThrow
   */
  export type providerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provider
     */
    select?: providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providerInclude<ExtArgs> | null;
    /**
     * Filter, which provider to fetch.
     */
    where: providerWhereUniqueInput;
  };

  /**
   * provider findFirst
   */
  export type providerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provider
     */
    select?: providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providerInclude<ExtArgs> | null;
    /**
     * Filter, which provider to fetch.
     */
    where?: providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of providers to fetch.
     */
    orderBy?: providerOrderByWithRelationInput | providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for providers.
     */
    cursor?: providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[];
  };

  /**
   * provider findFirstOrThrow
   */
  export type providerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provider
     */
    select?: providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providerInclude<ExtArgs> | null;
    /**
     * Filter, which provider to fetch.
     */
    where?: providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of providers to fetch.
     */
    orderBy?: providerOrderByWithRelationInput | providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for providers.
     */
    cursor?: providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[];
  };

  /**
   * provider findMany
   */
  export type providerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provider
     */
    select?: providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providerInclude<ExtArgs> | null;
    /**
     * Filter, which providers to fetch.
     */
    where?: providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of providers to fetch.
     */
    orderBy?: providerOrderByWithRelationInput | providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing providers.
     */
    cursor?: providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` providers.
     */
    skip?: number;
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[];
  };

  /**
   * provider create
   */
  export type providerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provider
     */
    select?: providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providerInclude<ExtArgs> | null;
    /**
     * The data needed to create a provider.
     */
    data: XOR<providerCreateInput, providerUncheckedCreateInput>;
  };

  /**
   * provider createMany
   */
  export type providerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many providers.
     */
    data: providerCreateManyInput | providerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * provider update
   */
  export type providerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provider
     */
    select?: providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providerInclude<ExtArgs> | null;
    /**
     * The data needed to update a provider.
     */
    data: XOR<providerUpdateInput, providerUncheckedUpdateInput>;
    /**
     * Choose, which provider to update.
     */
    where: providerWhereUniqueInput;
  };

  /**
   * provider updateMany
   */
  export type providerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update providers.
     */
    data: XOR<providerUpdateManyMutationInput, providerUncheckedUpdateManyInput>;
    /**
     * Filter which providers to update
     */
    where?: providerWhereInput;
  };

  /**
   * provider upsert
   */
  export type providerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provider
     */
    select?: providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providerInclude<ExtArgs> | null;
    /**
     * The filter to search for the provider to update in case it exists.
     */
    where: providerWhereUniqueInput;
    /**
     * In case the provider found by the `where` argument doesn't exist, create a new provider with this data.
     */
    create: XOR<providerCreateInput, providerUncheckedCreateInput>;
    /**
     * In case the provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<providerUpdateInput, providerUncheckedUpdateInput>;
  };

  /**
   * provider delete
   */
  export type providerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provider
     */
    select?: providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providerInclude<ExtArgs> | null;
    /**
     * Filter which provider to delete.
     */
    where: providerWhereUniqueInput;
  };

  /**
   * provider deleteMany
   */
  export type providerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which providers to delete
     */
    where?: providerWhereInput;
  };

  /**
   * provider.movie
   */
  export type provider$movieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    where?: movieWhereInput;
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    cursor?: movieWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * provider.series
   */
  export type provider$seriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seriesInclude<ExtArgs> | null;
    where?: seriesWhereInput;
    orderBy?: seriesOrderByWithRelationInput | seriesOrderByWithRelationInput[];
    cursor?: seriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[];
  };

  /**
   * provider.user
   */
  export type provider$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * provider without action
   */
  export type providerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provider
     */
    select?: providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providerInclude<ExtArgs> | null;
  };

  /**
   * Model series
   */

  export type AggregateSeries = {
    _count: SeriesCountAggregateOutputType | null;
    _avg: SeriesAvgAggregateOutputType | null;
    _sum: SeriesSumAggregateOutputType | null;
    _min: SeriesMinAggregateOutputType | null;
    _max: SeriesMaxAggregateOutputType | null;
  };

  export type SeriesAvgAggregateOutputType = {
    rating: number | null;
    seasons: number | null;
  };

  export type SeriesSumAggregateOutputType = {
    rating: number | null;
    seasons: number | null;
  };

  export type SeriesMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    genre: string | null;
    release_date: Date | null;
    rating: number | null;
    seasons: number | null;
    provider_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SeriesMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    genre: string | null;
    release_date: Date | null;
    rating: number | null;
    seasons: number | null;
    provider_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SeriesCountAggregateOutputType = {
    id: number;
    title: number;
    genre: number;
    release_date: number;
    rating: number;
    seasons: number;
    provider_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type SeriesAvgAggregateInputType = {
    rating?: true;
    seasons?: true;
  };

  export type SeriesSumAggregateInputType = {
    rating?: true;
    seasons?: true;
  };

  export type SeriesMinAggregateInputType = {
    id?: true;
    title?: true;
    genre?: true;
    release_date?: true;
    rating?: true;
    seasons?: true;
    provider_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SeriesMaxAggregateInputType = {
    id?: true;
    title?: true;
    genre?: true;
    release_date?: true;
    rating?: true;
    seasons?: true;
    provider_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SeriesCountAggregateInputType = {
    id?: true;
    title?: true;
    genre?: true;
    release_date?: true;
    rating?: true;
    seasons?: true;
    provider_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type SeriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which series to aggregate.
     */
    where?: seriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of series to fetch.
     */
    orderBy?: seriesOrderByWithRelationInput | seriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: seriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` series from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` series.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned series
     **/
    _count?: true | SeriesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SeriesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SeriesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SeriesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SeriesMaxAggregateInputType;
  };

  export type GetSeriesAggregateType<T extends SeriesAggregateArgs> = {
    [P in keyof T & keyof AggregateSeries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeries[P]>
      : GetScalarType<T[P], AggregateSeries[P]>;
  };

  export type seriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seriesWhereInput;
    orderBy?: seriesOrderByWithAggregationInput | seriesOrderByWithAggregationInput[];
    by: SeriesScalarFieldEnum[] | SeriesScalarFieldEnum;
    having?: seriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SeriesCountAggregateInputType | true;
    _avg?: SeriesAvgAggregateInputType;
    _sum?: SeriesSumAggregateInputType;
    _min?: SeriesMinAggregateInputType;
    _max?: SeriesMaxAggregateInputType;
  };

  export type SeriesGroupByOutputType = {
    id: string;
    title: string;
    genre: string;
    release_date: Date;
    rating: number | null;
    seasons: number | null;
    provider_id: string;
    created_at: Date;
    updated_at: Date;
    _count: SeriesCountAggregateOutputType | null;
    _avg: SeriesAvgAggregateOutputType | null;
    _sum: SeriesSumAggregateOutputType | null;
    _min: SeriesMinAggregateOutputType | null;
    _max: SeriesMaxAggregateOutputType | null;
  };

  type GetSeriesGroupByPayload<T extends seriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeriesGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SeriesGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SeriesGroupByOutputType[P]>
          : GetScalarType<T[P], SeriesGroupByOutputType[P]>;
      }
    >
  >;

  export type seriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      genre?: boolean;
      release_date?: boolean;
      rating?: boolean;
      seasons?: boolean;
      provider_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      provider?: boolean | providerDefaultArgs<ExtArgs>;
      watchlist?: boolean | series$watchlistArgs<ExtArgs>;
      _count?: boolean | SeriesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['series']
  >;

  export type seriesSelectScalar = {
    id?: boolean;
    title?: boolean;
    genre?: boolean;
    release_date?: boolean;
    rating?: boolean;
    seasons?: boolean;
    provider_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type seriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | providerDefaultArgs<ExtArgs>;
    watchlist?: boolean | series$watchlistArgs<ExtArgs>;
    _count?: boolean | SeriesCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $seriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'series';
    objects: {
      provider: Prisma.$providerPayload<ExtArgs>;
      watchlist: Prisma.$watchlistPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        genre: string;
        release_date: Date;
        rating: number | null;
        seasons: number | null;
        provider_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['series']
    >;
    composites: {};
  };

  type seriesGetPayload<S extends boolean | null | undefined | seriesDefaultArgs> = $Result.GetResult<
    Prisma.$seriesPayload,
    S
  >;

  type seriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    seriesFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: SeriesCountAggregateInputType | true;
  };

  export interface seriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['series']; meta: { name: 'series' } };
    /**
     * Find zero or one Series that matches the filter.
     * @param {seriesFindUniqueArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends seriesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, seriesFindUniqueArgs<ExtArgs>>,
    ): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Series that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {seriesFindUniqueOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends seriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, seriesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesFindFirstArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends seriesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, seriesFindFirstArgs<ExtArgs>>,
    ): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Series that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesFindFirstOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends seriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, seriesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Series
     * const series = await prisma.series.findMany()
     *
     * // Get first 10 Series
     * const series = await prisma.series.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const seriesWithIdOnly = await prisma.series.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends seriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, seriesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Series.
     * @param {seriesCreateArgs} args - Arguments to create a Series.
     * @example
     * // Create one Series
     * const Series = await prisma.series.create({
     *   data: {
     *     // ... data to create a Series
     *   }
     * })
     *
     **/
    create<T extends seriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, seriesCreateArgs<ExtArgs>>,
    ): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Series.
     *     @param {seriesCreateManyArgs} args - Arguments to create many Series.
     *     @example
     *     // Create many Series
     *     const series = await prisma.series.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends seriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, seriesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Series.
     * @param {seriesDeleteArgs} args - Arguments to delete one Series.
     * @example
     * // Delete one Series
     * const Series = await prisma.series.delete({
     *   where: {
     *     // ... filter to delete one Series
     *   }
     * })
     *
     **/
    delete<T extends seriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, seriesDeleteArgs<ExtArgs>>,
    ): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Series.
     * @param {seriesUpdateArgs} args - Arguments to update one Series.
     * @example
     * // Update one Series
     * const series = await prisma.series.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends seriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, seriesUpdateArgs<ExtArgs>>,
    ): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Series.
     * @param {seriesDeleteManyArgs} args - Arguments to filter Series to delete.
     * @example
     * // Delete a few Series
     * const { count } = await prisma.series.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends seriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, seriesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Series
     * const series = await prisma.series.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends seriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, seriesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Series.
     * @param {seriesUpsertArgs} args - Arguments to update or create a Series.
     * @example
     * // Update or create a Series
     * const series = await prisma.series.upsert({
     *   create: {
     *     // ... data to create a Series
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Series we want to update
     *   }
     * })
     **/
    upsert<T extends seriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, seriesUpsertArgs<ExtArgs>>,
    ): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesCountArgs} args - Arguments to filter Series to count.
     * @example
     * // Count the number of Series
     * const count = await prisma.series.count({
     *   where: {
     *     // ... the filter for the Series we want to count
     *   }
     * })
     **/
    count<T extends seriesCountArgs>(
      args?: Subset<T, seriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SeriesAggregateArgs>(
      args: Subset<T, SeriesAggregateArgs>,
    ): Prisma.PrismaPromise<GetSeriesAggregateType<T>>;

    /**
     * Group by Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends seriesGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seriesGroupByArgs['orderBy'] }
        : { orderBy?: seriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, seriesGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSeriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the series model
     */
    readonly fields: seriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for series.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seriesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    provider<T extends providerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, providerDefaultArgs<ExtArgs>>,
    ): Prisma__providerClient<
      $Result.GetResult<Prisma.$providerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    watchlist<T extends series$watchlistArgs<ExtArgs> = {}>(
      args?: Subset<T, series$watchlistArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$watchlistPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the series model
   */
  interface seriesFieldRefs {
    readonly id: FieldRef<'series', 'String'>;
    readonly title: FieldRef<'series', 'String'>;
    readonly genre: FieldRef<'series', 'String'>;
    readonly release_date: FieldRef<'series', 'DateTime'>;
    readonly rating: FieldRef<'series', 'Int'>;
    readonly seasons: FieldRef<'series', 'Int'>;
    readonly provider_id: FieldRef<'series', 'String'>;
    readonly created_at: FieldRef<'series', 'DateTime'>;
    readonly updated_at: FieldRef<'series', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * series findUnique
   */
  export type seriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seriesInclude<ExtArgs> | null;
    /**
     * Filter, which series to fetch.
     */
    where: seriesWhereUniqueInput;
  };

  /**
   * series findUniqueOrThrow
   */
  export type seriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seriesInclude<ExtArgs> | null;
    /**
     * Filter, which series to fetch.
     */
    where: seriesWhereUniqueInput;
  };

  /**
   * series findFirst
   */
  export type seriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seriesInclude<ExtArgs> | null;
    /**
     * Filter, which series to fetch.
     */
    where?: seriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of series to fetch.
     */
    orderBy?: seriesOrderByWithRelationInput | seriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for series.
     */
    cursor?: seriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` series from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` series.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[];
  };

  /**
   * series findFirstOrThrow
   */
  export type seriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seriesInclude<ExtArgs> | null;
    /**
     * Filter, which series to fetch.
     */
    where?: seriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of series to fetch.
     */
    orderBy?: seriesOrderByWithRelationInput | seriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for series.
     */
    cursor?: seriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` series from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` series.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[];
  };

  /**
   * series findMany
   */
  export type seriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seriesInclude<ExtArgs> | null;
    /**
     * Filter, which series to fetch.
     */
    where?: seriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of series to fetch.
     */
    orderBy?: seriesOrderByWithRelationInput | seriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing series.
     */
    cursor?: seriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` series from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` series.
     */
    skip?: number;
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[];
  };

  /**
   * series create
   */
  export type seriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seriesInclude<ExtArgs> | null;
    /**
     * The data needed to create a series.
     */
    data: XOR<seriesCreateInput, seriesUncheckedCreateInput>;
  };

  /**
   * series createMany
   */
  export type seriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many series.
     */
    data: seriesCreateManyInput | seriesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * series update
   */
  export type seriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seriesInclude<ExtArgs> | null;
    /**
     * The data needed to update a series.
     */
    data: XOR<seriesUpdateInput, seriesUncheckedUpdateInput>;
    /**
     * Choose, which series to update.
     */
    where: seriesWhereUniqueInput;
  };

  /**
   * series updateMany
   */
  export type seriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update series.
     */
    data: XOR<seriesUpdateManyMutationInput, seriesUncheckedUpdateManyInput>;
    /**
     * Filter which series to update
     */
    where?: seriesWhereInput;
  };

  /**
   * series upsert
   */
  export type seriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seriesInclude<ExtArgs> | null;
    /**
     * The filter to search for the series to update in case it exists.
     */
    where: seriesWhereUniqueInput;
    /**
     * In case the series found by the `where` argument doesn't exist, create a new series with this data.
     */
    create: XOR<seriesCreateInput, seriesUncheckedCreateInput>;
    /**
     * In case the series was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seriesUpdateInput, seriesUncheckedUpdateInput>;
  };

  /**
   * series delete
   */
  export type seriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seriesInclude<ExtArgs> | null;
    /**
     * Filter which series to delete.
     */
    where: seriesWhereUniqueInput;
  };

  /**
   * series deleteMany
   */
  export type seriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which series to delete
     */
    where?: seriesWhereInput;
  };

  /**
   * series.watchlist
   */
  export type series$watchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude<ExtArgs> | null;
    where?: watchlistWhereInput;
    orderBy?: watchlistOrderByWithRelationInput | watchlistOrderByWithRelationInput[];
    cursor?: watchlistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[];
  };

  /**
   * series without action
   */
  export type seriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seriesInclude<ExtArgs> | null;
  };

  /**
   * Model subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
  };

  export type SubscriptionMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SubscriptionCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type SubscriptionMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SubscriptionMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SubscriptionCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscription to aggregate.
     */
    where?: subscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: subscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned subscriptions
     **/
    _count?: true | SubscriptionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriptionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriptionMaxAggregateInputType;
  };

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>;
  };

  export type subscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionWhereInput;
    orderBy?: subscriptionOrderByWithAggregationInput | subscriptionOrderByWithAggregationInput[];
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum;
    having?: subscriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionCountAggregateInputType | true;
    _min?: SubscriptionMinAggregateInputType;
    _max?: SubscriptionMaxAggregateInputType;
  };

  export type SubscriptionGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: SubscriptionCountAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
  };

  type GetSubscriptionGroupByPayload<T extends subscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SubscriptionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
          : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>;
      }
    >
  >;

  export type subscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['subscription']
    >;

  export type subscriptionSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $subscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'subscription';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['subscription']
    >;
    composites: {};
  };

  type subscriptionGetPayload<S extends boolean | null | undefined | subscriptionDefaultArgs> = $Result.GetResult<
    Prisma.$subscriptionPayload,
    S
  >;

  type subscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    subscriptionFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: SubscriptionCountAggregateInputType | true;
  };

  export interface subscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subscription']; meta: { name: 'subscription' } };
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {subscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends subscriptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionFindUniqueArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<
      $Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Subscription that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {subscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends subscriptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<
      $Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends subscriptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionFindFirstArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<
      $Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends subscriptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<
      $Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     *
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends subscriptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Subscription.
     * @param {subscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     *
     **/
    create<T extends subscriptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionCreateArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Subscriptions.
     *     @param {subscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     *     @example
     *     // Create many Subscriptions
     *     const subscription = await prisma.subscription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends subscriptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Subscription.
     * @param {subscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     *
     **/
    delete<T extends subscriptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionDeleteArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Subscription.
     * @param {subscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends subscriptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionUpdateArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Subscriptions.
     * @param {subscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends subscriptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends subscriptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Subscription.
     * @param {subscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     **/
    upsert<T extends subscriptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionUpsertArgs<ExtArgs>>,
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
     **/
    count<T extends subscriptionCountArgs>(
      args?: Subset<T, subscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubscriptionAggregateArgs>(
      args: Subset<T, SubscriptionAggregateArgs>,
    ): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>;

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends subscriptionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subscriptionGroupByArgs['orderBy'] }
        : { orderBy?: subscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, subscriptionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the subscription model
     */
    readonly fields: subscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subscriptionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the subscription model
   */
  interface subscriptionFieldRefs {
    readonly id: FieldRef<'subscription', 'String'>;
    readonly created_at: FieldRef<'subscription', 'DateTime'>;
    readonly updated_at: FieldRef<'subscription', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * subscription findUnique
   */
  export type subscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which subscription to fetch.
     */
    where: subscriptionWhereUniqueInput;
  };

  /**
   * subscription findUniqueOrThrow
   */
  export type subscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which subscription to fetch.
     */
    where: subscriptionWhereUniqueInput;
  };

  /**
   * subscription findFirst
   */
  export type subscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which subscription to fetch.
     */
    where?: subscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * subscription findFirstOrThrow
   */
  export type subscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which subscription to fetch.
     */
    where?: subscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * subscription findMany
   */
  export type subscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing subscriptions.
     */
    cursor?: subscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number;
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * subscription create
   */
  export type subscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * The data needed to create a subscription.
     */
    data?: XOR<subscriptionCreateInput, subscriptionUncheckedCreateInput>;
  };

  /**
   * subscription createMany
   */
  export type subscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subscriptions.
     */
    data: subscriptionCreateManyInput | subscriptionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * subscription update
   */
  export type subscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * The data needed to update a subscription.
     */
    data: XOR<subscriptionUpdateInput, subscriptionUncheckedUpdateInput>;
    /**
     * Choose, which subscription to update.
     */
    where: subscriptionWhereUniqueInput;
  };

  /**
   * subscription updateMany
   */
  export type subscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subscriptions.
     */
    data: XOR<subscriptionUpdateManyMutationInput, subscriptionUncheckedUpdateManyInput>;
    /**
     * Filter which subscriptions to update
     */
    where?: subscriptionWhereInput;
  };

  /**
   * subscription upsert
   */
  export type subscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * The filter to search for the subscription to update in case it exists.
     */
    where: subscriptionWhereUniqueInput;
    /**
     * In case the subscription found by the `where` argument doesn't exist, create a new subscription with this data.
     */
    create: XOR<subscriptionCreateInput, subscriptionUncheckedCreateInput>;
    /**
     * In case the subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subscriptionUpdateInput, subscriptionUncheckedUpdateInput>;
  };

  /**
   * subscription delete
   */
  export type subscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
    /**
     * Filter which subscription to delete.
     */
    where: subscriptionWhereUniqueInput;
  };

  /**
   * subscription deleteMany
   */
  export type subscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscriptions to delete
     */
    where?: subscriptionWhereInput;
  };

  /**
   * subscription without action
   */
  export type subscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    provider_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    provider_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    provider_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    provider_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    provider_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    provider_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    provider_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      provider_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      profile?: boolean | user$profileArgs<ExtArgs>;
      provider?: boolean | user$providerArgs<ExtArgs>;
      watchlist?: boolean | user$watchlistArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    provider_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | user$profileArgs<ExtArgs>;
    provider?: boolean | user$providerArgs<ExtArgs>;
    watchlist?: boolean | user$watchlistArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      profile: Prisma.$profilePayload<ExtArgs>[];
      provider: Prisma.$providerPayload<ExtArgs> | null;
      watchlist: Prisma.$watchlistPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        provider_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    profile<T extends user$profileArgs<ExtArgs> = {}>(
      args?: Subset<T, user$profileArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'findMany'> | Null>;

    provider<T extends user$providerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$providerArgs<ExtArgs>>,
    ): Prisma__providerClient<
      $Result.GetResult<Prisma.$providerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    watchlist<T extends user$watchlistArgs<ExtArgs> = {}>(
      args?: Subset<T, user$watchlistArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$watchlistPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly provider_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.profile
   */
  export type user$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null;
    where?: profileWhereInput;
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[];
    cursor?: profileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * user.provider
   */
  export type user$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provider
     */
    select?: providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providerInclude<ExtArgs> | null;
    where?: providerWhereInput;
  };

  /**
   * user.watchlist
   */
  export type user$watchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude<ExtArgs> | null;
    where?: watchlistWhereInput;
    orderBy?: watchlistOrderByWithRelationInput | watchlistOrderByWithRelationInput[];
    cursor?: watchlistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model watchlist
   */

  export type AggregateWatchlist = {
    _count: WatchlistCountAggregateOutputType | null;
    _min: WatchlistMinAggregateOutputType | null;
    _max: WatchlistMaxAggregateOutputType | null;
  };

  export type WatchlistMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    movie_id: string | null;
    series_id: string | null;
    added_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type WatchlistMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    movie_id: string | null;
    series_id: string | null;
    added_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type WatchlistCountAggregateOutputType = {
    id: number;
    user_id: number;
    movie_id: number;
    series_id: number;
    added_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type WatchlistMinAggregateInputType = {
    id?: true;
    user_id?: true;
    movie_id?: true;
    series_id?: true;
    added_at?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type WatchlistMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    movie_id?: true;
    series_id?: true;
    added_at?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type WatchlistCountAggregateInputType = {
    id?: true;
    user_id?: true;
    movie_id?: true;
    series_id?: true;
    added_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type WatchlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which watchlist to aggregate.
     */
    where?: watchlistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of watchlists to fetch.
     */
    orderBy?: watchlistOrderByWithRelationInput | watchlistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: watchlistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` watchlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` watchlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned watchlists
     **/
    _count?: true | WatchlistCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: WatchlistMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: WatchlistMaxAggregateInputType;
  };

  export type GetWatchlistAggregateType<T extends WatchlistAggregateArgs> = {
    [P in keyof T & keyof AggregateWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlist[P]>
      : GetScalarType<T[P], AggregateWatchlist[P]>;
  };

  export type watchlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: watchlistWhereInput;
    orderBy?: watchlistOrderByWithAggregationInput | watchlistOrderByWithAggregationInput[];
    by: WatchlistScalarFieldEnum[] | WatchlistScalarFieldEnum;
    having?: watchlistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WatchlistCountAggregateInputType | true;
    _min?: WatchlistMinAggregateInputType;
    _max?: WatchlistMaxAggregateInputType;
  };

  export type WatchlistGroupByOutputType = {
    id: string;
    user_id: string;
    movie_id: string;
    series_id: string;
    added_at: Date;
    created_at: Date;
    updated_at: Date;
    _count: WatchlistCountAggregateOutputType | null;
    _min: WatchlistMinAggregateOutputType | null;
    _max: WatchlistMaxAggregateOutputType | null;
  };

  type GetWatchlistGroupByPayload<T extends watchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistGroupByOutputType, T['by']> & {
        [P in keyof T & keyof WatchlistGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
          : GetScalarType<T[P], WatchlistGroupByOutputType[P]>;
      }
    >
  >;

  export type watchlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        movie_id?: boolean;
        series_id?: boolean;
        added_at?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        movie?: boolean | movieDefaultArgs<ExtArgs>;
        series?: boolean | seriesDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['watchlist']
    >;

  export type watchlistSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    movie_id?: boolean;
    series_id?: boolean;
    added_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type watchlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | movieDefaultArgs<ExtArgs>;
    series?: boolean | seriesDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $watchlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'watchlist';
    objects: {
      movie: Prisma.$moviePayload<ExtArgs>;
      series: Prisma.$seriesPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        movie_id: string;
        series_id: string;
        added_at: Date;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['watchlist']
    >;
    composites: {};
  };

  type watchlistGetPayload<S extends boolean | null | undefined | watchlistDefaultArgs> = $Result.GetResult<
    Prisma.$watchlistPayload,
    S
  >;

  type watchlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    watchlistFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: WatchlistCountAggregateInputType | true;
  };

  export interface watchlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['watchlist']; meta: { name: 'watchlist' } };
    /**
     * Find zero or one Watchlist that matches the filter.
     * @param {watchlistFindUniqueArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends watchlistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, watchlistFindUniqueArgs<ExtArgs>>,
    ): Prisma__watchlistClient<
      $Result.GetResult<Prisma.$watchlistPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Watchlist that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {watchlistFindUniqueOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends watchlistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, watchlistFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__watchlistClient<
      $Result.GetResult<Prisma.$watchlistPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Watchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlistFindFirstArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends watchlistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, watchlistFindFirstArgs<ExtArgs>>,
    ): Prisma__watchlistClient<
      $Result.GetResult<Prisma.$watchlistPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Watchlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlistFindFirstOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends watchlistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, watchlistFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__watchlistClient<
      $Result.GetResult<Prisma.$watchlistPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Watchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchlists
     * const watchlists = await prisma.watchlist.findMany()
     *
     * // Get first 10 Watchlists
     * const watchlists = await prisma.watchlist.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends watchlistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, watchlistFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$watchlistPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Watchlist.
     * @param {watchlistCreateArgs} args - Arguments to create a Watchlist.
     * @example
     * // Create one Watchlist
     * const Watchlist = await prisma.watchlist.create({
     *   data: {
     *     // ... data to create a Watchlist
     *   }
     * })
     *
     **/
    create<T extends watchlistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, watchlistCreateArgs<ExtArgs>>,
    ): Prisma__watchlistClient<$Result.GetResult<Prisma.$watchlistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Watchlists.
     *     @param {watchlistCreateManyArgs} args - Arguments to create many Watchlists.
     *     @example
     *     // Create many Watchlists
     *     const watchlist = await prisma.watchlist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends watchlistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, watchlistCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Watchlist.
     * @param {watchlistDeleteArgs} args - Arguments to delete one Watchlist.
     * @example
     * // Delete one Watchlist
     * const Watchlist = await prisma.watchlist.delete({
     *   where: {
     *     // ... filter to delete one Watchlist
     *   }
     * })
     *
     **/
    delete<T extends watchlistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, watchlistDeleteArgs<ExtArgs>>,
    ): Prisma__watchlistClient<$Result.GetResult<Prisma.$watchlistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Watchlist.
     * @param {watchlistUpdateArgs} args - Arguments to update one Watchlist.
     * @example
     * // Update one Watchlist
     * const watchlist = await prisma.watchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends watchlistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, watchlistUpdateArgs<ExtArgs>>,
    ): Prisma__watchlistClient<$Result.GetResult<Prisma.$watchlistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Watchlists.
     * @param {watchlistDeleteManyArgs} args - Arguments to filter Watchlists to delete.
     * @example
     * // Delete a few Watchlists
     * const { count } = await prisma.watchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends watchlistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, watchlistDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends watchlistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, watchlistUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Watchlist.
     * @param {watchlistUpsertArgs} args - Arguments to update or create a Watchlist.
     * @example
     * // Update or create a Watchlist
     * const watchlist = await prisma.watchlist.upsert({
     *   create: {
     *     // ... data to create a Watchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watchlist we want to update
     *   }
     * })
     **/
    upsert<T extends watchlistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, watchlistUpsertArgs<ExtArgs>>,
    ): Prisma__watchlistClient<$Result.GetResult<Prisma.$watchlistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlistCountArgs} args - Arguments to filter Watchlists to count.
     * @example
     * // Count the number of Watchlists
     * const count = await prisma.watchlist.count({
     *   where: {
     *     // ... the filter for the Watchlists we want to count
     *   }
     * })
     **/
    count<T extends watchlistCountArgs>(
      args?: Subset<T, watchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends WatchlistAggregateArgs>(
      args: Subset<T, WatchlistAggregateArgs>,
    ): Prisma.PrismaPromise<GetWatchlistAggregateType<T>>;

    /**
     * Group by Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends watchlistGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: watchlistGroupByArgs['orderBy'] }
        : { orderBy?: watchlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, watchlistGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the watchlist model
     */
    readonly fields: watchlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for watchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__watchlistClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movie<T extends movieDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, movieDefaultArgs<ExtArgs>>,
    ): Prisma__movieClient<
      $Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    series<T extends seriesDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, seriesDefaultArgs<ExtArgs>>,
    ): Prisma__seriesClient<
      $Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the watchlist model
   */
  interface watchlistFieldRefs {
    readonly id: FieldRef<'watchlist', 'String'>;
    readonly user_id: FieldRef<'watchlist', 'String'>;
    readonly movie_id: FieldRef<'watchlist', 'String'>;
    readonly series_id: FieldRef<'watchlist', 'String'>;
    readonly added_at: FieldRef<'watchlist', 'DateTime'>;
    readonly created_at: FieldRef<'watchlist', 'DateTime'>;
    readonly updated_at: FieldRef<'watchlist', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * watchlist findUnique
   */
  export type watchlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude<ExtArgs> | null;
    /**
     * Filter, which watchlist to fetch.
     */
    where: watchlistWhereUniqueInput;
  };

  /**
   * watchlist findUniqueOrThrow
   */
  export type watchlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude<ExtArgs> | null;
    /**
     * Filter, which watchlist to fetch.
     */
    where: watchlistWhereUniqueInput;
  };

  /**
   * watchlist findFirst
   */
  export type watchlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude<ExtArgs> | null;
    /**
     * Filter, which watchlist to fetch.
     */
    where?: watchlistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of watchlists to fetch.
     */
    orderBy?: watchlistOrderByWithRelationInput | watchlistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for watchlists.
     */
    cursor?: watchlistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` watchlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` watchlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[];
  };

  /**
   * watchlist findFirstOrThrow
   */
  export type watchlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude<ExtArgs> | null;
    /**
     * Filter, which watchlist to fetch.
     */
    where?: watchlistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of watchlists to fetch.
     */
    orderBy?: watchlistOrderByWithRelationInput | watchlistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for watchlists.
     */
    cursor?: watchlistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` watchlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` watchlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[];
  };

  /**
   * watchlist findMany
   */
  export type watchlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude<ExtArgs> | null;
    /**
     * Filter, which watchlists to fetch.
     */
    where?: watchlistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of watchlists to fetch.
     */
    orderBy?: watchlistOrderByWithRelationInput | watchlistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing watchlists.
     */
    cursor?: watchlistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` watchlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` watchlists.
     */
    skip?: number;
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[];
  };

  /**
   * watchlist create
   */
  export type watchlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude<ExtArgs> | null;
    /**
     * The data needed to create a watchlist.
     */
    data: XOR<watchlistCreateInput, watchlistUncheckedCreateInput>;
  };

  /**
   * watchlist createMany
   */
  export type watchlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many watchlists.
     */
    data: watchlistCreateManyInput | watchlistCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * watchlist update
   */
  export type watchlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude<ExtArgs> | null;
    /**
     * The data needed to update a watchlist.
     */
    data: XOR<watchlistUpdateInput, watchlistUncheckedUpdateInput>;
    /**
     * Choose, which watchlist to update.
     */
    where: watchlistWhereUniqueInput;
  };

  /**
   * watchlist updateMany
   */
  export type watchlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update watchlists.
     */
    data: XOR<watchlistUpdateManyMutationInput, watchlistUncheckedUpdateManyInput>;
    /**
     * Filter which watchlists to update
     */
    where?: watchlistWhereInput;
  };

  /**
   * watchlist upsert
   */
  export type watchlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude<ExtArgs> | null;
    /**
     * The filter to search for the watchlist to update in case it exists.
     */
    where: watchlistWhereUniqueInput;
    /**
     * In case the watchlist found by the `where` argument doesn't exist, create a new watchlist with this data.
     */
    create: XOR<watchlistCreateInput, watchlistUncheckedCreateInput>;
    /**
     * In case the watchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<watchlistUpdateInput, watchlistUncheckedUpdateInput>;
  };

  /**
   * watchlist delete
   */
  export type watchlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude<ExtArgs> | null;
    /**
     * Filter which watchlist to delete.
     */
    where: watchlistWhereUniqueInput;
  };

  /**
   * watchlist deleteMany
   */
  export type watchlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which watchlists to delete
     */
    where?: watchlistWhereInput;
  };

  /**
   * watchlist without action
   */
  export type watchlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlist
     */
    select?: watchlistSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: watchlistInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const MovieScalarFieldEnum: {
    id: 'id';
    title: 'title';
    genre: 'genre';
    release_date: 'release_date';
    rating: 'rating';
    duration: 'duration';
    provider_id: 'provider_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum];

  export const ProfileScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    first_name: 'first_name';
    last_name: 'last_name';
    birth_date: 'birth_date';
    gender: 'gender';
    location: 'location';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];

  export const ProviderScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum];

  export const SeriesScalarFieldEnum: {
    id: 'id';
    title: 'title';
    genre: 'genre';
    release_date: 'release_date';
    rating: 'rating';
    seasons: 'seasons';
    provider_id: 'provider_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type SeriesScalarFieldEnum = (typeof SeriesScalarFieldEnum)[keyof typeof SeriesScalarFieldEnum];

  export const SubscriptionScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type SubscriptionScalarFieldEnum =
    (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    provider_id: 'provider_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const WatchlistScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    movie_id: 'movie_id';
    series_id: 'series_id';
    added_at: 'added_at';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type WatchlistScalarFieldEnum = (typeof WatchlistScalarFieldEnum)[keyof typeof WatchlistScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type movieWhereInput = {
    AND?: movieWhereInput | movieWhereInput[];
    OR?: movieWhereInput[];
    NOT?: movieWhereInput | movieWhereInput[];
    id?: UuidFilter<'movie'> | string;
    title?: StringFilter<'movie'> | string;
    genre?: StringFilter<'movie'> | string;
    release_date?: DateTimeFilter<'movie'> | Date | string;
    rating?: IntNullableFilter<'movie'> | number | null;
    duration?: IntNullableFilter<'movie'> | number | null;
    provider_id?: UuidFilter<'movie'> | string;
    created_at?: DateTimeFilter<'movie'> | Date | string;
    updated_at?: DateTimeFilter<'movie'> | Date | string;
    provider?: XOR<ProviderRelationFilter, providerWhereInput>;
    watchlist?: WatchlistListRelationFilter;
  };

  export type movieOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrderInput | SortOrder;
    duration?: SortOrderInput | SortOrder;
    provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    provider?: providerOrderByWithRelationInput;
    watchlist?: watchlistOrderByRelationAggregateInput;
  };

  export type movieWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: movieWhereInput | movieWhereInput[];
      OR?: movieWhereInput[];
      NOT?: movieWhereInput | movieWhereInput[];
      title?: StringFilter<'movie'> | string;
      genre?: StringFilter<'movie'> | string;
      release_date?: DateTimeFilter<'movie'> | Date | string;
      rating?: IntNullableFilter<'movie'> | number | null;
      duration?: IntNullableFilter<'movie'> | number | null;
      provider_id?: UuidFilter<'movie'> | string;
      created_at?: DateTimeFilter<'movie'> | Date | string;
      updated_at?: DateTimeFilter<'movie'> | Date | string;
      provider?: XOR<ProviderRelationFilter, providerWhereInput>;
      watchlist?: WatchlistListRelationFilter;
    },
    'id'
  >;

  export type movieOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrderInput | SortOrder;
    duration?: SortOrderInput | SortOrder;
    provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: movieCountOrderByAggregateInput;
    _avg?: movieAvgOrderByAggregateInput;
    _max?: movieMaxOrderByAggregateInput;
    _min?: movieMinOrderByAggregateInput;
    _sum?: movieSumOrderByAggregateInput;
  };

  export type movieScalarWhereWithAggregatesInput = {
    AND?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[];
    OR?: movieScalarWhereWithAggregatesInput[];
    NOT?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'movie'> | string;
    title?: StringWithAggregatesFilter<'movie'> | string;
    genre?: StringWithAggregatesFilter<'movie'> | string;
    release_date?: DateTimeWithAggregatesFilter<'movie'> | Date | string;
    rating?: IntNullableWithAggregatesFilter<'movie'> | number | null;
    duration?: IntNullableWithAggregatesFilter<'movie'> | number | null;
    provider_id?: UuidWithAggregatesFilter<'movie'> | string;
    created_at?: DateTimeWithAggregatesFilter<'movie'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'movie'> | Date | string;
  };

  export type profileWhereInput = {
    AND?: profileWhereInput | profileWhereInput[];
    OR?: profileWhereInput[];
    NOT?: profileWhereInput | profileWhereInput[];
    id?: UuidFilter<'profile'> | string;
    user_id?: UuidFilter<'profile'> | string;
    first_name?: StringNullableFilter<'profile'> | string | null;
    last_name?: StringNullableFilter<'profile'> | string | null;
    birth_date?: DateTimeNullableFilter<'profile'> | Date | string | null;
    gender?: StringNullableFilter<'profile'> | string | null;
    location?: StringNullableFilter<'profile'> | string | null;
    created_at?: DateTimeFilter<'profile'> | Date | string;
    updated_at?: DateTimeFilter<'profile'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type profileOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    birth_date?: SortOrderInput | SortOrder;
    gender?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type profileWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: profileWhereInput | profileWhereInput[];
      OR?: profileWhereInput[];
      NOT?: profileWhereInput | profileWhereInput[];
      user_id?: UuidFilter<'profile'> | string;
      first_name?: StringNullableFilter<'profile'> | string | null;
      last_name?: StringNullableFilter<'profile'> | string | null;
      birth_date?: DateTimeNullableFilter<'profile'> | Date | string | null;
      gender?: StringNullableFilter<'profile'> | string | null;
      location?: StringNullableFilter<'profile'> | string | null;
      created_at?: DateTimeFilter<'profile'> | Date | string;
      updated_at?: DateTimeFilter<'profile'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type profileOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    birth_date?: SortOrderInput | SortOrder;
    gender?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: profileCountOrderByAggregateInput;
    _max?: profileMaxOrderByAggregateInput;
    _min?: profileMinOrderByAggregateInput;
  };

  export type profileScalarWhereWithAggregatesInput = {
    AND?: profileScalarWhereWithAggregatesInput | profileScalarWhereWithAggregatesInput[];
    OR?: profileScalarWhereWithAggregatesInput[];
    NOT?: profileScalarWhereWithAggregatesInput | profileScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'profile'> | string;
    user_id?: UuidWithAggregatesFilter<'profile'> | string;
    first_name?: StringNullableWithAggregatesFilter<'profile'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'profile'> | string | null;
    birth_date?: DateTimeNullableWithAggregatesFilter<'profile'> | Date | string | null;
    gender?: StringNullableWithAggregatesFilter<'profile'> | string | null;
    location?: StringNullableWithAggregatesFilter<'profile'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'profile'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'profile'> | Date | string;
  };

  export type providerWhereInput = {
    AND?: providerWhereInput | providerWhereInput[];
    OR?: providerWhereInput[];
    NOT?: providerWhereInput | providerWhereInput[];
    id?: UuidFilter<'provider'> | string;
    description?: StringNullableFilter<'provider'> | string | null;
    name?: StringFilter<'provider'> | string;
    created_at?: DateTimeFilter<'provider'> | Date | string;
    updated_at?: DateTimeFilter<'provider'> | Date | string;
    movie?: MovieListRelationFilter;
    series?: SeriesListRelationFilter;
    user?: UserListRelationFilter;
  };

  export type providerOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    movie?: movieOrderByRelationAggregateInput;
    series?: seriesOrderByRelationAggregateInput;
    user?: userOrderByRelationAggregateInput;
  };

  export type providerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: providerWhereInput | providerWhereInput[];
      OR?: providerWhereInput[];
      NOT?: providerWhereInput | providerWhereInput[];
      description?: StringNullableFilter<'provider'> | string | null;
      name?: StringFilter<'provider'> | string;
      created_at?: DateTimeFilter<'provider'> | Date | string;
      updated_at?: DateTimeFilter<'provider'> | Date | string;
      movie?: MovieListRelationFilter;
      series?: SeriesListRelationFilter;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type providerOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: providerCountOrderByAggregateInput;
    _max?: providerMaxOrderByAggregateInput;
    _min?: providerMinOrderByAggregateInput;
  };

  export type providerScalarWhereWithAggregatesInput = {
    AND?: providerScalarWhereWithAggregatesInput | providerScalarWhereWithAggregatesInput[];
    OR?: providerScalarWhereWithAggregatesInput[];
    NOT?: providerScalarWhereWithAggregatesInput | providerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'provider'> | string;
    description?: StringNullableWithAggregatesFilter<'provider'> | string | null;
    name?: StringWithAggregatesFilter<'provider'> | string;
    created_at?: DateTimeWithAggregatesFilter<'provider'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'provider'> | Date | string;
  };

  export type seriesWhereInput = {
    AND?: seriesWhereInput | seriesWhereInput[];
    OR?: seriesWhereInput[];
    NOT?: seriesWhereInput | seriesWhereInput[];
    id?: UuidFilter<'series'> | string;
    title?: StringFilter<'series'> | string;
    genre?: StringFilter<'series'> | string;
    release_date?: DateTimeFilter<'series'> | Date | string;
    rating?: IntNullableFilter<'series'> | number | null;
    seasons?: IntNullableFilter<'series'> | number | null;
    provider_id?: UuidFilter<'series'> | string;
    created_at?: DateTimeFilter<'series'> | Date | string;
    updated_at?: DateTimeFilter<'series'> | Date | string;
    provider?: XOR<ProviderRelationFilter, providerWhereInput>;
    watchlist?: WatchlistListRelationFilter;
  };

  export type seriesOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrderInput | SortOrder;
    seasons?: SortOrderInput | SortOrder;
    provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    provider?: providerOrderByWithRelationInput;
    watchlist?: watchlistOrderByRelationAggregateInput;
  };

  export type seriesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: seriesWhereInput | seriesWhereInput[];
      OR?: seriesWhereInput[];
      NOT?: seriesWhereInput | seriesWhereInput[];
      title?: StringFilter<'series'> | string;
      genre?: StringFilter<'series'> | string;
      release_date?: DateTimeFilter<'series'> | Date | string;
      rating?: IntNullableFilter<'series'> | number | null;
      seasons?: IntNullableFilter<'series'> | number | null;
      provider_id?: UuidFilter<'series'> | string;
      created_at?: DateTimeFilter<'series'> | Date | string;
      updated_at?: DateTimeFilter<'series'> | Date | string;
      provider?: XOR<ProviderRelationFilter, providerWhereInput>;
      watchlist?: WatchlistListRelationFilter;
    },
    'id'
  >;

  export type seriesOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrderInput | SortOrder;
    seasons?: SortOrderInput | SortOrder;
    provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: seriesCountOrderByAggregateInput;
    _avg?: seriesAvgOrderByAggregateInput;
    _max?: seriesMaxOrderByAggregateInput;
    _min?: seriesMinOrderByAggregateInput;
    _sum?: seriesSumOrderByAggregateInput;
  };

  export type seriesScalarWhereWithAggregatesInput = {
    AND?: seriesScalarWhereWithAggregatesInput | seriesScalarWhereWithAggregatesInput[];
    OR?: seriesScalarWhereWithAggregatesInput[];
    NOT?: seriesScalarWhereWithAggregatesInput | seriesScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'series'> | string;
    title?: StringWithAggregatesFilter<'series'> | string;
    genre?: StringWithAggregatesFilter<'series'> | string;
    release_date?: DateTimeWithAggregatesFilter<'series'> | Date | string;
    rating?: IntNullableWithAggregatesFilter<'series'> | number | null;
    seasons?: IntNullableWithAggregatesFilter<'series'> | number | null;
    provider_id?: UuidWithAggregatesFilter<'series'> | string;
    created_at?: DateTimeWithAggregatesFilter<'series'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'series'> | Date | string;
  };

  export type subscriptionWhereInput = {
    AND?: subscriptionWhereInput | subscriptionWhereInput[];
    OR?: subscriptionWhereInput[];
    NOT?: subscriptionWhereInput | subscriptionWhereInput[];
    id?: UuidFilter<'subscription'> | string;
    created_at?: DateTimeFilter<'subscription'> | Date | string;
    updated_at?: DateTimeFilter<'subscription'> | Date | string;
  };

  export type subscriptionOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type subscriptionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: subscriptionWhereInput | subscriptionWhereInput[];
      OR?: subscriptionWhereInput[];
      NOT?: subscriptionWhereInput | subscriptionWhereInput[];
      created_at?: DateTimeFilter<'subscription'> | Date | string;
      updated_at?: DateTimeFilter<'subscription'> | Date | string;
    },
    'id'
  >;

  export type subscriptionOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: subscriptionCountOrderByAggregateInput;
    _max?: subscriptionMaxOrderByAggregateInput;
    _min?: subscriptionMinOrderByAggregateInput;
  };

  export type subscriptionScalarWhereWithAggregatesInput = {
    AND?: subscriptionScalarWhereWithAggregatesInput | subscriptionScalarWhereWithAggregatesInput[];
    OR?: subscriptionScalarWhereWithAggregatesInput[];
    NOT?: subscriptionScalarWhereWithAggregatesInput | subscriptionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'subscription'> | string;
    created_at?: DateTimeWithAggregatesFilter<'subscription'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'subscription'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    provider_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    profile?: ProfileListRelationFilter;
    provider?: XOR<ProviderNullableRelationFilter, providerWhereInput> | null;
    watchlist?: WatchlistListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    provider_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    profile?: profileOrderByRelationAggregateInput;
    provider?: providerOrderByWithRelationInput;
    watchlist?: watchlistOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      provider_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      profile?: ProfileListRelationFilter;
      provider?: XOR<ProviderNullableRelationFilter, providerWhereInput> | null;
      watchlist?: WatchlistListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    provider_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    provider_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type watchlistWhereInput = {
    AND?: watchlistWhereInput | watchlistWhereInput[];
    OR?: watchlistWhereInput[];
    NOT?: watchlistWhereInput | watchlistWhereInput[];
    id?: UuidFilter<'watchlist'> | string;
    user_id?: UuidFilter<'watchlist'> | string;
    movie_id?: UuidFilter<'watchlist'> | string;
    series_id?: UuidFilter<'watchlist'> | string;
    added_at?: DateTimeFilter<'watchlist'> | Date | string;
    created_at?: DateTimeFilter<'watchlist'> | Date | string;
    updated_at?: DateTimeFilter<'watchlist'> | Date | string;
    movie?: XOR<MovieRelationFilter, movieWhereInput>;
    series?: XOR<SeriesRelationFilter, seriesWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type watchlistOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    movie_id?: SortOrder;
    series_id?: SortOrder;
    added_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    movie?: movieOrderByWithRelationInput;
    series?: seriesOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type watchlistWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: watchlistWhereInput | watchlistWhereInput[];
      OR?: watchlistWhereInput[];
      NOT?: watchlistWhereInput | watchlistWhereInput[];
      user_id?: UuidFilter<'watchlist'> | string;
      movie_id?: UuidFilter<'watchlist'> | string;
      series_id?: UuidFilter<'watchlist'> | string;
      added_at?: DateTimeFilter<'watchlist'> | Date | string;
      created_at?: DateTimeFilter<'watchlist'> | Date | string;
      updated_at?: DateTimeFilter<'watchlist'> | Date | string;
      movie?: XOR<MovieRelationFilter, movieWhereInput>;
      series?: XOR<SeriesRelationFilter, seriesWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type watchlistOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    movie_id?: SortOrder;
    series_id?: SortOrder;
    added_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: watchlistCountOrderByAggregateInput;
    _max?: watchlistMaxOrderByAggregateInput;
    _min?: watchlistMinOrderByAggregateInput;
  };

  export type watchlistScalarWhereWithAggregatesInput = {
    AND?: watchlistScalarWhereWithAggregatesInput | watchlistScalarWhereWithAggregatesInput[];
    OR?: watchlistScalarWhereWithAggregatesInput[];
    NOT?: watchlistScalarWhereWithAggregatesInput | watchlistScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'watchlist'> | string;
    user_id?: UuidWithAggregatesFilter<'watchlist'> | string;
    movie_id?: UuidWithAggregatesFilter<'watchlist'> | string;
    series_id?: UuidWithAggregatesFilter<'watchlist'> | string;
    added_at?: DateTimeWithAggregatesFilter<'watchlist'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'watchlist'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'watchlist'> | Date | string;
  };

  export type movieCreateInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    duration?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    provider: providerCreateNestedOneWithoutMovieInput;
    watchlist?: watchlistCreateNestedManyWithoutMovieInput;
  };

  export type movieUncheckedCreateInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    duration?: number | null;
    provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    watchlist?: watchlistUncheckedCreateNestedManyWithoutMovieInput;
  };

  export type movieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: providerUpdateOneRequiredWithoutMovieNestedInput;
    watchlist?: watchlistUpdateManyWithoutMovieNestedInput;
  };

  export type movieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    watchlist?: watchlistUncheckedUpdateManyWithoutMovieNestedInput;
  };

  export type movieCreateManyInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    duration?: number | null;
    provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type movieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type movieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type profileCreateInput = {
    id?: string;
    first_name?: string | null;
    last_name?: string | null;
    birth_date?: Date | string | null;
    gender?: string | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutProfileInput;
  };

  export type profileUncheckedCreateInput = {
    id?: string;
    user_id: string;
    first_name?: string | null;
    last_name?: string | null;
    birth_date?: Date | string | null;
    gender?: string | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type profileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutProfileNestedInput;
  };

  export type profileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type profileCreateManyInput = {
    id?: string;
    user_id: string;
    first_name?: string | null;
    last_name?: string | null;
    birth_date?: Date | string | null;
    gender?: string | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type profileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type profileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type providerCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    movie?: movieCreateNestedManyWithoutProviderInput;
    series?: seriesCreateNestedManyWithoutProviderInput;
    user?: userCreateNestedManyWithoutProviderInput;
  };

  export type providerUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    movie?: movieUncheckedCreateNestedManyWithoutProviderInput;
    series?: seriesUncheckedCreateNestedManyWithoutProviderInput;
    user?: userUncheckedCreateNestedManyWithoutProviderInput;
  };

  export type providerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: movieUpdateManyWithoutProviderNestedInput;
    series?: seriesUpdateManyWithoutProviderNestedInput;
    user?: userUpdateManyWithoutProviderNestedInput;
  };

  export type providerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: movieUncheckedUpdateManyWithoutProviderNestedInput;
    series?: seriesUncheckedUpdateManyWithoutProviderNestedInput;
    user?: userUncheckedUpdateManyWithoutProviderNestedInput;
  };

  export type providerCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type providerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type providerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type seriesCreateInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    seasons?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    provider: providerCreateNestedOneWithoutSeriesInput;
    watchlist?: watchlistCreateNestedManyWithoutSeriesInput;
  };

  export type seriesUncheckedCreateInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    seasons?: number | null;
    provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    watchlist?: watchlistUncheckedCreateNestedManyWithoutSeriesInput;
  };

  export type seriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    seasons?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: providerUpdateOneRequiredWithoutSeriesNestedInput;
    watchlist?: watchlistUpdateManyWithoutSeriesNestedInput;
  };

  export type seriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    seasons?: NullableIntFieldUpdateOperationsInput | number | null;
    provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    watchlist?: watchlistUncheckedUpdateManyWithoutSeriesNestedInput;
  };

  export type seriesCreateManyInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    seasons?: number | null;
    provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type seriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    seasons?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type seriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    seasons?: NullableIntFieldUpdateOperationsInput | number | null;
    provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type subscriptionCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type subscriptionUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type subscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type subscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type subscriptionCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type subscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type subscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    profile?: profileCreateNestedManyWithoutUserInput;
    provider?: providerCreateNestedOneWithoutUserInput;
    watchlist?: watchlistCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    provider_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    profile?: profileUncheckedCreateNestedManyWithoutUserInput;
    watchlist?: watchlistUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: profileUpdateManyWithoutUserNestedInput;
    provider?: providerUpdateOneWithoutUserNestedInput;
    watchlist?: watchlistUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: profileUncheckedUpdateManyWithoutUserNestedInput;
    watchlist?: watchlistUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    provider_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type watchlistCreateInput = {
    id?: string;
    added_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    movie: movieCreateNestedOneWithoutWatchlistInput;
    series: seriesCreateNestedOneWithoutWatchlistInput;
    user: userCreateNestedOneWithoutWatchlistInput;
  };

  export type watchlistUncheckedCreateInput = {
    id?: string;
    user_id: string;
    movie_id: string;
    series_id: string;
    added_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type watchlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: movieUpdateOneRequiredWithoutWatchlistNestedInput;
    series?: seriesUpdateOneRequiredWithoutWatchlistNestedInput;
    user?: userUpdateOneRequiredWithoutWatchlistNestedInput;
  };

  export type watchlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    series_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type watchlistCreateManyInput = {
    id?: string;
    user_id: string;
    movie_id: string;
    series_id: string;
    added_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type watchlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type watchlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    series_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type ProviderRelationFilter = {
    is?: providerWhereInput;
    isNot?: providerWhereInput;
  };

  export type WatchlistListRelationFilter = {
    every?: watchlistWhereInput;
    some?: watchlistWhereInput;
    none?: watchlistWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type watchlistOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type movieCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrder;
    duration?: SortOrder;
    provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type movieAvgOrderByAggregateInput = {
    rating?: SortOrder;
    duration?: SortOrder;
  };

  export type movieMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrder;
    duration?: SortOrder;
    provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type movieMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrder;
    duration?: SortOrder;
    provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type movieSumOrderByAggregateInput = {
    rating?: SortOrder;
    duration?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type profileCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    birth_date?: SortOrder;
    gender?: SortOrder;
    location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type profileMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    birth_date?: SortOrder;
    gender?: SortOrder;
    location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type profileMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    birth_date?: SortOrder;
    gender?: SortOrder;
    location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type MovieListRelationFilter = {
    every?: movieWhereInput;
    some?: movieWhereInput;
    none?: movieWhereInput;
  };

  export type SeriesListRelationFilter = {
    every?: seriesWhereInput;
    some?: seriesWhereInput;
    none?: seriesWhereInput;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type movieOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type seriesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type providerCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type providerMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type providerMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type seriesCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrder;
    seasons?: SortOrder;
    provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type seriesAvgOrderByAggregateInput = {
    rating?: SortOrder;
    seasons?: SortOrder;
  };

  export type seriesMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrder;
    seasons?: SortOrder;
    provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type seriesMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    genre?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrder;
    seasons?: SortOrder;
    provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type seriesSumOrderByAggregateInput = {
    rating?: SortOrder;
    seasons?: SortOrder;
  };

  export type subscriptionCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type subscriptionMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type subscriptionMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type ProfileListRelationFilter = {
    every?: profileWhereInput;
    some?: profileWhereInput;
    none?: profileWhereInput;
  };

  export type ProviderNullableRelationFilter = {
    is?: providerWhereInput | null;
    isNot?: providerWhereInput | null;
  };

  export type profileOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    provider_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    provider_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    provider_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type MovieRelationFilter = {
    is?: movieWhereInput;
    isNot?: movieWhereInput;
  };

  export type SeriesRelationFilter = {
    is?: seriesWhereInput;
    isNot?: seriesWhereInput;
  };

  export type watchlistCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    movie_id?: SortOrder;
    series_id?: SortOrder;
    added_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type watchlistMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    movie_id?: SortOrder;
    series_id?: SortOrder;
    added_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type watchlistMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    movie_id?: SortOrder;
    series_id?: SortOrder;
    added_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type providerCreateNestedOneWithoutMovieInput = {
    create?: XOR<providerCreateWithoutMovieInput, providerUncheckedCreateWithoutMovieInput>;
    connectOrCreate?: providerCreateOrConnectWithoutMovieInput;
    connect?: providerWhereUniqueInput;
  };

  export type watchlistCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<watchlistCreateWithoutMovieInput, watchlistUncheckedCreateWithoutMovieInput>
      | watchlistCreateWithoutMovieInput[]
      | watchlistUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: watchlistCreateOrConnectWithoutMovieInput | watchlistCreateOrConnectWithoutMovieInput[];
    createMany?: watchlistCreateManyMovieInputEnvelope;
    connect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
  };

  export type watchlistUncheckedCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<watchlistCreateWithoutMovieInput, watchlistUncheckedCreateWithoutMovieInput>
      | watchlistCreateWithoutMovieInput[]
      | watchlistUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: watchlistCreateOrConnectWithoutMovieInput | watchlistCreateOrConnectWithoutMovieInput[];
    createMany?: watchlistCreateManyMovieInputEnvelope;
    connect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type providerUpdateOneRequiredWithoutMovieNestedInput = {
    create?: XOR<providerCreateWithoutMovieInput, providerUncheckedCreateWithoutMovieInput>;
    connectOrCreate?: providerCreateOrConnectWithoutMovieInput;
    upsert?: providerUpsertWithoutMovieInput;
    connect?: providerWhereUniqueInput;
    update?: XOR<
      XOR<providerUpdateToOneWithWhereWithoutMovieInput, providerUpdateWithoutMovieInput>,
      providerUncheckedUpdateWithoutMovieInput
    >;
  };

  export type watchlistUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<watchlistCreateWithoutMovieInput, watchlistUncheckedCreateWithoutMovieInput>
      | watchlistCreateWithoutMovieInput[]
      | watchlistUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: watchlistCreateOrConnectWithoutMovieInput | watchlistCreateOrConnectWithoutMovieInput[];
    upsert?: watchlistUpsertWithWhereUniqueWithoutMovieInput | watchlistUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: watchlistCreateManyMovieInputEnvelope;
    set?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    disconnect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    delete?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    connect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    update?: watchlistUpdateWithWhereUniqueWithoutMovieInput | watchlistUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?: watchlistUpdateManyWithWhereWithoutMovieInput | watchlistUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: watchlistScalarWhereInput | watchlistScalarWhereInput[];
  };

  export type watchlistUncheckedUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<watchlistCreateWithoutMovieInput, watchlistUncheckedCreateWithoutMovieInput>
      | watchlistCreateWithoutMovieInput[]
      | watchlistUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: watchlistCreateOrConnectWithoutMovieInput | watchlistCreateOrConnectWithoutMovieInput[];
    upsert?: watchlistUpsertWithWhereUniqueWithoutMovieInput | watchlistUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: watchlistCreateManyMovieInputEnvelope;
    set?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    disconnect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    delete?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    connect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    update?: watchlistUpdateWithWhereUniqueWithoutMovieInput | watchlistUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?: watchlistUpdateManyWithWhereWithoutMovieInput | watchlistUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: watchlistScalarWhereInput | watchlistScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutProfileInput = {
    create?: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: userCreateOrConnectWithoutProfileInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type userUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: userCreateOrConnectWithoutProfileInput;
    upsert?: userUpsertWithoutProfileInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutProfileInput, userUpdateWithoutProfileInput>,
      userUncheckedUpdateWithoutProfileInput
    >;
  };

  export type movieCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<movieCreateWithoutProviderInput, movieUncheckedCreateWithoutProviderInput>
      | movieCreateWithoutProviderInput[]
      | movieUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: movieCreateOrConnectWithoutProviderInput | movieCreateOrConnectWithoutProviderInput[];
    createMany?: movieCreateManyProviderInputEnvelope;
    connect?: movieWhereUniqueInput | movieWhereUniqueInput[];
  };

  export type seriesCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<seriesCreateWithoutProviderInput, seriesUncheckedCreateWithoutProviderInput>
      | seriesCreateWithoutProviderInput[]
      | seriesUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: seriesCreateOrConnectWithoutProviderInput | seriesCreateOrConnectWithoutProviderInput[];
    createMany?: seriesCreateManyProviderInputEnvelope;
    connect?: seriesWhereUniqueInput | seriesWhereUniqueInput[];
  };

  export type userCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<userCreateWithoutProviderInput, userUncheckedCreateWithoutProviderInput>
      | userCreateWithoutProviderInput[]
      | userUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: userCreateOrConnectWithoutProviderInput | userCreateOrConnectWithoutProviderInput[];
    createMany?: userCreateManyProviderInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type movieUncheckedCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<movieCreateWithoutProviderInput, movieUncheckedCreateWithoutProviderInput>
      | movieCreateWithoutProviderInput[]
      | movieUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: movieCreateOrConnectWithoutProviderInput | movieCreateOrConnectWithoutProviderInput[];
    createMany?: movieCreateManyProviderInputEnvelope;
    connect?: movieWhereUniqueInput | movieWhereUniqueInput[];
  };

  export type seriesUncheckedCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<seriesCreateWithoutProviderInput, seriesUncheckedCreateWithoutProviderInput>
      | seriesCreateWithoutProviderInput[]
      | seriesUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: seriesCreateOrConnectWithoutProviderInput | seriesCreateOrConnectWithoutProviderInput[];
    createMany?: seriesCreateManyProviderInputEnvelope;
    connect?: seriesWhereUniqueInput | seriesWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutProviderInput = {
    create?:
      | XOR<userCreateWithoutProviderInput, userUncheckedCreateWithoutProviderInput>
      | userCreateWithoutProviderInput[]
      | userUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: userCreateOrConnectWithoutProviderInput | userCreateOrConnectWithoutProviderInput[];
    createMany?: userCreateManyProviderInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type movieUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<movieCreateWithoutProviderInput, movieUncheckedCreateWithoutProviderInput>
      | movieCreateWithoutProviderInput[]
      | movieUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: movieCreateOrConnectWithoutProviderInput | movieCreateOrConnectWithoutProviderInput[];
    upsert?: movieUpsertWithWhereUniqueWithoutProviderInput | movieUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: movieCreateManyProviderInputEnvelope;
    set?: movieWhereUniqueInput | movieWhereUniqueInput[];
    disconnect?: movieWhereUniqueInput | movieWhereUniqueInput[];
    delete?: movieWhereUniqueInput | movieWhereUniqueInput[];
    connect?: movieWhereUniqueInput | movieWhereUniqueInput[];
    update?: movieUpdateWithWhereUniqueWithoutProviderInput | movieUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: movieUpdateManyWithWhereWithoutProviderInput | movieUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: movieScalarWhereInput | movieScalarWhereInput[];
  };

  export type seriesUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<seriesCreateWithoutProviderInput, seriesUncheckedCreateWithoutProviderInput>
      | seriesCreateWithoutProviderInput[]
      | seriesUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: seriesCreateOrConnectWithoutProviderInput | seriesCreateOrConnectWithoutProviderInput[];
    upsert?: seriesUpsertWithWhereUniqueWithoutProviderInput | seriesUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: seriesCreateManyProviderInputEnvelope;
    set?: seriesWhereUniqueInput | seriesWhereUniqueInput[];
    disconnect?: seriesWhereUniqueInput | seriesWhereUniqueInput[];
    delete?: seriesWhereUniqueInput | seriesWhereUniqueInput[];
    connect?: seriesWhereUniqueInput | seriesWhereUniqueInput[];
    update?: seriesUpdateWithWhereUniqueWithoutProviderInput | seriesUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: seriesUpdateManyWithWhereWithoutProviderInput | seriesUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: seriesScalarWhereInput | seriesScalarWhereInput[];
  };

  export type userUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<userCreateWithoutProviderInput, userUncheckedCreateWithoutProviderInput>
      | userCreateWithoutProviderInput[]
      | userUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: userCreateOrConnectWithoutProviderInput | userCreateOrConnectWithoutProviderInput[];
    upsert?: userUpsertWithWhereUniqueWithoutProviderInput | userUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: userCreateManyProviderInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutProviderInput | userUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: userUpdateManyWithWhereWithoutProviderInput | userUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type movieUncheckedUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<movieCreateWithoutProviderInput, movieUncheckedCreateWithoutProviderInput>
      | movieCreateWithoutProviderInput[]
      | movieUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: movieCreateOrConnectWithoutProviderInput | movieCreateOrConnectWithoutProviderInput[];
    upsert?: movieUpsertWithWhereUniqueWithoutProviderInput | movieUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: movieCreateManyProviderInputEnvelope;
    set?: movieWhereUniqueInput | movieWhereUniqueInput[];
    disconnect?: movieWhereUniqueInput | movieWhereUniqueInput[];
    delete?: movieWhereUniqueInput | movieWhereUniqueInput[];
    connect?: movieWhereUniqueInput | movieWhereUniqueInput[];
    update?: movieUpdateWithWhereUniqueWithoutProviderInput | movieUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: movieUpdateManyWithWhereWithoutProviderInput | movieUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: movieScalarWhereInput | movieScalarWhereInput[];
  };

  export type seriesUncheckedUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<seriesCreateWithoutProviderInput, seriesUncheckedCreateWithoutProviderInput>
      | seriesCreateWithoutProviderInput[]
      | seriesUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: seriesCreateOrConnectWithoutProviderInput | seriesCreateOrConnectWithoutProviderInput[];
    upsert?: seriesUpsertWithWhereUniqueWithoutProviderInput | seriesUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: seriesCreateManyProviderInputEnvelope;
    set?: seriesWhereUniqueInput | seriesWhereUniqueInput[];
    disconnect?: seriesWhereUniqueInput | seriesWhereUniqueInput[];
    delete?: seriesWhereUniqueInput | seriesWhereUniqueInput[];
    connect?: seriesWhereUniqueInput | seriesWhereUniqueInput[];
    update?: seriesUpdateWithWhereUniqueWithoutProviderInput | seriesUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: seriesUpdateManyWithWhereWithoutProviderInput | seriesUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: seriesScalarWhereInput | seriesScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutProviderNestedInput = {
    create?:
      | XOR<userCreateWithoutProviderInput, userUncheckedCreateWithoutProviderInput>
      | userCreateWithoutProviderInput[]
      | userUncheckedCreateWithoutProviderInput[];
    connectOrCreate?: userCreateOrConnectWithoutProviderInput | userCreateOrConnectWithoutProviderInput[];
    upsert?: userUpsertWithWhereUniqueWithoutProviderInput | userUpsertWithWhereUniqueWithoutProviderInput[];
    createMany?: userCreateManyProviderInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutProviderInput | userUpdateWithWhereUniqueWithoutProviderInput[];
    updateMany?: userUpdateManyWithWhereWithoutProviderInput | userUpdateManyWithWhereWithoutProviderInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type providerCreateNestedOneWithoutSeriesInput = {
    create?: XOR<providerCreateWithoutSeriesInput, providerUncheckedCreateWithoutSeriesInput>;
    connectOrCreate?: providerCreateOrConnectWithoutSeriesInput;
    connect?: providerWhereUniqueInput;
  };

  export type watchlistCreateNestedManyWithoutSeriesInput = {
    create?:
      | XOR<watchlistCreateWithoutSeriesInput, watchlistUncheckedCreateWithoutSeriesInput>
      | watchlistCreateWithoutSeriesInput[]
      | watchlistUncheckedCreateWithoutSeriesInput[];
    connectOrCreate?: watchlistCreateOrConnectWithoutSeriesInput | watchlistCreateOrConnectWithoutSeriesInput[];
    createMany?: watchlistCreateManySeriesInputEnvelope;
    connect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
  };

  export type watchlistUncheckedCreateNestedManyWithoutSeriesInput = {
    create?:
      | XOR<watchlistCreateWithoutSeriesInput, watchlistUncheckedCreateWithoutSeriesInput>
      | watchlistCreateWithoutSeriesInput[]
      | watchlistUncheckedCreateWithoutSeriesInput[];
    connectOrCreate?: watchlistCreateOrConnectWithoutSeriesInput | watchlistCreateOrConnectWithoutSeriesInput[];
    createMany?: watchlistCreateManySeriesInputEnvelope;
    connect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
  };

  export type providerUpdateOneRequiredWithoutSeriesNestedInput = {
    create?: XOR<providerCreateWithoutSeriesInput, providerUncheckedCreateWithoutSeriesInput>;
    connectOrCreate?: providerCreateOrConnectWithoutSeriesInput;
    upsert?: providerUpsertWithoutSeriesInput;
    connect?: providerWhereUniqueInput;
    update?: XOR<
      XOR<providerUpdateToOneWithWhereWithoutSeriesInput, providerUpdateWithoutSeriesInput>,
      providerUncheckedUpdateWithoutSeriesInput
    >;
  };

  export type watchlistUpdateManyWithoutSeriesNestedInput = {
    create?:
      | XOR<watchlistCreateWithoutSeriesInput, watchlistUncheckedCreateWithoutSeriesInput>
      | watchlistCreateWithoutSeriesInput[]
      | watchlistUncheckedCreateWithoutSeriesInput[];
    connectOrCreate?: watchlistCreateOrConnectWithoutSeriesInput | watchlistCreateOrConnectWithoutSeriesInput[];
    upsert?: watchlistUpsertWithWhereUniqueWithoutSeriesInput | watchlistUpsertWithWhereUniqueWithoutSeriesInput[];
    createMany?: watchlistCreateManySeriesInputEnvelope;
    set?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    disconnect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    delete?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    connect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    update?: watchlistUpdateWithWhereUniqueWithoutSeriesInput | watchlistUpdateWithWhereUniqueWithoutSeriesInput[];
    updateMany?: watchlistUpdateManyWithWhereWithoutSeriesInput | watchlistUpdateManyWithWhereWithoutSeriesInput[];
    deleteMany?: watchlistScalarWhereInput | watchlistScalarWhereInput[];
  };

  export type watchlistUncheckedUpdateManyWithoutSeriesNestedInput = {
    create?:
      | XOR<watchlistCreateWithoutSeriesInput, watchlistUncheckedCreateWithoutSeriesInput>
      | watchlistCreateWithoutSeriesInput[]
      | watchlistUncheckedCreateWithoutSeriesInput[];
    connectOrCreate?: watchlistCreateOrConnectWithoutSeriesInput | watchlistCreateOrConnectWithoutSeriesInput[];
    upsert?: watchlistUpsertWithWhereUniqueWithoutSeriesInput | watchlistUpsertWithWhereUniqueWithoutSeriesInput[];
    createMany?: watchlistCreateManySeriesInputEnvelope;
    set?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    disconnect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    delete?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    connect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    update?: watchlistUpdateWithWhereUniqueWithoutSeriesInput | watchlistUpdateWithWhereUniqueWithoutSeriesInput[];
    updateMany?: watchlistUpdateManyWithWhereWithoutSeriesInput | watchlistUpdateManyWithWhereWithoutSeriesInput[];
    deleteMany?: watchlistScalarWhereInput | watchlistScalarWhereInput[];
  };

  export type profileCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
      | profileCreateWithoutUserInput[]
      | profileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: profileCreateOrConnectWithoutUserInput | profileCreateOrConnectWithoutUserInput[];
    createMany?: profileCreateManyUserInputEnvelope;
    connect?: profileWhereUniqueInput | profileWhereUniqueInput[];
  };

  export type providerCreateNestedOneWithoutUserInput = {
    create?: XOR<providerCreateWithoutUserInput, providerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: providerCreateOrConnectWithoutUserInput;
    connect?: providerWhereUniqueInput;
  };

  export type watchlistCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<watchlistCreateWithoutUserInput, watchlistUncheckedCreateWithoutUserInput>
      | watchlistCreateWithoutUserInput[]
      | watchlistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: watchlistCreateOrConnectWithoutUserInput | watchlistCreateOrConnectWithoutUserInput[];
    createMany?: watchlistCreateManyUserInputEnvelope;
    connect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
  };

  export type profileUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
      | profileCreateWithoutUserInput[]
      | profileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: profileCreateOrConnectWithoutUserInput | profileCreateOrConnectWithoutUserInput[];
    createMany?: profileCreateManyUserInputEnvelope;
    connect?: profileWhereUniqueInput | profileWhereUniqueInput[];
  };

  export type watchlistUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<watchlistCreateWithoutUserInput, watchlistUncheckedCreateWithoutUserInput>
      | watchlistCreateWithoutUserInput[]
      | watchlistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: watchlistCreateOrConnectWithoutUserInput | watchlistCreateOrConnectWithoutUserInput[];
    createMany?: watchlistCreateManyUserInputEnvelope;
    connect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
  };

  export type profileUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
      | profileCreateWithoutUserInput[]
      | profileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: profileCreateOrConnectWithoutUserInput | profileCreateOrConnectWithoutUserInput[];
    upsert?: profileUpsertWithWhereUniqueWithoutUserInput | profileUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: profileCreateManyUserInputEnvelope;
    set?: profileWhereUniqueInput | profileWhereUniqueInput[];
    disconnect?: profileWhereUniqueInput | profileWhereUniqueInput[];
    delete?: profileWhereUniqueInput | profileWhereUniqueInput[];
    connect?: profileWhereUniqueInput | profileWhereUniqueInput[];
    update?: profileUpdateWithWhereUniqueWithoutUserInput | profileUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: profileUpdateManyWithWhereWithoutUserInput | profileUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: profileScalarWhereInput | profileScalarWhereInput[];
  };

  export type providerUpdateOneWithoutUserNestedInput = {
    create?: XOR<providerCreateWithoutUserInput, providerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: providerCreateOrConnectWithoutUserInput;
    upsert?: providerUpsertWithoutUserInput;
    disconnect?: providerWhereInput | boolean;
    delete?: providerWhereInput | boolean;
    connect?: providerWhereUniqueInput;
    update?: XOR<
      XOR<providerUpdateToOneWithWhereWithoutUserInput, providerUpdateWithoutUserInput>,
      providerUncheckedUpdateWithoutUserInput
    >;
  };

  export type watchlistUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<watchlistCreateWithoutUserInput, watchlistUncheckedCreateWithoutUserInput>
      | watchlistCreateWithoutUserInput[]
      | watchlistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: watchlistCreateOrConnectWithoutUserInput | watchlistCreateOrConnectWithoutUserInput[];
    upsert?: watchlistUpsertWithWhereUniqueWithoutUserInput | watchlistUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: watchlistCreateManyUserInputEnvelope;
    set?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    disconnect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    delete?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    connect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    update?: watchlistUpdateWithWhereUniqueWithoutUserInput | watchlistUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: watchlistUpdateManyWithWhereWithoutUserInput | watchlistUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: watchlistScalarWhereInput | watchlistScalarWhereInput[];
  };

  export type profileUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
      | profileCreateWithoutUserInput[]
      | profileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: profileCreateOrConnectWithoutUserInput | profileCreateOrConnectWithoutUserInput[];
    upsert?: profileUpsertWithWhereUniqueWithoutUserInput | profileUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: profileCreateManyUserInputEnvelope;
    set?: profileWhereUniqueInput | profileWhereUniqueInput[];
    disconnect?: profileWhereUniqueInput | profileWhereUniqueInput[];
    delete?: profileWhereUniqueInput | profileWhereUniqueInput[];
    connect?: profileWhereUniqueInput | profileWhereUniqueInput[];
    update?: profileUpdateWithWhereUniqueWithoutUserInput | profileUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: profileUpdateManyWithWhereWithoutUserInput | profileUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: profileScalarWhereInput | profileScalarWhereInput[];
  };

  export type watchlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<watchlistCreateWithoutUserInput, watchlistUncheckedCreateWithoutUserInput>
      | watchlistCreateWithoutUserInput[]
      | watchlistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: watchlistCreateOrConnectWithoutUserInput | watchlistCreateOrConnectWithoutUserInput[];
    upsert?: watchlistUpsertWithWhereUniqueWithoutUserInput | watchlistUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: watchlistCreateManyUserInputEnvelope;
    set?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    disconnect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    delete?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    connect?: watchlistWhereUniqueInput | watchlistWhereUniqueInput[];
    update?: watchlistUpdateWithWhereUniqueWithoutUserInput | watchlistUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: watchlistUpdateManyWithWhereWithoutUserInput | watchlistUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: watchlistScalarWhereInput | watchlistScalarWhereInput[];
  };

  export type movieCreateNestedOneWithoutWatchlistInput = {
    create?: XOR<movieCreateWithoutWatchlistInput, movieUncheckedCreateWithoutWatchlistInput>;
    connectOrCreate?: movieCreateOrConnectWithoutWatchlistInput;
    connect?: movieWhereUniqueInput;
  };

  export type seriesCreateNestedOneWithoutWatchlistInput = {
    create?: XOR<seriesCreateWithoutWatchlistInput, seriesUncheckedCreateWithoutWatchlistInput>;
    connectOrCreate?: seriesCreateOrConnectWithoutWatchlistInput;
    connect?: seriesWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutWatchlistInput = {
    create?: XOR<userCreateWithoutWatchlistInput, userUncheckedCreateWithoutWatchlistInput>;
    connectOrCreate?: userCreateOrConnectWithoutWatchlistInput;
    connect?: userWhereUniqueInput;
  };

  export type movieUpdateOneRequiredWithoutWatchlistNestedInput = {
    create?: XOR<movieCreateWithoutWatchlistInput, movieUncheckedCreateWithoutWatchlistInput>;
    connectOrCreate?: movieCreateOrConnectWithoutWatchlistInput;
    upsert?: movieUpsertWithoutWatchlistInput;
    connect?: movieWhereUniqueInput;
    update?: XOR<
      XOR<movieUpdateToOneWithWhereWithoutWatchlistInput, movieUpdateWithoutWatchlistInput>,
      movieUncheckedUpdateWithoutWatchlistInput
    >;
  };

  export type seriesUpdateOneRequiredWithoutWatchlistNestedInput = {
    create?: XOR<seriesCreateWithoutWatchlistInput, seriesUncheckedCreateWithoutWatchlistInput>;
    connectOrCreate?: seriesCreateOrConnectWithoutWatchlistInput;
    upsert?: seriesUpsertWithoutWatchlistInput;
    connect?: seriesWhereUniqueInput;
    update?: XOR<
      XOR<seriesUpdateToOneWithWhereWithoutWatchlistInput, seriesUpdateWithoutWatchlistInput>,
      seriesUncheckedUpdateWithoutWatchlistInput
    >;
  };

  export type userUpdateOneRequiredWithoutWatchlistNestedInput = {
    create?: XOR<userCreateWithoutWatchlistInput, userUncheckedCreateWithoutWatchlistInput>;
    connectOrCreate?: userCreateOrConnectWithoutWatchlistInput;
    upsert?: userUpsertWithoutWatchlistInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutWatchlistInput, userUpdateWithoutWatchlistInput>,
      userUncheckedUpdateWithoutWatchlistInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type providerCreateWithoutMovieInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    series?: seriesCreateNestedManyWithoutProviderInput;
    user?: userCreateNestedManyWithoutProviderInput;
  };

  export type providerUncheckedCreateWithoutMovieInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    series?: seriesUncheckedCreateNestedManyWithoutProviderInput;
    user?: userUncheckedCreateNestedManyWithoutProviderInput;
  };

  export type providerCreateOrConnectWithoutMovieInput = {
    where: providerWhereUniqueInput;
    create: XOR<providerCreateWithoutMovieInput, providerUncheckedCreateWithoutMovieInput>;
  };

  export type watchlistCreateWithoutMovieInput = {
    id?: string;
    added_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    series: seriesCreateNestedOneWithoutWatchlistInput;
    user: userCreateNestedOneWithoutWatchlistInput;
  };

  export type watchlistUncheckedCreateWithoutMovieInput = {
    id?: string;
    user_id: string;
    series_id: string;
    added_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type watchlistCreateOrConnectWithoutMovieInput = {
    where: watchlistWhereUniqueInput;
    create: XOR<watchlistCreateWithoutMovieInput, watchlistUncheckedCreateWithoutMovieInput>;
  };

  export type watchlistCreateManyMovieInputEnvelope = {
    data: watchlistCreateManyMovieInput | watchlistCreateManyMovieInput[];
    skipDuplicates?: boolean;
  };

  export type providerUpsertWithoutMovieInput = {
    update: XOR<providerUpdateWithoutMovieInput, providerUncheckedUpdateWithoutMovieInput>;
    create: XOR<providerCreateWithoutMovieInput, providerUncheckedCreateWithoutMovieInput>;
    where?: providerWhereInput;
  };

  export type providerUpdateToOneWithWhereWithoutMovieInput = {
    where?: providerWhereInput;
    data: XOR<providerUpdateWithoutMovieInput, providerUncheckedUpdateWithoutMovieInput>;
  };

  export type providerUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    series?: seriesUpdateManyWithoutProviderNestedInput;
    user?: userUpdateManyWithoutProviderNestedInput;
  };

  export type providerUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    series?: seriesUncheckedUpdateManyWithoutProviderNestedInput;
    user?: userUncheckedUpdateManyWithoutProviderNestedInput;
  };

  export type watchlistUpsertWithWhereUniqueWithoutMovieInput = {
    where: watchlistWhereUniqueInput;
    update: XOR<watchlistUpdateWithoutMovieInput, watchlistUncheckedUpdateWithoutMovieInput>;
    create: XOR<watchlistCreateWithoutMovieInput, watchlistUncheckedCreateWithoutMovieInput>;
  };

  export type watchlistUpdateWithWhereUniqueWithoutMovieInput = {
    where: watchlistWhereUniqueInput;
    data: XOR<watchlistUpdateWithoutMovieInput, watchlistUncheckedUpdateWithoutMovieInput>;
  };

  export type watchlistUpdateManyWithWhereWithoutMovieInput = {
    where: watchlistScalarWhereInput;
    data: XOR<watchlistUpdateManyMutationInput, watchlistUncheckedUpdateManyWithoutMovieInput>;
  };

  export type watchlistScalarWhereInput = {
    AND?: watchlistScalarWhereInput | watchlistScalarWhereInput[];
    OR?: watchlistScalarWhereInput[];
    NOT?: watchlistScalarWhereInput | watchlistScalarWhereInput[];
    id?: UuidFilter<'watchlist'> | string;
    user_id?: UuidFilter<'watchlist'> | string;
    movie_id?: UuidFilter<'watchlist'> | string;
    series_id?: UuidFilter<'watchlist'> | string;
    added_at?: DateTimeFilter<'watchlist'> | Date | string;
    created_at?: DateTimeFilter<'watchlist'> | Date | string;
    updated_at?: DateTimeFilter<'watchlist'> | Date | string;
  };

  export type userCreateWithoutProfileInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    provider?: providerCreateNestedOneWithoutUserInput;
    watchlist?: watchlistCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutProfileInput = {
    id?: string;
    email: string;
    provider_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    watchlist?: watchlistUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutProfileInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput>;
  };

  export type userUpsertWithoutProfileInput = {
    update: XOR<userUpdateWithoutProfileInput, userUncheckedUpdateWithoutProfileInput>;
    create: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutProfileInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutProfileInput, userUncheckedUpdateWithoutProfileInput>;
  };

  export type userUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: providerUpdateOneWithoutUserNestedInput;
    watchlist?: watchlistUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    watchlist?: watchlistUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type movieCreateWithoutProviderInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    duration?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    watchlist?: watchlistCreateNestedManyWithoutMovieInput;
  };

  export type movieUncheckedCreateWithoutProviderInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    duration?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    watchlist?: watchlistUncheckedCreateNestedManyWithoutMovieInput;
  };

  export type movieCreateOrConnectWithoutProviderInput = {
    where: movieWhereUniqueInput;
    create: XOR<movieCreateWithoutProviderInput, movieUncheckedCreateWithoutProviderInput>;
  };

  export type movieCreateManyProviderInputEnvelope = {
    data: movieCreateManyProviderInput | movieCreateManyProviderInput[];
    skipDuplicates?: boolean;
  };

  export type seriesCreateWithoutProviderInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    seasons?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    watchlist?: watchlistCreateNestedManyWithoutSeriesInput;
  };

  export type seriesUncheckedCreateWithoutProviderInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    seasons?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    watchlist?: watchlistUncheckedCreateNestedManyWithoutSeriesInput;
  };

  export type seriesCreateOrConnectWithoutProviderInput = {
    where: seriesWhereUniqueInput;
    create: XOR<seriesCreateWithoutProviderInput, seriesUncheckedCreateWithoutProviderInput>;
  };

  export type seriesCreateManyProviderInputEnvelope = {
    data: seriesCreateManyProviderInput | seriesCreateManyProviderInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutProviderInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    profile?: profileCreateNestedManyWithoutUserInput;
    watchlist?: watchlistCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutProviderInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    profile?: profileUncheckedCreateNestedManyWithoutUserInput;
    watchlist?: watchlistUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutProviderInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutProviderInput, userUncheckedCreateWithoutProviderInput>;
  };

  export type userCreateManyProviderInputEnvelope = {
    data: userCreateManyProviderInput | userCreateManyProviderInput[];
    skipDuplicates?: boolean;
  };

  export type movieUpsertWithWhereUniqueWithoutProviderInput = {
    where: movieWhereUniqueInput;
    update: XOR<movieUpdateWithoutProviderInput, movieUncheckedUpdateWithoutProviderInput>;
    create: XOR<movieCreateWithoutProviderInput, movieUncheckedCreateWithoutProviderInput>;
  };

  export type movieUpdateWithWhereUniqueWithoutProviderInput = {
    where: movieWhereUniqueInput;
    data: XOR<movieUpdateWithoutProviderInput, movieUncheckedUpdateWithoutProviderInput>;
  };

  export type movieUpdateManyWithWhereWithoutProviderInput = {
    where: movieScalarWhereInput;
    data: XOR<movieUpdateManyMutationInput, movieUncheckedUpdateManyWithoutProviderInput>;
  };

  export type movieScalarWhereInput = {
    AND?: movieScalarWhereInput | movieScalarWhereInput[];
    OR?: movieScalarWhereInput[];
    NOT?: movieScalarWhereInput | movieScalarWhereInput[];
    id?: UuidFilter<'movie'> | string;
    title?: StringFilter<'movie'> | string;
    genre?: StringFilter<'movie'> | string;
    release_date?: DateTimeFilter<'movie'> | Date | string;
    rating?: IntNullableFilter<'movie'> | number | null;
    duration?: IntNullableFilter<'movie'> | number | null;
    provider_id?: UuidFilter<'movie'> | string;
    created_at?: DateTimeFilter<'movie'> | Date | string;
    updated_at?: DateTimeFilter<'movie'> | Date | string;
  };

  export type seriesUpsertWithWhereUniqueWithoutProviderInput = {
    where: seriesWhereUniqueInput;
    update: XOR<seriesUpdateWithoutProviderInput, seriesUncheckedUpdateWithoutProviderInput>;
    create: XOR<seriesCreateWithoutProviderInput, seriesUncheckedCreateWithoutProviderInput>;
  };

  export type seriesUpdateWithWhereUniqueWithoutProviderInput = {
    where: seriesWhereUniqueInput;
    data: XOR<seriesUpdateWithoutProviderInput, seriesUncheckedUpdateWithoutProviderInput>;
  };

  export type seriesUpdateManyWithWhereWithoutProviderInput = {
    where: seriesScalarWhereInput;
    data: XOR<seriesUpdateManyMutationInput, seriesUncheckedUpdateManyWithoutProviderInput>;
  };

  export type seriesScalarWhereInput = {
    AND?: seriesScalarWhereInput | seriesScalarWhereInput[];
    OR?: seriesScalarWhereInput[];
    NOT?: seriesScalarWhereInput | seriesScalarWhereInput[];
    id?: UuidFilter<'series'> | string;
    title?: StringFilter<'series'> | string;
    genre?: StringFilter<'series'> | string;
    release_date?: DateTimeFilter<'series'> | Date | string;
    rating?: IntNullableFilter<'series'> | number | null;
    seasons?: IntNullableFilter<'series'> | number | null;
    provider_id?: UuidFilter<'series'> | string;
    created_at?: DateTimeFilter<'series'> | Date | string;
    updated_at?: DateTimeFilter<'series'> | Date | string;
  };

  export type userUpsertWithWhereUniqueWithoutProviderInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutProviderInput, userUncheckedUpdateWithoutProviderInput>;
    create: XOR<userCreateWithoutProviderInput, userUncheckedCreateWithoutProviderInput>;
  };

  export type userUpdateWithWhereUniqueWithoutProviderInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutProviderInput, userUncheckedUpdateWithoutProviderInput>;
  };

  export type userUpdateManyWithWhereWithoutProviderInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutProviderInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    provider_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type providerCreateWithoutSeriesInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    movie?: movieCreateNestedManyWithoutProviderInput;
    user?: userCreateNestedManyWithoutProviderInput;
  };

  export type providerUncheckedCreateWithoutSeriesInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    movie?: movieUncheckedCreateNestedManyWithoutProviderInput;
    user?: userUncheckedCreateNestedManyWithoutProviderInput;
  };

  export type providerCreateOrConnectWithoutSeriesInput = {
    where: providerWhereUniqueInput;
    create: XOR<providerCreateWithoutSeriesInput, providerUncheckedCreateWithoutSeriesInput>;
  };

  export type watchlistCreateWithoutSeriesInput = {
    id?: string;
    added_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    movie: movieCreateNestedOneWithoutWatchlistInput;
    user: userCreateNestedOneWithoutWatchlistInput;
  };

  export type watchlistUncheckedCreateWithoutSeriesInput = {
    id?: string;
    user_id: string;
    movie_id: string;
    added_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type watchlistCreateOrConnectWithoutSeriesInput = {
    where: watchlistWhereUniqueInput;
    create: XOR<watchlistCreateWithoutSeriesInput, watchlistUncheckedCreateWithoutSeriesInput>;
  };

  export type watchlistCreateManySeriesInputEnvelope = {
    data: watchlistCreateManySeriesInput | watchlistCreateManySeriesInput[];
    skipDuplicates?: boolean;
  };

  export type providerUpsertWithoutSeriesInput = {
    update: XOR<providerUpdateWithoutSeriesInput, providerUncheckedUpdateWithoutSeriesInput>;
    create: XOR<providerCreateWithoutSeriesInput, providerUncheckedCreateWithoutSeriesInput>;
    where?: providerWhereInput;
  };

  export type providerUpdateToOneWithWhereWithoutSeriesInput = {
    where?: providerWhereInput;
    data: XOR<providerUpdateWithoutSeriesInput, providerUncheckedUpdateWithoutSeriesInput>;
  };

  export type providerUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: movieUpdateManyWithoutProviderNestedInput;
    user?: userUpdateManyWithoutProviderNestedInput;
  };

  export type providerUncheckedUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: movieUncheckedUpdateManyWithoutProviderNestedInput;
    user?: userUncheckedUpdateManyWithoutProviderNestedInput;
  };

  export type watchlistUpsertWithWhereUniqueWithoutSeriesInput = {
    where: watchlistWhereUniqueInput;
    update: XOR<watchlistUpdateWithoutSeriesInput, watchlistUncheckedUpdateWithoutSeriesInput>;
    create: XOR<watchlistCreateWithoutSeriesInput, watchlistUncheckedCreateWithoutSeriesInput>;
  };

  export type watchlistUpdateWithWhereUniqueWithoutSeriesInput = {
    where: watchlistWhereUniqueInput;
    data: XOR<watchlistUpdateWithoutSeriesInput, watchlistUncheckedUpdateWithoutSeriesInput>;
  };

  export type watchlistUpdateManyWithWhereWithoutSeriesInput = {
    where: watchlistScalarWhereInput;
    data: XOR<watchlistUpdateManyMutationInput, watchlistUncheckedUpdateManyWithoutSeriesInput>;
  };

  export type profileCreateWithoutUserInput = {
    id?: string;
    first_name?: string | null;
    last_name?: string | null;
    birth_date?: Date | string | null;
    gender?: string | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type profileUncheckedCreateWithoutUserInput = {
    id?: string;
    first_name?: string | null;
    last_name?: string | null;
    birth_date?: Date | string | null;
    gender?: string | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type profileCreateOrConnectWithoutUserInput = {
    where: profileWhereUniqueInput;
    create: XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>;
  };

  export type profileCreateManyUserInputEnvelope = {
    data: profileCreateManyUserInput | profileCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type providerCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    movie?: movieCreateNestedManyWithoutProviderInput;
    series?: seriesCreateNestedManyWithoutProviderInput;
  };

  export type providerUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    movie?: movieUncheckedCreateNestedManyWithoutProviderInput;
    series?: seriesUncheckedCreateNestedManyWithoutProviderInput;
  };

  export type providerCreateOrConnectWithoutUserInput = {
    where: providerWhereUniqueInput;
    create: XOR<providerCreateWithoutUserInput, providerUncheckedCreateWithoutUserInput>;
  };

  export type watchlistCreateWithoutUserInput = {
    id?: string;
    added_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    movie: movieCreateNestedOneWithoutWatchlistInput;
    series: seriesCreateNestedOneWithoutWatchlistInput;
  };

  export type watchlistUncheckedCreateWithoutUserInput = {
    id?: string;
    movie_id: string;
    series_id: string;
    added_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type watchlistCreateOrConnectWithoutUserInput = {
    where: watchlistWhereUniqueInput;
    create: XOR<watchlistCreateWithoutUserInput, watchlistUncheckedCreateWithoutUserInput>;
  };

  export type watchlistCreateManyUserInputEnvelope = {
    data: watchlistCreateManyUserInput | watchlistCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type profileUpsertWithWhereUniqueWithoutUserInput = {
    where: profileWhereUniqueInput;
    update: XOR<profileUpdateWithoutUserInput, profileUncheckedUpdateWithoutUserInput>;
    create: XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>;
  };

  export type profileUpdateWithWhereUniqueWithoutUserInput = {
    where: profileWhereUniqueInput;
    data: XOR<profileUpdateWithoutUserInput, profileUncheckedUpdateWithoutUserInput>;
  };

  export type profileUpdateManyWithWhereWithoutUserInput = {
    where: profileScalarWhereInput;
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyWithoutUserInput>;
  };

  export type profileScalarWhereInput = {
    AND?: profileScalarWhereInput | profileScalarWhereInput[];
    OR?: profileScalarWhereInput[];
    NOT?: profileScalarWhereInput | profileScalarWhereInput[];
    id?: UuidFilter<'profile'> | string;
    user_id?: UuidFilter<'profile'> | string;
    first_name?: StringNullableFilter<'profile'> | string | null;
    last_name?: StringNullableFilter<'profile'> | string | null;
    birth_date?: DateTimeNullableFilter<'profile'> | Date | string | null;
    gender?: StringNullableFilter<'profile'> | string | null;
    location?: StringNullableFilter<'profile'> | string | null;
    created_at?: DateTimeFilter<'profile'> | Date | string;
    updated_at?: DateTimeFilter<'profile'> | Date | string;
  };

  export type providerUpsertWithoutUserInput = {
    update: XOR<providerUpdateWithoutUserInput, providerUncheckedUpdateWithoutUserInput>;
    create: XOR<providerCreateWithoutUserInput, providerUncheckedCreateWithoutUserInput>;
    where?: providerWhereInput;
  };

  export type providerUpdateToOneWithWhereWithoutUserInput = {
    where?: providerWhereInput;
    data: XOR<providerUpdateWithoutUserInput, providerUncheckedUpdateWithoutUserInput>;
  };

  export type providerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: movieUpdateManyWithoutProviderNestedInput;
    series?: seriesUpdateManyWithoutProviderNestedInput;
  };

  export type providerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: movieUncheckedUpdateManyWithoutProviderNestedInput;
    series?: seriesUncheckedUpdateManyWithoutProviderNestedInput;
  };

  export type watchlistUpsertWithWhereUniqueWithoutUserInput = {
    where: watchlistWhereUniqueInput;
    update: XOR<watchlistUpdateWithoutUserInput, watchlistUncheckedUpdateWithoutUserInput>;
    create: XOR<watchlistCreateWithoutUserInput, watchlistUncheckedCreateWithoutUserInput>;
  };

  export type watchlistUpdateWithWhereUniqueWithoutUserInput = {
    where: watchlistWhereUniqueInput;
    data: XOR<watchlistUpdateWithoutUserInput, watchlistUncheckedUpdateWithoutUserInput>;
  };

  export type watchlistUpdateManyWithWhereWithoutUserInput = {
    where: watchlistScalarWhereInput;
    data: XOR<watchlistUpdateManyMutationInput, watchlistUncheckedUpdateManyWithoutUserInput>;
  };

  export type movieCreateWithoutWatchlistInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    duration?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    provider: providerCreateNestedOneWithoutMovieInput;
  };

  export type movieUncheckedCreateWithoutWatchlistInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    duration?: number | null;
    provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type movieCreateOrConnectWithoutWatchlistInput = {
    where: movieWhereUniqueInput;
    create: XOR<movieCreateWithoutWatchlistInput, movieUncheckedCreateWithoutWatchlistInput>;
  };

  export type seriesCreateWithoutWatchlistInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    seasons?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    provider: providerCreateNestedOneWithoutSeriesInput;
  };

  export type seriesUncheckedCreateWithoutWatchlistInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    seasons?: number | null;
    provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type seriesCreateOrConnectWithoutWatchlistInput = {
    where: seriesWhereUniqueInput;
    create: XOR<seriesCreateWithoutWatchlistInput, seriesUncheckedCreateWithoutWatchlistInput>;
  };

  export type userCreateWithoutWatchlistInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    profile?: profileCreateNestedManyWithoutUserInput;
    provider?: providerCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutWatchlistInput = {
    id?: string;
    email: string;
    provider_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    profile?: profileUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutWatchlistInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutWatchlistInput, userUncheckedCreateWithoutWatchlistInput>;
  };

  export type movieUpsertWithoutWatchlistInput = {
    update: XOR<movieUpdateWithoutWatchlistInput, movieUncheckedUpdateWithoutWatchlistInput>;
    create: XOR<movieCreateWithoutWatchlistInput, movieUncheckedCreateWithoutWatchlistInput>;
    where?: movieWhereInput;
  };

  export type movieUpdateToOneWithWhereWithoutWatchlistInput = {
    where?: movieWhereInput;
    data: XOR<movieUpdateWithoutWatchlistInput, movieUncheckedUpdateWithoutWatchlistInput>;
  };

  export type movieUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: providerUpdateOneRequiredWithoutMovieNestedInput;
  };

  export type movieUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type seriesUpsertWithoutWatchlistInput = {
    update: XOR<seriesUpdateWithoutWatchlistInput, seriesUncheckedUpdateWithoutWatchlistInput>;
    create: XOR<seriesCreateWithoutWatchlistInput, seriesUncheckedCreateWithoutWatchlistInput>;
    where?: seriesWhereInput;
  };

  export type seriesUpdateToOneWithWhereWithoutWatchlistInput = {
    where?: seriesWhereInput;
    data: XOR<seriesUpdateWithoutWatchlistInput, seriesUncheckedUpdateWithoutWatchlistInput>;
  };

  export type seriesUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    seasons?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    provider?: providerUpdateOneRequiredWithoutSeriesNestedInput;
  };

  export type seriesUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    seasons?: NullableIntFieldUpdateOperationsInput | number | null;
    provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutWatchlistInput = {
    update: XOR<userUpdateWithoutWatchlistInput, userUncheckedUpdateWithoutWatchlistInput>;
    create: XOR<userCreateWithoutWatchlistInput, userUncheckedCreateWithoutWatchlistInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutWatchlistInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutWatchlistInput, userUncheckedUpdateWithoutWatchlistInput>;
  };

  export type userUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: profileUpdateManyWithoutUserNestedInput;
    provider?: providerUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: profileUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type watchlistCreateManyMovieInput = {
    id?: string;
    user_id: string;
    series_id: string;
    added_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type watchlistUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    series?: seriesUpdateOneRequiredWithoutWatchlistNestedInput;
    user?: userUpdateOneRequiredWithoutWatchlistNestedInput;
  };

  export type watchlistUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    series_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type watchlistUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    series_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type movieCreateManyProviderInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    duration?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type seriesCreateManyProviderInput = {
    id?: string;
    title: string;
    genre: string;
    release_date: Date | string;
    rating?: number | null;
    seasons?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateManyProviderInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type movieUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    watchlist?: watchlistUpdateManyWithoutMovieNestedInput;
  };

  export type movieUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    watchlist?: watchlistUncheckedUpdateManyWithoutMovieNestedInput;
  };

  export type movieUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type seriesUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    seasons?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    watchlist?: watchlistUpdateManyWithoutSeriesNestedInput;
  };

  export type seriesUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    seasons?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    watchlist?: watchlistUncheckedUpdateManyWithoutSeriesNestedInput;
  };

  export type seriesUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    seasons?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: profileUpdateManyWithoutUserNestedInput;
    watchlist?: watchlistUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: profileUncheckedUpdateManyWithoutUserNestedInput;
    watchlist?: watchlistUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type watchlistCreateManySeriesInput = {
    id?: string;
    user_id: string;
    movie_id: string;
    added_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type watchlistUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: movieUpdateOneRequiredWithoutWatchlistNestedInput;
    user?: userUpdateOneRequiredWithoutWatchlistNestedInput;
  };

  export type watchlistUncheckedUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type watchlistUncheckedUpdateManyWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type profileCreateManyUserInput = {
    id?: string;
    first_name?: string | null;
    last_name?: string | null;
    birth_date?: Date | string | null;
    gender?: string | null;
    location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type watchlistCreateManyUserInput = {
    id?: string;
    movie_id: string;
    series_id: string;
    added_at: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type profileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type profileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type profileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type watchlistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: movieUpdateOneRequiredWithoutWatchlistNestedInput;
    series?: seriesUpdateOneRequiredWithoutWatchlistNestedInput;
  };

  export type watchlistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    series_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type watchlistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    series_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use MovieCountOutputTypeDefaultArgs instead
   */
  export type MovieCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    MovieCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ProviderCountOutputTypeDefaultArgs instead
   */
  export type ProviderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ProviderCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use SeriesCountOutputTypeDefaultArgs instead
   */
  export type SeriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    SeriesCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use movieDefaultArgs instead
   */
  export type movieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = movieDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use profileDefaultArgs instead
   */
  export type profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    profileDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use providerDefaultArgs instead
   */
  export type providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    providerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use seriesDefaultArgs instead
   */
  export type seriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    seriesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use subscriptionDefaultArgs instead
   */
  export type subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    subscriptionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use watchlistDefaultArgs instead
   */
  export type watchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    watchlistDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
