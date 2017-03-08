function OpenInfo(e){
	var el = document.getElementById("TeacherInfo");
	
	if(el.getAttribute("data-open") == 0){
		
		//Build a database of teachers here
		switch(e){
			case 0:
				document.getElementById("TeachH1").textContent = "Jason Sheffield";
				document.getElementById("TeachDiv").textContent = "My name is Jason Sheffield and I have been a teacher here at Ardrey Kell High School since 2011, prior to that, I spent 18 years teaching at Harding University High School. I have a Master's Degree in Trade and Industrial Education form North Carolina A&T and a Bachelor's Degree in Mechanical Engineering from the University of Tennessee (Go Vols). I grew up in England and spend way too much time watching the beautiful game. I have been blessed to have found a woman way too good for me who inexplicably married me in 1992 - Suzanne is an Exceptional Children's teacher at Independence High School. Suzanne and I are the proud parents of a wonderful young man - Gabriel Quinn.";
				document.getElementById("TeachImg").src = "http://cleantech4us.github.io/AKCTE/Teacher/sheff.jpg";
				break;
			case 1:
				document.getElementById("TeachH1").textContent = "Elaine Friar";
				document.getElementById("TeachDiv").textContent = "I am Elaine Friar and I have taught Business Education for 20 years. I am originally from South Carolina and received my B.S. in Business Education from Winthrop College (long before its name changed to Winthrop University). I have taught in several different states as I followed my husband in his navy career. We moved to Charlotte in 2000 along with our two children, Claudia and AJ. I earned my Master's of Education from the University of Maryland. In 2005, I became a National Board Certified teacher in Career and Technical Education. At this time, I am a sponsor of the National Technical Honor Society (NTHS) and Future Business Leaders of America (FBLA). All business students should join FBLA and participate at the school, district, state and national competitions. Please encourage your juniors and seniors to excel so that they may become a member of NTHS, the prestigious honor society for Career and Technical Education students.";
				document.getElementById("TeachImg").src = "http://cleantech4us.github.io/AKCTE/Teacher/friar.jpg";
				break;
			case 2:
				document.getElementById("TeachH1").textContent = "John Glenn";
				document.getElementById("TeachDiv").textContent = "My name is John Glenn, and I am the Drafting and Civil Engineering teacher at Ardrey Kell High School. I am a native Charlottean and attended South Mecklenburg High School, graduating in 1983. I attended both the University of Tennessee in Knoxville, and North Carolina State University in Raleigh, graduating from NC State in 1989 with a Bachelor's Degree of Science in Industrial Arts Education. Upon graduation I taught Technology Education for eight years at South Mecklenburg High School, then taught Tech. Ed. at David W. Butler High School for one year in 1998. I spent the next ten years working in the home-building industry as a CAD operator and CAD Department Manager for Shea Homes in Charlotte. In 2008 I re-entered the teaching profession at Harding University High School teaching Drafting and Civil Engineering. In 2011, I was fortunate enough to be able to transfer to Ardrey Kell High School...without a doubt, the best place to teach in North Carolina! I have been married to my wife Shelby for 26 years, and have two children. My son Daniel is married to Samantha Glenn, and lives in Knoxville, Tennessee, and my daughter Kelli is a junior at Western Carolina University majoring in Psychology. I also have a Jack Russell terrier named 'Jack' of all things. He showed up at my house and adopted my family about 5 years ago! I also have a sweet bulldog named Tigger. She's an old girl now, but the best dog anybody ever had. I also have two cats, but what can you say about cats?! They do their thing, and I do mine. I enjoy sports: baseball and football in particular, but my favorite sport, or hobby if you will is fly fishing for trout in the mountains of North Carolina. Nothing beats wading in cold clear streams and being in some of the most beautiful country on Earth!  I fully believe God spent just a little more time on the Appalachians than he did anywhere else! If I am not here...I'm gone fishin'!";
				document.getElementById("TeachImg").src = "http://cleantech4us.github.io/AKCTE/Teacher/glenn.jpg";
				break;
			case 3:
				document.getElementById("TeachH1").textContent = "Rachel Robinson";
				document.getElementById("TeachDiv").textContent = "My name is Mrs. Robinson. I have been teaching for 15 years in a wide range of classes, ages, and parts of the country. I earned my Bachelor's of Education in Secondary Computer Science from Baylor University in 1999. In the beginning of August 2014, I completed my Master's in Education from the University of North Carolina at Charlotte. I have been married for 15 years and I have two sons. My first teaching position was at Lorena High School in Lorena, Texas. After my first year I moved to New Mexico. For two years I taught classes and managed the training department at CompUSA in Albuquerque, New Mexico. When that company closed, I found a job teaching at Rio Rancho High School. I taught at Rio Rancho for 9 years in a wide variety of classes: Computer Science/Programming (C, C++, VB), Game Design, Web Design, PLTW IED, PLTW POE, Technology Systems. A few years ago I moved to North Carolina where I taught at private schools initially: Lake Norman Christian and Carmel Christian schools. This is my first year teaching at Ardrey Kell. I look forward to our time together.";
				document.getElementById("TeachImg").src = "http://cleantech4us.github.io/AKCTE/Teacher/robinson.jpg";
				break;
			case 4:
				document.getElementById("TeachH1").textContent = "Michael Hicks";
				document.getElementById("TeachDiv").textContent = "My name is Mr. Michael Hicks. I teach Marketing classes at Ardrey Kell High School. I have over 9 years of teaching and athletics coaching experience. I graduated from High Point University with a BS in Business Administration. I have two wonderful boys, ages 8 and 15. Previously, I was in Corporate America where I held various positions in management, human resources and data management/analysis over a 20 year span.";
				document.getElementById("TeachImg").src = "http://cleantech4us.github.io/AKCTE/Teacher/hicks.jpg";
				break;
			case 5:
				document.getElementById("TeachH1").textContent = "Melissa Shaffer";
				document.getElementById("TeachDiv").textContent = "The 2014-2015 school year marks my 9th year as a teacher.  Originally from Michigan, I lived & taught computer/business classes in Yuma, Arizona for 7 years prior to moving to North Carolina in 2013.  This is my second year at Ardrey Kell as a Marketing teacher, DECA advisor, and assistant softball coach. ";
				document.getElementById("TeachImg").src = "http://cleantech4us.github.io/AKCTE/Teacher/shaffer.jpg";
				break;
		}
		
		el.className = "Info ShowInfo";
		el.setAttribute("data-open", 1);
	} else{
		el.className = "Info HiddenInfo";
		el.setAttribute("data-open", 0);
	}
	
}
