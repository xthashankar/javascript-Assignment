//Q no 2:find the duplicate number of a given integar
var array=[1,2,3,4,3,2,1,5];
let i,j;
console.log("Q 2:",array)
for(i=0;i<array.length;i++)
{
    for(j=i+1;j<array.length;j++)
    {
        
        if(array[i]==array[j])
        console.log("Q 2:",array[j])
    }
}

