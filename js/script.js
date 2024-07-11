//CALLBACK
// function executeTask(task)
// {
//     console.log("Executing Task...");
//     task();

// //     if(x==0)
// //     task1();
// // if(x==1)
// //     task2();



// }
// function task1()
// {
//     console.log("Task 1 executed.");

// }
// function task2()
// {
//     console.log("Task 2 executed..");
// }
// executeTask(task1());
// //executeTask(task2);
//Array
//let arr=[1,20,30,40,5];
// console.log(arr);
// arr.push(100);
// console.log(arr);
// let deleted=arr.pop();
// console.log('delete element is ',deleted)
// console.log(arr);

// arr.unshift(100);
// console.log(arr);

// arr.splice(2,0,100,200,300,400,500);
// //console.log(arr);
// //Shift
// arr.splice(0,1);
// //pop
// arr.splice(arr.length-1,1);

// arr[20]=10;
// arr[50]=11;

//console.log(arr);
//Data *d=new Data()
//Data d;//Object
//Data d;//Reference to data/kind of pointer
//d=new Data();
//Data d=new Data();
//let arr1=new Array(5);


//let arr=[40,10,20,33,50,400];
//strlen(ch);
//for(i=0;i<strlen(ch);i++)
//let arr1=[100,200];
/*
function printData(item,index)
{
    console.log("Print called ",item);


}
printArray(arr,printData);
printArray(arr1,printData);
//printArray(arr1);
//printArray();
function printArray(array,callback)
{
for(i=0;i<array.length;i++)
    callback(array[i],i,array);


    //console.log(array[i]);
}
*/
//foreach, filter, map
// function printData(item,index,array)
// {
//     console.log(index);

// }
// //arr.forEach(printData)
// arr.forEach(function(item){

//     console.log(item);

// })
//filter
let arr=[34,5,6,7,9];
let result=arr.map(function(item){
    // if(item%2==0)
    //     return item*2;
    // else
    //     return item; 
    return (item%2==0?item*2:item);
       

})
// let result=[];
// arr.forEach(function(item){
//     if(item%2==0)
//     result.push(item*2);
//     else
//     result.push(0);

// })
// console.log(result);

// let result=arr.map(function(item){
//     return 1;
// })
// console.log(result);

// let result=arr.filter(function(item){
//     if(item%2==0)
//         return true;


// })
// console.log(result);

// let result=[];
// arr.forEach(function(item){
//     if(item%2==0)
//         result.push(item);

// });
// console.log(result);




