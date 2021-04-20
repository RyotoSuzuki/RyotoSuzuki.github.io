function SkillCard(props) {
  const { letters, pictureSrc } = props;
  return (
    <div>
      {letters}
      <img src={pictureSrc}></img>
    </div>
  );
}

export default SkillCard;
