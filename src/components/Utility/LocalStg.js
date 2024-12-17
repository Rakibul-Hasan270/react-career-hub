const getStoredCart = () => {
    const storedCart = localStorage.getItem('applied-job');
    if (storedCart) {
        return JSON.parse(storedCart);
    }
    return [];
}

const saveToLocalStg = id => {
    const storedAppliedCart = getStoredCart();
    const exists = storedAppliedCart.find(jobId => jobId === id);
    if (!exists) {
        storedAppliedCart.push(id);
        localStorage.setItem('applied-job', JSON.stringify(storedAppliedCart));
    }
}

export { getStoredCart, saveToLocalStg };