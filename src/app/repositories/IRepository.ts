interface IRepository {
    findAll?: () => any,
    findOne?: () => any,
    create?: () => any,
    update?: () => any,
}

interface IRepositoryParam {
    q?: {
        id?: number
    },
    t?: any,
}

export {
    IRepository,
    IRepositoryParam
}