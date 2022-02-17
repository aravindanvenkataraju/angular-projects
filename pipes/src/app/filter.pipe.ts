import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, property: string): unknown {
    if (value.length === 0 || !filterString) {
      return value;
    }
    return value.filter((item) => item[property] === filterString);
  }
}
