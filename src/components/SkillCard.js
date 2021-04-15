function SkillCard(props) {
  const { letters, pictureSrc } = props;
  return (
    <div>
      <div className={classes.letters}>{letters}</div>
      <img src={pictureSrc}></img>
    </div>
  );
}
export default SkillCard;
