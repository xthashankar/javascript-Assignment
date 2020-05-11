var array=[1,3,4,6,7,9];
var reveresedarray=[];
array.map((data)=>{
    reveresedarray.unshift(data); 
});
console.log("Q 9",reveresedarray);
//method 2
// for(var i=array.length-1;i>=0;i--)
// {
//     reveresedarray.push(array[i]);
// }