var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = "not bob"; //considered a global scope variable
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = 'Olivia';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Bob';
    return leastFavoriteCustomer;
}