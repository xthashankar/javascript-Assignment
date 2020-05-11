var array=[10,7,8,9,1,5]
var data=array.length;
function sorting(array,l,r)
    {
        //l=strating index
        //r=last index
        //array[]=array ot be sorted
        var sort=array[r];
        var i=(l-1);
        var j;
        for(j=l;j<r;j++)
        {
            if(array[j]<sort)
            {
                i++;
                temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
         temp=array[i+1];
         array[i+1]=array[r];
         array[r]=temp;
         return i+1;
    }
function quick(array,l,r)
{
    if(l<r)
    {
        var index=partation(array,l,r)
        quick(array,l,index-1);
        quick(array,index+1,r)
    }
}
function quicksort(array)
{
    data=array.length;
    for(var i=0;i<data;++i);
    console.log("Q 6:",array[i]);
}
sorting(array,0,data-1);
console.log(array);
