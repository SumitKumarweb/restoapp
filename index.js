
let output1 = 0;
let count1 = 0;
document.getElementById("i1")?.addEventListener("click", () => {
    document.getElementById("output1").innerText = ++output1;
    ++count1;
})
document.getElementById("d1")?.addEventListener("click", () => {
    if (output1 >= 0) {
        document.getElementById("output1").innerText = --output1;
        --count1;
    }
})      
let output2 = 0;
let count2 = 0;
document.getElementById("i2")?.addEventListener("click", () => {
    document.getElementById("output2").innerText = ++output2;
    ++count2;
})
document.getElementById("d2")?.addEventListener("click", () => {
    if (output2 > 0) {
        document.getElementById("output2").innerText = --output2;
        --count2;
    }
})
let output3 = 0;
let count3 = 0;
document.getElementById("i3")?.addEventListener("click", () => {
    document.getElementById("output3").innerText = ++output3;
    ++count3;
})
document.getElementById("d3")?.addEventListener("click", () => {
    if (output3 > 0) {
        document.getElementById("output3").innerText = --output3;
        --count3;
    }
})

let output4 = 0;
let count4 = 0;
document.getElementById("i4")?.addEventListener("click", () => {
    document.getElementById("output4").innerText = ++output4;
    ++count4;
})

document.getElementById("d4")?.addEventListener("click", () => {
    if (output4 > 0) {
        document.getElementById("output4").innerText = --output4;
        --count4;
    }
})

let result = 0;
document.getElementById("addToCart")?.addEventListener("click", () => {
    result = output1 * 199 + output2 * 99 + output3 * 499 + output4 * 299;
    if (result > 0) {
        document.getElementById("no").classList.add("none");
        document.getElementById("bill").classList.remove("none");
        document.getElementById("addToCart").classList.add("none");
        document.getElementById("content").classList.add("none");

        document.getElementById("burgger").innerText = count1;
        document.getElementById("fries").innerText = count2;
        document.getElementById("pizza").innerText = count3;
        document.getElementById("toast").innerText = count4;

        document.getElementById("burggerTotal").innerText = output1 * 199;
        document.getElementById("friesTotal").innerText = output2 * 99;
        document.getElementById("pizzaTotal").innerText = output3 * 499;
        document.getElementById("toastTotal").innerText = output4 * 299;

        document.getElementById("total").innerText = result;

        document.getElementById("payNow")?.addEventListener("click", () => {
            alert("Pay successfully  : " + result + "Rs")
        })

        document.getElementById("paySplit")?.addEventListener("click", () => {

            document.getElementById("bill").classList.add("none");
            document.getElementById("billSplit").classList.remove("none");

            document.getElementById("btnSplit").addEventListener("click", () => {

                document.getElementById("billSplit").classList.remove("none");
                let last = document.getElementById("valueSplit").value;
                if (last > 0) {
                    document.getElementById("returnValue").innerText = Math.floor(result / last);
                    document.getElementById("last").addEventListener("click", () => {
                        alert("Thanks And Visit Again!")
                    })
                }
            })


        })
    } else {
        alert("Please Add Minmum 1 Items")
    }
})