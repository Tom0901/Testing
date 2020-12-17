let inputs = ["a", "b", "a", "b"],
  i2 = ["a", "b", "c", "a", "b", "a"],
  i3 = ["a", "a", "a", "a", "b", "b", "b", "c"];

class Util {
  main(inputs) {
    if (Array.isArray(inputs) !== true)
      return "please call #method with an array";
    let scannedArr = this.scan(inputs);
    this.getTotal(scannedArr);

    scannedArr.forEach((item) => {
      this.getTotal(item.unitPrice, item.specialPrice);
    });
  }

  scan(arr) {
    let newArr = [];
    arr.forEach((item) => {
      if (item === "a") {
        newArr.push({ unitPrice: 10, specialPrice: "3 for 25" });
      }
      if (item === "b") {
        newArr.push({ unitPrice: 20, specialPrice: "2 for 30" });
      }
      if (item === "c") {
        newArr.push({ unitPrice: 30, specialPrice: null });
      }
    });
    console.log(newArr);
    return newArr;
  }

  getTotal(price, specialPrice) {}
}

module.exports = {
  i: inputs,
  C: Util,
};
