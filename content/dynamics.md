---
title: "Dynamics"
metaTitle: "Dynamics | Robotics Explained"
metaDescription: "How robots move."
---

# Torques and Forces

Up to now we assumed that we can just command arbitrary velocities to our robot. Unfortunately, this is not possible. Each abrupt change of the velocity leads to high accelerations, accelaration is according to Newtons's first law $F = m \cdot a$ proportional to force, and (too much) force will break the robot. A quick note about force and torque. A force causes linear acceleration of an object, whereas a torque causes angular acceleration. For our rotational joints we are interested in torques and for the end-effector we are (mostly) interested in forces. How do we compute the relationship between end-effector force $f$ and joint torque $\tau$? We use our almighty Jacobian!

$$\tau = J(q)^T \cdot f$$

# Forces acting on the robot

When the robot moves, there are a lot of forces acting on the robot. One component is the force from the acceleration of the robot. It can be computed by multiplying the robot's mass with its joint acceleration. We specify the robot's mass with the so called mass or inertia matrix $M(q)$. The mass matrix depends on the joint angles $q$ as it makes a difference if the arm is stretched or bent. This might seem unintuitiv, as the actual mass does not change. However, the resistance of a physical object to change its velocity - the inertia - does depend on the mass and also mass distribution of the object. This is the reason why an ice dancer can control the velocity of the rotation in a pirouette by extending their arms.

Other forces acting on the robot are gravitational forces. They are present all the time, even when the robot is not moving. Hoewever, if you want to operate your robot in space, you can ignore this paragraph. The gravitational forces are dependent on the joint configuration $q$. If you extend your arm you need much more power to hold it up compared to just let it hang at your side. This is the same for the robot.

The last component are centrifugal and Coriolis forces. These depend on the joint configuration and the velocity. You are probably familiar with the contrifugal force. It is the force which holds the water in the bucket when you swirl it around. It acts radial to the axis of rotation and is proportional to the mass, the distance from the axis and the square of the (angular) velocity.

The Coriolis force is a bit harder to grasp. Imagine you are travelling in a straight line on top of the earth surface to the north. A visitor in a space ship observes you. The path of your travel does not appear as a straight line to the north for the visitor, even though it does for you. Because of the rotation of the earth, the visitor oberserves an additional eastward motion. The force causing this motion is called Coriolis force.

Besides the forces listed above, there could also be external forces acting on the robot, for example if it is in contact with a surface or carrying payload.

# Inverse Dynamics

To counteract these forces, torques are applied in the joints. This is similar to engaging our muscles when we bring our body in an upright position. The torque $\tau$ required can be computed by summing the terms for all the forces we listed above. $\tau$ is a vector with one dimension for each joint. We have a term for the mass $M(q) \ddot{q}$, Coriolos and centrifugal terms $C(q,\dot{q})$ and gravitational terms $g(q)$.

$$ \tau = M(q) \ddot{q} + C(q,\dot{q}) + g(q) - \tau_{ext}$$

This formula is called the inverse dynamics, as we can compute the torque required given the joint position, velocity and acceleration. In practice, $M(q)$, $C(q, \dot{q})$ and $g(q)$ are often determined with the help of modelling software.

# Forwards Dynamics

When there is an inverse dynamics, there is of course also a forwards dynamics. It allows us to compute the joint acceleration given the torques currently applied. We can derive it by rearranging the equation for the inverse dynamics.

$$\ddot{q} = M(q)^{-1} (\tau - C(q,\dot{q}) - g(q) + \tau_{ext}) $$