import Java from './Java';
import JavaScript from './JavaScript';
import Python from './Python';
import Layout from '../layouts/Layout.js';
import SkillCard from './SkillCard.js';

function Skill() {
  return (
    <Layout letters="Skill">
      <Java />
      <JavaScript />
      <Python />
      <SkillCard />
    </Layout>
  );
}
export default Skill;
