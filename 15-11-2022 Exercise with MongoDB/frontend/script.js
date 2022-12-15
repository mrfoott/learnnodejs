const axios = require("axios")

const data = async() => {
    await axios.get('http://localhost:9999/getAllPC')
    .then((res) => {
        if (res.data) {
            console.log("Data of PC is available!!!");
        } else {
            console.log("Data of PC is not available!!!");
        }
    })
}

const data2 = async() => {
    await axios.get('http://localhost:9999/getAllRam')
    .then((res) => {
        if (res.data) {
            console.log("Data of RAM is available!!!");
        } else {
            console.log("Data of RAM is not available!!!");
        }
    })
}

const data3 = async() => {
    await axios.get('http://localhost:9999/getAllChipset')
    .then((res) => {
        if (res.data) {
            console.log("Data of Chipset is available!!!");
        } else {
            console.log("Data of Chipset is not available!!!");
        }
    })
}

data()
data2()
data3()
