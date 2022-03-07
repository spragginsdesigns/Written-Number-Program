	function changeText() {
			var firstName = document.getElementById("fNameBox").value;
			var number = document.getElementById("numberBox").value;
			var result;
			number = parseFloat(number);

			switch(number) {
				case 1:
					result = "one";
					break;
				case 2:
					result = "two";
					break;
					case 3:
					result = "three";
					break;
					case 4:
					result = "four";
					break;
					case 5:
					result = "five";
					break;
				default:
					result = "is above the number five";
			}
				document.getElementById("message").innerHTML = (firstName + ", " + number + " is written " + result);
			}
			function clearText() {
				document.getElementById("message").innerHTML = ("<br>");
				document.getElementById("fNameBox").value = "";
				document.getElementById("numberBox").value = "";
			}
