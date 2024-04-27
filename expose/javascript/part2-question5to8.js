// Question 1
function discountPrices (prices, discount) {
    let discounted = []; 
    let finalPrice = 0; 

    for (let i = 0; i < prices.length; i++) { 
        let discountedPrice = prices[i] * (1 - discount); 
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    // console.log(i);
    // console.log(discountedPrice);
    // console.log(finalPrice);

    return discounted;
}

discountPrices ([100, 200, 300], 0.5);