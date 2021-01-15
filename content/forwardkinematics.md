---
title: "Forward Kinematics"
metaTitle: "Forward kinematics | Robotics Explained"
metaDescription: "This article is about forward kinematics in robotics."
---

As mentioned in the article about [robot poses](http://localhost:8000/robotposes), kinematics is the relationship between the geometry of the robot and its movement in the Cartesian space. We take into account the configuration of the robot and the length of the joints. A configuration describes the state of the robot's parts we have control over. For a robot arm the configuration is the state of the motors - the rotational joints. Normally we can measure how far they turned from an initial position. For a robot with three motors we express this with a three dimensional vector q, where each row is the rotation of one of the joints in radiant, e.g. $q = [0.5,0,1]^T$. Our goal is to develop a transformation matrix $T(q)_{O,ee}$ which allows us to compute the pose of the end-effector given the configuration of the robot. $T_{O,ee}$ is the transformation from the origin (O) to the end-effector (ee).

As we learned in the article about [transformation matrices](http://localhost:8000/transformation) we can construct the transformation matrix by chaining multiple transformation matrices, i.e.

$$T(q)_{O,ee} = T(q_1)_{O,1} \cdot T(q_2)_{1,2} \cdot T(q_3)_{2,3} \cdot T_{3,ee}$$

<iframe src="https://condescending-yonath-40074b.netlify.app" title="Robot Kinematics" width="100%" height="500" frameborder="0"></iframe>