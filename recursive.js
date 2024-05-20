// factorial of agiven non-negative integer -n

function factorial(n){

    if(n===1){
        return 1
        
    }else{

        return n*factorial(n-1)
    }

}

let n= 4
console.log(factorial(n));

// QUESTION 2
//single line of JavaScript code that uses destructuring to extract and store


const person1 ={
     "id": 1,
     "name": "Leanne Graham",
     "username": "Bret",
     "email": "Sincere@april.biz",
     "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    
  }
}

  const {address:{geo: {lat}}} = person1
//   console.log(person1);

// QUESTION 3
  let theJonathans = {
    children: [
      {
        name: 'Elias'
      },
      {
        name: 'Sarah',
        children: [
          {
            name: 'Max',
            children: [{
              name: 'Lily'
            }]
          },
          {
            name: 'Zoe'
          },
          {
            name: 'Theo'
          }
        ]
      },
      {
        name: 'Maria',
        children: [
          {
            name: 'Daniel'
          }
        ]
      },
      {
        name: 'David'
      }
    ]
  };

function nameDescendants(names){
    let descendants = []

    if(names.children){
        Array.from(names.children).forEach(child=>{
            descendants.push(child.name)

            if(child.children){
                descendants.push(...nameDescendants(child))

            }
        })
    }
    return descendants

}

let  descendants = nameDescendants(theJonathans)

console.log(descendants);
