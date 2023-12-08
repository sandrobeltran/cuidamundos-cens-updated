const AVATARS_DATA = {
    felix: "/img/avatars/felix.png",
    purita: "/img/avatars/purita.png",
    jirol: "/img/avatars/jirol.png",
    "felix-cartoon": "/img/avatars/felix-cartoon.png",
    "purita-cartoon": "/img/avatars/purita-cartoon.png",
    "felix-badget": "/img/avatars/felix-badget.png",
    "purita-badget": "/img/avatars/purita-badget.png",
    "jirol-badget": "/img/avatars/jirol-badget.png"
}

export function getRandomAvatar() {
    const keys = Object.keys(AVATARS_DATA)
    const random = Math.floor(Math.random() * keys.length)
    const key = keys[random]
    return (AVATARS_DATA[key as keyof typeof AVATARS_DATA])
}

export default AVATARS_DATA