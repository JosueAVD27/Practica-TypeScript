
let skills = ['Bash', 'Counter', 'Healing', true, 123]
const skills2: string[] = ['Bash', 'Counter', 'Healing']

interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string
}

const strider:Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash','Counter']
}
strider.hometown = 'Riderbell'

console.table({
    strider,
    skills,
    skills2
})

export{}