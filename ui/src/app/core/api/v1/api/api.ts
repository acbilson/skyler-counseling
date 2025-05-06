export * from './auth.service';
import { AuthService } from './auth.service';
export * from './text.service';
import { TextService } from './text.service';
export const APIS = [AuthService, TextService];
