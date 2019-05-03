import ModelChant from '../model/model_chant.json';

const audio = new Audio();

class ControlChant {
    constructor() {
        this.audio = audio;
        this.URL_SHEET = 'http://maria.catholic.or.kr/sungga/viewImage.asp?ctxtId=2012040';
        this.URL_MP3 = 'http://maria.catholic.or.kr/musicfiles/mp3/2004090';
    }

    chants(date) {
        let chantYear = String(date.getFullYear()).padStart(4, 0);
        let chantMonth = String(date.getMonth() + 1).padStart(2, 0);
        let chantDay = String(date.getDate()).padStart(2, 0);
        let chantDate = `${chantYear}-${chantMonth}-${chantDay}`;
        let result = [];
        let chants = ModelChant[chantDate];
        if (chants) {
            result.push(chants.입당);
            result.push(chants.봉헌);
            result.push(chants.성체);
            result.push(chants.파견);
        } else {
            result.push(null);
            result.push(null);
            result.push(null);
            result.push(null);
        }
        return result;
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