import { v4 as uuidv4 } from 'uuid';




export function loveCalculator(data){
const one=data.firstname; 
const two= data.secondname;
    let number=[];
    let containedLetter=[];
    let tempCount=[];
    let actCount=[];


    let oneText=one.replace(/[^a-zA-Z]/g,'').toLowerCase();
    let twoText=two.replace(/[^a-zA-Z]/g,'').toLowerCase();
    let combine=(oneText + twoText).split('');
    console.log(combine)
    console.log('hello')

    for(let i=0;i<combine.length;i++){
        
        if (containedLetter.includes(combine[i])) continue;
        let count=0;
        for(let j=0;j<combine.length;j++){
            if(combine[i]===combine[j]){
                count+=1;
                

            }
            
        }
        containedLetter.push(combine[i])
        
        number.push({
            letter:combine[i],
            count:count,
            id: uuidv4()
        })
    }
    console.log(number)

    actCount=[...number];

    while(actCount.length>2){
        const len=actCount.length;
        for(let i=0;i<Math.floor(actCount.length/2);i++){
             
            let sum=actCount[i].count + actCount[len-1-i].count;

            if(sum>=10){
                tempCount.push({count:Math.floor(sum/10)})
                tempCount.push({count:sum%10})
            }else{
                tempCount.push({count:sum})
            }
        }
        if(len%2!==0){
            tempCount.push({count:actCount[Math.floor(len/2)].count})
        }
        actCount=[...tempCount];
        tempCount=[];
    }

    console.log(actCount)

    const lovePercentage = parseInt(`${actCount[0].count}${actCount[1].count}`);


    return lovePercentage;
    
}


