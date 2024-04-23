import "./ChallengeCard.scss";
import Placeholder from '../../assets/images/placeholder.avif'


const ChallengeCard = (props) => {
  const { challenge, handleChallengeClicked} = props;

  const challengeUrl = challenge?.contenturl === ''? Placeholder : challenge?.contenturl

  return (
    <section onClick={()=>{
        handleChallengeClicked(challenge?.id)
    }} className="card">
      <div className="card__img-bk">
        <img
          className="card__img"
          src={challengeUrl}
          alt="challenge sample photo"
        />
      </div>

      <div className="card__details">
        <h2 className="card__title">{challenge?.title}</h2>
        <p className="card__desp">
          This challenge : {challenge?.description}
        </p>
      </div>
    </section>
  );
};

export default ChallengeCard;
