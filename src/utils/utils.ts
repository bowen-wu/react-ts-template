const errorHandle = (error: Error) => {
    console.error(error);
    window.location.replace(`${window.location.origin}/not_found`);
};

export default {
    errorHandle
};
