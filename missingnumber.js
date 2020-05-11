//Qno 1: Find the missing integer in given array 1 to 100.
// var number=[1,2,3,4,6,7,8,10,15,45,30];
// function missing(number)
// {
//     var sum=0;
//     var x;
//     for(x in number)
//     {
//         sum +=number[x];
//     }`
//     var num=number.length+1;
//     expected_sum=Math.floor((num*(num+1)/2));
//     return expected_sum-sum;
// }
// missing(number);
// console.log( missing(number));

// var array=[1,2,3,4,6,];
// var sum=0;
// var data=1;
// for(var i=0;i<array.length;i++)
// {
//     if(array[i]==0)
//     {
//         data=i;
//     }else{
//         sum+=array[i];
//     }
// }
// var total=(array.length+1)*array.length/2;
// console.log(total-sum,data)


var array=[1,40,90,100]
var data=array[0];
var l=1;
var h=100;
function missing(array,l,h)
{
    var range=[h-l+1];
    for(var i=0;i<array.length;i++)
    {
        if(l<=array[i] && array[i]<=h)
        {
            range[array[i]-l]=true;
        }
    }
    for(var x=0;x<=h-l;x++)
    {
        if(range[x]==false)
        console.log(l+x);
    }
}
missing(array,l,h);
console.log(array);

