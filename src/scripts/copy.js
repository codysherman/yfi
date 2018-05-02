var test = function() {
  window.getSelection().removeAllRanges(); 
  // Select the email link anchor text  
  var toCopy = document.querySelector('#password');  
  var range = document.createRange();  
  range.selectNode(toCopy);  
  window.getSelection().addRange(range);  

  try {  
    // Now that we've selected the anchor text, execute the copy command  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }  

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported  
  window.getSelection().removeAllRanges();  
};