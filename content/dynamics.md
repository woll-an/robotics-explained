---
title: "Dynamics"
metaTitle: "Dynamics | Robotics Explained"
metaDescription: "How robots move."
---

Up to now we assumed that we can just command arbitrary velocities to our robot. Unfortunately, this is not possible. Each abrupt change of the velocity leads to high accelerations, accelaration is according to Newtons's first law $F = m \cdot a$ proportional to force, and (too much) force will break the robot. A quick note about force and torque. A force causes linear acceleration of an object, whereas a torque causes angular acceleration. For our rotational joints we are interested in torques and for the end-effector we are (mostly) interested in forces. How do we compute the relationship between end-effector force $f$ and joint torque $\tau$? We use our almighty Jacobian!

$$\tau = J(q)^T \cdot f$$

When the robot moves, there are a lot of forces and torques acting on the robot. One component is the torque from the acceleration of the robot. It can be computed by $M(q) \cdot \ddot{q}$, where $M$ is the mass matrix and $\ddot{q}$ the joint acceleration. The mass matrix depends on the joint angles $q$ as it makes a difference if the arm is stretched or bent. This might seem unintuitiv, as the actual mass does not change. However, the resistance of a physical object to change its velocity - the inertia - does depend on the mass and also mass distribution of the object. This is the reason why an ice dancer rotates slower during a pirouette when they extend they arms.