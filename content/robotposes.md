---
title: "Robot Poses"
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
---

Imagine you want to meet with a friend in the city. You might write a message saying "Hey, let's meet in the park at the bench near the entrance by the church." Twenty minutes later, your friend arrives at the said bench. Great!

The next day, you want your robotic arm to pick up a red ball: "Hey, pick up the red ball in the second tray, just left to the green ball" Nothing happens. But why? It is such an easy task. Your four year old niece would be able to do it! But robot and you, you just don't speak the same language.

Back to the first scenario. Imagine you want to meet your friend in the middle of a desert. "Hey, let's meet at the grey rock near this dune!" might be problematic. What do you do? You both take a map and a GPS device and say "Let's meet at 22°13'27.8"N 22°06'55.7"E" Twenty hours later, your friend arrives at the said point. Great! In the second scenario you were not able to rely on your knowledge of the world. Instead you used a system, which specifies exactly each point on the surface of the earth.

We can talk in a similar way to robots. This means we take the space in which the robot can move and use a system which is able to describe every point within this space. In robotics, we often use the Cartesian space. This is just a fancy name for the well known coordinate system with an x- and y-axes (and z-axes in three dimensional space) we draw a thousand times in school.

It is often important from which direction a robot's tool points to a position. Imagine for example a robot equipped with a drilling machine. It matters in which direction the hole is drilled, not just at which position. Or a mobile robot which should park in a parking lot. If the rotation of the robot is wrong, it might damage cars nearby. We therefore use a so-called pose to describe how the robot is positioned. In two dimensional space the pose consists of 

* the x-coordinate
* the y-coordinate 
* an angle phi for the rotation

These are three degrees of freedom. In three dimensional space we need the x-, y-, and z-coordinates as well as three angles (e.g. roll, pitch, yaw) to describe the pose. There are six degrees of freedom.

"Alright, robot!", you say, "Move to (0.1 m, 0.53 m) with a rotation of 1.4 rad!" Nothing happens. But why? If someone would tell us "Move to 22°13'27.8"N 22°06'55.7"E" we would not be able to achieve this without a device which measures for us where we are. This is similar for the robot. The robot needs a way to know where it is. We will therefore develop a relationship between the geometry of the robot and its movement in the Cartesian space. This is called kinematics. This is comparable to predicting the pose of our left index finger by measuring the contraction of every muscle and the length of every bone in our body.