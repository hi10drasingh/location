type Get = (key: string) => Nullable<string>
type Set = (key: string, val: string, timeInDays: number) => void

interface IStore {
    get: Get
    set: Set
}

export type { Get as IStoreGet, Set as IStoreSet, IStore }
