---
title: "Robot Jacobian"
metaTitle: "Robot Jacobian | Robotics Explained"
metaDescription: "The robot Jacobian is the relationship between the angular velocity of the joints and the linear and angular velocity of the end-effector"
---

We now know how the position of the end-effector in the Cartesian space relates to the configuration of the robot. But robots are no statues, they move around quite a lot and we are interested how fast they are moving.

# Linear and angular velocity

Let's refresh quickly our knowledge about velocity. In school we learned that velocity is the distance over time or te be more precise the rate of change of the position, i.e. its time derivative. The linear velocity $v$ can be computed by

$$v = \frac{ds}{dt}$$

and the angular velocity $\omega$ by

$$\omega = \frac{d\theta}{dt}$$

A quick note about the notation: I will use from now on dots to denote the time derivative of a value. Instead of writing $\frac{dq}{dt}$ for the joint velocity, I will use $\dot{q}$ instead. You will also see multiple dots for the second or third derivatives.

We can now tell the angular velocity of the joints quite easily by taking into account the angle we moved in a certain time span.
If you move for example the slider for $q_1$ in one second from the right to the left, the joint moves with a rotational velocity of $\dot{q_1} = 2\pi \frac{rad}{s}$.

<iframe src="https://kinematics.robotics-explained.com?q0&q2" title="Robot Kinematics" width="100%" height="500" frameborder="0"></iframe>

But what is the linear velocity of the end-effector? The linear velocity of the end-effector $v_{ee}$ can be decomposed into two components: The linear velocity in x-direction and the linear velocity in y-direction. As we derived in the chapter about forwards kinematics, the position of the end-effector if we are only able to move $q_1$ is

$$
p_{ee} =
\begin{bmatrix}
l_0 + l_1 \cdot cos(q_1) \\
l_0 + l_1 \cdot sin(q_1)
\end{bmatrix}
$$

where $q_1$ changes over time and $l_0$ and $l_1$ are constant. By computing the time derivative, we get the velocity

$$
v_{ee} =
\begin{bmatrix}
-l_1 \cdot sin(q_1) \\
l_1 \cdot cos(q_1)
\end{bmatrix}
$$

# Jacobian matrix

I wrote now a lot about angular and linear velocity without mentioning once the title of this chapter, the Jacobian. It is a matrix named after the mathematician Jacobi. In robotics we use it to express the relationship between the angular velocity of the joints and the linear and angular velocity of the end-effector, i.e.

$$\dot{p}_{ee} = J_{ee} \cdot \dot{q}$$

where $J_{ee}$ consists of all partial derivatives of the kinematics functions. The first two rows are the partial derivatives for the position (x,y) and the last row are the partial derivatives for the angle $\phi$ of the end-effector.

$$
J_{ee} =
\begin{bmatrix}
\frac{\partial x}{\partial q_0} & \frac{\partial x}{\partial q_1} & \frac{\partial x}{\partial q_2} \\
\frac{\partial y}{\partial q_0} & \frac{\partial y}{\partial q_1} & \frac{\partial y}{\partial q_2} \\
\frac{\partial \phi}{\partial q_0} & \frac{\partial \phi}{\partial q_1} & \frac{\partial \phi}{\partial q_2}
\end{bmatrix}
$$

A quick refresh of partial derivatives. $\frac{\partial x}{\partial q_0}$ means, we take the formula for $x$ and assume that all other variables except $q_0$ are constants. Then we compute the derivative.

We get the following partial derivatives for $x$.

$$\frac{\partial x}{\partial q_0} = - l_0 \cdot sin(q_0) - l_1 \cdot sin(q_0+q_1) - l_2 \cdot sin(q_0+q_1+q_2)$$

$$\frac{\partial x}{\partial q_1} = - l_1 \cdot sin(q_0+q_1) - l_2 \cdot sin(q_0+q_1+q_2)$$

$$\frac{\partial x}{\partial q_2} = - l_2 \cdot sin(q_0+q_1+q_2)$$

We can do the same for $y$.

$$\frac{\partial y}{\partial q_0} = l_0 \cdot cos(q_0) + l_1 \cdot cos(q_0+q_1) + l_2 \cdot cos(q_0+q_1+q_2)$$

$$\frac{\partial y}{\partial q_1} = l_1 \cdot cos(q_0+q_1) + l_2 \cdot cos(q_0+q_1+q_2)$$

$$\frac{\partial y}{\partial q_2} = l_2 \cdot cos(q_0+q_1+q_2)$$

The partial derivatives for $\phi$ are all the same.

$$\frac{\partial \phi}{\partial q_0} = 1$$

$$\frac{\partial \phi}{\partial q_1} = 1$$

$$\frac{\partial \phi}{\partial q_2} = 1$$

Given the velocity of each joint, we can now immediately compute the linear and angular velocities of the end-effector. But this is not the only thing the robot Jacobian is used for!