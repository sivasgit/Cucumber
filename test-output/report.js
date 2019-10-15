$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/siva/IdeaProjects/BDDFRAME/Feature/Background.feature");
formatter.feature({
  "name": "OrangeHRM Login",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open orange hrm home page",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.openURL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Logo Presence on OrangeHRM home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I verify that the logo present on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.verifyLogo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open orange hrm home page",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.openURL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to OrangeHRM with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Enter username and password",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enterCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must successfully login to the Dashboard Page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.dashBoardPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open orange hrm home page",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.openURL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to OrangeHRM with valid credentials passing params",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Enter username \"Admin\" and password \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.loginWithParam(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must successfully login to the Dashboard Page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.dashBoardPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login to OrangeHRM with multiple data DD",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User must successfully login to the Dashboard Page",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "admin",
        "admin123"
      ]
    },
    {
      "cells": [
        "admin123",
        "admin"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open orange hrm home page",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.openURL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to OrangeHRM with multiple data DD",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter username \"admin\" and password \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.loginWithParam(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must successfully login to the Dashboard Page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.dashBoardPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open orange hrm home page",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.openURL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to OrangeHRM with multiple data DD",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter username \"admin123\" and password \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.loginWithParam(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must successfully login to the Dashboard Page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.dashBoardPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"content\"]/div/div[1]/h1\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6MTTLQ6\u0027, ip: \u0027192.168.2.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\siva\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:55666}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4d14cd0c465b66a6005ef7beb95789c1\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"content\"]/div/div[1]/h1}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.Steps.dashBoardPage(Steps.java:56)\r\n\tat ✽.User must successfully login to the Dashboard Page(file:/C:/Users/siva/IdeaProjects/BDDFRAME/Feature/Background.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
});