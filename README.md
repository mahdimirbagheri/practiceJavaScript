# practiceJavaScript

## prime numbers (  عدد اول بین 1 - 100)
for (let i= 1 ; i < 100 ; i++ )

{

let x=0

for(let j=2;j<i-1;j++)

{

if(i%j===0)

{x=1}

}

if(x===0)

{console.log(`عدد ${i} اول است `)}

else

{console.log(`عدد ${i} اول نیست `)}

}




## even numbers (اعداد زوج بین 1 - 10)
for(let i=1 ;i<=10;i++){

if(i % 2===0)

{console.log(i)}

}


## compare tow numbers (مقایسه بین دو عدد)

let num1=10

let num2=20


let result=compare(num1,num2)

console.log(`عدد ${result}  بزرگتر است`)


function compare(number1,number2)
{

if(number1>number2){return number1}

else{return number2}

}



## sumEvenNumbers (مجموع اعدا زوج بین 1 تا 20)
let n=20


let sumEven=n=>{

let sum=0

for(let i=0;i<=n;i++)

{

if(i%2===0)

{sum+=i}

}

return sum

}





## sumNumbersEveninArray (مجموع اعداد  زوج  آرایه )

let numbers=[1,12,8,2,31,19]

let result=sumNumbersEveninArray(numbers)

console.log(`مجموع اعداد زوج آرایه  ${result} است `)


function sumNumbersEveninArray(temp)

{

let sum=0

 for (let i=0;i<temp.length;i++)
 
 {
 
           if(temp[i]%2===0)
           
           {
           
           sum=sum+temp[i]
           
        
           }
           
 }
 
return sum

}


## sum Numbers Of Bigger Than 10 with (callback function) (مجموع اعداد بزرگتر از 10 )
 let numbers=[3,8,16,9,12]
 
 let sum=0
 
 let myFunction=(value)=>
 
 {
 
    if(value>=10)
    
   {
   
      sum+=value
      
   }
   
 }
 
 let result= numbers.forEach(myFunction)
 
 console.log(sum)
 
## Adding a random score to scores below 5 (callback function) (اضافه کردن نمره تصادفی به نمره های زیر ۵ )
let numbers = [1,20,8,13,2,4,16,5,20]

let myFunc = (value)=>

{

let rand = Math.floor(Math.random()*4)+1
 
if(value<5)
	
		{
  
	 	return value+rand
   
		}
else
	
		{
  
	 	return value
   
		}
}
 
let result = numbers.map(myFunc)

console.log(result);


## (callback function) (مثال های امتحانی)

let cars = [

  {
  make: 'Toyota', 
model: 'Camry', 
year: 2000, 
color: 'Silver', 
price: 25000 
},
  
  {
  make: 'Honda', 
model: 'Civic', 
year: 2020, 
color: 'Blue', 
price: 22000 
},
  
  {
  make: 'Ford', 
model: 'Mustang', 
year: 1990, 
color: 'Red', 
price: 40000 
},
  
  {
  make: 'Tesla', 
model: 'Model 3', 
year: 2023, 
color: 'Black', 
price: 45000
},
  
  {
  make: 'BMW', 
model: '3 Series', 
year: 2022, 
color: 'White', 
price: 38000
    }
  
]

### (callback function) (ماشین هایی که رنگ آنها مشکی است نمایش بده)
	let result = cars.filter(value => value.color === "Black")
	console.log(result)

### (callback function) (ماشین هایی که متعلق به قبل از 2000 هستند را حذف کن)
	cars = cars.filter(car => car.year >= 2000);
	console.log(cars)

 ### (callback function) (تعداد ماشین های سفید را نمایش بده)
 	let whiteCars = cars.filter(value => value.color === "White").length;
	console.log('Number Of White Cars :', whiteCars);
 
 ### (callback function) (ماشین هایی که مبلغشان زیر 30000 دلار است و سال ساخت بالای 2000)
 	let result = cars.filter(value => value.price < 30000 && value.year > 2000)
	console.log(result)
 
 ### (callback function) (روش اول) (تغییر رنگ خودرو بی ام و)
 	let changeProp=(value)=>{
  
		if(value.make==="BMW")
  
  			{
     
			return{...value,color:"Black"}
   
			}
		else
  
  			{
     
			return value
   
			}
	}
 
	let result=cars.map(changeProp)
	console.log(result)
 
 ### (callback function) (روش دوم) (تغییر رنگ خودرو بی ام و)
 	let changeProp=(value)=>{
  
	let response=value.make==="BMW" ? {...value,color:"Black"} : value
 
 	return response
	}
 
	let result=cars.map(changeProp)
	console.log(result)
 
				
