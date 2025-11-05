function checkbieaw() {
    const text = inputText.value ;
    if (!text) return result.innerHTML = "pls type smth" ;
    const n = (Math.random() * 100).toFixed(2);
    result.innerHTML = `ความเบียวของคุณคือ: ${n}%` ;
}