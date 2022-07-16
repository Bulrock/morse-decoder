const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i += 10){
        let partOfString1 = '';
        let decodedString = '';
        partOfString1 = expr.slice(i, (10+i));
        if(partOfString1 !== '**********'){
            for (let j = 0; j < partOfString1.length; j += 2){
                partOfString2 = partOfString1.slice(j, (2+j));
                if(partOfString2 === '00'){
                    decodedString = decodedString;
                } else if (partOfString2 === '10'){
                    decodedString = decodedString+`${'.'}`;
                } else if(partOfString2 === '11'){
                    decodedString = decodedString+`${'-'}`;
                } 
            }
            result = result + `${MORSE_TABLE[decodedString]}`
        } else {
            decodedString = decodedString+`${' '}`;
            result = result + `${' '}`;
        }
    }
    return result
}

module.exports = {
    decode
}