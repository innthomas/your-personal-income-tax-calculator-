//computation of personal income tax 
const fullName = document.getElementById("full-name").value;
const tin = document.getElementById("tin").value;
const grossIncome = document.getElementById("gross-income").value;
const children = document.getElementById("children").value;
const relatives = document.getElementById("relatives").value;

const grossIncome10 = grossIncome*0.01;
const grossIncome20 = grossIncome10 * 0.2;
const children2 = children * 2500;
const relatives2 = relatives * 2000;
const pension = 0.075 * grossIncome;
let personalIncomeTax;
let taxIncome;

function first300(){
    return 300000*.07
}

function second300(){
    return 300000*.11
}

function  first500(){
return 500000*.15
}

function  second500(){
return 500000*.19
}

if (grossIncome10> 200000){
    taxincome = grossIncome10 + grossIncome20 + children2 + relatives2 + pension
}           
else{
    taxincome = 200000 + grossIncome20 + children2 + relatives2 + pension
}       
if (taxincome <= 300000){
    personalIncomeTax = taxincome * .07
}
else if (taxincome <= 600000){
    personalIncomeTax = first300() + (taxincome *.11)
}
else if (taxincome <= 1100000){
    personalIncomeTax = second300() + first300() + (taxincome * .15)
}
else if (taxincome <= 1600000){
    personalIncomeTax = first500() + second300() + first300() +(taxincome * .19)
}
else{
    personalIncomeTax = second500() + first500() + second300() + first300() + (taxincome * .21)
}
             

console.log("Income tax liability for ", fullName, " with tin:",tin," is  N",personalIncomeTax)       

    

