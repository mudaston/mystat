export const myToUpperCase = (
    string: string,
    from: number,
    to?: number
): string => {
    const upper = string.substring(from, to || string.length).toUpperCase()
    let lower = ''
    if (to) lower = string.substring(to)

    return upper + lower
}

export const pxToRem = (px: number) => {
    const rootSize = 16

    return (px / rootSize).toFixed(2)
}
