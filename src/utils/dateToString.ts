export default function dateToString(stringDate: string): string {
    const date = new Date(stringDate)

    let string = `${(date.getDate()).toString().padStart(2, "00")}/${(date.getMonth() + 1).toString().padStart(2, "00")}/${date.getFullYear()}`

    return string
}

export function getRemainingTime(deadline: string): {
    d: number,
    h: number,
    m: number,
    message: string
} {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const today = new Date()

    const dead = new Date(deadline)


    const remainingTime = dead.getTime() - today.getTime()

    let days = Math.floor(remainingTime / 86400000);
    let hours = Math.floor((remainingTime % 86400000) / 3600000)
    let minutes = Math.round(((remainingTime % 86400000) % 3600000) / 60000)

    let message = "";

    if (remainingTime < 0) {
        message += "Atrasada "
    } else {
        message += "Faltan "
    }
    if (days) {
        message += Math.abs(days) + "d "
    }

    if (hours) {
        message += Math.abs(hours) + "h "
    }

    if (minutes) {
        message += Math.abs(minutes) + "m"
    }

    return {
        d: days,
        h: hours,
        m: minutes,
        message
    }
}