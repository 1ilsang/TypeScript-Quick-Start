interface Cat {
    leg: number;
}

interface Bird {
    wing: number;
}

let birdCat: Cat & Bird = {leg: 4, wing: 5}