export const getBackground = (hour) => {
    let backgroundURL = ""
    switch (hour) {
        case 0:
            backgroundURL = "/src/img/12-Late-Night.png"
        case 1:
            backgroundURL = "/src/img/01-Early-Morning.png"
            break;
        case 2:
            backgroundURL = "/src/img/02-Mid-Morning.png"
            break;
        case 3:
            backgroundURL = "/src/img/03-Late-Morning.png"
            break;
        case 4:
            backgroundURL = "/src/img/04-Early-Afternoon.png"
            break;
        case 5:
            backgroundURL = "/src/img/05-Mid-Afternoon.png"
            break;
        case 6:
            backgroundURL = "/src/img/06-Late-Afternoon.png"
            break;
        case 7:
            backgroundURL = "/src/img/07-Early-Evening.png"
            break;
        case 8:
            backgroundURL = "/src/img/08-Mid-Evening.png"
            break;
        case 9:
            backgroundURL = "/src/img/09-Late-Evening.png"
            break;
        case 10:
            backgroundURL = "/src/img/10-Early-Night.png"
            break;
        case 11:
            backgroundURL = "/src/img/11-Mid-Night.png"
            break;
        default:
            backgroundURL = "/src/img/10-Early-Night.png"
            break;
    }

    return {}
}