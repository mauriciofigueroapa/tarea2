//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
function perfsquare(num1, num2) {
	cont = 0;
	numchainString = "";
	for (i = num1; i <= num2; i++){


		if (Math.sqrt(i)%1 == 0){
			numchainString += i.toString() + ", ";
			cont++
			}
		}
	choosennums = numchainString.substring(0, numchainString.length - 2);
	}

function sherlock(data) {
	cad0 = data.split("\n");
	n = cad0[0];
	rangecont = 0;
	fch1 = 1
	fch2 = 1;
	for (j = 0; j < n; j++) {
		cad1 = cad0[fch1];
		cad2 = cad0[fch2].split(" ");
		for (i = 0; i < 1; i++) {
			ch1 = 0;
			ch2 = 1;
			range1a = parseInt(cad2[ch1]);
			range1b = parseInt(cad2[ch2]);
			perfsquare(range1a, range1b);
			rangecont++;
			if (cont == 0) {
				console.log("El rango " + rangecont + " de " + range1a + " a " + range1b + " tiene " + cont + " cuadrados perfectos. " + choosennums);
			}
			if (cont >= 2) {
				console.log("El rango " + rangecont + " de " + range1a + " a " + range1b + " tiene " + cont + " cuadrados perfectos: " + choosennums + ".");
			}
			if (cont == 1) {
			console.log("El rango " + rangecont + " de " + range1a + " a " + range1b + " tiene " + cont + " cuadrado perfecto: " + choosennums + ".");
			}		
			ch1++;
			ch2++;
			}
		fch1++;
		fch2++;
		}
	}

sherlock(_INPUT);

