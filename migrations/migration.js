
const data = [
    {type:'monstro',
        description:'grupo de 1d6 orcs'},
    {type:'monstro',
        description:'está fugindo'},
    {type:'monstro',
        description:'bando de 2d6 goblins está distraídos'},
    {type:'monstro',
        description:'trio de ogros está atacando uma caravana'},
    {type:'monstro',
        description:'um bando de 3d6 kobolds está roubando um viajante'},
    {type:'npc',
        description:'1d6 peregrinos humanos'},
    {type:'npc',
        description:'1d6 elfos patrulheiros'},
    {type:'npc',
        description:'1d6 halflings viajantes'},
    {type:'npc',
        description:'1d6 anões comerciantes'},
    {type:'combat',
        description:'zumbi solitário'},
    {type:'combat',
        description:'bando de 1d6 robgoblins (tocaia)'},
    {type:'combat',
        description:'um bando de harpias voadoras'},
    {type:'combat',
        description:'Caralho de asas desconhecido'},
    {type:'event',
        description:'acampamento suspeito'},
    {type:'event',
        description:'monte de corpos empilhados'},
    {type:'event',
        description:'obelisco misterioso'},
    {type:'event',
        description:' grupo de górgons'},
    {type:'nature',
        description:'temporal'},
    {type:'nature',
        description:'eclipse'},
    {type:'nature',
        description:'nevoeiro'},
    {type:'nature',
        description:'incêndio'}
    //["uma Colina","uma Selva","uma Floresta","um Bosque","um Deserto","um Pântano","uma Planície","uma Montanha","um Penhasco","um Vale","uma Geleira","uma Caverna"],    
];

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/API', (err, db) => {
    db.collection(process.argv[2]).insert(data, (err, inserted) => {
        process.exit(0);
        return err ? console.log(err) : console.log('Banco populado com sucesso!');
    });
});