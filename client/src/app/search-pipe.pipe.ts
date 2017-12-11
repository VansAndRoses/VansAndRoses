import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})

export class SearchPipePipe implements PipeTransform {
    transform(items: any[], categorySearch: string, locationSearch: string){
        if (items && items.length){
            return items.filter(item =>{
              console.log(item)
                if (categorySearch && item.category.indexOf(categorySearch) === -1){
                    return false;
                }
                if (locationSearch && item.location.indexOf(locationSearch) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            return items;
        }
    }
}
