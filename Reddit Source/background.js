


// Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'refresh') {
    // Refresh the page
// Set a timer to execute the callback function after 1000 milliseconds (1 second)

    chrome.tabs.reload({
      //bypassCache: true // Optional property that bypasses the cache
    });
	
	//wait X ms then go to the callback() function
	setTimeout(callback, 1250);


  }
});


/* 

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // If the message is to download a file, do so
 console.log("made it to the download request code");
  if (request.action === 'downloadFile') {
    chrome.downloads.download({ url: request.url });
  }
});

 */

// In 'background.js'

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // If the message is to open a new tab, do so
  if (request.action === 'openTab') {
    chrome.tabs.create({ url: request.url });
  }

});




// Listen for context menu clicks
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  // Send a message to the content script
  chrome.tabs.sendMessage(tab.id, { action: 'menu-item-clicked' });
});



/* chrome.runtime.onMessage.addListener( data => {
  if ( data.type === 'notification' ) {
    notify( data.message );
  }
}); */

chrome.runtime.onInstalled.addListener( () => {
  chrome.contextMenus.create({
    id: 'notify',
    title: "Refresh page and open Reddit source in a new tab", 
    contexts:[ "all" ]
  });
});  
/* 
chrome.contextMenus.onClicked.addListener( ( info, tab ) => {
  if ( 'notify' === info.menuItemId ) {
    notify( info.selectionText );
  }
} );

const notify = message => {
  return chrome.notifications.create(
    '',
    {
      type: 'basic',
      title: 'Notification',
      message: message || 'If background service worker is still active a new tab with Reddit source should open momentarily with a 1.25sec delay!',
      iconUrl: 'icons/nasapod128x128.png',
    }
  );
}; */
//// end of Listen and respond to menu clicks







// Define the callback function
function callback() {

		  // Send a message to the content script of the current tab
		chrome.tabs.query({ active: true, currentWindow: true }, tabs => {

		  chrome.tabs.sendMessage(tabs[0].id, { action: 'refresh-complete' }, response => {


		  });
		});

}

/* 

// Define the function to be called
function backgroundFunction(arg1, arg2) {

    // Function code goes here
  
		  // Send a message to the content script of the current tab
		chrome.tabs.query({ active: true, currentWindow: true }, tabs => {

		  chrome.tabs.sendMessage(tabs[0].id, { action: 'refresh-complete' }, response => {


		  });
		});
		  

}

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'call-background-function') {
    // A message was received to call the background function
    backgroundFunction(request.arg1, request.arg2);
		
  }
}); */


/////END of listen and respond to message from popup script







/* 
chrome.declarativeContent.onPageChanged.addRules([{
  conditions: [new chrome.declarativeContent.PageStateMatcher({})],
  actions: [new chrome.declarativeContent.ShowPageAction()]
}]);


chrome.pageAction.onClicked.addListener(function(tab) {
  // Code to be run when the page action button is clicked goes here
}); */


/* chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'refresh') {
    // Refresh the page
    chrome.tabs.reload({
      bypassCache: true // Optional property that bypasses the cache
    });
  }
});



chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    // The tab has finished loading
    // Execute the code here
  }
});

 */


/* chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'refresh') {
    // Refresh the page
    chrome.tabs.reload({
      bypassCache: true // Optional property that bypasses the cache
    });

    // Listen for updates to the tab
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (changeInfo.status === 'complete') {
        // The tab has finished loading
        // Send a message back to the sender
        sendResponse({ status: 'complete' });
      }
    });
  }
}); */

 
/* chrome.tabs.executeScript({
  code: `
    (() => {
      return document.documentElement.outerHTML;
    })();
  `
}, result => {
  console.log(result[0]); // Outputs the source code of the current page
});
  */
 
/*  // Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // If the message is to open a new tab, do so
  if (request.action === 'openTab') {
    chrome.tabs.create({ url: request.url });
  }
  
  if (request.action === 'downloadFile') {
    chrome.downloads.download({
      url: request.url,
      filename: request.filename,
	  console.log("made it to the download request code");
    });
    
  }
}
 */
 
 
 
/* 

// Define the callback function
function createContextMenu() {
  chrome.contextMenus.create({
    title: 'My Extension Menu Item',
    contexts: ['all'], // The context for which the menu item will be shown
    onclick: function(info, tab) {
      // Code to execute when the menu item is clicked goes here
    }
  });
}

// Run the callback function when the page is loaded
document.addEventListener('DOMContentLoaded', createContextMenu); */