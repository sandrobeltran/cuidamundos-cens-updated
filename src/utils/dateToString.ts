export default function dateToString(stringDate: string): string {
    const date = new Date(stringDate)

    let string = `${(date.getDate() + 1).toString().padStart(2, "00")}/${(date.getMonth() + 1).toString().padStart(2, "00")}/${date.getFullYear()}`

    return string
}