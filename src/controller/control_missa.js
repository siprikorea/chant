class ControlMissa {
    async getData(year, month, day) {
        let url = `http://maria.catholic.or.kr/mi_pr/missa/missa.asp?menu=missa&gomonth=${year}-${month}-${day}&missatype=DA`;
        let response = await fetch(url, { mode: 'no-cors' });
        return response;
    }
}

export default ControlMissa;