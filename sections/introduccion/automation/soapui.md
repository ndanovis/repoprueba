---
permalink: /introduccion/automation/soapui.html
title: SoapUi Installation
---

#<i class="fa fa-cog fa-spin"></i> Automation Tools Installation
- - -


<blockquote class="alert alert-info">
<strong class="text-info"> <i class="glyphicon glyphicon-exclamation-sign"></i> IMPORTANT: </strong>
This section is under construction
</blockquote>

##<i class="fa fa-book"></i> Content


1. SoapUi
	1. [Requirements](introduccion/automation/soapui.html#1-1)
	2. [Windows](introduccion/automation/soapui.html#1-2)
		1. [Installation](introduccion/automation/soapui.html#1-2-1)
		2. [External properties](introduccion/automation/soapui.html#1-2-2)
		3. [Run tests](introduccion/automation/soapui.html#1-2-3)
			1. [Back end](introduccion/automation/soapui.html#1-2-3-1)
			2. [Front end](introduccion/automation/soapui.html#1-2-3-2)		
	3. [Linux](introduccion/automation/soapui.html#1-3)
		1. [Installation](introduccion/automation/soapui.html#1-3-1)
		2. [External properties](introduccion/automation/soapui.html#1-3-2)
		3. [Run tests](introduccion/automation/soapui.html#1-2-3)
			1. [Back end](introduccion/automation/soapui.html#1-3-3-1)
			2. [Front end](introduccion/automation/soapui.html#1-3-3-2)	




----------

<img src="assets/images/soap_logo2.png" alt="SoapUi Logo" class="img-responsive pull-left" style="border: 0; margin-top:5px;" />&nbsp;SoapUI
=============================================================================================================================================
--------------------------------------------------------------------------

[SoapUi](http://www.soapui.org/) is an open-source web service testing application for service-oriented architectures (SOA) and representational state transfers (REST). Its functionality covers web service inspection, invoking, development, simulation and mocking, functional testing, load and compliance testing. A commercial version, SoapUI Pro, which mainly focuses on features designed to enhance productivity, was also developed by eviware software. In 2011, SmartBear Software acquired eviware.

<a id="1-1"></a>

----------

##1.1 Requirements

- - -

- 1GHz or higher 32-bit or 64-bit Intel or AMD64 processor
- 512MB of RAM
- 240MB of hard disk space for installation (SoapUI Pro and HermesJMS) 
- Windows, Ubuntu, Red Hat, Fedora, CentOS, Suse; or other distributions
- Java => 7
<a id="1-1-1"></a>

----------


##1.2 SoapUi on Windows 

<a id="1-2-1"></a>

- - -


####1.2.1 Installation ####


- Download SoapUi from the [repository](introduccion/automation/soapui.html#).
- Run the .exe file and start the installation.
- Accept the terms and conditions and press next.
- Select destination folder by default <kbd>C:\Program Files (x86)\SmartBear\SoapUI-5.1.2</kbd> is the recommended.
- Select all the components and press next *Tutorials* is optional.
- Accept the License Agreement. 
- If you check tutorials select the path or go to the next step.
- Select the start menu folder and create a desktop icon if you want and press next.
- Wait the installation progress.
- You have a successfully SoapUi Installation.

<a id="1-2-2"></a>

----------



####1.2.2 Set external properties ####


- Go to SoapUi folder by default installation  <kbd>C:\Program Files (x86)\SmartBear\SoapUI-5.1.2\bin</kbd> and edit  <kbd>testrunner.bat </kbd>
- Below the line 30 add: 
<pre>set JAVA_OPTS=-Xms128m -Xmx1024m -Dsoapui.properties=soapui.properties "-Dsoapui.home=%SOAPUI_HOME%\"</pre>
- Save and close <kbd>testrunner.bat</kbd>, in the same folder <kbd>C:\Program Files (x86)\SmartBear\SoapUI-5.1.2\bin</kbd> if no exist create the file `soapui.properties`.
- Open and add your configuration like :

**Example:**
<pre>
ip=172.16.11.152
port=80
path=random/path/
</pre>

- Now you have successfully configured your external properties.

<a id="1-2-3"></a>

----------


##1.2.3 Run tests 

<a id="1-2-3-1"></a>

- - -



####1.2.3.1 Run test from Command Prompt ####


- First you need create a log folder for example <kbd>C:\Log_path</kbd>
- Open cmd by default <kbd>C:\Users\your.user></kbd>
- Type `cd ..\..` and go to <kbd>cd Program Files (x86)\SmartBear\SoapUI-5.1.2\bin</kbd> press enter.
- Run the example command the **-M** is required to create a parseable xml result.

**Example:**

 testrunner.bat -s"**Name of the suite**" -c"add, **Name of the test**" **-M** -r -f**C:\Log_path** C:\ **Your_path**\your_project.xml


**Example 2:**

<kbd>testrunner.bat -s"UPM TestSuite" -c"add, get and delete profile TestCase" -M -r -fC:\dev C:\Users\adrian.gutierrez\Desktop\UPM-71xy-project.xml<kbd>

**At the end returns:**

    
    SoapUI 5.1.2 TestCaseRunner Summary
    -----------------------------
    Time Taken: 1744ms
    Total TestSuites: 0
    Total TestCases: 1 (0 failed)
    Total TestSteps: 8
    Total Request Assertions: 11
    Total Failed Assertions: 0
    Total Exported Results: 0


<a id="commands"></a>
To see the full list of parameters click in the button below:

<a class="btn btn-primary" role="button" data-toggle="collapse" href="introduccion/automation/soapui.html#parameters" aria-expanded="false" aria-controls="collapseExample">
 Show parameters
</a>
<div class="collapse" id="parameters">

{% highlight sh %}
- a : Turns on exporting of all test results, not only errors
- A : Turns on exporting of all results using folders instead of long
- c : The TestCase to run, used to narrow down the tests to run
- D : Sets system property with name=value
- d : The domain to use in any authentications, overrides any domain set for any TestRequests
- e : The endpoint to use when invoking test-requests, overrides the endpoint set in the project file
- E : Sets which environment to use (SoapUI Pro only)
- F : Sets the format of the report specified with the -R option, for Printable reports this is one of PDF, XLS, HTML, RTF, CSV, TXT, and XML. For Data Export this is either XML or CSV (SoapUI Pro only)
- f : Specifies the root folder to which test results should be exported (see below)
- G : Sets global property with name=value
- g : Sets the output to include Coverage HTML reports ( SoapUI Pro only )
- h : The host:port to use when invoking test-requests, overrides only the host part of the endpoint set in the project file
- I : Do not stop if error occurs, ignore them
- i : Enables SoapUI UI-related components, required if you use the UISupport class for prompting or displaying information
- j : Turns on exporting of JUnit-compatible reports, see below
- M : Creates a Test Run Log Report in XML format
- m : Sets the maximum number of TestStep errors to save for each TestCase
- o : Opens the generated report in a browser (SoapUI Pro only)
- P : Sets project property with name=value, e.g. -Pendpoint=Value1 -PsomeOtherProperty=value2
- p : The password to use in any authentications, overrides any password set for any TestRequests
- r : Turns on printing of a small summary report (see below)
- R : Selects which report to generate for the test objects executed, for example if running the entire project, this could specify the name of a test-suite-level report that would be generated for each TestSuite. The	report is saved as specified with the -F option to the folder specified with the -f option. (SoapUI Pro only)
- S : Sets to save the project file after tests have been run
- s : The TestSuite to run, used to narrow down the tests to run
- t : Sets the soapui-settings.xml file to use, required if you have custom proxy, ssl, http, etc setting
- u : The username to use in any authentications, overrides any username set for any TestRequests
- v : Sets password for soapui-settings.xml file
- w : Sets the WSS password type, either 'Text' or 'Digest'
- x : Sets project password for decryption if project is encrypted

{% endhighlight %}
</div>


<a id="1-2-3-2"></a>

- - -


####1.2.3.2 Run test from UI ####




- Run SoapUi from your desktop or fromt he start menu.
- Select your test suit or test case:

<img src="assets/images/soap_01.png" alt="Soap image 01" class="img-thumbnail img-responsive"/>

- Press the play button in the test case window and wait the test run.

<img src="assets/images/soap_02.png" alt="Soap image 02" class="img-thumbnail img-responsive"/>

- If the test is successful, the bar is painted green.
- Now you can run your tests.

 <a id="1-3"></a>

- - -


##1.3 SoapUi on Linux


<a id="1-3-1"></a>

- - -


####1.2.1 Installation ####

- First of all, download SoapUi from the [repository](introduccion/automation/soapui.html#).
- Open a terminal <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>t</kbd>
- Now go to the directory where is SoapUi.
- Then type to make your file executable:
{% highlight sh %}chmod +x name_of_file.sh{% endhighlight %}
- For last to execute the file:
 {% highlight sh %}sh ./name_of_file.sh{% endhighlight %}
- Now the install has started.
- Accept the terms and conditions and press next.
- Select destination folder by default.
- Select all the components and press next *Tutorials* is optional.
- Accept the License Agreement. 
- If you check tutorials select the path or go to the next step.
- Select the start menu folder and create a desktop icon if you want and press next.
- Wait the installation progress.
- You have a successfully SoapUi Installation.

<a id="1-2-2"></a>

----------



####1.3.2 Set external properties ####


- Go to SoapUi folder by default installation <kbd>You_path\SoapUI-5.1.2\bin</kbd> and edit  <kbd>testrunner.sh</kbd>
- Now in the line 47 if no exist add: 
<pre>JAVA_OPTS="-Xms128m -Xmx1024m -Dsoapui.properties=soapui.properties -Dgroovy.source.encoding=iso-8859-1 -Dsoapui.home=$SOAPUI_HOME/bin"</pre>
- Save and close <kbd>testrunner.sh</kbd>, in the same folder if no exist create the file `soapui.properties`.
- For last open and add your configuration like :

**Example:**
<pre>
ip=172.16.11.152
port=80
path=random/path/
</pre>

- Now you have successfully configured your external properties.


----------


##1.2.3 Run tests 

<a id="1-3-3-1"></a>

- - -

####1.3.3.1 Run test from Command Prompt ####


- First you need create a log folder for example <kbd>/home/Log_path</kbd>
- Open a terminal <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>t</kbd>
- Now go to home/user/SoapUI-5.1.2/bin</kbd> press enter.
- Run the example command the **-M** is required to create a parseable xml result.

**Example:**

./testrunner.sh -s"**Name of the suite**" -c"add, **Name of the test**" **-M** -r -f**/Log_path* **Your_path**\your_project.xml

**Example 2:**

<kbd>./testrunner.sh -s"UPM TestSuite" -c"add, get and delete profile TestCase" -M -r -f/home/sabre/Desktop/dev /home/sabre/Desktop/UPM-71xy-project.xml<kbd>

**At the end returns:**
    
    Time Taken: 3511ms
    Total TestSuites: 0
    Total TestCases: 1 (0 failed)
    Total TestSteps: 8
    Total Request Assertions: 11
    Total Failed Assertions: 0
    Total Exported Results: 0
    

<a id="commands2"></a>
To see the full list of parameters click in the button below:

<a class="btn btn-primary" role="button" data-toggle="collapse" href="introduccion/automation/soapui.html#parameters2" aria-expanded="false" aria-controls="collapseExample">
 Show parameters
</a>
<div class="collapse" id="parameters2">

{% highlight sh %}
- a : Turns on exporting of all test results, not only errors
- A : Turns on exporting of all results using folders instead of long
- c : The TestCase to run, used to narrow down the tests to run
- D : Sets system property with name=value
- d : The domain to use in any authentications, overrides any domain set for any TestRequests
- e : The endpoint to use when invoking test-requests, overrides the endpoint set in the project file
- E : Sets which environment to use (SoapUI Pro only)
- F : Sets the format of the report specified with the -R option, for Printable reports this is one of PDF, XLS, HTML, RTF, CSV, TXT, and XML. For Data Export this is either XML or CSV (SoapUI Pro only)
- f : Specifies the root folder to which test results should be exported (see below)
- G : Sets global property with name=value
- g : Sets the output to include Coverage HTML reports ( SoapUI Pro only )
- h : The host:port to use when invoking test-requests, overrides only the host part of the endpoint set in the project file
- I : Do not stop if error occurs, ignore them
- i : Enables SoapUI UI-related components, required if you use the UISupport class for prompting or displaying information
- j : Turns on exporting of JUnit-compatible reports, see below
- M : Creates a Test Run Log Report in XML format
- m : Sets the maximum number of TestStep errors to save for each TestCase
- o : Opens the generated report in a browser (SoapUI Pro only)
- P : Sets project property with name=value, e.g. -Pendpoint=Value1 -PsomeOtherProperty=value2
- p : The password to use in any authentications, overrides any password set for any TestRequests
- r : Turns on printing of a small summary report (see below)
- R : Selects which report to generate for the test objects executed, for example if running the entire project, this could specify the name of a test-suite-level report that would be generated for each TestSuite. The	report is saved as specified with the -F option to the folder specified with the -f option. (SoapUI Pro only)
- S : Sets to save the project file after tests have been run
- s : The TestSuite to run, used to narrow down the tests to run
- t : Sets the soapui-settings.xml file to use, required if you have custom proxy, ssl, http, etc setting
- u : The username to use in any authentications, overrides any username set for any TestRequests
- v : Sets password for soapui-settings.xml file
- w : Sets the WSS password type, either 'Text' or 'Digest'
- x : Sets project password for decryption if project is encrypted

{% endhighlight %}
</div>


<a id="1-3-3-2"></a>

- - -


####1.3.3.2 Run test from UI ####


Run the test from Ui is like windows, to follow the windows instrucctions  [Click Here](introduccion/automation/soapui.html#1-2-3-2).


