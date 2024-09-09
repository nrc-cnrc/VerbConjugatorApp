// import {grammarCatItem} from "./grammar-cat-item.model";

// export interface ResultInput {
//     root: string;
//     option: string;
//     agent: string;
//     patient: string;
//   }
  
  export type ResultMorpheme = [
    breakdown: string,
    label: string
  ];
  
  export enum ResultMorphemeNameIndex {
    breakdown = 0,
    label = 1,
  }
  
  export type Result = ResultMorpheme[];

  export type Results = Result[];
  
//   export interface ResultObject {
//     input: ResultInput;
//     output: Result;
//   }
  
//   export type Results = ResultObject[];