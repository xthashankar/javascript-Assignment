//duplicates removed from an array without using any library
var array=[1,2,2,3,4,4,5,6,6];
var current=array[0];
var found=false;
for(var i=0;i<array.length;i++)
{
    if(current==array[i]&&!found){
        found=true;
    }else if(current!=array[i]){
        console.log(current);
        current =array[i];
        found=false;
    }
}
console.log(current);