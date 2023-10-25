"use strict"
const amountOfItem = document.getElementById("amount-of-item");
const numberFood = document.getElementById("number-food");
const foodItem = document.querySelector("#food-item");
let totalcost = document.querySelector("#total-cost");
let totalOrderPay = document.getElementById("total-order-pay");
let textInput = document.getElementById("text-input");
let serviceRight = document.getElementById("service-right");
let costPayAble = document.getElementById("cost-pay-able");
let discountCode = document.getElementById("discount-code");
let discountItem = document.getElementById("discount-item");
let flag;
let mode;
let modalRegisterOrderWrapper = document.getElementById("modal-register-order-Wrapper")
let food = [{ foodName: 'همبرگر مخصوص ', cost: 10000, number: 0, sumCost: 0, id: 0 },
{ foodName: 'همبرگر معمولی', cost: 8000, number: 0, sumCost: 0, id: 1 },
{ foodName: 'همبرگر مخصوص با قارچ و پنیر ', cost: 20000, number: 0, sumCost: 0, id: 2 },
{ foodName: 'همبرگر معمولی با قارچ و پنیر ', cost: 10000, number: 0, sumCost: 0, id: 3 },
{ foodName: 'سیب زمینی سرخ کرده ', cost: 10000, number: 0, sumCost: 0, id: 4 },
{ foodName: 'سیب زمینی سرخ کرده ویژه', cost: 25000, number: 0, sumCost: 0, id: 5 },
{ foodName: 'نوشابه ', cost: 5000, number: 0, sumCost: 0, id: 6 },
{ foodName: 'نوشابه رژیمی ', cost: 6000, number: 0, sumCost: 0, id: 7 },
{ foodName: 'سالاد سزار ', cost: 25000, number: 0, sumCost: 0, id: 8 },
{ foodName: 'سالاد فصل ', cost: 8000, number: 0, sumCost: 0, id: 9 },
];
function addBtnClickHandler(foodId) {
    mode = true;
    flag = true;
    const finder = food.find(item => item.id == foodId);//find one object
    if (finder) {
        addAmount(finder.number, finder.id);//pass this id and number to this function
    }
}
function addAmount(amount, foodId) {//مقدار قبلی را میگیرد
    let addedAmount = amount + 1;
    console.log(addedAmount)
    console.log(food)
    food = food.map(item => {
        if (item.id == foodId) {
            return {
                foodName: item.foodName,
                cost: item.cost,
                number: addedAmount,
                sumCost: item.sumCost,
                id: item.id
            }
        } else {
            return {
                foodName: item.foodName,
                cost: item.cost,
                number: item.number,
                sumCost: item.sumCost,
                id: item.id
            }
        }
    })
    console.log(food);
    makeFoodInformation();
    totalcostItem(foodId);
    syncFoodDataToLocalStorage();
}
function totalcostItem(foodId) {
    console.log(food)
    food = food.map(item => {
        let totalItem = (item.cost * item.number);
        if (item.id == foodId) {
            return {
                foodName: item.foodName,
                cost: item.cost,
                number: item.number,
                sumCost: totalItem,
                id: item.id
            }
        } else {
            return {
                foodName: item.foodName,
                cost: item.cost,
                number: item.number,
                sumCost: item.sumCost,
                id: item.id
            }
        }
    })
    console.log(food);
    makeFoodInformation();
    addSumCost();
    syncFoodDataToLocalStorage();
}
function reduceBtnClickHandler(foodId) {
    mode = true;
    flag = true;
    const finder = food.find(item => item.id == foodId);
    if (finder) {
        reduceAmount(finder.number, finder.id);
    }
}
function reduceAmount(amount, foodId) {//مقدار را بخوان یکی ازش کم کن
    let reducedAmount = amount - 1;
    if (reducedAmount >= 0) {
        food = food.map(item => {
            if (item.id == foodId) {
                return {
                    foodName: item.foodName,
                    cost: item.cost,
                    number: reducedAmount,
                    sumCost: item.sumCost,
                    id: item.id
                }
            } else {
                return {
                    foodName: item.foodName,
                    cost: item.cost,
                    number: item.number,
                    sumCost: item.sumCost,
                    id: item.id
                }
            }
        })
    } else {
        reducedAmount = 0;
        console.log(reducedAmount);
    }
    console.log(reducedAmount)
    console.log(food)
    console.log(food);
    makeFoodInformation();
    totalcostItem(foodId);
    syncFoodDataToLocalStorage();
}
function makeFoodInformation() {
    const foodDataFromLocalStorage = localStorage.getItem("foodData");
    const extractedFoodData = JSON.parse(foodDataFromLocalStorage)
    let information = "";
    extractedFoodData.forEach(item => {
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
    foodItem.innerHTML = information;
}
makeFoodInformation();
function addSumCost() {//مجموع سفارشات
    console.log("test")
    let totalOrder = 0;
    for (let i = 0; i < food.length; i++) {
        if (food[i].number > 0) {
            totalOrder += food[i].sumCost;
        }
    }
    totalOrderPay.innerHTML = totalOrder + ` تومان`;
    console.log(totalOrder);
    if (flag == true) {
        payService(totalOrder);
        console.log(totalOrder)
    }
    return totalOrder;
    syncFoodDataToLocalStorage();
}
function payService(paySum) {//حق سرویس
    console.log(paySum)
    let service = 0;
    service = (paySum * 0.15);
    console.log(service);
    serviceRight.innerHTML = service + ` تومان`;
    if (mode == true) {
        goToAmountPayable(service);
    }
    return service;
    syncFoodDataToLocalStorage();
}
function discountBtnClickHandler() {
    getDiscount();
}
function getDiscount() {
    let result
    let completeOrder = addSumCost();
    let tax = (completeOrder * 0.15);
    let discountAmount;
    if (discountCode.value == 'elahe1402') {
        discountAmount = (completeOrder * 0.5);
        result = (completeOrder - discountAmount) + tax;
        costPayAble.innerHTML = result + `تومان`;
        discountItem.innerHTML = discountAmount + ` تومان`;
    } else {
        discountItem.innerHTML = `0 تومان`
    }
    return discountAmount;
    syncFoodDataToLocalStorage();
}
function goToAmountPayable(services) {
    flag = false;
    mode = false;
    let result1;
    let result2;
    let result3;
    result1 = addSumCost();
    result2 = (result1 * 0.15);
    if (discountCode.value == 'elahe1402') {
        result3 = getDiscount()
    }
    amountPayable(result1, result2, result3);
}
function amountPayable(paySumOrder, tax) {
    console.log(paySumOrder);
    console.log(tax)
    let result = 0;
    result = paySumOrder + tax;
    console.log(result);
    costPayAble.innerHTML = result + `تومان`;
    syncFoodDataToLocalStorage();
}
function registerOrderBtnClickHandler(){
    console.log("test")
    modalRegisterOrderWrapper.style.display = "flex";
}
function syncFoodDataToLocalStorage(){
    localStorage.setItem("foodData" , JSON.stringify(food));
}
