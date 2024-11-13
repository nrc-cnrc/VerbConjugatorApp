  
  export type ResultMorpheme = [
    text: string,
  ];
  
  export enum ResultMorphemeNameIndex {
    text = 0,
  }
  
  export type Result = ResultMorpheme[];

  export type Results = Result[];
  
//   export interface ResultObject {
//     input: ResultInput;
//     output: Result;
//   }
  
//   export type Results = ResultObject[];