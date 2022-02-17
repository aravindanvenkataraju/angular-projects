import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten",
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, limit: number): unknown {
    console.log(limit);
    return value.substring(0, limit - 1) + "...";
  }
}
