//Q no 3:find the largest/smallest number from unsorrted array.
var sarray=[70,10,20,30,4,1,80,100,5]
var max=sarray[0];
var min=sarray[0];
for(let i=0; i<sarray.length;i++)
{
    if(sarray[i]>=max)
    {
        max=sarray[i];
    }
    if(sarray[i]<=min)
    {
        min=sarray[i];
    }
}
console.log("Q 3:",sarray);
console.log("Q 3:",max);
console.log("Q 3:",min);