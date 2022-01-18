import { ValidationErrors } from '@angular/forms';
import { Pipe, Inject, PipeTransform, InjectionToken } from '@angular/core';


const defaultErrors = {
    required: ({ controlName }) => controlName ? `${controlName} é obrigatório` : `Campo obrigatório`,
    pattern: (error) => `Formato inválido`,
    telefone: (error) => `Telefone inválido`,
}

const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
    providedIn: 'root',
    factory: () => defaultErrors
});


@Pipe({ name: 'humanizeFormMessages' })
export class HumanizeFormMessagesPipe implements PipeTransform {

    constructor(@Inject(FORM_ERRORS) private messages: any) { }

    transform(
        validationErrors: ValidationErrors,
        controlName: string,
        overriddenMessages: {} = {}
    ) {
        if (!validationErrors) {
            return ''
        }

        // Allow the possibility to override messages
        const messages = {
            ...this.messages,
            ...overriddenMessages,
        }

        const messageKey = Object.keys(validationErrors)[0]
        const getMessage = messages[messageKey];

        const text = getMessage
            ? getMessage({ ...validationErrors[messageKey], controlName: controlName })
            : (controlName ? `${controlName} inválido` : 'Campo inválido');

        return text;
    }
}