let stage = -1
let gender = 'f'

relate(stage, gender)

function relate(stage, gender)
{
    if(gender == 'f' && stage > 0)
    {
        r = "daughter"
    }
    else if(gender == 'm' && stage > 0)
    {
        r = "son"
    }
    else if (gender == 'm' && stage < 0)
    {
        r = "father"
    }
    else 
    {
        r = "mother"
    }
  

    switch(stage)
    {
        case -1:
            case 1:
                console.log(r)
                break;
            case 0:
                console.log("me");
                break;
        case -2:
            case 2:
                console.log("grand" + r);
                break;
        case -3:
        case 3:
            console.log("great grand" + r);
            break;
    }

}

