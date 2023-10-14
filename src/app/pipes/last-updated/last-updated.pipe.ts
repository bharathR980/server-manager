import { Pipe, PipeTransform } from '@angular/core'; // Import your utility function
import { formatLastUpdated } from '.';

@Pipe({
  name: 'lastUpdated'
})
export class LastUpdatedPipe implements PipeTransform {
  transform(timestamp: number | string): string {
    return formatLastUpdated(timestamp);
  }
}
