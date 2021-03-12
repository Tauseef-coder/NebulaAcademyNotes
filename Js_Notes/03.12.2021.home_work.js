function elevatorDistance(array) {
    let temp = [];

    let sum =0; temp = 0;

        for(let i=0;i<array.length-1;i++){

            temp = array[i] - array[i+1];
            temp = temp>0?temp:(-temp);
        // console.log('temp',temp);
            sum = sum + temp;
        
    }
    // console.log(array);
    return sum;
}