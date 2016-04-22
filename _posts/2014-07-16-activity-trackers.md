---
layout: post
date: 2014-07-16 16:53:54 EST
title: "A Comparison of Activity Trackers"
permalink: /post/activity-trackers/
description: "A comparison of activity and motion trackers: RunKeeper, Strava, MapMyRun, and Moves."
img: /images/post-images/activity-trackers.jpg
categories: blog
css: motion-trackers.css
maps: true
---

The concept of activity tracking is getting ever closer to ubiquitous nowadays with the prevalence of dozens of mobile apps, wearable wristbands, and other health monitoring tools like Bluetooth-enabled [scales](http://vitrine.withings.com/eu/smart-body-analyzer.html) and [video games](http://wiifit.com/) based on exercise. Now the world's largest tech company is even [rumored](http://www.theverge.com/2014/6/6/5786456/apple-said-to-be-planning-october-event-to-unveil-wearable-device) to be working on some form of wearable hardware (and software [APIs](https://www.apple.com/ios/ios8/health/)), at which point the whole concept of "life tracking" will reach 100% penetration. Everyone will be tracking and recording their lives like [characters in cyberpunk literature](http://en.wikipedia.org/wiki/Snow_Crash#Metaverse).

I'm a casual runner and cyclist, and started testing a handful of fitness tracker mobile apps to map my activity. Since I'm a stats and data junkie, I did some extensive experimental testing with these four apps to size up the advantages of each in terms of technical capability, as well as the feature-set of services provided by each within their online social systems:

* [RunKeeper](http://runkeeper.com/)
* [Strava](http://www.strava.com/)
* [MapMyRun](http://www.mapmyrun.com/)
* [Moves](http://www.moves-app.com/)

There are dozens of other options for wearable hardware for tracking activity, location, and more, but I still think most of them are either too costly or not mature enough to invest my money in. I seriously debated buying a [Fitbit](http://www.fitbit.com/) or [Up](https://jawbone.com/up), but I'm glad I haven't given Apple's potential push into that market.

Let's run through the details of each and compare what they have to offer.

## Basics

Each of these apps has its focus, but they all promise the same basic set of features (with the exception of Moves, which I'll get to in a moment):

1. Allow user to **log an activity** of specific type &mdash; running, walking, cycling, hiking, kayaking, skiing, etc.
2. **Calculate metrics** about the activity including time, distance, map location (in the form of a GPS track), speed, pace, calories, elevation, etc.
3. **Share** your activities with friends, and join a social network of other active people (including [professional athletes](http://www.strava.com/activities/165962851))
4. **Compete** against others in various ways
5. **Set goals** and measure your progress toward said goals

Moves is a different style of app. It's a persistent motion tracker that runs continuously in the background on your device, mostly for calculating steps and distance per day for all of your activity. No need to open the app and record independent activities. I wanted to include Moves in the mix primarily for its deep data recording and mapping capabilities. I'll revisit Moves' data quality later on when discussing data.

## Mobile Apps

I'm an iPhone user, and iOS has matured to the point that serious, veteran app developers have ironed out most of the annoyances and kinks of basic app design concepts. Most of the conventions around app UI have arrived at general consensus in presentation, using a couple of well-known paradigms for structuring the user interface. Both RunKeeper and Strava use the home-row tab button UI layout, with standard "5-button" options list across the bottom. MapMyRun uses the sidebar/tray strategy to house its options, like most of Google's iOS apps.

![Activity trackers](/images/post-images/activity-apps.jpg)

The basic interfaces of all three of these apps are nice. RunKeeper and Strava are almost exactly level on features on the mobile side. They both have a basic social presence or feed of your friends' activity, activity type selectors, and big "Start" buttons to get going with minimal fiddling. MMR's look is a little [cluttered](https://cloudup.com/co0J-H_iN0t) for me, but it does include other functions on the mobile side like weight entry and nutrition logging.

All of them support configurable audio announcements of progress during an activity. A voice will chime in while you're running to give you reports on your current distance, pace, and time since the start. Each also can be paired up via Bluetooth with an array of external sensors like heart rate monitors, bike speedometers, and others. Strava even has a nice capability to visualize your heart rate metrics throughout the course of your activities if you use a monitor.

## Reliability

In my testing, the reliability and consistency of all of these apps has come a long way since the early days of the App Store, back to iPhone 3G and the first devices with GPS. The only one of the group that I've been using that long (since 2009) is RunKeeper, and its reliability now is in another class than it was back then. Since the introduction of [multitasking](http://www.macworld.com/article/1164616/how_ios_multitasking_really_works.html) with iOS, apps run silently in the background when switching between apps while a tracking activity is in progress. I tested tracking with all three simultaneously without any issues.

During a couple of my test runs, Strava inexplicably stopped my activity for no reason, but didn't hard crash. When I'd switch back to the app, the current activity was paused mid-way, which is an annoying bug or behavior to encounter when you can't recreate your activity easily. RunKeeper still seems the most reliable option all around, including the mobile app dependability and the syncing operations with the cloud service. Multiple times I had trouble getting the activity to properly save and sync on Strava and MapMyRun, though usually it was just a delay in being able to get my data synced &mdash; didn't involve data loss except for the paused activities and couple of app crashes.

## Services

All three of these apps function as clients for their associated web services, not just standalone applications. They're not much different; each of them shows a feed of activity and a way to browse your (and your friends') activity details. Stacking up your accomplishments against your friends for some friendly competition seems to be the main focus of their web services, but the motivators and ability to "plus up" friends' activity might push some to work out harder or more often. The differences here are mostly minor, and deciding on the "best" service in terms of its online offerings will come down to personal preference. One of the features I like with Strava is the ability to add equipment that you use, like your running shoes or specific bikes. Doing this will let you see the total distance ridden on your bike over time.

Each service offers a premium paid tier with additional features. Strava and RunKeeper have free-to-use mobile apps with fewer features, while MMR goes with advertisements and in-app-purchase to remove the ads.

## Data Quality / Maps

My primary interest in analyzing these services was to check out the quality of the GPS data logging. I ran all three of them on the same ride through [Snell Isle](http://en.wikipedia.org/wiki/Snell_Isle) so I could overlay them together and see what the variance was in location accuracy. Even though iOS is ultimately logging the same data from the same sensor, and offering that up to the applications via the [Core Location](https://developer.apple.com/library/ios/documentation/userexperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html) API, the data shows that all three apps must be processing and storing the location values differently. Here's a map showing the GPS track lines recorded in each &mdash; Strava, MapMyRun, and RunKeeper. Click the buttons below the map to toggle them on and off to see how the geometry compares. If you zoom in close, you'll see the lines stray apart in some areas:

<div id='map'></div>
<div id='menu-ui' class='menu-ui'></div>

Each app performs roughly the same in terms of location data quality. The small variances in precision seem to trend together for the most part, which makes sense. When the signal gets bad, or the sky is slightly occluded, the Location APIs are going to return worse data for all running applications. One noticable difference between the track geometry (in this example, at least) is that the MapMyRun track alignment tends to vary in different ways than the other two. It looks like there might be some sort of server-side [smoothing or splining](http://gis.stackexchange.com/questions/24827/how-to-smooth-the-polygons-in-a-contour-map) going on to make the data look better after processing, but it doesn't dramatically change the accuracy of the data overall.

I did notice that using these apps without cellular data enabled results in _severe_ degradation of quality, I think due to the fact that the [Assisted GPS](http://en.wikipedia.org/wiki/Assisted_GPS) services are unavailable, forcing the phone to rely on a raw GPS satellite fix. When using any location logging app without cellular data switched on, the device has to take longer to get a position lock. A couple of runs from my Europe trip exhibited this, like my run [along the Thames](http://www.strava.com/activities/143259424) in London, and one in [Lucerne](http://www.strava.com/activities/145669617).

![Run on the Thames](/images/post-images/thames-run.jpg)

Since these motion trackers rely on the GPS track and time series data for calculating total distance (which is obviously way off with this much linear error), you end up with massively incorrect pace and calorie-burning metrics. This jagged-looking run activity in London reported itself to be 4.7 miles, and in reality it was only about 3.5. Soon I'd like to pair my iPhone up with an external GPS device I've been [testing out](http://www.fulcrumapp.com/blog/gps-accuracy-experimentation/) to see what the improvement in accuracy looks like.

If you want to export the raw data straight from the web services, Strava and RunKeeper are the only ones that will give you a full [time series-enabled GPX track file](https://github.com/colemanm/motion-trackers/blob/gh-pages/data/snell_isle-strava.gpx) for each activity. MapMyRun only exports the [track point data](https://github.com/colemanm/motion-trackers/blob/gh-pages/data/snell_isle-mmr-raw.gpx), which without the timestamp info for each point can't be processed to calculate pace and other metrics with elapsed time as a variable.

The location data captured by the Moves app works a little differently. It splits your persistent movement activity up into day and week views, with totals of steps taken and calories burned, by type of activity. It does some cool auto-detection of activity type to try and classify car transport, cycling, running, and walking automatically. Because it's always running in the background, though, the location data isn't quite as granular as from the other three applications, probably due to less frequent logging using the location APIs.

![Moves app examples](/images/post-images/moves-app-screenshots.jpg)

One caveat important to note is that Moves was [acquired by Facebook](http://www.theverge.com/2014/5/6/5688334/moves-app-will-share-user-data-with-facebook) back in May. That may turn a lot of people off to the idea of uploading their persistent motion tracking information to the Borg.

## Wrap up

Strava and MapMyRun also support pulling the track info from external devices like mountable [GPS devices](https://buy.garmin.com/en-US/US/into-sports/cycling/edge-500/prod36728.html), [watches](http://www.magellangps.com/Echo), and [bike sensors](https://buy.garmin.com/en-US/US/shop-by-accessories/fitness-sensors/bike-speed-sensor-and-cadence-sensor/prod146897.html).

Overall, my favorite is Strava as the app-of-choice for tracking activity. It performs consistently, the GPS and fitness data is high quality, and the service has a good balance of simplicity and social features that I like.

<script>
L.mapbox.accessToken = 'pk.eyJ1IjoiY29sZW1hbm0iLCJhIjoieW8wN2lTNCJ9.j1zlDeYFSVAl8XWjaHY-5w';
var map = L.mapbox.map('map', 'mapbox.satellite').setView([27.8049,-82.6225], 14);
var layers = document.getElementById('menu-ui');

addLayer(L.mapbox.tileLayer('colemanm.j0wfjemi'), 'Strava', 1);
addLayer(L.mapbox.tileLayer('colemanm.bhqnz5mi'), 'RunKeeper', 2);
addLayer(L.mapbox.tileLayer('colemanm.v02akyb9'), 'MapMyRun', 3);

function addLayer(layer, name, zIndex) {
    layer
        .setZIndex(zIndex)
        .addTo(map);

    // Create a simple layer switcher that
    // toggles layers on and off.
    var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.innerHTML = name;

    link.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
            this.className = '';
        } else {
            map.addLayer(layer);
            this.className = 'active';
        }
    };

    layers.appendChild(link);
}
</script>
