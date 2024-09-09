import { Injectable } from '@angular/core';
import * as Conjugation from '../../assets/JSON/conjugation.json';
import * as Information from '../../assets/JSON/information.json';
import * as JSONTree from '../../assets/JSON/category_tree.json';
import { grammarCat } from '../models/grammar-cat.model';
import { grammarCatItem } from '../models/grammar-cat-item.model';
import {ResultMorpheme, ResultMorphemeNameIndex, Result, Results} from '../models/result.model';
import { Tree } from 'src/app/models/tree.model';
import { node } from "../models/node.model";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  JsonTree_info = JSONTree['default'];
  conjugations = Conjugation['default']
  JsonTree = this.JsonTree_info[1]
  conj_order = this.JsonTree_info[0]  // level order of conjugation tree
  setinformation: Array<grammarCat> = [];

  tree = new Tree(new node('root'));

  constructor() {
    this.loadInformation();
    for (let item of this.setinformation){
      item.cat.forEach(child=>{
        if(typeof child.type_color === 'undefined'){
          child.type_color = "";
        }
      }); 
    }
    this.setinformation[0].disabled = false;
    let root_node = this.tree.getRoot();
    this.buildTree(this.JsonTree, root_node);
  }

  

  loadInformation(){ 
    this.setinformation = Information['default'].map(item => {
      let catItem = item.children.map(child => {
        let item: grammarCatItem = {
          translation: child.translation,
          id: child.id,
          base: child.base,
          type_color: child.type_color
        }
        return item;
      });

      let cat: grammarCat = {
        name: item.name,
        cat: catItem,
        open: false,
        disabled: true,
    }
    return cat;
    });
  }



  buildTree(tree, upper_node){
    // If the section given is a list/array, this is the final level of the tree/is the leafs
    if(Array.isArray(tree)){
      tree.forEach(id  =>{
        let n_level_node = new node(id);
        upper_node.addChild(n_level_node);
      })
      return;
    }
    // Otherwise, it is still a node level
    Object.keys(tree).forEach(id => {
      // for each key at this level, create a node
      let n_level_node = new node(id);
      // the previous node is the parent node
      upper_node.addChild(n_level_node);
      // If there is information below this node
      if (typeof tree[id] !== 'undefined' &&  typeof tree[id] != "string"){
        this.buildTree(tree[id],n_level_node);
      }
    });
    return;
   }

  
  conjugate(nodePath) {
    const results: Results = [];

    let final_node = nodePath[this.conj_order[this.conj_order.length-2]]
    let result_ids = final_node.getChildren()

    for (let id in result_ids){
      let result: Result;
      result = this.conjugations[result_ids[id]["id"]]
      results.push(result)
    }
    console.log("results", results);
    return results;
  }

}


