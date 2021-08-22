let isPromoApplied = false;
//storage configuration
document.getElementById("memory-8").addEventListener('click', function () {
    document.getElementById("extra-memory").innerText = '0';
    totalCost();
});

//memory configuration
document.getElementById("memory-16").addEventListener('click', function () {
    document.getElementById("extra-memory").innerText = '180';
    totalCost();
});


document.getElementById("storage-256").addEventListener('click', function () {
    document.getElementById("extra-storage").innerText = '0';
    totalCost();
});

document.getElementById("storage-512").addEventListener('click', function () {
    document.getElementById("extra-storage").innerText = '100';
    totalCost();
});

document.getElementById("storage-1").addEventListener('click', function () {
    document.getElementById("extra-storage").innerText = '180';
    totalCost();
});

//delivery configuration
document.getElementById("free-delivary").addEventListener('click', function () {
    document.getElementById("delivery-charge").innerText = '0';
    totalCost();
});

document.getElementById("paid-delivary").addEventListener('click', function () {
    document.getElementById("delivery-charge").innerText = '20';
    totalCost();
});

//promo code configuration

document.getElementById("code-apply-button").addEventListener('click', function () {
    const promoCode = document.getElementById("input-promo-code").value;
    console.log(promoCode);
    document.getElementById("input-promo-code").value = '';
    applyPromoCode(promoCode);
    document.getElementById("input-promo-code").value = '';

});



//cost calculation
function totalCost() {
    const bestPrice = parseFloat(document.getElementById("best-price").innerText);
    const extraMemoryCost = parseFloat(document.getElementById("extra-memory").innerText);
    const ExtraStorageCost = parseFloat(document.getElementById("extra-storage").innerText);
    const extraDeliveryCharge = parseFloat(document.getElementById("delivery-charge").innerText);
    document.getElementById("total-price").innerText = (bestPrice + extraMemoryCost + ExtraStorageCost + extraDeliveryCharge).toString();
    document.getElementById("final-price").innerText = (bestPrice + extraMemoryCost + ExtraStorageCost + extraDeliveryCharge).toString();
    isPromoApplied = false;
}

//promo code calculation
function applyPromoCode(code) {
    if (code === 'stevekaku' && isPromoApplied === false) {
        isPromoApplied = true;
        const totalCost = parseFloat(document.getElementById("final-price").innerText);
        const finalCost = (totalCost * 0.8);
        document.getElementById("final-price").innerText = finalCost.toString();
    }
}
