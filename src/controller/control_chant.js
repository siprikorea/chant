import ModelChant from '../model/model_chant.json';
import { format, parse } from 'date-fns';

const audio = new Audio();

class ControlChant {
    constructor() {
        this.audio = audio;
        this.URL_SHEET = 'http://maria.catholic.or.kr/files/mp3/sungga/img/2012/2012040';
        this.URL_MP3 = 'http://maria.catholic.or.kr/musicfiles/mp3/2004090';
    }

    getDate() {
        // Read missa date from local storage
        let dateString = localStorage.getItem("MISSA_DATE");
        // Paser date string to date
        return dateString ? parse(dateString, 'yyyy-MM-dd', new Date()) : new Date();
    }

    setDate(date) {
        // Set missa date to local storage
        localStorage.setItem("MISSA_DATE", format(date, 'yyyy-MM-dd'));
    }

    getChants(date) {
        let chantDate = format(date, 'yyyy-MM-dd');
        return ModelChant[chantDate];
    }

    setChants(date, chants) {
    }

    getSheetSrc(number) {
        if (!number) {
            return '';
        }
        const url = this.URL_SHEET + number.padStart(3, '0') + '.jpg';
        return url;
    }

    play(number) {
        if (!number) {
            return;
        }
        const url = this.URL_MP3 + number.padStart(3, '0') + '.mp3';
        this.audio.src = url;
        this.audio.play();
    }

    stop() {
        this.audio.src = '';
    }
}

export default ControlChant;