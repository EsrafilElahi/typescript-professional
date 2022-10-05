class Song{
    constructor(public title: string, public duration: number){}
}
class PlayList {
    constructor(public name: string, public songs: Song[]) {}
}

function isSong(item: any): boolean{
    return item instanceof Song
}

function getItemName(item: Song | PlayList): string {
    if(item instanceof Song){
        return item.title
    }else if(item instanceof PlayList){
        return item.name
    }else {
        return "Error"
    }
}
const song = new Song("haideh", 4.5);
const playList = new PlayList("Golchin 2", [song]);
console.log(isSong(song));
console.log(getItemName(song));
console.log(getItemName(playList));
