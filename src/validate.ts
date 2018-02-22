function Validate(validatorFunction: (fieldValue: any) => boolean, errorMessage: ((fieldValue: any) => string) | string, validatorName?: string) {
    return function (target: any, propertyKey: string | symbol) {
        if (target['__validators__'] === undefined) {
            target['__validators__'] = {};
        }

        if (target['__validators__'][propertyKey] === undefined) {
            target['__validators__'][propertyKey] = [];
        }

        target['__validators__'][propertyKey].push({validatorFunction, errorMessageFactory: errorMessage, validatorName:validatorName});
    }
}

export default Validate;