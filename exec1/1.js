class Test1{

    //decides what should be printed 
    printer(num) {
        switch(true){

            case(num%3 == 0 && num%5 == 0):
                return 'Visual Nuts';

            case(num%3 == 0):
                return 'Visual';

            case(num%5 == 0):
                return 'Nuts';

            default:
                return num;
        }
    }

    //loops the entire array of numbers
    looper(startNumber, numberOfItens){

        let numArray = Array.from(Array(numberOfItens).keys(), x => x+startNumber);

        for (let num of numArray) { 
            console.log(this.printer(num));
        }

        return numArray;
    }
}

 
var instance = new Test1();
instance.looper(1,100);


module.exports = Test1;