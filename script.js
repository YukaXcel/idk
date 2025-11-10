function checkbieaw() {
    const text = inputText.value ;
    if (!text) return result.innerHTML = "พิมพ์ก่อนน้าาา" ;
    const n = (Math.random() * 100).toFixed(2);
    result.innerHTML = `ความเบียวของคุณคือ: ${n}%` ;
}
