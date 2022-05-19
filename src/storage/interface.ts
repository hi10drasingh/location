export default interface IStore {
    get(key: string): string | null
    set(key: string, val: string, timeInDays: number): void
}
