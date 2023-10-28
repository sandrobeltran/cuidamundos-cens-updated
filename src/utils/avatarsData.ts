const AVATARS_DATA = [
    "https://ucarecdn.com/a12ad6de-49f0-463c-af77-13723cd9e48f/1.png",
    "https://ucarecdn.com/f5fe2117-c0f2-4473-ba0b-dbd838ebe037/2.png",
    "https://ucarecdn.com/16595ce8-ec35-4318-bd84-0fe2af124a92/3.png",
    "https://ucarecdn.com/82649811-a825-4bad-9b80-f8a1b792a25f/4.png",
    "https://ucarecdn.com/c643f037-80b9-4c9c-9ab8-1ba00ad364d7/5.png",
    "https://ucarecdn.com/795f0792-9f08-42e4-bd7e-b90900c95848/6.png",
    "https://ucarecdn.com/3dc375fb-5ce5-4ffd-a045-c9f8419431fd/7.png",
    "https://ucarecdn.com/b75d3950-7301-4f24-851c-bb1580b834c4/8.png",
];

export function getRandomAvatar() {
    const random = Math.floor(Math.random() * AVATARS_DATA.length)
    return AVATARS_DATA[random]
}

export default AVATARS_DATA