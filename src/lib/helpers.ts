export function areObjectsEqual(obj1: any, obj2: any) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true
}

export function check24h(time: number) {
    let now = new Date()
    return now.valueOf() - time > 1000 * 60 * 60 * 24
}

export function check10s(time: Date) {
    let now = new Date()

    return now.valueOf() - time.valueOf() > 1000 * 10
}
