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
          {foodName: 'سیب زمینی سرخ کرده ویژه', cost:25000 , number:0, sumCost:0 , id:5},
          {foodName:'نوشابه ', cost:5000 , number:0, sumCost:0 , id:6},
          {foodName:'نوشابه رژیمی ', cost:6000 , number:0, sumCost:0 , id:7},
          {foodName:'سالاد سزار ', cost:25000 , number:0, sumCost:0 , id:8},
          {foodName:'سالاد فصل ', cost:8000 , number:0, sumCost:0 , id:9},
         ];
//start add
function addAmount(amount , foodId){//مقدار قبلی را میگیرد
        let addedAmount= amount +1;
        refreshData(foodId , addedAmount);  
}

function addBtnClickHandler(foodId){ 
    const finder = food.find(item => item.id == foodId) ;
    if (finder){
        addAmount(finder.number , finder.id);
    }  
}
//end add
function refreshData(foodIdentifire , changedUnit){
    console.log(food)
    food = food.map(item => {
        if(item.id == foodIdentifire){
            console.log(item.number);
            if(item.number == 0){
                totalcost = item.cost;
            }else{
                totalcost = (item.cost * (item.number + 1))
            }
           return{
            foodName : item.foodName ,
            cost : item.cost ,
            number : changedUnit ,
            sumCost : totalcost ,
            id : item.id 
           }   
        }else{
            return{
                foodName : item.foodName ,
                cost : item.cost ,
                number : item.number ,
                sumCost : item.sumCost ,
                id : item.id
            }   
        }
       
    });
    makeFoodInformation();
    totalCostItem(changedUnit)
    console.log(food);
}

//start reduce{
function reduceAmount(amount , foodId){//مقدار را بخوان یکی ازش کم کن
    let reducedAmount = amount - 1;
    console.log(reducedAmount);
    if(reducedAmount >= 0){
        refreshData(foodId , reducedAmount);
    }else{
        reducedAmount = 0;
        console.log(reducedAmount);
    }    
}
function reduceBtnClickHandler(foodId){ 
    const finder = food.find(item => item.id == foodId) ;
    if (finder){
        reduceAmount(finder.number , finder.id);
    }   
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
function makeTotalCostInformation(){
    
}
