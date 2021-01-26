---
title: "Transformation matrix"
metaTitle: "Transformation matrix | Robotics Explained"
metaDescription: "Transformation matrices are a mathematical representation of combined rotation and translation."
---

# Rotation matrix

Let's say we have a robot arm in a two-dimensional space with three links. Links are the static structures of the robot, comparable to our bones. The links are connected by rotational joints. A rotational joint is similar to our elbow. If we move only the forearm, our hand makes a circular motion around the elbow. The "hand" of the robot - i.e. the last link - is the so-called end-effector. It is designated to interact with the environment.

You can see the robot I just described in the following interactive demo. To define the Cartesian space, we have to set an origin, where x and y are zero. We can choose any point in the workspace. To simplify our computations we can just choose the center of the first joint as the origin. To the right of this origin is the positive x-dimension, to the top the positive y-dimension. We also have to choose the length of the links of our robot. Let's say the first two links have a length of 0.15 m and the end-effector has a length of 0.03 m. When all joints are at zero (we will write this in the future as $q = [0,0,0]^T$), the tip of the end-effector is at (0.33, 0) with a rotation of 0. This is because all links form a long chain in x-direction (0.15 + 0.15 + 0.03 = 0.33).

A quick note about units: For readability I often omit units when I think it is clear if it is a linear measure or an angle from the context. The units I omit are always SI-units, i.e. meter [m] for a linear measure and radiant [rad] for an angle.

But back to our robot. If you move the slider for the first joint (q0), the end-effector will make a circular movement around the origin.

<iframe src="https://kinematics.robotics-explained.com?q1=0&q2=0" title="Robot Kinematics" width="100%" height="500" frameborder="0"></iframe>

The pose of the tip of the end-effector depends on the angle of the first joint. How can we compute the new pose of the end-effector given the angle $\phi$? To rotate a point counter clockwise by an angle $\phi$, we can use a so-called *rotation matrix* to compute the transformed point. The rotation matrix might look in the beginning a bit scary, but it is super useful!

$$
R(\phi) = \begin{bmatrix}
cos(\phi) & - sin(\phi) \\
sin(\phi) & cos(\phi) \\
\end{bmatrix}
$$

By multiplying a point with this matrix, we get the position of the rotated point. If we rotate for example the point (0.33, 0) by 0.5 rad, we get the new position of the end-effector at (0.28, 0.16).

$$
p_{ee} = \begin{bmatrix}
cos(0.5) & - sin(0.5) \\
sin(0.5) & cos(0.5) \\
\end{bmatrix}
\cdot
\begin{bmatrix}
0.33 \\
0 \\
\end{bmatrix}
 =
\begin{bmatrix}
0.26 \\
0.16 \\
\end{bmatrix}
$$

The robot with one moving joint has a degree of freedom of one. This means we can choose only the value of one of the three degrees of freedom of the two-dimensional space, the other ones are fixed. If we want to move e.g. to y = 0.33, x has to be 0 and the orientation has to be 0.5 $\pi$. If we want a rotation of 0.5, x has to be 0.28 and y has to be 0.16. We are not able to move e.g. to y = 0.33 and x = 0.1.

# Transformation matrix

We are now able to compute every point the end-effector can reach by moving the first joint. But these points lie all in a circle around the base point, which is not very useful for a robot. We want to be able to reach every point in the workspace with an arbitrary rotation of the end-effector.

Let's look at what happens if we only move the second joint.

<iframe src="https://kinematics.robotics-explained.com?q0=0&q2=0" title="Robot Kinematics" width="100%" height="500" frameborder="0"></iframe>

The tip of the end-effector rotates now around this joint with a smaller radius than before. We can therefore use a similar rotation matrix as the one for the first joint. But additional to this rotation, we have a translation of the center of this point by $[0.15,0]^T$. How can we now compute the position of the end-effector? We can use a *transformation matrix* which combines rotation and translation in a single 3x3 matrix. It consists of the rotation matrix, the translation vector $[x,y]^T$ and $[0,0,1]$ in the last row. The last row seems to be unnecessary, but you will see soon, that it comes very handy!

$$
T(x,y,\phi)
= \begin{bmatrix}
cos(\phi) & - sin(\phi) & x \\
sin(\phi) & cos(\phi) & y \\
0 & 0 & 1
\end{bmatrix}
$$

We can now compute the position of the end-effector by multiplying it with the transformation matrix for our first joint. Let's say we want to rotate the second joint by 0.5. In the transformation matrix we replace $\phi$ with 0.5, x with 0.15 and y with 0. Why 0.15 and 0 for x and y? This is the position of the second joint. The initial point of the end-effector is the same as before, i.e. (0.33, 0), but as the first link of the robot is included in the transformation, our point is now (0.33-0.15,0) = (0.18,0). To be able to multiply it with a 3x3 matrix, we have to augment it with a 1: $[0.18,0,1]^T$. 

$$
p_{ee} =
\begin{bmatrix}
cos(0.5) & - sin(0.5) & 0.15 \\
sin(0.5) & cos(0.5) & 0 \\
0 & 0 & 1
\end{bmatrix} \cdot 
\begin{bmatrix}
0.18 \\ 0 \\ 1
\end{bmatrix} =
\begin{bmatrix}
0.3 \\ 0.08 \\ 1
\end{bmatrix}
$$

The great thing about transformation matrices is, that we can chain them together. Transforming a point from A to B with $T_{A,B}$ and then transforming it from B to C with $T_{B,C}$ is the same as transforming a point from A to C with $T_{A,C} = T_{A,B} \cdot T_{B,C}$. In the next article we will use this property of transformation matrices to compute the tip of the end-effector of the robot, when all three joints rotate.