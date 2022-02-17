import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten",
})
export class ShortenPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let strValue = value as string;
    return strValue.substring(0, 9) + "...";
  }
}
