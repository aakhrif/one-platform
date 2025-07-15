import { TranslationService } from '../services/translation.service';

export function translationInitializerFactory(translation: TranslationService) {
  return translation.setLanguage('de');
}
