    module.exports = function toReadable (number) {
        let numbersArr = ['','one','two','three','four','five','six','seven','eight',
        'nine', 'ten','eleven','twelve','thirteen','fourteen','fifteen',
        'sixteen','seventeen','eighteen','nineteen','twenty']
        let arrOfTens= ['','','twenty','thirty',
        'forty','fifty','sixty','seventy','eighty','ninety','one hundred']
        let res='';
      if(number === 0){
        return res= 'zero';
      }
      if (number<=20){
        res = numbersArr[number]
      }
      if (number<=100 && number>20){
        res = `${arrOfTens[Math.trunc(number/10)]} ${numbersArr[number%10]}`
      }
      if(number>100 && (number%100<20)){
        res = `${numbersArr[Math.trunc(number/100)]} hundred ${numbersArr[number%100]}`
      }
       if(number>100 && (number%100>=20)){
         res = `${numbersArr[Math.trunc(number/100)]} hundred ${arrOfTens[Math.trunc((number%100)/10)]} ${numbersArr[number%10]}`
       }
       return res.trim()
}
