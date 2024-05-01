const weakMap = new WeakMap();

function queryAPI(endpoint) {
    const key = JSON.stringify(endpoint);
    let count = weakMap.get(key) || 0;
    
    if (count >= 5) {
        throw new Error("Endpoint load is high");
    }

    weakMap.set(key, count + 1);
}

export { weakMap, queryAPI };
