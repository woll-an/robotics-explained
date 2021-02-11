---
title: "Singularity"
metaTitle: "Singularity | Robotics Explained"
metaDescription: "Singularities in robotics"
---

For me, singularity sound always scary. There is no single definition of the term, each discipline seems to have its own singularity. In this article we are interested in the so-called mechanical singularity. What does this mean for our robot? A singularity is a certain configuration where the motion of the end-effector is restricted. If a robot is in a singularity it "loses" one or more degrees of freedom. 

If the robot is for example fully stretched like in the example below, it is not able to change the rotation nor the y-position. It has lost two degrees of freedom. This is a so-called boundary singularity, as we are at the boundary of the workspace.

<iframe src="https://kinematics.robotics-explained.com?inverse" title="Robot Kinematics" width="100%" height="500" frameborder="0"></iframe>

But there are other singularities, which are not as obvious. In the last chapter we learned about the robot Jacobian and how it expresses the relationship between joint velocity and the linear and angular velocity of the end-effector.

$$\dot{p}_{ee} = J_{ee} \cdot \dot{q}$$

As mentioned in the chapter about inverse kinematics, we are more often interested in controlling the Cartesian space. This means we have to invert the Jacobian.

$$\dot{q} = J^{-1}_{ee} \cdot \dot{p}_{ee}$$

However, it is not always possible to invert a matrix, this is the case if the determinant is zero.

The determinant of our Jacobian is $det(J_{ee}) = sin(q_1)$

Whenever $q_1$ is equal to zero or $\pi$, it is not possible to compute the inverse of the Jacobian. What does this mean? To maintain the velocity in Cartesian space, we would need infinite joint velocity. The joint would have to flip from one direction to the other instantenously. You can see this happen if you move only the slider for the x-position to the left. When x is zero, $q_1$ is $\pi$ and the robot flips.

<!-- {{-d*sin(a)-e*sin(a+b)-f*sin(a+b+c),-e*sin(a+b)-f*sin(a+b+c),-f*sin(a+b+c)},{d*cos(a)+e*cos(a+b)+f*cos(a+b+c),e*cos(a+b)+f*cos(a+b+c),f*cos(a+b+c)},{1,1,1}}  -->