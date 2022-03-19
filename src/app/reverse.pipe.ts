import { IterableDiffers, Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'reverse',
// })
// export class ReversePipe implements PipeTransform {
//   transform(value) {
//     return value.slice().reverse();
//   }
// }
@Pipe({
  name: 'reverse',
  pure: false,
})
export class ReversePipe implements PipeTransform {
  differ: any;
  cached: any;
  constructor(private differs: IterableDiffers) {
    this.differ = this.differs.find([]).create();
  }

  transform(value) {
    const changes = this.differ.diff(value);
    if (changes) {
      this.cached = value.slice().reverse();
    }
    return this.cached;
  }
}
