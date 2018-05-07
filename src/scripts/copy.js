// var copy = function() {
//   window.getSelection().removeAllRanges();
//   // Select the email link anchor text  
//   var toCopy = document.querySelector('#password');  
//   var range = document.createRange();  
//   range.selectNode(toCopy);  
//   window.getSelection().addRange(range);  

//   try {  
//     // Now that we've selected the anchor text, execute the copy command  
//     var successful = document.execCommand('copy');  
//     var msg = successful ? 'successful' : 'unsuccessful'; 
//     window.letsGo.show('.toast-message-contain').hide('.toast-message-contain');
//   } catch(err) {  
//     console.log('Oops, unable to copy');  
//   }  

//   // Remove the selections - NOTE: Should use
//   // removeRange(range) when it is supported  
//   window.getSelection().removeAllRanges();  
// };

document.addEventListener('copy', function(e){
    e.clipboardData.setData('text/plain', 'kbymh.AHXBM.48312.&#?$&');
    e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
    window.letsGo.show('.toast-message-contain').hide('.toast-message-contain');
});