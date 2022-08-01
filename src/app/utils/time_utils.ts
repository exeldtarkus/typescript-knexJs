import moment from "moment";

const now = (mode: string) => {
    const m = moment()

    switch (mode) {
        case 'millisecond':
            return m.valueOf().toString()
        case 'mysql':
            return m.utc().format('YYYY-MM-DD HH:mm:ss')
        case 'response':
            return m.utc().format('YYYY-MM-DDTHH:mm:ssZZ')
    }

    return m.valueOf().toString()
}

export {
    now,
}