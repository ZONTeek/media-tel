export type User = {
    id: number,
    fio: string,
    cityId: number
}

export type City = {
    id: number,
    name: string
}

export type EditFormStateType = {
        id: number,
        name: string,
        city: string
}