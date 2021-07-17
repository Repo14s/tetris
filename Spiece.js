function clearRStateS0 () {
    ctx.clearRect(pBX,pBY,28,28)
    array[pointBY/30][pointBX/30] = 0

    ctx.clearRect (pCX,pCY,28,28)
    array[pointCY/30][pointCX/30] = 0   

    ctx.clearRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 0

    ctx.clearRect (pDX,pDY, 28,28)
    array[pointDY/30][pointDX/30] = 0

    ghostS0Remover()
}

function fillRStateS0 () {
    ctx.fillRect(pBX,pBY,28,28)
    array[pointBY/30][pointBX/30] = 3

    ctx.fillRect (pCX,pCY,28,28)
    array[pointCY/30][pointCX/30] = 3

    ctx.fillRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 3

    ctx.fillRect (pDX,pDY, 28,28)
    array[pointDY/30][pointDX/30] = 3

    ghostS0()
}

function clearRStateS1 () {
    ctx.clearRect(pBX,pBY,28,28)
    array[pointBY/30][pointBX/30] = 0

    ctx.clearRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 0

    ctx.clearRect (pFX,pFY,28,28)
    array[pointFY/30][pointFX/30] = 0   

    ctx.clearRect (pIX,pIY, 28,28)
    array[pointIY/30][pointIX/30] = 0

    ghostS1Remover()
}

function fillRStateS1 () {
    ctx.fillRect(pBX,pBY,28,28)
    array[pointBY/30][pointBX/30] = 3

    ctx.fillRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 3

    ctx.fillRect (pFX,pFY,28,28)
    array[pointFY/30][pointFX/30] = 3

    ctx.fillRect (pIX,pIY, 28,28)
    array[pointIY/30][pointIX/30] = 3

    ghostS1()
}

function clearRStateS2 () {
    ctx.clearRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 0

    ctx.clearRect (pFX,pFY,28,28)
    array[pointFY/30][pointFX/30] = 0   

    ctx.clearRect(pGX,pGY,28,28)
    array[pointGY/30][pointGX/30] = 0

    ctx.clearRect (pHX,pHY, 28,28)
    array[pointHY/30][pointHX/30] = 0

    ghostS2Remover()
}

function fillRStateS2 () {
    ctx.fillRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 3

    ctx.fillRect (pFX,pFY,28,28)
    array[pointFY/30][pointFX/30] = 3   

    ctx.fillRect(pGX,pGY,28,28)
    array[pointGY/30][pointGX/30] = 3

    ctx.fillRect (pHX,pHY, 28,28)
    array[pointHY/30][pointHX/30] = 3

    ghostS2()
}

function clearRStateS3 () {
    ctx.clearRect (pAX,pAY,28,28)
    array[pointAY/30][pointAX/30] = 0   

    ctx.clearRect(pDX,pDY,28,28)
    array[pointDY/30][pointDX/30] = 0

    ctx.clearRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 0

    ctx.clearRect (pHX,pHY, 28,28)
    array[pointHY/30][pointHX/30] = 0

    ghostS3Remover()
}

function fillRStateS3 () {
    ctx.fillRect (pAX,pAY,28,28)
    array[pointAY/30][pointAX/30] = 3

    ctx.fillRect(pDX,pDY,28,28)
    array[pointDY/30][pointDX/30] = 3

    ctx.fillRect (pEX,pEY,28,28)
    array[pointEY/30][pointEX/30] = 3

    ctx.fillRect (pHX,pHY, 28,28)
    array[pointHY/30][pointHX/30] = 3

    ghostS3()
}


function moveDownS () {
    s()
}

function moveLeftS () {
    if (rotationState === 0 && array[(pointAY/30)][(pointAX/30)] === 0 && array[(pointDY/30)][(pointDX/30)-1] === 0 )
//Left movement , rotationstate 0
    {
    clearRStateS0 ()
    minusX (30)
    fillRStateS0 ()
    }
//Left movement , rotationstate 1
    else if (rotationState ===1 && array[(pointAY/30)][(pointAX/30)] === 0 && array[(pointDY/30)][(pointDX/30)] === 0 && array[(pointHY/30)][(pointHX/30)] === 0 )
    {
      clearRStateS1 ()
    minusX (30)
    fillRStateS1 ()  
    }
    //Left movement , rotationstate 2
    else if (rotationState ===2 && array[(pointDY/30)][(pointDX/30)] === 0 && array[(pointGY/30)][(pointGX/30)-1] === 0 )
    {
      clearRStateS2 ()
    minusX (30)
    fillRStateS2 ()  
    }
      //Left movement , rotationstate 3
    else if (rotationState ===3&& array[(pointAY/30)][(pointAX/30)-1] === 0 && array[(pointDY/30)][(pointDX/30)-1] === 0 &&array[(pointGY/30)][(pointGX/30)] === 0)
    {
      clearRStateS3 ()
    minusX (30)
    fillRStateS3 ()  
    }
}

