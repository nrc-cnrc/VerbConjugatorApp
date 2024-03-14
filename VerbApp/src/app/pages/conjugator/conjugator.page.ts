import { Component, OnInit, Input } from '@angular/core';
// import {Clipboard} from '@angular/cdk/clipboard';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { grammarCatItem } from '../../models/grammar-cat-item.model';
import { grammarCat } from '../../models/grammar-cat.model';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { SearchPage } from '../../modals/search/search.page';
import { node } from "../../models/node.model";
import { VerbTooltipPage } from '../../modals/verb-tooltip/verb-tooltip.page';



@Component({
  selector: 'app-conjugator',
  templateUrl: './conjugator.page.html',
  styleUrls: ['./conjugator.page.scss']
})

export class ConjugatorPage implements OnInit {
  public verb0: any;
  public selectedType: any;

  open = '../../../assets/minusicon.png';
  closed = '../../../assets/plusicon.png';
  error = '';
  show_result = false;
  show_error = false;
  result = '';
  showVerb = '';
  selectedValues: any[];
  morph_colours = {"verb": "#db5f57", "person":"#5f57db", "tense": "#57db5f", "preverb": "#d3db57", "spelling": "blue", "mode":"#57d3db"}
  automaticClose = false;

  currentIndex = 0;
  information: Array<grammarCat> = [];
  myFunInformation$ = new BehaviorSubject(this.information);
  selectedOptions: { [id: string]: { translation, id, base } } = {};
  selectedPath: { [id: string]: node} = {};

  constructor(private modalController: ModalController, private service: DataService) { }

  ngOnInit() {
    this.information = JSON.parse(JSON.stringify(this.service.setinformation));
    this.myFunInformation$.subscribe(data =>{
      this.information = data;
    });
    this.myFunInformation$.next(JSON.parse(JSON.stringify(this.service.setinformation)));

    //Creates the array that contains the selected keys
    this.information.forEach(element => {
      let key = element.name;
      this.selectedOptions[key] = {
        translation: '',
        id: '',
        base: ''
      };
    });
    return 
  };

  getContent() {
    return document.querySelector('ion-content');
  }

  scrollToBottom() {
    let content= document.querySelector('ion-content');
    setTimeout(function () {
      content.scrollToBottom(500);
    }, 250);
    
  }

  scrollToTop() {
    this.getContent().scrollToTop(500);
  }

  scroll(id) {
    let el = document.getElementById(id);
    if (id == "result" || id == "error"){
    setTimeout(function () {el.scrollIntoView({ behavior: 'smooth', block: 'end' })}, 250);
    }else{
      setTimeout(function () {el.scrollIntoView({ behavior: 'smooth', block: 'start' })}, 500);
    }
  }

  updateDisabled(pos,index: number){
    /* 
    This function handles tasks relating to enabling and disabling available categories.
    Returns none
    */

    let i = index + 1
    this.disableLowerCat(i); // IMPORTANT: Disable must ALWAYS come before able, otherwise it will not enable the lower category
    this.ableCat(i);
  }

  updatePath(pos, index:number, selected){
    /*Function updates the path and the information for the follow category 
    pos is current cat
    index is the pos index
    selected is the selected option 
    */


    let prev_pos;
    let n;

    if (index == 0){
      prev_pos = pos;
      let root = this.service.tree.getRoot();
      n = root.getChild(selected.id);
    } else{
      prev_pos = this.information[index - 1].name;
      n = this.selectedPath[prev_pos].getChild(selected.id);
    }
    this.updateNodePath(n, pos);
    this.currentIndex = index + 1;
    if (index+1 >= this.information.length){
      this.Conjugate();
    }
    else{
      this.updateInformation(index+1, pos);
    }
    
  }


  ableCat(index: number){
    /*
    This function takes in an index and enables the next category
    to be accessible.
    */
    if (index < this.information.length){
      this.information[index].disabled = false;
      this.myFunInformation$.next(this.information);
    }
  }

  disableLowerCat(index: number){
    /*
    This function takes in an index and disables all categories lower than that, 
    so that the user cannot change a previous category without resetting the below categories.
    */
    
    let key: string;
    for(let i = index; i < this.information.length; i ++){ // find all categories at a lower index
      key = this.information[i].name; // get the name
      this.selectedOptions[key] = {translation: '', id: '', base:''};  // reset so that there is no selected option at that name
      this.information[i].disabled=true; // disable access
    }
  }

  

