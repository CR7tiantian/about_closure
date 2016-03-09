(function() {
		var name = 'zl';
		var age = 23;
		var obj = {};
		function sayName(prop) {
			return prop;
		}
		obj.getName = function() {
			return sayName(name);
		};
		obj.getAge = function() {
			return age;
		};
		window.obj2 = obj;//将局部对象obj赋值给window.obj2，此时obj2为全局对象，因此外部能访问到(或者不使用var 直接obj2 = obj是一样的效果)
	})()
	alert(obj2);//object
	// alert(obj);  obj is not defined;
	alert(obj2.getName());//zl
	alert(obj2.getAge());//23
	alert(obj2.age);//undefined
	alert(obj2.sayName);//undefined
