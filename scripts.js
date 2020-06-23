

// addBtn = function(){
    
//     var node = document.createElement('LI');
//     var txt = document.getElementById('revenue').value;
    

//     node.append(txt);
//     document.getElementById('list').append(node);
// }
// addBtn();


// ;
// var incomeArr = [];
// incomeArr.push(document.getElementById('revenue').value);
// console.log(incomeArr);
    
        
 



// var arr = [22,33,44];
// total=function(){
//     return eval(arr.join('+'));
// }
// total();
// console.log(total());



























// //  let revenue = {
// //      rev: document.getElementById("rev").addEventListener('click', this.add),
// //      revInput: document.getElementById("revenue"),
// //      add: function(){
// //          if(this.revInput === ''){
// //              alert('insert value');
// //          }
// //         else{
// //             var budget = document.getElementById("budget");
// //             var text = document.createElement('p');
// //             text.innerHTML = this.revInput.value;
// //             budget.appendChild(text);
// //             this.revInput.value = '';
// //          }
// //      }
// //  };



// // event listener for revenue
 var rev= document.getElementById("rev").addEventListener('click', add);
 var revInput= document.getElementById("revenue");
 var budgetArr = [];  
 var budgetTotal;
 var sum;
 function add(){
    
     if(revInput.value === '' || revInput.value === Text){
         alert("input Number")
     }
     else {
         let budget = document.getElementById("budget");
         var text = document.createElement('p');
         budgetArr.push(revInput.value);
         text.innerText = revInput.value;
         budget.appendChild(text);
         revInput.value = '';
     }
     budgetTotal = parseInt(eval(budgetArr.join('+')));
}

go = function(){
    document.getElementById('budtotal').innerText = budgetTotal;
}
go();

// //event listener for expense amount
 var amt= document.getElementById("amt").addEventListener('click', amt);
 var expenseInput= document.getElementById("expense");
 var priceArr = [];
 var priceTotal;
 function amt(){
    if(expenseInput.value === '' || expenseInput.value === Text){
         alert('insert value');
     }
     else{
         var price = document.getElementById("price");
         var priceText = document.createElement('p');
         priceArr.push(expenseInput.value);
         priceText.innerText = expenseInput.value;
        price.appendChild(priceText);
         expenseInput.value = '';
     }
     priceTotal = parseInt(eval(priceArr.join('+')));
}

goexp = function(){
    document.getElementById('exptotal').innerText = priceTotal;
}
goexp();


bal = function(){
    return document.getElementById('bala').value = budtotal.innerText - exptotal.innerText;
}
bal();
//console.log(bal());




// // event listerner for expense name
// var prod= document.getElementById("prod").addEventListener('click', addProd);
// var product= document.getElementById("product");
// var productArr = [];

// function addProd(){
    
//     if(product.value === ''){
//        alert("value please");
//     }
//     else{
//         var productName = document.getElementById("productname");
//         var productText = document.createElement('p');
//         productArr.push(product.value);
//         productText.innerText = product.value;
//         productName.appendChild(productText);
//         product.value = '';
//     }
    
// }
// console.log(productArr);



// var tota = document.getElementById("tot").addEventListener('click', tot);

// function tot(a,b){
//     return a  - b;
// };
// document.getElementById("total").innerText = `${tot(budgetTotal, priceTotal)}`;
// console.log(tot(budgetTotal, priceTotal));

// //var balance = document.getElementById("tot").addEventListener('click', sum);
// // var tot;
// // var x = sum(budgetArr, priceArr);
// // var total = document.getElementById("total");
// //     total.innerText = x;
// // function sum(){
// //     return tot = eval(budgetArr.join('+')) - eval(priceArr.join('+')); 
//     // var bal = document.createElement('p');
//     // bal.append(tot);
//     // total.appendChild(bal);
// //}
//  //sum();
 
// // document.getElementById("total").innerText = eval(budgetArr.join('+')) - eval(priceArr.join('+'));
// // total.innerText = {tot};
// // var total = document.getElementById("total");
// // function sum(){     
// //      return Number(eval(budgetArr.join('+')));
// // }
// // sum();
// // total.innerHTML =sum();
// // console.log(sum());

// //console.log(document.getElementById("total").innerText);




     
// console.log(priceArr);
