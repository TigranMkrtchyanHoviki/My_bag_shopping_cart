const phones = document.querySelectorAll(".list_item")
const prices = [...document.querySelectorAll(".price")]
const remove_phone = document.querySelectorAll(".remove")
const count = document.querySelectorAll(".count")
const up_count_selected_phone = document.querySelectorAll(".up_count_selected_phone")
const down_count_selected_phone = document.querySelectorAll(".down_count_selected_phone")
const clear_cart = document.getElementById("clear_cart")
const totle = document.getElementById("total_price")

document.addEventListener("DOMContentLoaded", () => {
    totle.innerHTML = (prices.reduce((aggr, item) => {
         return aggr + (+item.innerHTML)
    }, 0)).toFixed(2)
})

remove_phone.forEach((item, index) => {
    item.addEventListener("click", () => {
        const total = +totle.innerHTML
        const artad1 = +prices[index].innerHTML
        const artad2 = +count[index].innerHTML
        totle.innerHTML = (total - (artad1*artad2)).toFixed(2)
        phones[index].remove()
    })
})

up_count_selected_phone.forEach((item, index) => {
    item.addEventListener("click", () => {
        count[index].innerHTML = +(count[index].innerHTML) + 1
        totle.innerHTML = (+totle.innerHTML + (+prices[index].innerHTML)).toFixed(2)
        
    })
})

down_count_selected_phone.forEach((item, index) => {
    item.addEventListener("click", () => {
        if(count[index].innerHTML === "2") {
            count[index].innerHTML = "1"
            totle.innerHTML = (+totle.innerHTML - (+prices[index].innerHTML)).toFixed(2)
        }else if(count[index].innerHTML === "1"){
            count[index].innerHTML = "1"
        }else {
            count[index].innerHTML = +(count[index].innerHTML) - 1
            totle.innerHTML = (+totle.innerHTML - (+prices[index].innerHTML)).toFixed(2)
        }
    })
})

clear_cart.addEventListener("click", () => {
    phones.forEach(item => {
        item.remove()
    })
    totle.innerHTML = "0.00"
})

