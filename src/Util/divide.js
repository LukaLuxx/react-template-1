const divide = (a, b) => {
    if (b !== 0) {
        return a / b;
    }
    throw new Error("Can't divide by zero");
};

export default divide;
