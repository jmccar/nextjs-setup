import * as pressyButton from './pressy-button';

const packages = {
    pressyButton,
};

const getThingFromPackages = (thing, packagesObject) =>
    Object.values(packagesObject).reduce((acc, pkg) => ({
        ...acc,
        ...pkg[thing],
    }), {});

export const reducers = getThingFromPackages('reducers', packages);
export const sagas = getThingFromPackages('sagas', packages);