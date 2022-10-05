type StringOrNever<T> = T extends string ? string : never;
let str: StringOrNever<number[]>

type NonNull<T> = T extends null | undefined ? never: T
type Book = {
    title: string;
    pages: number
}
type NonNullBook = NonNull<Book>;