function moveRightS () {
//Right movement , rotationstate 0
    if (rotationState === 0 && array[(pointCY/30)][(pointCX/30)+1] === 0 && array[(pointFY/30)][(pointFX/30)] === 0 )
    {clearRStateS0 ()
    plusX (30)
    fillRStateS0 ()
    }
    //Right movement , rotationstate 1
    if (rotationState === 1 && array[(pointCY/30)][(pointCX/30)] === 0 && array[(pointFY/30)][(pointFX/30)+1] === 0 && array[(pointIY/30)][(pointIX/30)+1] === 0 )
    {clearRStateS1 ()
    plusX (30)
    fillRStateS1 ()
    }
       //Right movement , rotationstate 2
    if (rotationState === 2 &&  array[(pointFY/30)][(pointFX/30)+1] === 0 && array[(pointIY/30)][(pointIX/30)] === 0 )
    {clearRStateS2 ()
    plusX (30)
    fillRStateS2 ()
    }
        //Right movement , rotationstate 3
    if (rotationState === 3 && array[(pointBY/30)][(pointBX/30)] === 0 &&  array[(pointFY/30)][(pointFX/30)] === 0 && array[(pointIY/30)][(pointIX/30)] === 0 )
    {clearRStateS3 ()
    plusX (30)
    fillRStateS3 ()
    }
}

function moveUpS () {
    //Rotationstate 0 to 1
if (rotationState === 0 && array[pointFY/30][pointFX/30]=== 0 && array[pointIY/30][pointIX/30]=== 0)
{
clearRStateS0()
fillRStateS1()
rotationState =1
}else if (rotationState === 0 && array[(pointHY/30)][pointHX/30] !== 0 && array[(pointBY/30)-1][pointBX/30]=== 0 && array[pointFY/30][pointFX/30]=== 0 )
{ //Rotationstate 0 to 1 , WallKick
clearRStateS0()
minusY(30)
fillRStateS1()
rotationState =1
}
    //Rotationstate 1 to 2
else if (rotationState === 1 && array[pointGY/30][pointGX/30]=== 0 && array[pointHY/30][pointHX/30]=== 0)
{
clearRStateS1()
fillRStateS2()
rotationState =2
}
    //Rotationstate 1 to 2 Wallkick
else if (rotationState === 1 && array[pointHY/30][pointHX/30]=== 0 && array[pointFY/30][(pointFX/30)+1]=== 0)
{
clearRStateS1()
plusX(30)
fillRStateS2()
rotationState =2
}
    //Rotationstate 2 to 3
else if (rotationState === 2 && array[pointAY/30][pointAX/30]=== 0 && array[pointDY/30][pointDX/30]=== 0)
{
clearRStateS2()
fillRStateS3()
rotationState =3
}
    //Rotationstate 3 to 0
else if (rotationState === 3 && array[pointBY/30][pointBX/30]=== 0 && array[pointCY/30][pointCX/30]=== 0)
{
clearRStateS3()
fillRStateS0()
rotationState =0
}
    //Rotationstate 3 to 0 Wallkick
else if (rotationState === 3 && array[pointBY/30][pointBX/30]=== 0 && array[pointDY/30][(pointDX/30)-1]=== 0)
{
clearRStateS3()
minusX(30)
fillRStateS0()
rotationState =0
}
}


