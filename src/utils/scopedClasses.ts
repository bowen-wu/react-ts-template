interface AttributeInterface {
    [propsName: string]: boolean;
}

const scopedClasses = (prefixClassName: string) => {
    return (name: AttributeInterface | string = '') => {
        if(name instanceof Object) {
            return Object.entries(name).filter(item => item[1]).map(item => item[0]).map(item => [prefixClassName, item].join('-')).join(' ');
        } else {
            return [prefixClassName, name].filter(Boolean).join('-');
        }
    }
};

export default scopedClasses;

