---
permalink: /introduccion/automation/jmeter.html
title: jmeter Installation
---

#<i class="fa fa-cog fa-spin"></i> Apache Jmeter installation & configuration
- - -


<blockquote class="alert alert-info">
<strong class="text-info"> <i class="glyphicon glyphicon-exclamation-sign"></i> IMPORTANT: </strong>
This section is under construction
</blockquote>

##<i class="fa fa-book"></i> Jmeter

1. [Requirements](introduccion/automation/jmeter.html#1)
2. [Downloads](introduccion/automation/jmeter.html#2)
3. [Installation](introduccion/automation/jmeter.html#3)
	1.  [Plugins & Extras](introduccion/automation/jmeter.html#3-1)
	2.  [External Properties](introduccion/automation/jmeter.html#3-2)
	3.  [Database Configuration](introduccion/automation/jmeter.html#3-3)
4.  [Examples](introduccion/automation/jmeter.html#4)
5.  [Extras](introduccion/automation/jmeter.html#5)



----------

<img src="assets/images/jmeter_logo.jpg" alt="jmeter Logo" class="img-responsive pull-left" style="border: 0; margin-top:5px;" />&nbsp;Apache Jmeter
=============================================================================================================================================
--------------------------------------------------------------------------

[Apache Jmeter](http://jmeter.apache.org/) is open source software, a 100% pure Java application designed to load test functional behavior and measure performance. It was originally designed for testing Web Applications but has since expanded to other test functions.
Apache JMeter may be used to test performance both on static and dynamic resources (Webservices (SOAP/REST), Web dynamic languages - PHP, Java, ASP.NET, Files, etc. -, Java Objects, Data Bases and Queries, FTP Servers and more). It can be used to simulate a heavy load on a server, group of servers, network or object to test its strength or to analyze overall performance under different load types. You can use it to make a graphical analysis of performance or to test your server/script/object behavior under heavy concurrent load.

<a id="1"></a>

<br><br>

##1 - Requirements

- - -

- Apache jmeter => 2.13
- 1GHz or higher 32-bit or 64-bit Intel or AMD64 processor.
- 1GB of RAM
- 240MB of hard disk space for installation.
- Windows, Ubuntu, Red Hat, Fedora, CentOS, Suse; or other distributions.
- [Java](https://java.com/es/download/) => 6
- Standar and extra set plugins.
- Mysql and Oracle jbmc

----------

 
<a id="2"></a>

<br><br>

<table class="table table-striped">
    <thead>
        <tr>
            <th colspan="3"><h2>2 - Downloads</h2></th>
        </tr>
    </thead>

    <tbody>

        <tr>
            <td>Apache Jmeter</td>

            <td><a href="http://artifacts.intraway.com/artifactory/ext-tools-local/com/apache/apache-jmeter/2.13/apache-jmeter-2.13.tgz" target="_blank" type="button" class="btn btn-success">Repository</a></td>

            <td><a href="http://jmeter.apache.org/download_jmeter.cgi" target="_blank" type="button" class="btn btn-success">Source</a></td>
        </tr>

        <tr>
            <td>Standar Plugin</td>

            <td><a href="http://artifacts.intraway.com/artifactory/ext-tools-local/org/apache/jmeter-plugins-standard/1.3.0/jmeter-plugins-standard-1.3.0.jar" target="_blank" type="button" class="btn btn-success">Repository</a></td>

            <td><a href="http://jmeter-plugins.org/" target="_blank" type="button" class="btn btn-success">Source</a></td>
        </tr>

        <tr>
            <td>Extra Plugins</td>

            <td><a href="http://artifacts.intraway.com/artifactory/ext-tools-local/org/apache/jmeter-plugins-extras/1.3.0/jmeter-plugins-extras-1.3.0.jar" target="_blank" type="button" class="btn btn-success">Repository</a></td>

            <td><a href="http://jmeter-plugins.org/" target="_blank" type="button" class="btn btn-success">Source</a></td>
        </tr>

        <tr>
            <td>Mysql Jdbc</td>
            <td><a href="http://artifacts.intraway.com/artifactory/ext-tools-local/org/apache/jmeter-plugins-mysql-connector/5.1.36/jmeter-plugins-mysql-connector-5.1.36.jar" target="_blank" type="button" class="btn btn-success">Repository</a></td>

            <td><a href="https://dev.mysql.com/downloads/connector/j/5.0.html" target="_blank" type="button" class="btn btn-success">Source</a></td>
        </tr>

        <tr>
            <td>Oracle Jdbc</td>

            <td><a href="http://artifacts.intraway.com/artifactory/ext-tools-local/org/apache/jmeter-plugins-oracle-client/12.1.0.2/jmeter-plugins-oracle-client-12.1.0.2.jar" target="_blank" type="button" class="btn btn-success">Repository</a></td>

            <td><a href="http://www.oracle.com/technetwork/database/features/jdbc/default-2280470.html" target="_blank" type="button" class="btn btn-success">Source</a></td>
        </tr>

        <tr>
            <td>Ssh Plugin</td>

            <td><a href="http://artifacts.intraway.com/artifactory/ext-tools-local/org/apache/jmeter-ssh-sampler/0.1.0/jmeter-ssh-sampler-0.1.0.jar" target="_blank" type="button" class="btn btn-success">Repository</a></td>

            <td><a href="#" target="_blank" type="button" class="btn btn-success disabled">Source</a></td>
        </tr>

        <tr>
            <td>Example test</td>

            <td><a href="examples/jmeter_example.rar" target="_blank" type="button" class="btn btn-success">Repository</a></td>

            <td><a href="#" target="_blank" type="button" class="btn btn-success disabled">Source</a></td>
        </tr>

    </tbody>
</table>

<a id="3"></a>

<br><br>

##3 - Installation 

- - -

- Download Jmeter from the [repository](http://artifacts.intraway.com/artifactory/ext-tools-local/com/apache/apache-jmeter/2.13/apache-jmeter-2.13.tgz).
- Unzip Jmeter in a place of preference like C:\Jmeter or usr/local/Jmeter
- Now you can run jmeter go to <kbd>Jmeter\bin\</kbd> and run <kbd>jmeterw.cmd</kbd> or  <kbd>jmeter.sh</kbd>  according to your OS




<a id="3-1"></a>

<br><br>

##3.1 - Plugins & Extras 

- - -

Now we need this plugins to set external properties, see correctly json, xml formats, connect to ssh and database.

**Standar and extra plugins installation**


- Extract archive contents to <kbd>JMeter/lib/ext</kbd>.
- Restart JMeter to load new plugins.

**JDBC Installation**


- Extract archive contents to <kbd>JMeter/lib</kbd>
- Restart JMeter to load new plugins.

**Ssh Plugin**

- Extract archive contents to <kbd>JMeter/lib</kbd>
- Restart JMeter to load new plugins.



<a id="3-2"></a>

<br><br>

##3.2 - Set external properties##

- - -


**Relative path**

This is requiered to create a external properties in the project folder.

- First we need create a user defined variables <kbd>Addd > Config element</kbd> and click **User defined variables**
- Now go to add two variables <kbd>configuration</kbd>=<kbd>${__BeanShell(import org.apache.jmeter.services.FileServer; FileServer.getFileServer().getBaseDir();)}</kbd> and <kbd>bar</kbd>=<kbd>${__BeanShell(File.separator,)}</kbd>
- To set the path create <kbd>Add > Config element</kbd> and click in **Variables from csv file**
- Now define the path, we create two variables to do this, why? because the diferences between windows and linux in the path "\" & "/". The variable name is **bar**, the other variable is to set the folder of the project **configuration**. Write the path on **CSV File** input and **=** in Separator input:

<br>
**Example:** 

- ${configuration}${bar}config${bar}**host.conf**

*This is equal to:*

- linux: /config/ **host.conf** 
- Windows: \config\ **host.conf**
- The last step is create the properties file, by default in **my_project/config/host.conf** and contains:

<br>
**Example:**


    # Configuracion host y usuario sso
    
    host=172.16.0.90
    user=admin
    pass=admin
    port=80


<a id="3-3"></a>

<br><br>

##3.3 - Database Configuration

- - -

- First we need to create the jdbc in jmeter <kdb>Add > Config Element > JDBC Connection Configuration</kdb>
- Now modify Variable name like mysql or oracle as appropriate.
- The last step is modify **Database Connection Configuration** :

**Mysql**

1. Databae URL: ***jdbc:mysql://${ruta_database}:3306/${nombre_base}***
2. JDBC Driver class: ***com.mysql.jdbc.Driver***
3. Username: ***${user_database}***
4. Password: ***${password_database}***


**Oracle**

1. Databae URL: ***jdbc:oracle:thin:@${ruta_database}:1521:ORCL***
2. JDBC Driver class: ***oracle.jdbc.driver.OracleDriver***
3. Username: ***${user_database}***
4. Password: ***${password_database}***


<a id="4"></a>

<br><br>

##4 - Examples

- - -

<ul class="nav nav-pills">
  <li role="presentation" class="active"><a href="introduccion/automation/jmeter.html#external_properties" role="tab" data-toggle="tab">External properties</a></li>
  <li role="presentation" ><a href="introduccion/automation/jmeter.html#external_properties_2" role="tab" data-toggle="tab">External properties 2</a></li>
  <li role="presentation"><a href="introduccion/automation/jmeter.html#Mysql" role="tab" data-toggle="tab">Mysql Config</a></li>
  <li role="presentation"><a href="introduccion/automation/jmeter.html#Oracle" role="tab" data-toggle="tab">Oracle Config</a></li>
</ul>


<div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="external_properties">
		<br>
		<img src="assets/images/udv.png" alt="Example 01" class="img-rounded">
	</div>
    <div role="tabpanel" class="tab-pane" id="external_properties_2">
		<br>
		<img src="assets/images/vfcf.png" alt="Example 02" class="img-rounded">
	</div>
    <div role="tabpanel" class="tab-pane" id="Mysql">
		<br>
		<img src="assets/images/mysql.png" alt="Example 03" class="img-rounded">
	</div>
    <div role="tabpanel" class="tab-pane" id="Oracle">
		<br>
		<img src="assets/images/oracle.png" alt="Example 04" class="img-rounded">
	</div>
  </div>

<a id="5"></a>

<br><br>

##5 - Extras

- - -


**Shortcuts**

- Disable/Enable = <kbd>CTRL</kbd> + <kbd>T</kbd>
- Run suite = <kbd>CTRL</kbd> + <kbd>R</kbd>
- Clean results = <kbd>CTRL</kbd> + <kbd>E</kbd>
- Seach in the Suite test = <kbd>CTRL</kbd> + <kbd>F</kbd>
- Open tree = <kbd>→</kbd>
- Close tree = <kbd>←</kbd>
- Stop Test : <kbd>CTRL</kbd> + <kbd>.</kbd>
- Shutdown Test : <kbd>CTRL</kbd> + <kbd>,</kbd>



















