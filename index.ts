function hoverPhone(num: number): string{
    let reshetka: string = "#"
    return reshetka.repeat(7) + num.toString().slice(-4)
}
console.log(hoverPhone(89836993884))