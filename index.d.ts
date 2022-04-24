// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/52873#issuecomment-955022625
declare namespace React {
    export type NoConstructor<T extends Function> = T extends new (...args: unknown[]) => unknown
        ? never
        : T;

    declare function useCallback<T extends Function>(
        callback: NoConstructor<T>,
        deps: DependencyList,
    ): T;
}

// https://stackoverflow.com/a/56745484/3703960
interface ReadonlyArray<T> {
    includes<U>(x: U & (T & U extends never ? never : unknown)): boolean;
}
