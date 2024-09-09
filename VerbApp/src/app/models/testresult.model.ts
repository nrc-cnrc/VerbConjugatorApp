// import {grammarCatItem} from "./grammar-cat-item.model";

// export interface ResultInput {
//     root: string;
//     option: string;
//     agent: string;
//     patient: string;
//   }
  
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