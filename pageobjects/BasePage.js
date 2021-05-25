export default class BasePage{
    open(path){
      browser.url(path);
    }
   
    waitUsingFixedTimeout(time){
        console.log("WebDriver Paused for:" + time + " seconds.");
        browser.pause(time);
    } 
}