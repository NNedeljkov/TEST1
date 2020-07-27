//prvi zadatak
//ispisuje racun ali samo za 18+ godina, popust za godine deljive sa 7 je 15%,
// a za deljive sa 11 je 25%
//PROVERI ULAZNE PODATKE
{
    let godine = 21
    let kolicinaPica = 9
    let cenaPica = 180

    if(godine % 11 == 0 && godine >= 18){
        console.log(`Vas racun iznosi ${(kolicinaPica * cenaPica) * 0.75} dinara.`)
    }
    else if(godine % 7 == 0 && godine >= 18){
        console.log(`Vas racun iznosi ${(kolicinaPica * cenaPica) * 0.85} dinara.`)
    }
    else if(godine % 7 !== 0 && godine % 11 !== 0 && godine >= 18){
        console.log(`Vas racun iznosi ${(kolicinaPica * cenaPica)} dinara.`)
    }
    else {
        console.log(`Nemate dovoljno godina da biste kupovali alkoholna pica.`)
    }
}
//console.log(1800 * 0.75)