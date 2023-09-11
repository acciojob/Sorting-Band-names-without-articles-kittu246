//your code here
let touristSpots = ['The Virupaksha Temple', 'a Victoria Memorial', 'Tajmahal'];

let regex =/\bthe\b|\ban\b|\ba\b/gi ;
let list_items =[];
let mp ={};
let final=[];

for(let i=0;i<touristSpots.length;i++){

    let items=touristSpots.replace(regex,"").trim();
    list_items.push(items);
    mp[items] = touristSpots[i];
}

list_items.sort();

for(let i of list_items) {

    final.push(mp[i]);
}

console.log(final);


