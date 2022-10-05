// MappedType
// type userDetail = {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//     address: string
// }
// type CreateOptional<Type> = {
//     [Property in keyof Type]? : Type[Property]
// }
// type CreateRequired<Type> = {
//     [Property in keyof Type]-? : Type[Property]
// }
// type CreateReadOnly<Type> = {
//     readonly [Property in keyof Type] : Type[Property]
// }
// type ResetType<Type> = {
//     -readonly [Property in keyof Type]-? : Type[Property]
// }
// type Getters<Type> = {
//      [Property in keyof Type as `get${Capitalize<string & Property>}`] : () => Type[Property]
// }
// type EditUser = CreateOptional<userDetail>
// type RequiredUser = CreateRequired<EditUser>
// type ReadOnlyUser = CreateReadOnly<EditUser>
// type UserType = ResetType<ReadOnlyUser>
// type UserGetter = Getters<userDetail>
