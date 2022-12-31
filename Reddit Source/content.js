// Listen for messages from popup script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Check the value of the request.message property
  if (request.message === "start1") {
    start1();
  } else if (request.message === "start2") {
    start2();
  } else if (request.message === "start3") {
    start3();
  } else if (request.message === "start4") {
    start4();
  } else if (request.message === "start5") {
    start5();
  } else if (request.message === "start6") {
    start6();
  } else if (request.message === "start7") {
    start7();
  }
});



// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'menu-item-clicked') {
    start4();
  }
});





// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'refresh-complete') {

start1();

  }
});




/* 

async function pause() {
	
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  return;
  
}


 */


function getText(){
	
	console.log("started");
		
	const htmlElements = document.querySelectorAll('head');
	const htmlElement = htmlElements[0];
	const htmlContent = htmlElement.innerHTML;
	const htmlText = htmlElement.innerHTML;
	const getText = htmlText;

	return getText;

}





function scriptRAW(){
	
	const text = getText();

	// https://regex101.com/delete/qatQ7b0sbutVLpGZxCXhsRrt  for just getting the <script></script> area and parsing a little bit more
	const regex0 = /window.scrolllerConfig=(.*)script>/;
	const matches0 = text.match(regex0);
	// If a match was found, extract the first group from the match
	if (matches0) {
	const scriptRAW = matches0[1];

	console.log(scriptRAW);
	
	return;

	}
}











function start1(){


	const text = getText();



	// Use a RegExp object to match the pattern "redditPath\":\" followed by one or more characters (.*) until the end of the line"
	// This Regex was created with the aid of regex101 and is saved at the following URL
	// https://regex101.com/delete/WWJ13V6FcGNFYzes4BApX7sg
	// I removed the 'g' at the end of the regex that was created by regex101 as it appeared superfluous
	const regex = /redditPath\\\":\\\"(.*)isNsfw/;

	// Find all matches in the text using the match method
	const matches = text.match(regex);

	// If a match was found, extract the first group from the match
	if (matches) {
		const redditPath = matches[1];
		//copy the constants value to a variable for string manipulation
		let sourcePath = redditPath;
		// cut off the last 5 characters that I couldn't parse with Regex
		sourcePath = redditPath.substr(0, redditPath.length - 5);
		// addd the reddit domain to the string result to create a full URL
		sourcePath = "https://reddit.com" + sourcePath;
		// send string to the conosle for debug purposes
		console.log(sourcePath);

		// Send a message to the background script with the URL to open
		chrome.runtime.sendMessage({ action: 'openTab', url: sourcePath });

		//chrome.tabs.create({ url: sourcePath });
		return;
	}

	return;
	
}








function start2(){


	const text = getText();


	//console.log(text);
	// Use a RegExp object to match the pattern "redgifsSource\":\" followed by one or more characters (.*) until the end of the line"
	// This Regex was created with the aid of regex101 and is saved at the following URL
	// https://regex101.com/delete/Dpt74MXknHTddL4gFeEYqFPV
	// I removed the 'g' at the end of the regex that was created by regex101 as it appeared superfluous
	const regex = /redgifsSource\\\"\:(.*)\,\\\"ownerAvatar\\/;

	// Find all matches in the text using the match method
	const matches = text.match(regex);

	// If a match was found, extract the first group from the match
	if (matches) {
		const redgifsPath = matches[1];
		//copy the constants value to a variable for string manipulation
		let sourcePath = redgifsPath;
		// cut off the last 5 characters that I couldn't parse with Regex
		//sourcePath = redgifsPath.substr(0, redgifsPath.length - 5); // Remarked out because it appears that I don't need to truncate the string and was able to retrieve the full redgifs URL purely through a Regex
		// addd the reddit domain to the string result to create a full URL
		//sourcePath = "https://redgifs.com" + sourcePath;   // Remarked this out for Redgifs because the first Redgifs source I found had the full URL already


		// cut off the last 2 characters that I didn't parse with Regex
		sourcePath = redgifsPath.substr(0, redgifsPath.length - 2); 
		// cut off the first 2 characters that I didn't parse with Regex
		sourcePath = sourcePath.substring(2);
		// send string to the conosle for debug purposes
		console.log(sourcePath);
	
		if (confirm("Do you want to continue code execution? - " + sourcepath)) {
				// Send a message to the background script with the URL to open
				if (sourcePath !== 'null'){
					chrome.runtime.sendMessage({ action: 'openTab', url: sourcePath });
				}
			} else {
			// code to be executed if the user clicks Cancel
		}
	
	
	return;


	}

}

	
	
	






function start3(){



	const text = getText();

	//alert("start3 function has started and getText() has ran");
	//console.log("start3 has started and getText() function has ran and returned to start3 code");
	//console.log(text);
	// Use a RegExp object to match the pattern "redditPath\":\" followed by one or more characters (.*) until the end of the line"
	// This Regex was created with the aid of regex101 and is saved at the following URL
	// https://regex101.com/delete/aJU9x8ivpw3RwT8AGpYB13cT for getting just the file, whether be mp4 or jpg or webp or png
	// I removed the 'g' at the end of the regex that was created by regex101 as it appeared superfluous
	const regex = /\,\{\\\"url\\\"\:\\\"(.*)\\\"\,\\\"widt/;

	// Find all matches in the text using the match method
	const matches = text.match(regex);
	//console.log(matches[1]);
	
	// If a match was found, extract the first group from the match
	if (matches) {
		const mediaPath = matches[1];
		//copy the constants value to a variable for string manipulation
		let sourcePath = mediaPath;
		// cut off the last 5 characters that I couldn't parse with Regex
		//sourcePath = redditPath.substr(0, mediaPath.length - 5); // don't currenlty need to delete any trailing characters
		// addd the reddit domain to the string result to create a full URL
		//sourcePath = "https://atto.scrolller.com" + sourcePath;
		// send string to the conosle for debug purposes
		console.log(sourcePath);
		//alert(sourcePath);


		//let filePath = "C:\Downloadsvideo.mp4";
		// Send a message to the background script with the URL to open
		//chrome.runtime.sendMessage({ action: 'openTab', url: sourcePath });
		//chrome.runtime.sendMessage({ action: 'downloadFile', url: sourcePath, filename: filePath });


		chrome.runtime.sendMessage({
			action: 'downloadFile',
			url: sourcePath,
			//filename: "nsfwvideo.txt",
		});

		return;	
		//chrome.tabs.create({ url: sourcePath });

	}
	return;	
}








function start4(){
	
	chrome.runtime.sendMessage({ action: 'refresh' });

	return;

}







function start5(){

  start4();
  
  return;

}



/* 
// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'message-from-background') {
    // A message was received from the background script
    console.log('Message received from background script');
	
	
    // Send a response back to the background script
    sendResponse({ action: 'message-from-content' });
  }
});

 */




/* 
// Create a MutationObserver to observe changes to the head element
const observer = new MutationObserver(getText);

observer.observe(document.querySelector("head"), {
  childList: true,
});

// Call the getText() function every 5 seconds
setInterval(function() {
  // Reload the page
  getText();
}, 5000);


 */


