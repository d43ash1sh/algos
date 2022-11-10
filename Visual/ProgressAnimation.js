
const 
    Steps = [ '/' , '-' , '\\' , '|' ] ,
    Text = 'Sorting' ;


export default function * animation (){
    
    let progress = 0;
    
    while (true){
        
        const chars = [ ... Text ];
        
        chars[progress % Text.length] = Steps[progress % 4];
        
        yield chars.join('');
        
        progress++;
    }
}
