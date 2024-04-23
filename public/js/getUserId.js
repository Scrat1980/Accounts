export let getId = (event) => {
    let id = event.target.id * 1;

    if (! Number.isInteger(id))
    {
        return 0;
    }

    return id;
};
