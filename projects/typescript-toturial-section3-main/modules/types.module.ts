export type userDetail = {
    id: number;
    name: string;
    age: number;
    email: string;
    address: string
}
export type CreateOptional<Type> = {
    [Property in keyof Type]? : Type[Property]
}
export type CreateRequired<Type> = {
    [Property in keyof Type]-? : Type[Property]
}
export type CreateReadOnly<Type> = {
    readonly [Property in keyof Type] : Type[Property]
}
export type ResetType<Type> = {
    -readonly [Property in keyof Type]-? : Type[Property]
}
export type Getters<Type> = {
     [Property in keyof Type as `get${Capitalize<string & Property>}`] : () => Type[Property]
}
export type EditUser = CreateOptional<userDetail>
export type RequiredUser = CreateRequired<EditUser>
export type ReadOnlyUser = CreateReadOnly<EditUser>
export type UserType = ResetType<ReadOnlyUser>
export type UserGetter = Getters<userDetail>
