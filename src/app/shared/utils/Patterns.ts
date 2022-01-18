export class Patterns {
    public static nomeCompleto = '([a-zA-ZéúíóáÉÚÍÓÁèùìòàÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂçÇ]+[ ]+)+(([a-zA-ZéúíóáÉÚÍÓÁèùìòàÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂçÇ]+))[ ]*';
    public static telefone = /\(\d{2}\)\d{4,5}-\d{4}/;
}

export class Masks {
    public static telefone = {
        fixo: ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        celular: ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    };

    public static masksTelefone(value: string) {
        value = value.replace(/\D/g, '');

        return value.length > 10 ? Masks.telefone.celular : Masks.telefone.fixo;
    }
}