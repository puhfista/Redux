export default function ({dispatch}) {
    return next => action => {
        console.log(action);

        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        action.payload.then(response => {
            console.log("...action", action);
            const newAction = {...action, payload: response};
            dispatch(newAction);
        });

        next(action);
    };
}