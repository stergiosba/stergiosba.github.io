---
sidebar_position: 0
---

# Projects

During my PhD I have had the pleasure of working on many different problems at the Human Oriented Robotics and Control lab at the University of Delaware. 


My research focuses on enhancing the physical intelligence of autonomous robots using Deep Reinforcement Learning. Applications of his work include the development of an autonomous probing agent for swarm leader identification and the creation of a whole-body loco-manipulation controller for quadruped robots.

:::tip
Please contact me directly for possible collaborations.
:::

--- 

# [Swarm Robots](/docs/swarm-robots)

The first three years of my PhD I focused on
- Creating a swarm research testbed to implement and study algorithms of robotic swarms.
- Developing a Deep Reinforcement Learning framework to study privacy in robotic swarms. 


This work resulted in two (2) conference publications and one (1) journal publication under review. 

---

# [Quadruped Robots](/docs/quadruped-robots)

When you want an armless quadruped robot to transport heavy or bulky cargo, non-prehensile manipulation—pushing objects using its whole body—is a very effective approach. However, pushing multi-object stacks makes the task substantially harder. To prevent the upper layers from sliding off or the entire stack from tipping over during transit, the robot must precisely regulate contact forces and pushing heights.

To address this challenge, we proposed SOMA, a hierarchical reinforcement learning framework that explicitly regulates the robot's base height. Moving beyond conventional 2D planar pushing, it adjusts contact point height vertically to enable 3D pushing strategies while suppressing tipping moments and relative sliding of upper layers. The control architecture factorizes into a high-level policy that uses a Simplified Structured State Space Sequence (S5) encoder to reason over contact history, and a low-level locomotion policy that tracks target commands.

In physics simulation benchmarks our method achieves success rates of 90% in the repose task with thresholds of (0.05 m position error, 1 degree orientation error).
For a stack of two objects our method achieved 90.1% success reate.

Furthermore, zero-shot sim-to-real transfer on a physical Unitree Go1 quadruped demonstrated that the robot can actively lower its base height to maintain balance and stably push cardboard box stacks of varying masses and geometries to goal locations without collapsing them.