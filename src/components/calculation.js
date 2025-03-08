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

    while(actCount.length!==2){
        for(let i=0;i<Math.ceil(actCount.length/2);i++){
                if(actCount[i].id===actCount[(actCount.length-1)-i].id) {
                    tempCount.push(actCount[i])
                }else{
                    let tc=actCount[i].count+actCount[(actCount.length-1)-i].count
                    
                    tempCount.push({letter:`p${i}`,count:tc,id:uuidv4()})
                }


        }
        actCount=[...tempCount];
        tempCount=[];
    }

    console.log(actCount)

    const lovePercentage = parseInt(`${actCount[0].count}${actCount[1].count}`);


    return lovePercentage;
    
}


