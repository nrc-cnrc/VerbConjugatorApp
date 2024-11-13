import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy,
  Input
 } from '@angular/core';

 import{
  Result, 
  ResultMorphemeNameIndex,
  Tier,
 } from "../../models/result.model";

 import { AudioService } from '../../services/audio/audio.service';
 import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent implements OnInit {

  @Input() data: Result;
  @Input() tier: Tier;

  output: Result;
  morphType: number;
  audioExists: boolean = true;
  audioPath: string;
  // observeAudio$ = new BehaviorSubject(this.audioExists);

  constructor(private audio_service: AudioService) { }

  ngOnInit(): void {
    // Filter empty values and sort on position
    this.morphType = ResultMorphemeNameIndex.breakdown;
    this.output = this.data;
    console.log("this.output", this.output);
    this.determineAudio();
    // this.observeAudio$.next(this.audioExists);
    }

    determineAudio(){
      let key = "";
      for (let morpheme of this.output){
        key += morpheme[this.tier.key];
      }

      let audio_path = this.audio_service.retrieveFileName(key)
      console.log("result: audio_path",audio_path);
      if (audio_path){
        this.audioExists = false;
        this.audioPath = audio_path;
      }
    }


    playSound(){
      let audio = new Audio();
      audio.src = this.audioPath;
      console.log("audio.src", audio.src);
      audio.src = encodeURI(audio.src);
      audio.load();
      audio.play();
    }

}
