---
title: "Inverse Kinematics"
metaTitle: "Inverse kinematics | Robotics Explained"
metaDescription: "Inverse kinematics allows us to compute the configuration of the robot's joints given the pose of its end-effector."
---

To be honest, we normally don't want our robot to tell us where it is - we want to tell where it should be. Imagine you have a GPS device and want to move to 22°13'27.8"N 22°06'55.7"E. The GPS device only tells you your position, just the coordinates, no map. You are for sure able to get to the goal position by moving in a random direction and comparing the coordinates on your device with the goal coordinates, but this would be quite inefficient. If we tell our robot to move to the goal pose (0.5, 0.1) with a rotation of 0.75, it could start moving its motors in a random direction and compare how much the current pose of the end-effector differs from the goal pose. But it would be much better if we could just compute the configuration - the joint angles - the robot will have at the goal pose and move the joints straight to this configuration.

In other words, we try to find a formula which takes a pose as an input and outputs the configuration q of the robot. In forwards kinematics we developed a formula which takes the configuration as an input and outputs the pose. We therefore call this problem - you might have guessed it - *inverse kinematics* or IK for short.