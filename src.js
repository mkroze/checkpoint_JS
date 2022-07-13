const arr1=[3,1,7,9];
const arr2=[2,4,1,9,3];
const arrOfCommons = [];
const arrOfDiffs = []; 
function calcul1 (arr1,arr2){
    for (element1 of arr1){
        for (element2 of arr2){
            if(element1==element2){
                arrOfCommons.push(element1);
            }
        }
    }
    const arr3 = arr1.concat(arr2);
    const sum0=0;
    const sum = arr3.reduce(
        (previousValue,currentValue)=>previousValue+currentValue,sum0
        );
    
    const summ0=0;
    const summ = arrOfCommons.reduce(
        (previousValue,currentValue)=>previousValue+currentValue,summ0
        );
    console.log(sum-2*summ);
    
    return sum-2*summ;
}

//calcul1 (arr1,arr2);
function calcul2 (arr1,arr2){
    if(arr1.length<arr2.length){
        [arr1,arr2]=[arr2,arr1]
    }
    
    for (element1 of arr1){
        let isFirstEltPresentinSecondArr = false;
        for (element2 of arr2){
            
            if(element1==element2){
                isFirstEltPresentinSecondArr=true;
            }
            
        }
        if(!isFirstEltPresentinSecondArr){
            arrOfDiffs.push(element1);
        }
        
    }
    for (element2 of arr2){
        let isFirstEltPresentinSecondArr = false;
        for (element1 of arr1){
            
            if(element1==element2){
                isFirstEltPresentinSecondArr=true;
            }
            
        }
        if(!isFirstEltPresentinSecondArr){
            arrOfDiffs.push(element2);
        }
        
    }
    console.log(arrOfDiffs);
    const sum0=0;
    const sum = arrOfDiffs.reduce(
        (previousValue,currentValue)=>previousValue+currentValue,sum0
        );
    console.log(sum);
    return sum;
}

//calcul2 (arr1,arr2);