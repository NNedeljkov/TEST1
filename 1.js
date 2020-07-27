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
