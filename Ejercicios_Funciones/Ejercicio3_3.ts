function computeScore(word: string) {
    const letters = word.toUpperCase().split('');
    return letters.reduce((accum: number, curr: string) => accum += getPointsFor(curr), 0);
  }
  
function getPointsFor(letter: string) {
    const lettersAndPoints = [
   ['AEOIULNRST', 1],
   ['DG', 2],
   ['BCMP', 3],
   ['FHVWY', 4],
   ['K', 5],
   ['JX', 8],
   ['QZ', 10],
    ];
  
   return lettersAndPoints.reduce((computedScore: number, pointsTuple: (string|number)[]) => {
        const [letters, score] = pointsTuple;
        if ((letters as string).split('').find((ll: string) => ll === letter)) {
            return computedScore += score as number;
        }
        return computedScore;
    }, 0);
  }
  
  console.log('[Ejercicio 3.3]', `zoologico vale ${computeScore('zoo')} puntos.`);