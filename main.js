// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  let specie = {
    specimenNum: specimenNum,
    dna: dna,
    mutate(){
      let randomBase = Math.floor(Math.random()*14);
      //console.log(`randomBase >> ${randomBase}`);
      let mutation = returnRandBase();
      //console.log(`antes this.dna[${randomBase}]>> ${this.dna[randomBase]}`);
      //console.log(`mutation >> ${mutation}`);
      while(this.dna[randomBase] === mutation){
          //console.log('entrou while');
          mutation = returnRandBase();
      }

      this.dna[randomBase] = mutation;
      //console.log(`depois this.dna[${randomBase}]>> ${this.dna[randomBase]}`);
      return this.dna;
    },
    compareDNA(pAequor){
      let count = 0;
      for(let i = 0; i < this.dna.length; i++)
      {
        for(let j = 0; j < pAequor.length; j++)
        {
          if(this.dna[i] === pAequor[j])
          {
            //console.log(`this.dna[i] ${this.dna[i]}`);
            if(i === j)
            {
              count++;
            }
          }
        }
      }
      //console.log(`count >> ${count}`);
      console.log(`DNA's are ${100*(count/this.dna.length)}% equal.`);
    },
    willLikelySurvive(){
      let countCG = 0;
      this.dna.forEach(dnaBase => {
        if(dnaBase === 'C' || dnaBase === 'G')
        {
          countCG++;
        } 
      })
      return 100*(countCG/this.dna.length) >= 60 ? true : false;
    }
  }
  //console.log('specie>> ' + JSON.stringify(specie));
  return specie;
};

/*
let tempObj = pAequorFactory(3,['C','C','T','C','C','T','G','C','G','G','C','C','T','G','A']);
console.log(tempObj.mutate());

console.log(tempObj.compareDNA(['A','A','T','C','C','T','G','A','C','T','C','A','T','G','A']));

console.log(tempObj.willLikelySurvive());
*/

let p1 = [ 'G', 'T', 'C', 'T', 'C', 'C', 'C', 'G', 'C', 'T', 'G', 'G', 'G', 'A', 'T', 'C', 'T', 'T', 'T', 'T', 'G', 'T', 'A', 'A', 'G', 'A', 'G', 'A', 'G', 'T' ];
let p2 = [ 'C', 'C', 'C', 'G', 'T', 'T', 'C', 'A', 'G', 'T', 'C', 'C', 'A', 'A', 'C', 'A', 'A', 'T', 'G', 'C', 'C', 'G', 'G', 'A', 'G', 'A', 'A', 'C', 'C', 'C' ];
let p3 = [ 'C', 'T', 'A', 'G', 'A', 'C', 'T', 'T', 'T', 'T', 'G', 'C', 'C', 'G', 'C', 'A', 'A', 'C', 'A', 'G', 'G', 'C', 'G', 'T', 'G', 'C', 'T', 'C', 'A', 'T' ];
let p4 = [ 'A', 'G', 'A', 'T', 'G', 'T', 'A', 'T', 'T', 'G', 'A', 'T', 'T', 'C', 'A', 'G', 'T', 'C', 'C', 'T', 'A', 'A', 'T', 'T', 'T', 'A', 'A', 'G', 'C', 'A' ];
let p5 = [ 'G', 'C', 'T', 'A', 'T', 'A', 'G', 'T', 'T', 'G', 'A', 'A', 'T', 'T', 'T', 'T', 'T', 'T', 'C', 'T', 'T', 'G', 'G', 'C', 'C', 'G', 'T', 'A', 'C', 'C' ];
let p6 = [ 'T', 'C', 'G', 'A', 'G', 'T', 'C', 'A', 'G', 'T', 'A', 'T', 'T', 'C', 'T', 'T', 'T', 'A', 'C', 'C', 'A', 'G', 'T', 'C', 'A', 'G', 'A', 'A', 'T', 'A' ];
let p7 = [ 'C', 'C', 'T', 'T', 'C', 'A', 'A', 'A', 'C', 'G', 'C', 'T', 'G', 'A', 'C', 'A', 'G', 'T', 'G', 'G', 'T', 'A', 'C', 'C', 'G', 'G', 'C', 'A', 'T', 'T' ];
let p8 = [ 'T', 'C', 'A', 'A', 'T', 'A', 'C', 'A', 'A', 'A', 'G', 'T', 'A', 'C', 'G', 'A', 'C', 'T', 'C', 'A', 'C', 'G', 'G', 'A', 'A', 'A', 'A', 'A', 'A', 'C' ];
let p9 = [ 'C', 'A', 'A', 'G', 'C', 'G', 'G', 'G', 'T', 'C', 'A', 'C', 'C', 'C', 'C', 'C', 'T', 'G', 'A', 'T', 'C', 'T', 'A', 'A', 'A', 'C', 'G', 'G', 'C', 'T' ];
let p10 = [ 'A', 'C', 'A', 'A', 'T', 'T', 'C', 'G', 'A', 'A', 'C', 'C', 'G', 'C', 'A', 'G', 'T', 'C', 'G', 'G', 'C', 'T', 'C', 'C', 'G', 'C', 'T', 'A', 'C', 'C' ];

