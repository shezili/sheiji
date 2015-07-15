//验证账号不为空
//需要一个 id = p_username 的元素
function checkUsername() {
	var tag = document.getElementById("p_username");
	var src = document.getElementById("username");
	if ("" == src.value) {
		tag.style.color = "red";
		tag.innerHTML = "用户名不能为空!";
	} else if (src.value.length < 6) {
		tag.style.color = "red";
		tag.innerHTML = "用户名长度过短!";
	} else {
		tag.style.color = "green";
		tag.innerHTML = "√";
		return true;
	}
	return false;
}
// 验证邮箱不为空，且格式正确
// 需要一个 id = p_email 的P元素
function checkEmail() {
	var tag = document.getElementById("p_email");
	var src = document.getElementById("email");
	var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if ("" == src.value) {
		tag.style.color = "red";
		tag.innerHTML = "注册邮箱不能为空!";
	} else if (!myreg.test(src.value)) {
		tag.style.color = "red";
		tag.innerHTML = "请输入有效的邮箱地址!";
	} else {
		tag.style.color = "green";
		tag.innerHTML = "√";
		return true;
	}
	return false;
}
// 验证第一个密码不为空
// 需要一个 id = p_pwd1 的P元素
function checkPwdFirst() {
	var tag = document.getElementById("p_pwd1");
	var pwd1 = document.getElementById("pwd1");
	if ("" == pwd1.value) {
		tag.style.color = "red";
		tag.innerHTML = "密码不能为空!";
	} else if (pwd1.value.length < 6) {
		tag.style.color = "red";
		tag.innerHTML = "密码长度过短!";
	} else {
		tag.style.color = "green";
		tag.innerHTML = "√";
		return true;
	}
	return false;
}
// 验证第二个密码与第一个密码一致
// 需要一个 id = p_pwd2 的P元素
function checkPwdSecond() {
	var tag = document.getElementById("p_pwd2");
	var pwd1 = document.getElementById("pwd1");
	var pwd2 = document.getElementById("pwd2");
	if (pwd1.value != pwd2.value) {
		tag.style.color = "red";
		tag.innerHTML = "与第一遍密码不一致!";
	} else if ("" == pwd2.value) {
		tag.style.color = "red";
		tag.innerHTML = "重复密码不能为空!";
	} else {
		tag.style.color = "green";
		tag.innerHTML = "√";
		return true;
	}
	return false;
}
// 验证手机号码格式是否正确
// 需要一个 id = p_tel 的P元素
// 可以为空
function checkTel() {
	var tag = document.getElementById("p_tel");
	var src = document.getElementById("tel");
	var myreg = /^1\d{2,8}\d{8,8}$/;
	if ("" == src.value) {
		return;
	} else if (!myreg.test(src.value)) {
		tag.style.color = "red";
		tag.innerHTML = "请输入有效的手机号!";
	} else {
		tag.style.color = "green";
		tag.innerHTML = "√";
		return true;
	}
	return false;
}
// 必定不能为空
function checkTel2() {
	var tag = document.getElementById("p_tel");
	var src = document.getElementById("tel");
	var myreg = /^1\d{2,8}\d{8,8}$/;
	if (!myreg.test(src.value)) {
		tag.style.color = "red";
		tag.innerHTML = "请输入有效的手机号!";
	} else {
		tag.style.color = "green";
		tag.innerHTML = "√";
		return true;
	}
	return false;
}
// 验证QQ号格式是否正确
// 需要一个 id = p_qq 的P元素
function checkQQ() {

	var myreg = /^[1-9]\d{4,11}$/;
	if ("" == src.value) {
		return;
	} else if (!myreg.test(src.value)) {
		tag.style.color = "red";
		tag.innerHTML = "请输入有效的QQ号!";
	} else {
		tag.style.color = "green";
		tag.innerHTML = "√";
		return true;
	}
	return false;
}
// 验证标题格式是否正确
// 需要一个 id = p_title 的P元素
function checkTitle() {
	var tag = document.getElementById("p_title");
	var src = document.getElementById("title");
	if ("" == src.value) {
		tag.style.color = "red";
		tag.innerHTML = "标题不能为空!";
	} else {
		tag.style.color = "green";
		tag.innerHTML = "√";
		return true;
	}
	return false;
}
function checkOther(src) {
	var tag = src.nextSibling.nextSibling;
	if ("" == src.value) {
		tag.style.color = "red";
		tag.innerHTML = "此处不能为空!";
	} else {
		tag.style.color = "green";
		tag.innerHTML = "√";
		return true;
	}
	return false;
}

function checkSelect(obj) {
	var tag = obj.nextSibling.nextSibling;
	if (obj.selectedIndex == 0) {
		tag.style.color = "red";
		tag.innerHTML = "请选择！";
	} else {
		tag.style.color = "green";
		tag.innerHTML = "√";
		return true;
	}
	return false;
}

function checkIdNum() {
	var tag = document.getElementById("p_idNum");
	var src = document.getElementById("idNum");
	var myreg = /\d{18,18}$/;
	if (!myreg.test(src.value)) {
		tag.style.color = "red";
		tag.innerHTML = "请输入有效的身份证号码!";
	} else {
		tag.style.color = "green";
		tag.innerHTML = "√";
		return true;
	}
	return false;
}
// 验证码验证
function changeValidateCode() {
	var obj = document.getElementById("yanzhengma");
	// 获取当前的时间作为参数，无具体意义
	var timenow = new Date().getTime();
	// 每次请求需要一个不同的参数，否则可能会返回同样的验证码
	// 这和浏览器的缓存机制有关系，也可以把页面设置为不缓存，这样就不用这个参数了。
	obj.src = "rand.action?d=" + timenow;
	return false;
}
function checkTime(obj){
	var list = document.getElementsByName(obj);
	var lock=false;
	for ( var i = 0; i < list.length && !lock; i = i + 1) {
		(function(i) {
			if(list[i].checked)
				lock=true;
		})(i)
	}
	if(lock)
		return true;
	return false;
}
function hand(obj){
	obj.style.cursor = "hand";
}
function checkNull(){
	var src=document.getElementById("content");
	if(src.value=="")
		src.value="请输入内容...";
	else if(src.value=="请输入内容...")
		src.value="";
}
