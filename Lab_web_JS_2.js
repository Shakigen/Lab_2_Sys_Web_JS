let temp = 0;
let string1 = +prompt('Enter first number','');
    while(string1.toFixed()!=string1){
      string1 = +prompt('Enter first number AGAIN','');
    }
let string2 = +prompt('Enter second number','');
    while(string2.toFixed()!=string2 || string1 > string2){
      string2 = +prompt('Enter second number it must be BIGGEST first number','');
    }

for(let i = string1; i<string2; i++) //Запуск цикла 
{
  if(i == string1) {i++;}           //Временная провека является ли число не минимальным  
console.log("Your numbers: " + i);  //Вывод результата
}
for(let i = 0; i<=string2; i++)     //Запуск цикла 
{
	if(i != 0) if(i % 5 == 0){				//Проверка на кратность 5	
    	console.log("Crit 5: " + i);	//Вывод результата
      temp++;
      }																	
  
   //Вывод результата
}
  if(temp == 0) alert("Sorry, no numbers");