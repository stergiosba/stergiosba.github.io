import React from 'react';
import styles from './styles.module.css';

export const contributions = [
  {
    n: '01',
    title: 'A PHYSICAL ADVERSARY',
    body: 'Prior work on swarm leader identification assumed a fictitious observer with full visibility. The prober is an embodied agent that shares the environment and must push its way through the swarm to learn anything at all.',
  },
  {
    n: '02',
    title: 'PARTIAL OBSERVABILITY',
    body: 'The prober receives only the relative positions of the other agents and its own absolute position. Interaction — counted whenever it comes within a radius R of an agent — is its guiding information source.',
  },
  {
    n: '03',
    title: 'SEQUENCE-MODEL POLICY',
    body: 'The policy is built on the Simplified Structured State Space Sequence (S5) model with an embedding layer and separate action and value heads, trained end to end with Proximal Policy Optimization.',
  },
  {
    n: '04',
    title: 'SIM-TO-REAL TRANSFER',
    body: 'Deployed as a ROS 2 package on a real robot, with JAX just-in-time compilation running the policy on a Raspberry Pi 4. Belief over the leader collapses to certainty within roughly 13 seconds.',
  },
];

export default function Contributions() {
  return (
    <div className={styles.grid}>
      {contributions.map((item) => (
        <div key={item.n} className={styles.card}>
          <span className={styles.number}>{item.n}</span>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.body}>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
