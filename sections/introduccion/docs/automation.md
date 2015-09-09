---
permalink: /introduccion/docs/automation.html
title: Automation Doc
---

#<i class=""></i> Automation Docs
- - -


<strong class="text-info"> <i class="glyphicon glyphicon-exclamation-sign"></i> IMPORTANT: </strong>
Automation
</blockquote>

##<i class=""></i> Content


1. Automation
	1. [What is automation?](introduccion/automation.html#1-1)
	2. [Goals](introduccion/automation.html#1-2)
	3. [How do we do it?](introduccion/automation.html#1-3)
	4. [How much to automate](introduccion/automation.html#1-4)
	5. [Where are we going?](introduccion/automation.html#1-5)
	6. [Why automation?](introduccion/automation.html#1-6)
	

------------------------------------------------------------------------------------

##1.1 What is automation?

Test automation is the use of special software (separate from the software being tested) to control the execution of tests and the comparison of actual outcomes with predicted outcomes.Test automation can automate some repetitive but necessary tasks in a formalized testing process already in place, or add additional testing that would be difficult to perform manually.
Some software testing tasks, such as extensive low-level interface regression testing, can be laborious and time consuming to do manually. Once automated tests have been developed, they can be run quickly and repeatedly. Many times, this can be a cost-effective method for regression testing of software products that have a long maintenance life. 
Test automation can be made cost-effective in the long term, especially when used repeatedly in regression testing.
What to automate, when to automate, or even whether one really needs automation are crucial decisions which the testing (or development) team must make. Selecting the correct features of the product for automation largely determines the success of the automation. Automating unstable features or features that are undergoing changes should be avoided.

Stress, load, stability, and performance testing peaks

Different types of "technical" tests are: performance test, stress test and load test. The difference is not trivial and at the same time, they have points in common:

Load test: tests to determine and validate the application response when subjected to a load of users and / or transactions that are expected in the production environment. Example: check the correct application response to the high of 100 users simultaneously. That compares with the expected volume.

Performance test: these tests are done to measure the response of the application to different volumes of expected load (number of users and / or requests). Example: when processing response speed entry of 10, 100 and 1000 users simultaneously. They buy with the expected return.

Stress test: test to find the volume of data or time the application starts to fail or are unable to respond to requests. They are load testing or performance, but beyond the limits expected in the production environment and / or determined by testing. Example: find the number of concurrent users, the application stops responding (hang or time out) properly to all requests.

All tests seek to find bottlenecks differently. All can be done with the same tools, varying the parameters.

Stability test: is a test run for more than 24 hours (eg weekend) and which mainly seek such anomalies as memory loss;

Peak test: is one where we go beyond the maximum design capacity, just to see how the application will bear a huge burden. In general, you'll be a domino effect, but what we are looking for is that the application does not fall.

<img src="assets/images/automation.png" alt="SoapUi Logo" class="img-responsive pull-left" style="border: 0; margin-top:5px;" />&nbsp;Diagram - Process Automation

<a id="1-1"></a>

----------

##1.2 Goals

- - -

The objective of automated testing is to simplify as much of the testing effort as possible with a minimum set of scripts. If unit testing consumes a large percentage of a quality assurance (QA) team's resources, for example, then this process might be a good candidate for automation. Automated testing tools are capable of executing tests, reporting outcomes and comparing results with earlier test runs. Tests carried out with these tools can be run repeatedly, at any time of day.
The method or process being used to implement automation is called a test automation framework. Several frameworks have been implemented over the years by commercial vendors and testing organizations. Automating tests with commercial off-the-shelf (COTS) or open source software can be complicated, however, because they almost always require customization.

<a id="1-2"></a>

----------


##1.3 How do we do it? 
How to implement a test automation program breaks down into people, Assess the people, process, technology and success of the current testing process Identify systemic root-cause issues preventing testing success. 
From a process perspective, the testing group and the program as a whole will need to determine how test automation will fit into the system development process -- the initial focus should be on high-yield automation activities that free-up manual testers (full-time equivalents). 
Any test automation program should start with an honest assessment of the people, process and available technologies. Based on this assessment, and if justified, based on the responses to an RFP (request for proposal), one or more POC (proof-of-concept) initiatives should be launched to determine which process and technology best fits your short-term and long-term needs. 

<a id="1-3"></a>

- - -

##1.4 How much to automate

How much of your application space should be automated is dependent on the key program factors we have previously discussed. There are some basic guidelines that should always be considered:
Never automate the entire testing process -- skilled exploratory testing will always yield defects that will not be detected through test automation.
Test automation is a tool not a solution -- if it is not applied with intelligence and skill, the net result will be “really fast” ineffective testing.
If the goal is to significantly increase deployment velocity or ensure quality objectives are being met -- then a significant percentage of existing functionality should be automated. On the other hand, if the objective is to reduce the weight of the overall testing effort on the test group, the focus should be on high-yield automation activities:

test data creation
smoke test
regression test

It is important to be aware that complete coverage of all tests using test automation is unrealistic. When deciding what tests to automate first, their value vs. the effort to create them needs to be considered. Test cases with high value and low effort should be automated first. Subsequently test cases with frequent use, changes, and past errors; as well as test cases with low to moderate effort in setting up the test environment and developing the automation project are best suited for automation.
Optimization of Speed, Efficiency, Quality and the Decrease of Costs Test automation alleviates testers' frustrations and allows the test execution without user interaction while guaranteeing repeatability and accuracy. Instead testers can now concentrate on more difficult test scenarios.
Increase of Test Coverage

Sufficient test coverage of software projects is often achieved only with great effort. Frequent repetition of the same or similar test cases is laborious and time consuming to perform manually. Some examples are:

Regression test after debugging or further development of software
Testing of software on different platforms or with different configurations
Data-driven testing (creation of tests using the same actions but with many different inputs).


<a id="1-4"></a>

----------

##1.5 Where are we going?

We focus on the adaptability of testing techniques that can be applied to almost any project that requires testing.
New techniques or methodologies can modify or reorganize the way that professional testers carry out their daily tasks, but they must be able to handle and adapt expanding their knowledge and skills as professionals, or become specialists in one area test determined as nonfunctional. The future of test automation needs open to use multiple tools and Quick Tools not expect to solve everything because it will not come mentality. So far it has proved impossible to achieve a single automation method, so you have to choose the tool that best suits each problem or needs.
Some areas of future development that must also be adapted tests and testers.

<a id="1-5"></a>

----------

##1.6 Why automation?
Benefits and results
- Coverage of test cases
- Reuse of test cases
- Focus on the business
- Process efficiency test
- Improvement in execution times
- Improvement in delivery times

results
- Shorter test project
- Optimization of resources
- Increase the coverage of test cases
- Improvement in time management

Automated test equipment
- Dedicated test equipment
- Enlist the support of other areas of the company
- Matches skills with the responsibilities of the role
  - Profile more technical
- Authority to carry out its responsibilities
- Equipment
  Team leader
  Developers test
  Developers cases
  Test bliblioteca
  Client liaison
  Link development
  Link systems


<a id="1-6"></a>

- - -



