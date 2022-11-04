// NOTE

let cheese = 0;


let clickUpgrades = [
    {
        name: 'pickaxe',
        price: 100,
        quantity: 0,
        multiplier: 1
    }
]

let automaticUpgrades = [
    {
        name: 'rover',
        price: 600,
        quantity: 0,
        multiplier: 20,
    }
]



// NOTE Functions
function mine() {
    cheese++
    clickUpgrades.forEach(c => {
        if (c.quantity > 0) {
            cheese += c.quantity * c.multiplier
        }
    })


    // alert('Cheese')
    update()
}


function buyPickaxe() {
    let pickaxe = clickUpgrades.find(c => c.name == 'pickaxe')
    if (cheese >= pickaxe.price) {
        cheese -= pickaxe.price
        pickaxe.quantity++
        pickaxe.price = pickaxe.price * 2
        console.log(pickaxe);
        update()
    }


    else alert('need more cheese');
}


function update() {
    document.getElementById('score').innerText = cheese
}


function buyRover() {
    let rover = automaticUpgrades.find(a => a.name == 'rover')
    if (cheese >= rover.price) {
        cheese -= rover.price
        rover.quantity++
        rover.price = rover.price * 2
        update()
    }
    else alert('You need more cheese')

}

function collectAutoUpgrades() {
    automaticUpgrades.forEach(a => {
        if (a.quantity > 0) {
            cheese += a.quantity * a.multiplier
        }
    })
    update()
}


setInterval(collectAutoUpgrades, 3000);