export const updateList = (oldObject, updatedProperties) => {
    return [
        ...oldObject,
        updatedProperties
    ];
};

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
