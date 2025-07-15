import { Injectable } from '@angular/core';
import { environment } from '@one-platform/src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  readonly production = environment.production;
  readonly showBanner = environment.showBanner;
}
