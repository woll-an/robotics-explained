---
title: "Transformation matrix"
metaTitle: "Transformation matrix | Robotics Explained"
metaDescription: "This article is about trandformation matrices and why they are important in robotics."
---

Let's say we have a robot arm in a two-dimensional space with three links. Links are the static structures of the robot, comparable to our bones. The links are connected by rotational joints. A rotational joint is like our elbow. If we move only the forearm, our hand makes a circular motion around the elbow. The last link of the robot is the so-called end-effector. The end-effector is designated to interact with the environment. It is comparable to our hand. To make things easy, our robot can only move in a two-dimensional plane.

To define the Cartesian space, we have to set an origin, where x and y are zero. We can choose any point in the workspace. To simplify our computations we can just choose the center of the first joint as the origin. To the right of this origin is the positive x-dimension, to the top the positive y-dimension. We also have to choose the length of the links of our robot. Let's say the first two links have a length of 0.15 m and the end-effector has a length of 0.03 m.

You can see the scene I just described in the following interactive demo. When all joints are at zero (we will write this in the future as $q = [0,0,0]^T$), the tip of the end-effector is at (0.33 m, 0) with a rotation of 0 rad. This is because all links form a long chain in x-direction (0.15 m + 0.15 m + 0.03 m = 0.33 m).

<iframe src="https://condescending-yonath-40074b.netlify.app" title="Robot Kinematics" width="100%" height="500" frameborder="0"></iframe>

By using the sliders, you can modify the angles of the three joints. If you move the first joint, the end-effector will make a circular movement around the origin. The tip of the end-effector is transformed depending on the angle of the first joint. How can we compute the new pose of the end-effector given the angle $\phi$? To rotate a point counter clockwise by an angle phi, we can use a so-called *rotation matrix* to compute the transformed point.

$$
R(\phi) = \begin{bmatrix}
cos(\phi) & - sin(\phi) \\
sin(\phi) & cos(\phi) \\
\end{bmatrix}
$$

If we rotate for example the point (0.33, 0) by 0.5 rad, we get the new position of the end-effector at (0.28 m, 0.16 m). The angle for the pose is 0.5 rad.

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

The robot with one moving joint has a degree of freedom of one. This means, if we choose the value of one of the three degrees of freedom of the two-dimensional space, the other ones are fixed. If we want to move e.g. to y = 0.33 m, x has to be 0 and the orientation has to be 0.5 pi rad. If we want a rotation of 0.5 rad, x has to be 0.28 m and y has to be 0.16 m. We are now able to compute every point the end-effector can reach by moving the first joint. But these points lie all in a circle around the base point, which is not very useful for a robot. We want to be able to reach every point with an arbitrary rotation of the end-effector.

Let's look at what happens if you only move the second joint. The tip of the end-effector rotates now around this joint. We can therefore use a similar rotation matrix as the one for the first joint. But additional to this rotation, we have a translation of the center of this point by $[0.15m, 0]^T$. How can we now compute the position of the end-effector? We can use a *transformation matrix* which combines rotation and translation in a single $3 x 3$ matrix. It consists of the rotation matrix, the translation vector and $[0,0,1]$ in the last row. The last row seems to be unnecessary, but you will see soon, that it comes very handy!

$$
T(x,y,\phi)
= \begin{bmatrix}
cos(\phi) & - sin(\phi) & x \\
sin(\phi) & cos(\phi) & y \\
0 & 0 & 1
\end{bmatrix}
$$

We can now compute the position of the end-effector by multiplying it with the transformation matrix.

$$
T(x,y,\phi)
= \begin{bmatrix}
cos(\phi) & - sin(\phi) & x \\
sin(\phi) & cos(\phi) & y \\
0 & 0 & 1
\end{bmatrix}
$$