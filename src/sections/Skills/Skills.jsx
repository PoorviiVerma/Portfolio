import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="C++" /> 
        <SkillList src={checkMarkIcon} skill="JAVA" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React.js" />
        <SkillList src={checkMarkIcon} skill="Express.js" />
         <SkillList src={checkMarkIcon} skill="Node.js" />
        {/* <SkillList src={checkMarkIcon} skill="Vue" /> */}
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Mongodb" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="Firebase" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Postman" />
        <SkillList src={checkMarkIcon} skill="Git" />
        {/* <SkillList src={checkMarkIcon} skill="Jest" /> */}
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="Jupyter Notebooks" />
        <SkillList src={checkMarkIcon} skill="Google Colab" />
      </div>
      
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="NLP " />
        <SkillList src={checkMarkIcon} skill="Machine Learning" />
        <SkillList src={checkMarkIcon} skill="Data Analysis and Visualization" />
        <SkillList src={checkMarkIcon} skill="Data Preprocessing" />
        <SkillList src={checkMarkIcon} skill="Text Analysis" />
      </div>
      

    </section>
  );
}

export default Skills;
