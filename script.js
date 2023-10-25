"use strict"
const amountOfItem = document.getElementById("amount-of-item");
const numberFood = document.getElementById("number-food");
const foodItem = document.querySelector("#food-item");
let totalcost = document.querySelector("#total-cost")
let food=[{foodName:'همبرگر مخصوص ', cost:10000 , number:0, sumCost:0 , id:0},
          {foodName:'همبرگر معمولی' , cost:8000 , number:0, sumCost:0 , id:1},
          {foodName:'همبرگر مخصوص با قارچ و پنیر ', cost:20000 , number:0, sumCost:0 , id:2},
          {foodName:'همبرگر معمولی با قارچ و پنیر ', cost:10000 , number:0, sumCost:0 , id:3},
          {foodName:'سیب زمینی سرخ کرده ', cost:10000 , number:0, sumCost:0 , id:4},
          {foodName:'سیب زمینی سرخ کرده ویژه', cost:25000 , number:0, sumCost:0 , id:5},
          {foodName:'نوشابه ', cost:5000 , number:0, sumCost:0 , id:6},
          {foodName:'نوشابه رژیمی ', cost:6000 , number:0, sumCost:0 , id:7},
          {foodName:'سالاد سزار ', cost:25000 , number:0, sumCost:0 , id:8},
          {foodName:'سالاد فصل ', cost:8000 , number:0, sumCost:0 , id:9},
         ];
//start add

function addBtnClickHandler(foodId){ 
    // console.log("test")
    const finder = food.find(item => item.id == foodId) ;//find one object
    // console.log(finder)
    if (finder){
        addAmount(finder.number , finder.id);//pass this id and number to this function
    }     
}
function addAmount(amount , foodId){//مقدار قبلی را میگیرد
    let addedAmount = amount + 1;
    console.log(addedAmount)
    console.log(food)
    food = food.map(item => {
        if(item.id == foodId){
            return {
                foodName : item.foodName,
                cost : item.cost,
                number : addedAmount,
                sumCost : item.sumCost,
                id : item.id
            }
        }else{
            return{
                foodName : item.foodName,
                cost : item.cost,
                number : item.number,
                sumCost : item.sumCost,
                id : item.id
            }
        } 
})
console.log(food);
makeFoodInformation();
totalcostItem(foodId);
    // refreshData(foodId , addedAmount);  
}
function totalcostItem(foodId){
    console.log(food)
    food = food.map(item => {
        let totalItem = (item.cost * item.number);
        if(item.id == foodId){
            return {
                foodName : item.foodName,
                cost : item.cost,
                number : item.number,
                sumCost : totalItem,
                id : item.id
            }
        }else{
            return{
                foodName : item.foodName,
                cost : item.cost,
                number : item.number,
                sumCost : item.sumCost,
                id : item.id
            }
        } 
})
console.log(food);
makeFoodInformation();
}
//end add
//start reduce{
function reduceBtnClickHandler(foodId){ 
     const finder = food.find(item => item.id == foodId) ;
    if (finder){
         reduceAmount(finder.number , finder.id);
    }   
}    
function reduceAmount(amount , foodId){//مقدار را بخوان یکی ازش کم کن
    let reducedAmount = amount - 1;
    if(reducedAmount >= 0){
        food = food.map(item => {
            if(item.id == foodId){
                return {
                    foodName : item.foodName,
                    cost : item.cost,
                    number : reducedAmount,
                    sumCost : item.sumCost,
                    id : item.id
                }
            }else{
                return{
                    foodName : item.foodName,
                    cost : item.cost,
                    number : item.number,
                    sumCost : item.sumCost,
                    id : item.id
                }
            } 
    })
    }else{
        reducedAmount = 0;
        console.log(reducedAmount);
    }
    console.log(reducedAmount)
    console.log(food)
    
console.log(food);
makeFoodInformation();
totalcostItem(foodId);       
}
    //end reduce}
