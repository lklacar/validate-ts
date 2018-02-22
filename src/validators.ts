import Validate from "./validate";

const required = (val: any) => val !== null && val !== undefined && val !== '';
const maxLength = (length: number) => (val: any) => !(val.length > length);
const minLength = (length: number) => (val: any) => !(val.length < length);
const regEx = (regex: RegExp) => (val: any) => regex.test(String(val).toLowerCase());
const email = (val: any) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(val).toLowerCase());

const Required = (errorMessage: ((fieldValue: any) => string) | string = '') =>
    Validate(
        required,
        errorMessage,
        'Required'
    );


const MaxLength = (length: number, errorMessage: ((fieldValue: any) => string) | string = '') =>
    Validate(
        maxLength(length),
        errorMessage,
        'MaxLength'
    );

const MinLength = (length: number, errorMessage: ((fieldValue: any) => string) | string = '') =>
    Validate(
        minLength(length),
        errorMessage,
        'MinLength'
    );

const Regex = (regex: RegExp, errorMessage: ((fieldValue: any) => string) | string = '') =>
    Validate(
        regEx(regex),
        errorMessage,
        'MinLength'
    );

const Email = (errorMessage: ((fieldValue: any) => string) | string = '') =>
    Validate(
        email,
        errorMessage,
        'Email'
    );

export {
    Required,
    MinLength,
    MaxLength,
    Regex,
    Email
}