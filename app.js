// NOTE

let cheese = 0;


let clickUpgrades = [
    {
        name: 'pickaxe',
        price: 100,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'shovel',
        price: 200,
        quantity: 0,
        multiplier: 3
    }
]

let automaticUpgrades = [
    {
        name: 'rover',
        price: 600,
        quantity: 0,
        multiplier: 20
    },
    {
        name: 'mining rig',
        price: 1000,
        quantity: 0,
        multiplier: 1000
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

// NOTE Clickable upgrades

function buyPickaxe() {
    let pickaxe = clickUpgrades.find(c => c.name == 'pickaxe')
    if (cheese >= pickaxe.price) {
        cheese -= pickaxe.price
        pickaxe.quantity++
        pickaxe.price = pickaxe.price * 2
        document.getElementById('pick-cost').innerHTML = pickaxe.price
        console.log(pickaxe);
        update()
    }


    else alert('need more cheese');
}

function buyShovel() {
    let shovel = clickUpgrades.find(c => c.name == 'shovel')
    if (cheese >= shovel.price) {
        cheese -= shovel.price
        shovel.quantity++
        shovel.price = shovel.price * 2
        update()
    }

    else alert('Not enough cheese')
}



// NOTE UPDATE
function update() {
    document.getElementById('score').innerText = cheese
}


// NOTE Automatic upgrades
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

function buyRig() {
    let rig = automaticUpgrades.find(r => r.name == 'mining rig')
    if (cheese >= rig.price) {
        cheese -= rig.price
        rig.quantity++
        rig.price = rig.price * 2
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