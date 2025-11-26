---
sidebar_position: 5
---

# On Swarm Leader Identification using Probing Policies

Journal: IEEE Transactions on Automation Science and Engineering (T-ASE)

Date of Conference: 19-23 May 2025 

## Abstract:

Identifying the leader within a robotic swarm is crucial, especially in adversarial contexts where leader concealment is necessary for mission success. This work introduces the interactive Swarm Leader Identification (iSLI) problem, a novel approach where an adversarial probing agent identifies a swarm's leader by physically interacting with its members. We formulate the iSLI problem as a Partially Observable Markov Decision Process (POMDP)  and employ Deep Reinforcement Learning, specifically Proximal Policy Optimization (PPO), to train the prober's policy. The proposed approach utilizes a novel neural network architecture featuring a Timed Graph Relationformer (TGR) layer combined with a Simplified Structured State Space Sequence (S5) model. The TGR layer effectively processes graph-based observations of the swarm, capturing temporal dependencies and fusing relational information using a learned gating mechanism to generate informative representations for policy learning. Extensive simulations demonstrate that our TGR-based model outperforms baseline graph neural network architectures and exhibits significant zero-shot generalization capabilities across varying swarm sizes and speeds different from those used during training. The trained prober achieves high accuracy in identifying the leader, maintaining performance even in out-of-training distribution scenarios, and showing appropriate confidence levels in its predictions. Real-world experiments with physical robots further validate the approach, confirming successful sim-to-real transfer and robustness to dynamic changes, such as unexpected agent disconnections.