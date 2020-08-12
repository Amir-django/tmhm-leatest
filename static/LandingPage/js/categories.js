function change(clicked){
		if( clicked=='cat1'){
			document.getElementById('cat1').innerHTML="<font size='4' color='#4834d4'>Data Science</font>";
			document.getElementById('cat2').innerHTML="<font size='4' color='black'>Buisness</font>";
			document.getElementById('cat3').innerHTML="<font size='4' color='black'>Marketing</font>";
			document.getElementById('cat4').innerHTML="<font size='4' color='black'>Web Designing</font>";
			document.getElementById('cat5').innerHTML="<font size='4' color='black'>Development</font>";
			document.getElementById('cat6').innerHTML="<font size='4' color='black'>Photography</font>";
			var output;
				output="<div class='carousel-inner'><div class='carousel-item active'><div class='container'><div class='row'>";
			// if(catt1.innerHTML==''){
				var arr=[["Data Science","digit.jpg","john marin","3h 17min"],["Data Science1","digit.jpg","john marin","3h 17min "],["Data Science2","digit.jpg","john marin","3h 17min "],["Data Science3","digit.jpg","john marin","3h 17min "],["Data Science4","digit.jpg","john marin","3h 17min "],["Data Science5","digit.jpg","john marin","3h 17min "],["Data Science6","digit.jpg","john marin","3h 17min "],["Data Science7","digit.jpg","john marin","3h 17min "]];
			 for(var i=0;i<arr.length;i++)
			 		{
			 output+="<div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'><div class='card card1'><img class='card-img-top' src='img/"+arr[i][1]+"'><div class='card-body'><h5 style='margin-top: -20px'>"+arr[i][0]+"</h5><p  style='float: left; margin-top:-10px;font-size: 18px'>"+arr[i][2]+"</p><br><br><p style='font-size: 15px;margin-left: -21px;margin-top:-30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;"+arr[i][3]+"&nbsp;&#8226;<b>1,235,037</b>Views</p></div></div></div>";
			 		}
              output+="</div></div></div><div class='carousel-item'><div class='container'><div class='row'>";
              var arr1=[["Data Science8","digit.jpg","john marin","3h 17min"],["Data Science9","digit.jpg","john marin","3h 17min "],["Data Science10","digit.jpg","john marin","3h 17min "],["Data Science11","digit.jpg","john marin","3h 17min "],["Data Science12","digit.jpg","john marin","3h 17min "],["Data Science13","digit.jpg","john marin","3h 17min "],["Data Science14","digit.jpg","john marin","3h 17min "],["Data Science15","digit.jpg","john marin","3h 17min "]];
			 for(var i=0;i<arr1.length;i++)
			 		{
			 output+="<div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'><div class='card card1'><img class='card-img-top' src='img/"+arr1[i][1]+"'><div class='card-body'><h5 style='margin-top: -20px'>"+arr1[i][0]+"</h5><p  style='float: left; margin-top:-10px;font-size: 18px'>"+arr1[i][2]+"</p><br><br><p style='font-size: 15px;margin-left: -21px;margin-top:-30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;"+arr1[i][3]+"&nbsp;&#8226;<b>1,235,037</b>Views</p></div></div></div>";
			 		}
			 		output+="</div></div></div>";

				
				catt1.innerHTML=output;


			}





		if( clicked=='cat2'){
			document.getElementById('cat1').innerHTML="<font size='4' color='black'>Data Science</font>";
			document.getElementById('cat2').innerHTML="<font size='4' color='#4834d4'>Buisness</font>";
			document.getElementById('cat3').innerHTML="<font size='4' color='black'>Marketing</font>";
			document.getElementById('cat4').innerHTML="<font size='4' color='black'>Web Designing</font>";
			document.getElementById('cat5').innerHTML="<font size='4' color='black'>Development</font>";
			document.getElementById('cat6').innerHTML="<font size='4' color='black'>Photography</font>";
			var output2;
				output2="<div class='carousel-inner'><div class='carousel-item active'><div class='container'><div class='row'>";
			// if(catt1.innerHTML==''){
				var arr2=[["Buisness","digit.jpg","john marin","3h 17min"],["Buisness1","digit.jpg","john marin","3h 17min "],["Buisness2","digit.jpg","john marin","3h 17min "],["Buisness3","digit.jpg","john marin","3h 17min "],["Buisness4","digit.jpg","john marin","3h 17min "],["Buisness5","digit.jpg","john marin","3h 17min "],["Buisness6","digit.jpg","john marin","3h 17min "],["Buisness7","digit.jpg","john marin","3h 17min "]];
			 for(var i=0;i<arr2.length;i++)
			 		{
			 output2+="<div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'><div class='card card1'><img class='card-img-top' src='img/"+arr2[i][1]+"'><div class='card-body'><h5 style='margin-top: -20px'>"+arr2[i][0]+"</h5><p  style='float: left; margin-top:-10px;font-size: 18px'>"+arr2[i][2]+"</p><br><br><p style='font-size: 15px;margin-left: -21px;margin-top:-30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;"+arr2[i][3]+"&nbsp;&#8226;<b>1,235,037</b>Views</p></div></div></div>";
			 		}
              output2+="</div></div></div><div class='carousel-item'><div class='container'><div class='row'>";
              var arr3=[["Buisness8","digit.jpg","john marin","3h 17min"],["Buisness9","digit.jpg","john marin","3h 17min "],["Buisness10","digit.jpg","john marin","3h 17min "],["Buisness11","digit.jpg","john marin","3h 17min "],["Buisness12","digit.jpg","john marin","3h 17min "],["Buisness13","digit.jpg","john marin","3h 17min "],["Buisness14","digit.jpg","john marin","3h 17min "],["Buisness15","digit.jpg","john marin","3h 17min "]];
			 for(var i=0;i<arr3.length;i++)
			 		{
			 output2+="<div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'><div class='card card1'><img class='card-img-top' src='img/"+arr3[i][1]+"'><div class='card-body'><h5 style='margin-top: -20px'>"+arr3[i][0]+"</h5><p  style='float: left; margin-top:-10px;font-size: 18px'>"+arr3[i][2]+"</p><br><br><p style='font-size: 15px;margin-left: -21px;margin-top:-30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;"+arr3[i][3]+"&nbsp;&#8226;<b>1,235,037</b>Views</p></div></div></div>";
			 		}
			 		output2+="</div></div></div>";

				
				catt1.innerHTML=output2;
			
		}

		if( clicked=='cat3'){
			document.getElementById('cat1').innerHTML="<font size='4' color='black'>Data Science</font>";
			document.getElementById('cat2').innerHTML="<font size='4' color='black'>Buisness</font>";
			document.getElementById('cat3').innerHTML="<font size='4' color='#4834d4'>Marketing</font>";
			document.getElementById('cat4').innerHTML="<font size='4' color='black'>Web Designing</font>";
			document.getElementById('cat5').innerHTML="<font size='4' color='black'>Development</font>";
			document.getElementById('cat6').innerHTML="<font size='4' color='black'>Photography</font>";
			// if(catt3.innerHTML==''){
				var output2;
				output2="<div class='carousel-inner'><div class='carousel-item active'><div class='container'><div class='row'>";
			// if(catt1.innerHTML==''){
				var arr2=[["Marketing","digit.jpg","john marin","3h 17min"],["Marketing1","digit.jpg","john marin","3h 17min "],["Marketing2","digit.jpg","john marin","3h 17min "],["Marketing3","digit.jpg","john marin","3h 17min "],["Marketing4","digit.jpg","john marin","3h 17min "],["Marketing","digit.jpg","john marin","3h 17min "],["Marketing6","digit.jpg","john marin","3h 17min "],["Marketing7","digit.jpg","john marin","3h 17min "]];
			 for(var i=0;i<arr2.length;i++)
			 		{
			 output2+="<div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'><div class='card card1'><img class='card-img-top' src='img/"+arr2[i][1]+"'><div class='card-body'><h5 style='margin-top: -20px'>"+arr2[i][0]+"</h5><p  style='float: left; margin-top:-10px;font-size: 18px'>"+arr2[i][2]+"</p><br><br><p style='font-size: 15px;margin-left: -21px;margin-top:-30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;"+arr2[i][3]+"&nbsp;&#8226;<b>1,235,037</b>Views</p></div></div></div>";
			 		}
              output2+="</div></div></div><div class='carousel-item'><div class='container'><div class='row'>";
              var arr3=[["Marketing","digit.jpg","john marin","3h 17min"],["Marketing","digit.jpg","john marin","3h 17min "],["Marketing","digit.jpg","john marin","3h 17min "],["Marketing","digit.jpg","john marin","3h 17min "],["Marketing","digit.jpg","john marin","3h 17min "],["Marketing","digit.jpg","john marin","3h 17min "],["Marketing","digit.jpg","john marin","3h 17min "],["Marketing","digit.jpg","john marin","3h 17min "]];
			 for(var i=0;i<arr3.length;i++)
			 		{
			 output2+="<div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'><div class='card card1'><img class='card-img-top' src='img/"+arr3[i][1]+"'><div class='card-body'><h5 style='margin-top: -20px'>"+arr3[i][0]+"</h5><p  style='float: left; margin-top:-10px;font-size: 18px'>"+arr3[i][2]+"</p><br><br><p style='font-size: 15px;margin-left: -21px;margin-top:-30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;"+arr3[i][3]+"&nbsp;&#8226;<b>1,235,037</b>Views</p></div></div></div>";
			 		}
			 		output2+="</div></div></div>";

				
				catt1.innerHTML=output2;



				
			}


		if( clicked=='cat4'){
			document.getElementById('cat1').innerHTML="<font size='4' color='black'>Data Science</font>";
			document.getElementById('cat2').innerHTML="<font size='4' color='black'>Buisness</font>";
			document.getElementById('cat3').innerHTML="<font size='4' color='black'>Marketing</font>";
			document.getElementById('cat4').innerHTML="<font size='4' color='#4834d4'>Web Designing</font>";
			document.getElementById('cat5').innerHTML="<font size='4' color='black'>Development</font>";
			document.getElementById('cat6').innerHTML="<font size='4' color='black'>Photography</font>";
			// if(catt4.innerHTML==''){
				var output2;
				output2="<div class='carousel-inner'><div class='carousel-item active'><div class='container'><div class='row'>";
			// if(catt1.innerHTML==''){
				var arr2=[["Web Designing","digit.jpg","john marin","3h 17min"],["Web Designing1","digit.jpg","john marin","3h 17min "],["Web Designing2","digit.jpg","john marin","3h 17min "],["Web Designing3","digit.jpg","john marin","3h 17min "],["Web Designing4","digit.jpg","john marin","3h 17min "],["Web Designing","digit.jpg","john marin","3h 17min "],["Web Designing6","digit.jpg","john marin","3h 17min "],["Web Designing","digit.jpg","john marin","3h 17min "]];
			 for(var i=0;i<arr2.length;i++)
			 		{
			 output2+="<div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'><div class='card card1'><img class='card-img-top' src='img/"+arr2[i][1]+"'><div class='card-body'><h5 style='margin-top: -20px'>"+arr2[i][0]+"</h5><p  style='float: left; margin-top:-10px;font-size: 18px'>"+arr2[i][2]+"</p><br><br><p style='font-size: 15px;margin-left: -21px;margin-top:-30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;"+arr2[i][3]+"&nbsp;&#8226;<b>1,235,037</b>Views</p></div></div></div>";
			 		}
              output2+="</div></div></div><div class='carousel-item'><div class='container'><div class='row'>";
              var arr3=[["Web Designing","digit.jpg","john marin","3h 17min"],["Web Designing","digit.jpg","john marin","3h 17min "],["Web Designing","digit.jpg","john marin","3h 17min "],["Web Designing","digit.jpg","john marin","3h 17min "],["Web Designing","digit.jpg","john marin","3h 17min "],["Web Designing","digit.jpg","john marin","3h 17min "],["Web Designing","digit.jpg","john marin","3h 17min "],["Web Designing","digit.jpg","john marin","3h 17min "]];
			 for(var i=0;i<arr3.length;i++)
			 		{
			 output2+="<div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'><div class='card card1'><img class='card-img-top' src='img/"+arr3[i][1]+"'><div class='card-body'><h5 style='margin-top: -20px'>"+arr3[i][0]+"</h5><p  style='float: left; margin-top:-10px;font-size: 18px'>"+arr3[i][2]+"</p><br><br><p style='font-size: 15px;margin-left: -21px;margin-top:-30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;"+arr3[i][3]+"&nbsp;&#8226;<b>1,235,037</b>Views</p></div></div></div>";
			 		}
			 		output2+="</div></div></div>";

				
				catt1.innerHTML=output2;
				
		}

		if( clicked=='cat5'){
			document.getElementById('cat1').innerHTML="<font size='4' color='black'>Data Science</font>";
			document.getElementById('cat2').innerHTML="<font size='4' color='black'>Buisness</font>";
			document.getElementById('cat3').innerHTML="<font size='4' color='black'>Marketing</font>";
			document.getElementById('cat4').innerHTML="<font size='4' color='black'>Web Designing</font>";
			document.getElementById('cat5').innerHTML="<font size='4' color='#4834d4'>Development</font>";
			document.getElementById('cat6').innerHTML="<font size='4' color='black'>Photography</font>";
			// if(catt5.innerHTML==''){
				var output2;
				output2="<div class='carousel-inner'><div class='carousel-item active'><div class='container'><div class='row'>";
			// if(catt1.innerHTML==''){
				var arr2=[["Development","digit.jpg","john marin","3h 17min"],["Development1","digit.jpg","john marin","3h 17min "],["Development2","digit.jpg","john marin","3h 17min "],["Development3","digit.jpg","john marin","3h 17min "],["Development4","digit.jpg","john marin","3h 17min "],["Development","digit.jpg","john marin","3h 17min "],["Development6","digit.jpg","john marin","3h 17min "],["Development7","digit.jpg","john marin","3h 17min "]];
			 for(var i=0;i<arr2.length;i++)
			 		{
			 output2+="<div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'><div class='card card1'><img class='card-img-top' src='img/"+arr2[i][1]+"'><div class='card-body'><h5 style='margin-top: -20px'>"+arr2[i][0]+"</h5><p  style='float: left; margin-top:-10px;font-size: 18px'>"+arr2[i][2]+"</p><br><br><p style='font-size: 15px;margin-left: -21px;margin-top:-30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;"+arr2[i][3]+"&nbsp;&#8226;<b>1,235,037</b>Views</p></div></div></div>";
			 		}
              output2+="</div></div></div><div class='carousel-item'><div class='container'><div class='row'>";
              var arr3=[["Development","digit.jpg","john marin","3h 17min"],["Development","digit.jpg","john marin","3h 17min "],["Development","digit.jpg","john marin","3h 17min "],["Development","digit.jpg","john marin","3h 17min "],["Development","digit.jpg","john marin","3h 17min "],["Development","digit.jpg","john marin","3h 17min "],["Development","digit.jpg","john marin","3h 17min "],["Development","digit.jpg","john marin","3h 17min "]];
			 for(var i=0;i<arr3.length;i++)
			 		{
			 output2+="<div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'><div class='card card1'><img class='card-img-top' src='img/"+arr3[i][1]+"'><div class='card-body'><h5 style='margin-top: -20px'>"+arr3[i][0]+"</h5><p  style='float: left; margin-top:-10px;font-size: 18px'>"+arr3[i][2]+"</p><br><br><p style='font-size: 15px;margin-left: -21px;margin-top:-30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;"+arr3[i][3]+"&nbsp;&#8226;<b>1,235,037</b>Views</p></div></div></div>";
			 		}
			 		output2+="</div></div></div>";

				
				catt1.innerHTML=output2;


		}

		if( clicked=='cat6'){
			document.getElementById('cat1').innerHTML="<font size='4' color='black'>Data Science</font>";
			document.getElementById('cat2').innerHTML="<font size='4' color='black'>Buisness</font>";
			document.getElementById('cat3').innerHTML="<font size='4' color='black'>Marketing</font>";
			document.getElementById('cat4').innerHTML="<font size='4' color='black'>Web Designing</font>";
			document.getElementById('cat5').innerHTML="<font size='4' color='black'>Development</font>";
			document.getElementById('cat6').innerHTML="<font size='4' color='#4834d4'>Photography</font>";
			// if(catt6.innerHTML==''){
				var output2;
				output2="<div class='carousel-inner'><div class='carousel-item active'><div class='container'><div class='row'>";
			// if(catt1.innerHTML==''){
				var arr2=[["Photography","digit.jpg","john marin","3h 17min"],["Photography1","digit.jpg","john marin","3h 17min "],["Photography2","digit.jpg","john marin","3h 17min "],["Photography3","digit.jpg","john marin","3h 17min "],["Photography4","digit.jpg","john marin","3h 17min "],["Photography5","digit.jpg","john marin","3h 17min "],["Photography","digit.jpg","john marin","3h 17min "],["Photography","digit.jpg","john marin","3h 17min "]];
			 for(var i=0;i<arr2.length;i++)
			 		{
			 output2+="<div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'><div class='card card1'><img class='card-img-top' src='img/"+arr2[i][1]+"'><div class='card-body'><h5 style='margin-top: -20px'>"+arr2[i][0]+"</h5><p  style='float: left; margin-top:-10px;font-size: 18px'>"+arr2[i][2]+"</p><br><br><p style='font-size: 15px;margin-left: -21px;margin-top:-30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;"+arr2[i][3]+"&nbsp;&#8226;<b>1,235,037</b>Views</p></div></div></div>";
			 		}
              output2+="</div></div></div><div class='carousel-item'><div class='container'><div class='row'>";
              var arr3=[["Photography","digit.jpg","john marin","3h 17min"],["Photography","digit.jpg","john marin","3h 17min "],["Photography","digit.jpg","john marin","3h 17min "],["Photography","digit.jpg","john marin","3h 17min "],["Photography","digit.jpg","john marin","3h 17min "],["Photography","digit.jpg","john marin","3h 17min "],["Photography","digit.jpg","john marin","3h 17min "],["Development","digit.jpg","john marin","3h 17min "]];
			 for(var i=0;i<arr3.length;i++)
			 		{
			 output2+="<div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'><div class='card card1'><img class='card-img-top' src='img/"+arr3[i][1]+"'><div class='card-body'><h5 style='margin-top: -20px'>"+arr3[i][0]+"</h5><p  style='float: left; margin-top:-10px;font-size: 18px'>"+arr3[i][2]+"</p><br><br><p style='font-size: 15px;margin-left: -21px;margin-top:-30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;"+arr3[i][3]+"&nbsp;&#8226;<b>1,235,037</b>Views</p></div></div></div>";
			 		}
			 		output2+="</div></div></div>";

				
				catt1.innerHTML=output2;

			}



	}