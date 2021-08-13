var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color,count){
if(count>0){
    for(let i = 0;i < count;i++)
    {
    chocolates.unshift(color)
    }
return chocolates;
}
else{
    return 'Number cannot be zero/negative';
}
}


//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number){
    if(number > chocolates.length){
        return 'Insufficient chocolates in the dispenser';
    }
     else if(number > 0){
        let removedchocolates = [];
        for(let i = 0;i < number;i++){
            removedchocolates[i] = chocolates.shift();
        }
        return removedchocolates;
    }
    
    else{
        return 'Number cannot be zero/negative';
    }    
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){   
    if(number > chocolates.length){
        return 'Insufficient chocolates in the dispenser';
    }
     else if(number > 0){
        let dispensedchocolates = [];
        for(let i = 0;i < number;i++){
             dispensedchocolates[i] = chocolates.pop();
        }
        return dispensedchocolates;
    }
    else{
        return 'Number cannot be zero/negative'; 
    }
}


//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number,color){  
if(number > chocolates.length){
    return 'Insufficient chocolates in the dispenser';
}
else if(number > 0){
    let dispensedchocolates = [];
    for(let i = 0;i < number;i++){
         dispensedchocolates[i] = chocolates.pop(color);
    }
    return dispensedchocolates;
}
else{
    return 'Number cannot be zero/negative'; 
}

}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates,color){
    
  color = ['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];
    let remainscolor = [];
    for(let i = 0;i < color.length;i++){
        let count = 0;
       for(let j = 0;j < chocolates.length;j++){ 
           if(color[i] == chocolates[j]){
              count++;
            }
        }
        remainscolor[i] = count;
    }
    return remainscolor.filter(Number);
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors
// function sortChocolateBasedOnCount(chocolates){
//     let descendingorder =[];
//     for(let i = 0;i < chocolates.length;i++){
//         let count = 1;
//         if(chocolates[i] != 0){
//             for(let j = i+1;j < chocolates.length;j++){
//                 if(chocolates[i] == chocolates[j]){
//                     count++;
                     
//                 }
//                 chocolates[j] = 0;
//             }
//             descendingorder[i] = count;
//         }
        
//     }
//     console.log(descendingorder)
//     return descendingorder.sort(color)
function sortChocolateBasedOnCount(chocolates) {
    let col = chocolates.reduce(function (b,a) {
    console.log(b)
    
    if (a in b) {
    b[a]++;
    } else {
    b[a] = 1;
    }
    return b;
    }, {});
    
    let Array = chocolates.sort ((a, b) => {
    if (col[b] > col[a]) {
    return 1;
    }
    if (col[b] < col[a]) {
    return -1;
    }
    if (a > b) {
    return 1;
    }
    if (a < b) {
    return -1;
    }
    });
    console.log(Array);
    chocolates = Array;
    return chocolates;
    }

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor){
   if(color == finalColor){
       return 'Can\'t replace the same chocolates';
   }
  else if(chocolates.length == 0){
      return [];
  }
   else if(number > 0){
       let count  = 0;
        for(let i = 0;i < chocolates.length;i++){
            if(chocolates[i] == color){
                count++;
                chocolates[i] = finalColor;
                if(count == number){
                    return chocolates;
                }
            }
        }

    }
   else{
    return 'Number cannot be zero/negative';
   }

}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color,finalColor){
    
    if(color == finalColor){
        return 'Can\'t replace the same chocolates';
       }
    else {
        var count  = 0;
        for(let i = 0;i < chocolates.length;i++){
            if(chocolates[i] == color){
                count++;
                chocolates[i] = finalColor;       
            }
        }
        return [count,chocolates];
    }
}


//Challenge 1: Remove one chocolate of ____ color from the top
// function removeChocolateOfColor(color){
//     for(let i = 0;i<=chocolates.length;i++){
//         if(color === 'green'){
//             chocolates.shift();
//         }
//     }
// }


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