let p11 = [ 'G', 'T', 'C', 'T', 'C', 'C', 'C', 'G', 'C', 'T', 'G', 'G', 'G', 'A', 'T', 'C', 'T', 'T', 'T', 'T', 'G', 'T', 'A', 'A', 'G', 'A', 'G', 'A', 'G', 'T' ];
let p12 = [ 'C', 'C', 'C', 'G', 'T', 'T', 'C', 'A', 'G', 'T', 'C', 'C', 'A', 'A', 'C', 'A', 'A', 'T', 'G', 'C', 'C', 'G', 'G', 'A', 'G', 'A', 'A', 'C', 'C', 'C' ];
let p13 = [ 'C', 'T', 'A', 'G', 'A', 'C', 'T', 'T', 'T', 'T', 'G', 'C', 'C', 'G', 'C', 'A', 'A', 'C', 'A', 'G', 'G', 'C', 'G', 'T', 'G', 'C', 'T', 'C', 'A', 'T' ];
let p14 = [ 'A', 'G', 'A', 'T', 'G', 'T', 'A', 'T', 'T', 'G', 'A', 'T', 'T', 'C', 'A', 'G', 'T', 'C', 'C', 'T', 'A', 'A', 'T', 'T', 'T', 'A', 'A', 'G', 'C', 'A' ];
let p15 = [ 'G', 'C', 'T', 'A', 'T', 'A', 'G', 'T', 'T', 'G', 'A', 'A', 'T', 'T', 'T', 'T', 'T', 'T', 'C', 'T', 'T', 'G', 'G', 'C', 'C', 'G', 'T', 'A', 'C', 'C' ];
let p16 = [ 'T', 'C', 'G', 'A', 'G', 'T', 'C', 'A', 'G', 'T', 'A', 'T', 'T', 'C', 'T', 'T', 'T', 'A', 'C', 'C', 'A', 'G', 'T', 'C', 'A', 'G', 'A', 'A', 'T', 'A' ];
let p17 = [ 'C', 'C', 'T', 'T', 'C', 'A', 'A', 'A', 'C', 'G', 'C', 'T', 'G', 'A', 'C', 'A', 'G', 'T', 'G', 'G', 'T', 'A', 'C', 'C', 'G', 'G', 'C', 'A', 'T', 'T' ];
let p18 = [ 'T', 'C', 'A', 'A', 'T', 'A', 'C', 'A', 'A', 'A', 'G', 'T', 'A', 'C', 'G', 'A', 'C', 'T', 'C', 'A', 'C', 'G', 'G', 'A', 'A', 'A', 'A', 'A', 'A', 'C' ];
let p19 = [ 'C', 'A', 'A', 'G', 'C', 'G', 'G', 'G', 'T', 'C', 'A', 'C', 'C', 'C', 'C', 'C', 'T', 'G', 'A', 'T', 'C', 'T', 'A', 'A', 'A', 'C', 'G', 'G', 'C', 'T' ];
let p20 = [ 'A', 'C', 'A', 'A', 'T', 'T', 'C', 'G', 'A', 'A', 'C', 'C', 'G', 'C', 'A', 'G', 'T', 'C', 'G', 'G', 'C', 'T', 'C', 'C', 'G', 'C', 'T', 'A', 'C', 'C' ];

