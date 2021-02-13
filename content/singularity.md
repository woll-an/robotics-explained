---
title: "Singularity"
metaTitle: "Singularity | Robotics Explained"
metaDescription: "Singularities in robotics"
---

There is no single definition of the term *singularity*, each discipline seems to have its own: There are mathematical singularities, gravitational singularities, technological singularities and many more. In this article we are interested in the so-called mechanical singularity. What does this mean? In robotics, a singularity is a certain configuration where the motion of the end-effector is restricted. If a robot is in a singularity it "loses" one or more degrees of freedom. 

If the robot is for example fully stretched like in the example below, it is not able to change the rotation nor the y-position. It has lost two degrees of freedom. This is a so-called boundary singularity, as we are at the boundary of the workspace.

<iframe src="https://kinematics.robotics-explained.com?inverse" title="Robot Kinematics" width="100%" height="500" frameborder="0"></iframe>

But there are other singularities, which are not as obvious. If you set $y = 0$ in the interactive demo and move the x-slider to the left, you will notice the robot joints flips from one side to the other when the end-effector is around (0,0). A real robot would of course not be able to perform such a motion as it requires nearly infinite joint velocity to maintain the velocity in Cartesian space.

Working with robots means we have to avoid such configurations, as they can damage the robot and lead to uncontrolled behavior. But how do we know where the singularities are?

In the last chapter we learned about the robot Jacobian and how it expresses the relationship between joint velocity and the linear and angular velocity of the end-effector.

$$\dot{p}_{ee} = J_{ee} \cdot \dot{q}$$

When we want to reason about the robot's movement in Cartesian space, we have to rearrange this formula. This means we have to invert the Jacobian.

$$\dot{q} = J^{-1}_{ee} \cdot \dot{p}_{ee}$$

However, it is not always possible to invert a matrix. This is the case if its determinant is zero. Let's compute the determinant of the Jacobi introduced in the last chapter. You probably learned in school how to compute the determinant of a matrix - I was lazy and let my computer do the work for me. The result is

$$det(J_{ee}) = sin(q_1)$$

We are now interested in configurations where $sin(q_1)$ is zero, as these configurations are singularities. This is the case if $q_1$ is equal to zero or $\pi$. Let's look if this is true for the examples at the beginning of this chapter. For the boundary singularity, the first and second link are aligned and $q_1$ is therefore zero. For the singularity where the robot flips around (0,0) $q_1$ is equal to $\pi$. Great!

We are now able to tell which configurations of our robot are singularities!

<!-- {{-d*sin(a)-e*sin(a+b)-f*sin(a+b+c),-e*sin(a+b)-f*sin(a+b+c),-f*sin(a+b+c)},{d*cos(a)+e*cos(a+b)+f*cos(a+b+c),e*cos(a+b)+f*cos(a+b+c),f*cos(a+b+c)},{1,1,1}}  -->