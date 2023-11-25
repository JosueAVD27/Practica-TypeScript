interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details {
    author: string,
    year: number
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Josue",
        year: 2000
    }
}

const { song: anotherSong, details: anotherDetails } = audioPlayer
const { author: anotherAuthor } = anotherDetails

// console.log('Song: ', anotherSong)
// console.log('Author: ', anotherAuthor)


const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta']

console.log('Personaje 3: ', trunks)

export { }