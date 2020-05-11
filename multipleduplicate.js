function multipleduplicate(){
var data=[1,2,3,3,2,4,5,10,11,35,14,15,10,20,50,14]
console.log(data)
for(var i=0;i<data.length ;i++)
{
    for(var j=i+1;j<data.length;j++)
    {
        if(data[i]==data[j])
        {
        console.log("Q 5:",data[i])
        }
    }
}
}

multipleduplicate();