function makeFoodInformation(){
    let information = "";
    food.forEach(item => {
        information = information + `
        <div  class="food h-[130px]  bg-white rounded-[10px] p-[15px]">
        <div class="w-[100%] h-[100%] flex justify-around items-center gap-[20px]">
            <div class="min-w-[100px] max-w-[100px] min-h-[80px] max-h-[80px] ">
                <img src="./1.PNG" class="w-[100%] h-[100%]">
            </div>
            <div class="w-[35%] flex flex-col justify-between items-start gap-[10px] ">
                <p class="no-wrap" >${item.foodName}</p>
                <p " >${item.cost} تومان</p>
                <div class="flex flex-row justify-start px-0 mx-0  gap-0">
                    <button onclick="addBtnClickHandler(${item.id})"
                        class="w-[25px] h-[25px] pl-0 ml-0 flex justify-center items-center bg-[#9E1010] rounded-tr-[5px] rounded-br-[5px] ">
                        <svg class="font-bold" xmlns="http://www.w3.org/2000/svg" width="95%" height="95%"
                            fill="white" class="bi bi-plus" viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                    <p id="number-food" class="w-[25px] h-[25px] px-0 mx-0 flex justify-center items-center bg-[#F0F8FF]">${item.number}
                    </p>
                    <button onclick="reduceBtnClickHandler(${item.id})"
                        class="w-[25px] h-[25px] pr-0 mr-0 flex justify-center items-center bg-[#D1D5DB] rounded-tl-[5px] rounded-bl-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="95%" height="95%" fill="white"
                            class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class=" w-[35%] flex flex-col justify-between items-end gap-[10px] ">
                <div>
                    <p class="invisible cost-sum">0 تومان</p>
                </div>
                <div>
                    <p class="invisible cost-sum">0 تومان</p>
                </div>
                <div>
                    <p id="total-cost" class="cost-sum">${item.sumCost} تومان</p>
                </div>
            </div>
        </div>
    </div>
        `
    }) 
    foodItem.innerHTML= information;
}
makeFoodInformation();
let pay = [{totalCostPay : totalCostPay , tip : tip , off : off , amountPayable : amountPayable}]
function makePayTotalCost(){
    let PayInformation = "";
    pay.forEach(item => {
         PayInformation = PayInformation +`
         <div
                class="h-[349px] w-full bg-[#F0F8FF] inline-block  2xl:w-[349px] 2xl:absolute 2xl:left-[80px] 2xl:top-[30px] p-[15px] rounded-[20px]">
                <div class=" flex flex-col justify-start gap-[10px] ">
                    <div class="flex justify-between items-center">
                        <p>جمع کل سفارشات:</p>
                        <p>${item.totalCostPay} تومان</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p>حق سرویس و کارمزد:</p>
                        <p>${item.tip} تومان</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p>تخفیف:</p>
                        <p>${item.off} تومان</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <input placeholder="کد تخفیف" class="w-[100%] h-[40px] pr-[5px] pl-0 ml-0">
                        <button
                            class="w-[50px] h-[40px] bg-[#9E1010] rounded-tl-[5px] rounded-bl-[5px] pr-0 mr-0 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="white"
                                class="bi bi-check-lg " viewBox="0 0 16 16">
                                <path
                                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-[100%]  flex flex-col mt-[60px] gap-[10px] ">
                    <div class="flex justify-between items-center bg-[#FFC72C] h-[35px]">
                        <p>مبلغ قابل پرداخت:</p>
                        <p>${item.amountPayable} تومان</p>
                    </div>
                    <div class="h-[50px] text-center bg-[#D1D5DB] py-[10px]">
                        <button>ثبت سفارش</button>
                    </div>
                </div>
            </div>
         `
    })
}
function addSumCost(){
        // let result = 0;
    for (let item of food){
        console.log(food)
        //   result = item.sumCost
    }
        
}
addSumCost()
 makePayTotalCost();
// function refreshOrder(sumOrder){
//     pay = pay.map(item => {
//         let sumOrder = 
//         return {
//             totalCostPay : sumOrder,
//             tip : item.tip,
//             off : item.off,
//             amountPayable : item.amountPayable
//         }
//     })
//     makePayTotalCost() ;
// } 