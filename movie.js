console.log('person1:shows tickets');
console.log('person2:shows tickets');
const premovie = async()={
    const promisewifeticks = new Promise((resolve,reject) =>{
      setTimeout(() => {resolve('tickets')}, 3000);
    })
    const getpopcorn = new Promise((resolve,reject) => resolve('popcorn'));
    const addbutter = new Promise((resolve,reject) => resolve('butter'));
    const coldDrink =new Promise((resolve,reject) => resolve('colddrink'));
    
    let tickets = await promisewifeticks;
    
    console.log('wife:I got tickets');
    console.log('Husband:Lets go');
    console.log('wife:No I am Hungry');
    
    let popcorn = await getpopcorn;

    console.log('Husband:I got popcorn,Lets go in');
    console.log('wife:I want butter');
    
    let butter = await addbutter;
    
    console.log('Husband:I got butter,Lets go in');
    console.log('Husband:Do you want something else');
    console.log('wife:I want cold drink');
    
    let colddrink = await coldDrink;
    console.log('Husband:I got drinks,Lets go in');
    console.log('Husband:Do you want something else');
    console.log('wife:No its getting late');
    console.log('Husband:Lets go');
    
    return tickets;
    
}
premovie().then((m)=>console.log('person3:shows tickets'));


console.log('person4:shows tickets');
console.log('person5:shows tickets');