  setSelected(pos, selected) {
    /* 
    This function takes in the category name (pos as in part of speech)
    */
    this.selectedOptions[pos].translation = selected.translation;
    this.selectedOptions[pos].id = selected.id;
    this.selectedOptions[pos].base = selected.base;
  }


  updateNodePath(n: node, pos: string) {
    /*Updates path at the current cateogry with the newly created node object
    n is the newly created node object
    pos is the current category
     */
    this.selectedPath[pos] = n;
  }


  updateInformation(index: number, pos:string) {
    let selectFrom = this.service.setinformation[index].cat;
    this.information[index].cat = [];
    
    let children = this.selectedPath[pos].getChildren();
    selectFrom.forEach(element => {
      for (let i = 0; i < children.length; i++) {
        if (children[i].getId() == element.id){
          this.information[index].cat.push(element);
          break;
        }
      }
    });
    this.myFunInformation$.next(this.information);
  }

  Conjugate(){
    let canconjugate = true;
    Object.keys(this.selectedOptions).forEach(element => {
      if (this.selectedOptions[element].id === ''){
        canconjugate = false;
      }
    }); 
    if (!canconjugate){
      this.show_error = true;
      this.error = "Please make sure to choose an option from each category.";
      this.result = '';
      this.show_result = false;
      // this.scrollToBottom();
      this.scroll("error");
      return;
    }
    this.error = '';
    this.show_result = true;
    this.show_error = false;
    let results = this.service.conjugate(this.selectedOptions)[0];
    console.log("results", results);
    let coloured = '';
    for (let r = 0; r < results.length; r++){
      let rstr = results[r].toString();
      rstr = rstr.replace(/'/g, '"');
      
      coloured += rstr;
      // coloured += this.colourCode(rstr);
      coloured += "<br>";

    }
    
    document.getElementById("result").innerHTML = coloured;
    this.result = coloured;
    this.scroll("clear");
    // this.scrollToBottom();
  }

  async openModalSearch(whichSearch, index) {
    const modal = await this.modalController.create({
      component: SearchPage,
      componentProps: {
        'conj_type':whichSearch,
        'options':this.information[index].cat
      }
    });


    modal.onWillDismiss().then(dataReturned => {
      // trigger when about to close the modal
      if (dataReturned != null || dataReturned != undefined){
        if (dataReturned.data.id.length > 0) { // if something was returned, set it as the selected option
          this.selectedOptions[whichSearch].translation = dataReturned.data.translation;
          this.selectedOptions[whichSearch].id = dataReturned.data.id;
          this.selectedOptions[whichSearch].base = dataReturned.data.base;
          this.updateDisabled(whichSearch,index);
          this.updatePath(whichSearch,index, dataReturned.data);
          // let id = this.information[index + 1].name;
          // this.scroll(id);
        }
      }
    });

    // Currently does actively send information, but could be a useful feater that if a user already picked a verb that it
    // appears in the search when they search again (?)
    return await modal.present().then(_ => {
    });
  }

  async openModalToolTip(whichtip) {
    // with data
    const modal = await this.modalController.create({
      
      component: VerbTooltipPage,
      componentProps: {
        'conj_type':whichtip
      }
      
    });
    modal.onWillDismiss().then(dataReturned => {
    });

    return await modal.present().then(_ => {
    });
  }


  colourCode(conj_breakdown:string){
    let coloured = '';
    let in_pieces = JSON.parse(conj_breakdown);
    for (let piece = 0; piece < in_pieces.length; piece ++){
      if (in_pieces[piece][1] in this.morph_colours){
        coloured += '<span style="color: '+ this.morph_colours[in_pieces[piece][1]]+'">'+in_pieces[piece][0]+'</span>';
      } else{
        coloured += '<span style="color: white">'+in_pieces[piece][0]+'</span>';
      }
    }
    return coloured
  }


  ngOnDestory() {
    this.myFunInformation$.unsubscribe();
  }

  reset(){
    let key: string;
    for(let i = 0; i < this.information.length; i ++){ // find all categories at a lower index
      key = this.information[i].name; // get the name
      this.selectedOptions[key] = {translation: '', id: '', base:''};  // reset so that there is no selected option at that name
      this.information[i].disabled=true; // disable access
    }
    this.information[0].disabled=false;
    this.result = '';
    this.error = '';
    this.currentIndex = 0;
    this.show_result = false;
    this.show_error = true;
    this.scrollToTop();
  }

  playSound(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/boing.wav"
    audio.load();
    audio.play();
  }



}
