import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goals',
  pure: false
})

export class GoalsPipe implements PipeTransform {
  transform(input: any[], filterGoals) {
    if(filterGoals != null) {
    var output: any[] = [];
    if (filterGoals === "lessGoals") {
      for (let i=0; i < input.length; i++) {
        if (input[i].goalsThisSeason < 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (filterGoals === "moreGoals") {
      for ( let i = 0; i < input.length; i++) {
        if (input[i].goalsThisSeason >= 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
}
