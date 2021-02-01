---
title: "Inverse Kinematics"
metaTitle: "Inverse kinematics | Robotics Explained"
metaDescription: "Inverse kinematics allows us to compute the configuration of the robot's joints given the pose of its end-effector."
---

To be honest, we normally don't want our robot to tell us where it is - we want to tell where it should be. Imagine you have a GPS device and want to move to 22°13'27.8"N 22°06'55.7"E. The GPS device only tells you your position, just the coordinates, no map. You are for sure able to get to the goal position by moving in a random direction and comparing the coordinates on your device with the goal coordinates, but this would be quite inefficient. If we tell our robot to move to the goal pose (0.5, 0.1) with a rotation of 0.75, it could start moving its motors in a random direction and compare how much the current pose of the end-effector differs from the goal pose. But it would be much better if we could just compute the configuration - the joint angles - the robot will have at the goal pose and move the joints straight to this configuration.

Try it out yourself! Can you move the end-effector to (0,0) with a rotation of 0? The current pose is displayed at the bottom of the simulation.

<iframe src="https://kinematics.robotics-explained.com" title="Robot Kinematics" width="100%" height="500" frameborder="0"></iframe>

In other words, we try to find a formula which takes a pose as an input and outputs the configuration q of the robot. In forwards kinematics we developed a formula which takes the configuration as an input and outputs the pose. We therefore call this problem - you might have guessed it - *inverse kinematics* or IK for short.

Unfortunately there is no one size fits all solution. Depending on the robot, the complexity of this problem varies significantly and there are different strategies to solve it. Two major approaches are algebraic and geometric inverse kinematics.

# Algebraic Inverse Kinematics

For algebraic inverse kinematics, an equation system is constructed and solved. For our planar robot we could use the three equations for the forwards kinematics and solve them for $q_0$, $q_1$ and $q_2$. These equation are

$$\phi_{O,ee} = q_0+q_1+q_2$$

$$x_{O,ee} = 0.15 \cdot cos(q_0) + 0.15 \cdot cos(q_0+q_1) + 0.03 \cdot cos(q_0+q_1+q_2)$$

$$y_{O,ee} = 0.15 \cdot sin(q_0) + 0.15 \cdot sin(q_0+q_1) + 0.03 \cdot sin(q_0+q_1+q_2)$$

# Geometric Inverse Kinematics

However, in this article I want to show you a goemetric approach. In the following image you see our robot with an arbitrary pose. Given x, y and $\phi$, we want to compute the three joint angles $q_0$, $q_1$ and $q_2$. I marked three trianlges in the image, a green, red and blue one. Let's look what we know about these triangles.

![geometric](../images/inverse/geometric.png "Geometric Inverse Kinematics")

## Green triangle

We already know a lot about the green triangle. It has a right angle at the bottom right, the bottom left is equal to $\phi$, its hypotenuse is equal to the length of the end-effector $l_2$ and the corner at the top has the position (x,y). With this information we can compute the position of $p_2$, the center of the joint of the end-effector. With the definition od sine and cosine, we can compute the length of the bottom side of the rectangle with $l_2 \cdot sin(\phi)$ and the right side of the triangle with $l_2 \cdot cos(\phi)$. The point $p_2$ is therefore defined as

$$
p_2 = \begin{bmatrix}
x' \\
y'
\end{bmatrix} = \begin{bmatrix}
x - l_2 \cdot cos(\phi) \\
y - l_2 \cdot sin(\phi)
\end{bmatrix}
$$

## Red triangle

This one is really simple. We just use the Pythagorean theorem to compute the hypotenuse r by using the x- and y- coordinate of $p_2$.

$$r^2 = x'^2 + y'^2$$

## Blue triangle

<iframe src="https://kinematics.robotics-explained.com?inverse" title="Robot Kinematics" width="100%" height="500" frameborder="0"></iframe>