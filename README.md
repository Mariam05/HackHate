<p align="center">
  <img src="frontend/images/brainIcon.png" />
</p>

<h1 align="center"> Hate Detector </h1>
<h2 align="center"> A chrome extension to detect hate speech on a page & encourage you to report it. We also gather data on what sites are most hateful.  </h2>

<br><br>
<h3> Motivation </h3>
<p>
Targeted online abuse at individuals or groups creates fear and exclusion in online spaces and motivates other forms of extremist behaviour when left unchecked.

Raising the standard of digital etiquette in online spaces and awareness of this issue will improve quality of life for Muslims and other members of marginalized communities navigating online spaces.
</p>


<br>
<h3> Notification </h3>
<p> Once the extension detects hate, it will send the user a notification saying the following:

> We've detected hate speech on this page! Please consider reporting this in one of two ways: 
> 1. via (https://www.nccm.ca/programs/incident-report-form/) 
> 2. via the site reporting capabilities 
>
>Recognizing instances of hate speech helps to raise awareness about how harmful prejudice is perpetuated in online spaces and sets a standard for organizations to take accountability.";


<br>
<h3> Aggregation of Collected Data </h3>
<p> The data collected on hateful sites is aggregated to show what sites contain the most amount of hate. </p>

![domains with hate](frontend/images/domainChart.png)


<br>
<h3> Credits & Citation </h3>
<p> This proof-of-concept extension was built for 
 <a href="https://www.nccm.ca/hackathon/" target="_blank">NCCM's HackHateCanada Hackathon</a>. 

</p>
In the backend, we are using this model to detect hate speech: 

``` 
@article{aluru2020deep,
  title={Deep Learning Models for Multilingual Hate Speech Detection},
  author={Aluru, Sai Saket and Mathew, Binny and Saha, Punyajoy and Mukherjee, Animesh},
  journal={arXiv preprint arXiv:2004.06465},
  year={2020}}
```
