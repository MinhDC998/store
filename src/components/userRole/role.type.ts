export enum ERole {
    ADMINISTRATOR = 'Administrator',
    MANAGER = 'Manager',
    GUEST = 'Guest'
}

export interface IRole {
    type: ERole
    createdAt: number
}