function moveZS () { 
//Rotationstate 0 to 3
if (rotationState === 0 && array[pointAY/30][pointAX/30]=== 0 && array[pointHY/30][pointHX/30]=== 0)
{
clearRStateS0()
fillRStateS3()
rotationState =3
}

//Rotationstate 0 to 3 Wallkick
else if (rotationState === 0 && array[(pointBY/30)-1][pointBX/30]=== 0 && array[pointFY/30][pointFX/30]=== 0)
{
clearRStateS0()
minusY(30)
fillRStateS3()
rotationState =3
}
//Rotationstate 3 to 2
else if (rotationState === 3 && array[pointFY/30][pointFX/30]=== 0 && array[pointGY/30][pointGX/30]=== 0)
{
clearRStateS3()
fillRStateS2()
rotationState =2
}

//Rotationstate 3 to 2 Wallkick
else if (rotationState === 3 && array[pointGY/30][pointGX/30]=== 0 && array[pointGY/30][(pointGX/30)-1]=== 0)
{
clearRStateS3()
minusX(30)
fillRStateS2()
rotationState =2
}
//Rotationstate 2 to 1
else if (rotationState === 2 && array[pointBY/30][pointBX/30]=== 0 && array[pointIY/30][pointIX/30]=== 0)
{
clearRStateS2()
fillRStateS1()
rotationState =1
}

//Rotationstate 1 to 0
else if (rotationState === 1 && array[pointCY/30][pointCX/30]=== 0 && array[pointDY/30][pointDX/30]=== 0)
{
clearRStateS1()
fillRStateS0()
rotationState =0
}
//Rotationstate 1 to 0 Wallkick
else if (rotationState === 1 && array[pointCY/30][pointCX/30]=== 0 && array[pointCY/30][(pointCX/30)+1]=== 0)
{
clearRStateS1()
plusX(30)
fillRStateS0()
rotationState =0
}

}


function hardDropS () {
       for (let k =0 ; k<100; k++) {
           if (rotationState === 0 && (array[(pointGY/30)+k][pointGX/30]!==0 || array[(pointHY/30)+k][pointHX/30]!==0 ||array[(pointFY/30)+k][pointFX/30] !==0))

{     
clearRStateS0()
plusY(k*30) 
fillRStateS0()
clearInterval(id3)
id3 = setInterval(s,0) 
            hardDropScoring(k)

break; 
}

else if ( rotationState === 1 && (array[(pointHY/30)+k][pointHX/30]!==0 || array[(pointIY/30)+1+k][pointIX/30]!==0)){    
clearRStateS1()
plusY(k*30) 
fillRStateS1()
clearInterval(id3)
id3 = setInterval(s,0)
            hardDropScoring(k)

break; 
}
else if (rotationState === 2 && (array[(pointHY/30)+1+k][pointHX/30]!==0 || array[(pointGY/30)+1+k][pointGX/30]!==0 || array[(pointIY/30)+k][pointIX/30]!==0)){    
clearRStateS2()
plusY(k*30) 
fillRStateS2()
clearInterval(id3)
id3 = setInterval(s,0) 
            hardDropScoring(k)

break; 
}
else if (rotationState === 3 && (array[(pointHY/30)+1+k][pointHX/30]!==0 || array[(pointGY/30)+k][pointGX/30]!==0))
{    
clearRStateS3()
plusY(k*30) 
fillRStateS3()
clearInterval(id3)
id3 = setInterval(s,0) 
            hardDropScoring(k)

break; 
}


}}

function ghostS0 () {
    for (let k =pointHY/30 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k-1][pointIX/30] !==0 || array[k][pointGX/30] !==0 ) ) {
            if (k-(pointHY/30)<1) {
                return
            }
            if (k-(pointHY/30)<2) {
                ctx.fillStyle = "#C5CDD8";      
                ctx.fillRect(pCX,(k-2)*30,28,28)
                ctx.fillRect(pDX,(k-1)*30,28,28) 
                ctx.fillRect(pEX,(k-1)*30,28,28) 
                ctx.fillStyle = "#00ff80"
                return
            }

            ctx.fillStyle = "#C5CDD8";           
            ctx.fillRect(pCX,(k-2)*30,28,28)
            ctx.fillRect (pBX,(k-2)*30,28,28)
            ctx.fillRect (pDX,(k-1)*30, 28,28)
            ctx.fillRect (pEX,(k-1)*30,28,28)
            ctx.fillStyle = "#00ff80"
            break;
        } 
    }
}

function ghostS0Remover () {
    for (let k =pointHY/30 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0  || array[k-1][pointIX/30] !==0 || array[k][pointGX/30] !==0) ) {  
            ctx.clearRect (pCX,(k-2)*30,28,28)
            ctx.clearRect (pEX,(k-1)*30,28,28)
            ctx.clearRect (pDX,(k-1)*30, 28,28)
            ctx.clearRect (pBX,(k-2)*30,28,28)
            break;
        }
    }
}

