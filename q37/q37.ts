//Large Shirts: Default values in make_shirts
function make_shirts(size: string = "medium", message: string = "I love typescript"){
    console.log(`make ${size} tshirt with message ${message}`)
}
make_shirts()
make_shirts("medium")
make_shirts("small","coding is life")