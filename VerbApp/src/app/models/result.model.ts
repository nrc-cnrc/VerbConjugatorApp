// import {grammarCatItem} from "./grammar-cat-item.model";

  export interface Level {
    breakdown: boolean;
  }

  export type TierNames = "display" | keyof Level;

  export interface Tier {
    name: TierNames;
    separator: string;
    key: ResultMorphemeNameIndex;
    position: number;
    // options: TierOptions;
  };  

  // export interface TierOptions {
  //   language: "L1" | "L2";
  //   showName?: boolean;
  // }




  export type ResultMorpheme = [
    value: string,
    breakdown: string
  ];
  
  export enum ResultMorphemeNameIndex {
    value = 0,
    breakdown = 1,
  }
  
  export type Result = ResultMorpheme[];

  export type Results = Result[];


  export const TIERS: Tier[] = [
    {
      name: "display",
      key: ResultMorphemeNameIndex.value,
      position: 0,
      separator: "",
      // options: _defaultOptions,
    },
    // {
    //   name: "breakdown",
    //   key: ResultMorphemeNameIndex.value,
    //   position: 1,
    //   separator: "-",
    //   // options: _defaultOptions,
    // },
  ];