let p21 = [ 'G', 'T', 'C', 'T', 'C', 'C', 'C', 'G', 'C', 'T', 'G', 'G', 'G', 'A', 'T', 'C', 'T', 'T', 'T', 'T', 'G', 'T', 'A', 'A', 'G', 'A', 'G', 'A', 'G', 'T' ];
let p22 = [ 'C', 'C', 'C', 'G', 'T', 'T', 'C', 'A', 'G', 'T', 'C', 'C', 'A', 'A', 'C', 'A', 'A', 'T', 'G', 'C', 'C', 'G', 'G', 'A', 'G', 'A', 'A', 'C', 'C', 'C' ];
let p23 = [ 'C', 'T', 'A', 'G', 'A', 'C', 'T', 'T', 'T', 'T', 'G', 'C', 'C', 'G', 'C', 'A', 'A', 'C', 'A', 'G', 'G', 'C', 'G', 'T', 'G', 'C', 'T', 'C', 'A', 'T' ];
let p24 = [ 'A', 'G', 'A', 'T', 'G', 'T', 'A', 'T', 'T', 'G', 'A', 'T', 'T', 'C', 'A', 'G', 'T', 'C', 'C', 'T', 'A', 'A', 'T', 'T', 'T', 'A', 'A', 'G', 'C', 'A' ];
let p25 = [ 'G', 'C', 'T', 'A', 'T', 'A', 'G', 'T', 'T', 'G', 'A', 'A', 'T', 'T', 'T', 'T', 'T', 'T', 'C', 'T', 'T', 'G', 'G', 'C', 'C', 'G', 'T', 'A', 'C', 'C' ];
let p26 = [ 'T', 'C', 'G', 'A', 'G', 'T', 'C', 'A', 'G', 'T', 'A', 'T', 'T', 'C', 'T', 'T', 'T', 'A', 'C', 'C', 'A', 'G', 'T', 'C', 'A', 'G', 'A', 'A', 'T', 'A' ];
let p27 = [ 'C', 'C', 'T', 'T', 'C', 'A', 'A', 'A', 'C', 'G', 'C', 'T', 'G', 'A', 'C', 'A', 'G', 'T', 'G', 'G', 'T', 'A', 'C', 'C', 'G', 'G', 'C', 'A', 'T', 'T' ];
let p28 = [ 'T', 'C', 'A', 'A', 'T', 'A', 'C', 'A', 'A', 'A', 'G', 'T', 'A', 'C', 'G', 'A', 'C', 'T', 'C', 'A', 'C', 'G', 'G', 'A', 'A', 'A', 'A', 'A', 'A', 'C' ];
let p29 = [ 'C', 'A', 'A', 'G', 'C', 'G', 'G', 'G', 'T', 'C', 'A', 'C', 'C', 'C', 'C', 'C', 'T', 'G', 'A', 'T', 'C', 'T', 'A', 'A', 'A', 'C', 'G', 'G', 'C', 'T' ];
let p30 = [ 'A', 'C', 'A', 'A', 'T', 'T', 'C', 'G', 'A', 'A', 'C', 'C', 'G', 'C', 'A', 'G', 'T', 'C', 'G', 'G', 'C', 'T', 'C', 'C', 'G', 'C', 'T', 'A', 'C', 'C' ];
let pAequorLst = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30];