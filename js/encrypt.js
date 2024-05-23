
function onEncrypt() {
	const inputE = document.getElementById('inputE')
	const inputN = document.getElementById('inputN')
	let E = parseInt(inputE.value)
	let N = parseInt(inputN.value)
	if (!E || !N) {
		alert('请输入私钥中的E和N')
		return
	}
	// 用户明文
	const plaintext = document.getElementById('plaintext')
	let plainNums = []
	
	for (let char of plaintext.value) {
		// 普通字符转为unicode再转16进制
		let plainNum = '0x' + char.charCodeAt(0).toString(16)
		plainNums.push(plainNum)
	}
	
	let chiperChars = []
	for (let plainNum of plainNums) {
		// 16进制转10进制 然后 E 次方 % N 获得加密的十进制
		let chiperNum = parseInt((BigInt(parseInt(plainNum, 16)) ** BigInt(E)) % BigInt(N));
		// 加密的十进制转为16进制
		let tem = '0x' + chiperNum.toString(16)
		// 加密的十六进制转为加密的字符串
		chiperChars.push(tem)
	}
	const ciphertext = document.getElementById('ciphertext')
	ciphertext.textContent = chiperChars.join(' ')
}
