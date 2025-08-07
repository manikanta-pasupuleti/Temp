var a=121;
var r=0;
var n=0;
while(a!=0)
{
    r=a%10;
    n=n*10+r;
    a=Math.floor(a/10);
}
console.log(n);