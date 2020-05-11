//find all pairs of integer array whose sum is eqaul to a given number
var l=0;
var pairnumber=[1,2,3,4,5,6,7];
var r=pairnumber.length-1;
var no=11;
console.log("Q 4: ",pairnumber)
while(l<r)
{
    if(pairnumber[l]+pairnumber[r]>no)
    {
        r--;
    }
    else if(pairnumber[l]+pairnumber[r]<no)
    {
        l++;
    }
    else if(pairnumber[l]+pairnumber[r]==no){
        
        console.log("Q 4: ",pairnumber[l],pairnumber[r]); 
        l++;   
        r--;
    }
}
 