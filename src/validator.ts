interface ValidatorDescription {
    validatorFunction: (value: any) => boolean,
    errorMessageFactory: (value: any) => string,
    validatorName?: string
}

export function validate(instance: any) {
    return Object.keys(instance['__validators__'])
        .map(key =>
            instance['__validators__'][key]
                .map((validatorDescription: ValidatorDescription) => {
                    const value = instance[key];
                    const isValid: boolean = validatorDescription.validatorFunction(value);

                    let errorMessage;

                    if (typeof validatorDescription.errorMessageFactory === 'string') {
                        errorMessage = validatorDescription.errorMessageFactory;
                    } else {
                        errorMessage = validatorDescription.errorMessageFactory(value);
                    }
                    return {
                        isValid,
                        value,
                        errorMessage: errorMessage,
                        fieldName: key,
                        validatorName: validatorDescription.validatorName
                    };
                })
                .filter((e: any) => !e.isValid)
        ).reduce((obj: any, items: any) => {
            if (items.length > 0) {
                if (obj[items[0].fieldName] === undefined) {
                    obj[items[0].fieldName] = []
                }
                obj[items[0].fieldName] = items.map((item: any) => ({
                    errorMessage: item.errorMessage,
                    validatorName: item.validatorName}));
            }

            return obj;
        }, {})
}