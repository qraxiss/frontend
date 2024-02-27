export function params(entries: any) {
    let paramsObject: Record<string, string> = {}

    for (let [param, value] of entries) {
        paramsObject[param] = value
    }

    return paramsObject
}
