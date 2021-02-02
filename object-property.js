const student = [
    {id: 21, name: 'Omor Sani'},
    {id: 31, name: 'Manna Day'},
    {id: 41, name: 'Purnima'},
    {id: 51, name: 'Dipjol'},
    
];

const name = student.map (s => s.name);
const ids = student.map(s=> s.id )
const bigger = student.filter(s=> s.id>40);
const biggerOne = student.find(s=>s.id>40);
console.log(biggerOne);