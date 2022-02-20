import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverseString",
})
export class ReverseStringPipe implements PipeTransform {
  transform(text: string): string {
    return text.split("").reverse().join("");
  }
}
