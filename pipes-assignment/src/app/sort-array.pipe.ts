import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortArray",
})
export class SortArrayPipe implements PipeTransform {
  transform(value: []): Promise<[]> {
    return new Promise((resolve) => {
      console.log("performing sort");
      resolve(
        value.sort((first, second) => {
          if (first["name"] < second["name"]) {
            return -1;
          }
          if (first["name"] > second["name"]) {
            return 1;
          }
          return 0;
        })
      );
    });
  }
}