function ghostS1 () {
    for (let k =(pointIY/30)+1 ; k<21; k++) {
        if ((array[k-1][pointHX/30] !==0 || array[k][pointIX/30] !==0) ) {
            if (k-(pointHY/30)<2) {
                return
            }
            if (k-(pointIY/30)<2) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pHX,(k-1)*30, 28,28)
                ctx.fillRect (pIX,(k-1)*30,28,28)
                ctx.fillStyle = "#00ff80"
                return
            }

            if (k-(pointIY/30)<3) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pEX,(k-2)*30,28,28)
                ctx.fillRect (pIX,(k-1)*30, 28,28)
                ctx.fillStyle = "#00ff80"
                return
            }

            ctx.fillStyle = "#C5CDD8";           
            ctx.fillRect(pBX,(k-3)*30,28,28)
            ctx.fillRect (pEX,(k-2)*30,28,28)
            ctx.fillRect (pFX,(k-2)*30, 28,28)
            ctx.fillRect (pIX,(k-1)*30,28,28)
            ctx.fillStyle = "#00ff80"
            break;
        } 
    }
}

function ghostS1Remover () {
    for (let k =(pointIY/30)+1 ; k<21; k++) {
        if ((array[k-1][pointHX/30] !==0 || array[k][pointIX/30] !==0) )  {  
            ctx.clearRect(pBX,(k-3)*30,28,28)
            ctx.clearRect (pEX,(k-2)*30,28,28)
            ctx.clearRect (pFX,(k-2)*30, 28,28)
            ctx.clearRect (pIX,(k-1)*30,28,28)       
            break;
        }
    }
}

function ghostS2 () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k][pointGX/30] !==0 || array[k-1][pointIX/30] !==0) ) {
            if (k-(pointHY/30)<2) {
                return
            }
            if (k-(pointHY/30)<3) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pGX,(k-1)*30,28,28)
                ctx.fillRect (pHX,(k-1)*30,28,28)
                ctx.fillRect (pFX,(k-2)*30, 28,28)
                ctx.fillStyle = "#00ff80"
                return
            }


            ctx.fillStyle = "#C5CDD8";           
            ctx.fillRect(pHX,(k-1)*30,28,28)
            ctx.fillRect (pEX,(k-2)*30,28,28)
            ctx.fillRect (pGX,(k-1)*30, 28,28)
            ctx.fillRect (pFX,(k-2)*30,28,28)
            ctx.fillStyle = "#00ff80"
            break;
        } 
    }
}

function ghostS2Remover () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k][pointGX/30] !==0 || array[k-1][pointIX/30] !==0) ) {  
            ctx.clearRect(pHX,(k-1)*30,28,28)
            ctx.clearRect (pEX,(k-2)*30,28,28)
            ctx.clearRect (pGX,(k-1)*30, 28,28)
            ctx.clearRect (pFX,(k-2)*30,28,28)   
            break;
        }
    }
}

function ghostS3 () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k-1][pointGX/30] !==0) ) {
            if (k-(pointHY/30)<2) {
                return
            }
            if (k-(pointHY/30)<3) {
                ctx.fillStyle = "#C5CDD8";           
                ctx.fillRect (pDX,(k-2)*30, 28,28)
                ctx.fillRect (pHX,(k-1)*30,28,28)
                ctx.fillStyle = "#00ff80"
                return
            }

            ctx.fillStyle = "#C5CDD8";           
            ctx.fillRect(pAX,(k-3)*30,28,28)
            ctx.fillRect (pEX,(k-2)*30,28,28)
            ctx.fillRect (pDX,(k-2)*30, 28,28)
            ctx.fillRect (pHX,(k-1)*30,28,28)
            ctx.fillStyle = "#00ff80"
            break;
        } 
    }
}

function ghostS3Remover () {
    for (let k =(pointHY/30)+1 ; k<21; k++) {
        if ((array[k][pointHX/30] !==0 || array[k-1][pointGX/30] !==0)  ) {  
            ctx.clearRect(pAX,(k-3)*30,28,28)
            ctx.clearRect (pEX,(k-2)*30,28,28)
            ctx.clearRect (pDX,(k-2)*30, 28,28)
            ctx.clearRect (pHX,(k-1)*30,28,28)  
            break;
        }
    }
}