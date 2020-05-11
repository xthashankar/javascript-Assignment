// Q no 6:Remove duplicate from the array
var array=[1,2,3,2,3,4,4,5,6]
var obj=[]
var count=0;
var found=false;
for(i=0;i<array.length;i++)
{
    for(j=0;j<obj.length;j++){
        if(array[i]==obj[j])
            {
                found=true;
            }
    }
    count++;
    if(count==1 && found==false)
    {
        obj.push(array[i]);
    }
    count=0;
    found=false;
}
console.log("Q 7",array);
console.log("Q 7",obj);