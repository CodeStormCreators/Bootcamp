const getNumber = async () => {
    return 42;
};

const printNumber = async () => {
    let num = await getNumber();
    console.log(num); // Output: 42
};

printNumber()