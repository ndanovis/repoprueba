---
permalink: /introduccion/automation/gradle.html
title: Gradle Installation
---

#<i class=""></i> Automation Tools Installation
- - -


<blockquote class="alert alert-info">
<strong class="text-info"> <i class="glyphicon glyphicon-exclamation-sign"></i> IMPORTANT: </strong>
This section is under construction
</blockquote>

##<i class=""></i> Content


1. Gradle
	1. [Requirements](introduccion/automation/gradle.html#1-1)
	2. [Windows](introduccion/automation/gradle.html#1-2)
		1. [Installation](introduccion/automation/gradle.html#1-2-1)
	3. [Linux](introduccion/automation/gradle.html#1-3)
		1. [Installation](introduccion/automation/gradle.html#1-3-1)
    4. [Example](introduccion/automation/gradle.html#1-4)
        

<img src="assets/images/gradle.png" alt="Gradle Logo" class="img-responsive pull-left" style="border: 0; margin-top:5px;" />
=============================================================================================================================================
--------------------------------------------------------------------------

[Gradle](https://gradle.org/) is a build automation tool that builds upon the concepts of Apache Ant and Apache Maven and introduces a Groovy-based domain-specific language (DSL) instead of the more traditional XML form of declaring the project configuration. Gradle uses a directed acyclic graph ("DAG") to determine the order in which tasks can be run.

Gradle was designed for multi-project builds which can grow to be quite large, and supports incremental builds by intelligently determining which parts of the build tree are up-to-date, so that any task dependent upon those parts will not need to be re-executed.

The initial plugins are primarily focused around Java, Groovy and Scala development and deployment, but more languages and project workflows are on the roadmap..

<img src="assets/images/diagramaGradle.gif" alt="Gradle Diagrama" class="img-responsive pull-left" style="border: 0; margin-top:5px;" />

<img src="assets/images/diag1.png" alt="Gradle Diagrama" class="img-responsive pull-left" style="border: 0; margin-top:5px;" />


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


##1.2 Gradle on Windows 

<a id="1-2-1"></a>

- - -

####1.2.1 Installation ####

Prerequisites

Gradle requires a Java JDK or JRE to be installed, version 6 or higher (to check, use java -version). Gradle ships with its own Groovy library, therefore Groovy does not need to be installed. Any existing Groovy installation is ignored by Gradle.
Gradle uses whatever JDK it finds in your path. Alternatively, you can set the JAVA_HOME environment variable to point to the installation directory of the desired JDK.



- Download Gradle from the [repository](http://gradle.org/gradle-download/) then click on gradle-x-x-x-bin.zip (binaries only) download link. Unzip the download .zip file on your computer.
  Environment Variables
    Open the environment variables settings window, by pressing Windows + Pause/Break or through the Control Panel -> System -> Advanced system settings ->Environment Variables.

    argegar diagrama


Click on New… button on System environment variables and add the variables below:
Variable Name   Variable Value
GRADLE_HOME Path where you extracted Gradle from zip file. Example: C:\gradle-2.2.1
PATH    It already exists on your system under the name Path. Edit its value by adding the following at the end: %GRADLE_HOME%\bin;   

Validating
Validate Gradle installation by opening the Command Prompt and typing the command below. If Gradle was successfully installed, it may print information about Gradle version:

<kbd> cmd.exe 
gradle -v</kbd>

<kbd>cmd.exe </kbd>

<pre>
------------------------------------------------------------
Gradle 2.2.1
------------------------------------------------------------
Build time:   2014-11-24 09:45:35 UTC
Build number: none
Revision:     6fcb59c06f43a4e6b1bcb401f7686a8601a1fb4a
Groovy:       2.3.6
Ant:          Apache Ant(TM) version 1.9.3 compiled on December 23 2013
JVM:          1.8.0_20 (Oracle Corporation 25.20-b23)
OS:           Windows 7 6.1 amd64
</pre>

<a id="1-2-2"></a>

- - -

##1.3 Gradle on Linux

<a id="1-3-1"></a>

- - -

####1.3.1 Installation ####

In Ubuntu terminal, add the repository where Gradle can be found for installing and update the packages list:

terminal
  
sudo add-apt-repository ppa:cwchien/gradle
sudo apt-get update

Next, find the most recent Gradle version for installing:

terminal
sudo apt-cache search gradle
   

The command above will print a list with all the available Gradle versions, in this case (it may vary according to the date that you’re reading this tutorial), version 2.2.1 is the most recent:
  terminal
<pre>
gradle-doc - Documentation for gradle
libgradle-core-java - Groovy based build system - Core library
libgradle-plugins-java - Groovy based build system - All plugins
missidentify - a program to find win32 applications
gradle - Gradle is a Groovy based build system
gradle-ppa - Gradle is a Groovy based build system
gradle-1.10 - Gradle is a Groovy based build system
gradle-1.11 - Gradle is a Groovy based build system
gradle-1.12 - Gradle is a Groovy based build system
gradle-2.0 - Gradle is a Groovy based build system
gradle-2.1 - Gradle is a Groovy based build system
gradle-2.2 - Gradle is a Groovy based build system
gradle-2.2.1 - Gradle is a Groovy based build system 
</pre>

Install Gradle:
terminal
sudo apt-get install gradle-2.2.1

Environment Variables and Validation
The installation through the above steps often already automatically performs the necessary settings for enabling Gradle on Ubuntu, so, let’s validate the installation with the following command:

terminal
gradle -v

Output:

terminal

<pre>    
------------------------------------------------------------
Gradle 2.2.1
------------------------------------------------------------
Build time:   2014-11-24 09:45:35 UTC
Build number: none
Revision:     6fcb59c06f43a4e6b1bcb401f7686a8601a1fb4a
Groovy:       2.3.6
Ant:          Apache Ant(TM) version 1.9.3 compiled on December 23 2013
JVM:          1.8.0_25 (Oracle Corporation 25.25-b02)
OS:           Linux 3.13.0-36-generic amd64
</pre>

<a id="1-3-2"></a>

----------

##1.4 Example

<a id="1-4"></a>

- - -
We will take a project in java to explain the structure of Gradle

<img src="assets/images/ex1.png" alt="Gradle Estructura" class="img-responsive pull-left" style="border: 0; margin-top:5px;" />

As we can see we have a build.gradle file which is responsible for managing the build.

<img src="assets/images/ex2.png" alt="Gradle Proyecto" class="img-responsive pull-left" style="border: 0; margin-top:5px;" />

Hello World file built build.gradle 

task helloWorld << { 
println 'hello, world' 
} 

You can see the output of Hello World built by command:
$ gradle helloWorld 
hello, world

As you can see a task called helloWorld was created in the main file structure called build.gradle Gradle, this task performed by screen printing of the text "hello, world '.
This task is executed by calling the name of the task in the next line $ Gradle helloWorld.

Extending Gradle
From what is shown in the above we can extend the plugin as we will see below.

As we said build.gradle have a file which is responsible for managing the build and show your code below.

<img src="assets/images/ex3.png" alt="Gradle Codigo" class="img-responsive pull-left" style="border: 0; margin-top:5px;" />

As we can see there is a DSL (Domain Specified Language) which is quite compact. In the first lines we registered three plugins that will allow us to address various tasks.
Java Plugin: Responsible for putting at our disposal java world tasks such as homework "jar" of packaging we use on line 13.
Eclipse Plugin: Responsible for Gradle integration into eclipse and configure a classpath based on the premises that we attach on line 24
Application Plugin: Responsible for adding implementation tasks so that from the Gradle can run our own project in line 11 defining the main class.
Once we have defined the file can see the content of the main class you want to run.

package com.arquitecturajava;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Principal {
 private static final Logger logger = LogManager.getLogger();

 public static void main(String[] args) {
 logger.error("hola, mundo");
 }
}

In this case it is a class that uses log4j API (version2) to print an error message. To do this we define the resources folder file that configures us log4j2.xml the console appender.

<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="WARN">
<Appenders>
<Console name="Console" target="SYSTEM_OUT">
<PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n" />
</Console>
</Appenders>
<Loggers>
<Root level="error">
<AppenderRef ref="Console" />
</Root>
</Loggers>
</Configuration>

Completed these steps and have a mini project and can use Gradle and build task to build our code and generate a jar.

<img src="assets/images/ex4.png" alt="Gradle Build" class="img-responsive pull-left" style="border: 0; margin-top:5px;" />

Once this operation will generate Gradle us a jar with the draft prepared.

<img src="assets/images/ex5.png" alt="Gradle Result" class="img-responsive pull-left" style="border: 0; margin-top:5px;" />



<a id="1-4"></a>

----------


