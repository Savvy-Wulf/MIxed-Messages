// Messages are going to be meaningful quotes.
const messages = [/*0*/["Change the world by being yourself. -Amy Poehler"], /*1*/["Die with memories, not dreams. -Unknown"], /*2*/["One day the people that dont even believe in you will tell everyone how they met you. -Johnny Depp"], /*3*/["Oh, the things you can find, if you dont stay behind. -Dr. Seuss"], /*4*/["Reality is wrong, dreams are for real. -Tupac"], /*5*/["Turn your wounds into wisdom. -Oprah Winfrey"], /*6*/["I have nothing to lose but something to gain. -Eminem"], /*7*/["The true meaning of life is to plant trees, under whose shade you do not expect to sit. -Nelson Henderson"], /*8*/["Life becomes easier when you learn to accept the apology you never got. -R. Brault"], /*9*/["Let the beauty of what you love be what you do. -Rumi"], /*10*/["When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us. -Helen Keller"]]

const mixedMessages = arr => {
    let randomIndex = Math.floor(Math.random() * 11);
    switch(randomIndex){
        case 0:
            return messages[0];
            break;
        case 1:
            return messages[1];
            break;
        case 2:
            return messages[2];
            break;
        case 3:
            return messages[3];
            break;
        case 4:
            return messages[4];
            break;
        case 5:
            return messages[5];
            break;
        case 6:
            return messages[6];
            break;
        case 7:
            return messages[7];
            break;
        case 8:
            return messages[8];
            break;
        case 9:
            return messages[9];
            break;
        case 10:
            return messages[10];
            break;
    }
    
};

let button = document.getElementById('quoteButton');
let quote = document.getElementById('quote');

function showQuote(){
    quote.innerHTML = mixedMessages();
};

button.addEventListener('click', showQuote)