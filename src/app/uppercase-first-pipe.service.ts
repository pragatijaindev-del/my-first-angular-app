import { Pipe, PipeTransform } from '@angular/core';
//used to transfome data only  first charcter of each string 
@Pipe({
  name: 'uppercaseFirst'
})
// enforce implementation of transform()
export class UppercaseFirstPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value; // handles empty or null values
    return value[0].toUpperCase() + value.slice(1); // capitalize first charcter only
    // here slice () is typescript inbuilt method used to show a part of string or array
  }
}
 