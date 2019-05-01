const audio = new Audio();

class ControlChant {
    constructor() {
        this.audio = audio;
        this.URL_SHEET = 'http://maria.catholic.or.kr/sungga/viewImage.asp?ctxtId=2012040';
        this.URL_MP3 = 'http://maria.catholic.or.kr/musicfiles/mp3/2004090';
    }

    sheet(number) {
        const url = this.URL_SHEET + number.padStart(3, '0');
        return url;
    }

    play(number) {
        const url = this.URL_MP3 + number.padStart(3, '0') + '.mp3';
        this.audio.src = url;
        this.audio.play();
    }

    stop() {
        this.audio.src = '';
    }
}

export default ControlChant;