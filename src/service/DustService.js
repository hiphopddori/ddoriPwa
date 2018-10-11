import axios from 'axios'

export default{

    getDustInfo:()=>{
        return axios.get('http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=종로구&dataTerm=month&pageNo=1&numOfRows=10&ServiceKey=pjX9YzpfksnI8xSUl5ErDufOtewcCtBUO%2BQpUPRUXMcr9NyqjdxJo7tp0zAPBfxMN39j%2FIqrDe4Xx1nuR9REiw%3D%3D&ver=1.3&_returnType=json');  
    }

}