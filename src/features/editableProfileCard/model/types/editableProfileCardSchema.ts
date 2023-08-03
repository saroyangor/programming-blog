import { Profile } from '@/entities/Profile';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    INCORRECT_AVATAR = 'INCORRECT_AVATAR',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
