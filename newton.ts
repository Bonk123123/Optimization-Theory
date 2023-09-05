

let e: number = 0.001

const fun = (x1: number, x2: number, x3: number): number => {
    return (4*x1^2 + 3*x2^2 + x3^2 - 3*x1*x3 - x2*x3 + 8*x3)
}

const diffX1 = (x1: number, x2: number, x3: number): number => {
    return (8*x1 - 3*x3)
}

const diffX2 = (x1: number, x2: number, x3: number): number => {
    return (6*x2 - x3)
}

const diffX3 = (x1: number, x2: number, x3: number): number => {
    return (2*x3 - 3*x1 - x2 + 8)
}

const grad = (x1: number, x2: number, x3: number): number => {
    return Math.sqrt(diffX1(x1, x2, x3) ** 2 + diffX2(x1, x2, x3) ** 2 + diffX3(x1, x2, x3) ** 2)
}


let x: number = 1
let y: number = 1
let z: number = 1
let x1: number = 1
let y1: number = 1
let z1: number = 1

let dx: number = diffX1(x, y, z)
let dy: number = diffX1(x, y, z)
let dz: number = diffX1(x, y, z)

let t: number = 0.618034

let L: number = 0.1

let iterations: number = -1

let flag = true

let i1 = 0

// метод простой итерации


// do {

//     i1++

//     x1 = x - (L*diffX1(x, y, z))
//     y1 = y - (L*diffX2(x, y, z))
//     z1 = z - (L*diffX3(x, y, z))

//     // if (((Math.abs(x1 - x) < e) && (Math.abs(y1 - y) < e) && (Math.abs(z1 - z) < e)) === true) flag = false
//     if (grad(x1, y1, z1) < e) flag = false
//     console.log(++iterations, "|", x1.toFixed(4), y1.toFixed(4), z1.toFixed(4), "|", fun(x1, y1, z1), "|", grad(x1, y1, z1).toFixed(4) )
//     x = x1
//     y = y1
//     z = z1
    
// } while (flag)

let i2 = 0

// метод градиентного спуска с дроблением шага


let i3 = 0

// метод наискорейшего спуска
// do {
    
//     i3++

//     x1 = x - (L*diffX1(x, y, z))
//     y1 = y - (L*diffX2(x, y, z))
//     z1 = z - (L*diffX3(x, y, z))

//     const funL = (l: number): number => {
//         return fun(x1 - (L*diffX1(x1, y1, z1)) ,  y1 - (L*diffX2(x1, y1, z1)) , z1 - (L*diffX3(x1, y1, z1)))
//     }
//     // console.log(funL(L), L)
    
//     let e1: number = 0.001

//     let a = 0
//     let b = 0.2
//     while (b - a > e1) {
//         let c1: number = a + (1 - t)*(b - a)
//         let c2: number = a + t*(b - a)
//         if (funL(c1) < funL(c2)) b = c2
//         if (funL(c1) >= funL(c2)) a = c1
//     }
//     L = a
    
    

//     if (grad(x1, y1, z1) < e) flag = false
//     console.log(++iterations, "|", x1.toFixed(4), y1.toFixed(4), z1.toFixed(4), "|", fun(x1, y1, z1), "|", grad(x1, y1, z1).toFixed(4) )

//     x = x1
//     y = y1
//     z = z1

// } while (flag)

let i4 = 0

// метод Ньютона
// do {
    
//     i4++

//     x1 = x - (diffX1(x, y, z) / 8)
//     y1 = y - (diffX2(x, y, z) / 6)
//     z1 = z - (diffX3(x, y, z) / 2)
//     if (grad(x1, y1, z1) < e) flag = false
//     console.log(++iterations, "|", x1.toFixed(4), y1.toFixed(4), z1.toFixed(4), "|", fun(x1, y1, z1), "|", grad(x1, y1, z1).toFixed(4) )
//     x = x1
//     y = y1
//     z = z1
    
// } while (flag)

let i5 = 0

// метод Флетчера-Ривса
do {

    i5++
    
    x1 = x - (L*dx)
    y1 = y - (L*dy)
    z1 = z - (L*dz)

    if (grad(x1, y1, z1) < e) flag = false
    console.log(++iterations, "|", x1.toFixed(4), y1.toFixed(4), z1.toFixed(4), "|", fun(x1, y1, z1), "|", grad(x1, y1, z1).toFixed(4) )
    

    let b1: number = Math.max((grad(x1, y1, z1) ** 2) / (grad(x, y, z) ** 2), 0)

    dx = diffX1(x1, y1, z1) + b1*dx
    dy = diffX2(x1, y1, z1) + b1*dy
    dz = diffX3(x1, y1, z1) + b1*dz


    const funL = (l: number): number => {
        return fun(x1 - (l*dx), y1 - (l*dy), z1 - (l*dz))
    }
    
    let e1: number = 0.001
    let g: number = 0.000001


    let a = 0.09
    let b = 0.1
    while (b - a < e1) {
        let c1: number = a + (1 - t)*(b - a)
        let c2: number = a + t*(b - a)
        if (funL(c1) < funL(c2)) b = c2
        if (funL(c1) >= funL(c2)) a = c1
    }
    L = a


    

    x = x1
    y = y1
    z = z1

    

} while (flag)


console.log("answer:", x1, y1, z1)
console.log(i1, i2, i3, i4, i5)