import './index.css'

const Btn = () => <button className="btn">Show More</button>
const ReusableBanners = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={`card ${className}`}>
        <div>
          <h1 className="heading">{headerText}</h1>
          <p className="para">{description}</p>
          <Btn />
        </div>
    </li>
  )
}

export default ReusableBanners
