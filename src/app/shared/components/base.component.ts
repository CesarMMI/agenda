import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';

export abstract class BaseComponent {
  protected loading$ = inject(LoadingService).value$;
}
