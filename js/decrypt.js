function onDecrypt() {
    const inputD = document.getElementById('inputD');
    const inputN = document.getElementById('inputN');
    let D = parseInt(inputD.value, 10); // 解密时使用私钥指数D
    let N = parseInt(inputN.value, 10);
    if (!D || !N) {
        alert('请输入私钥中的D和N');
        return;
    }
    
    const ciphertext = document.getElementById('ciphertext');
    let cipherNums = ciphertext.value.split(' '); 
	let plainNums = []
	let plainText = []
    for (let cipherNum of cipherNums) {
		// 加密的十六进制转为加密的十进制
		let tem = parseInt(cipherNum, 16)
		// 加密的十进制获得明文的十进制
		let plainOct = parseInt(BigInt(tem) ** BigInt(D) % BigInt(N));
		// 明文的十进制转为明文的十进制
		plainNums.push(plainOct)
	}
	for (let num of plainNums) {
		let char = String.fromCharCode(num)
		plainText.push(char)
	}
    // 将解密后的字符数组合并为字符串
    let plaintext = plainText.join('');
    document.getElementById('plaintext').textContent = plaintext;
}
