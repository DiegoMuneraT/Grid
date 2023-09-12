import picture from "../assets/img/tech/image4.jpg"

export default function Comentarios() {
  return (
    <div className="clean-blog-post">
        <div className="row">
            <div className="col-lg-5"><img className="rounded img-fluid" src={picture}/></div>
            <div className="col-lg-7">
            <h3>Lorem Ipsum dolor sit amet</h3>
            <div className="info"><span className="text-muted">Jan 16, 2018 by&nbsp;<a href="#">John Smith</a></span></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                <button className="btn btn-outline-primary btn-sm" type="button">Read More</button>
            </div>
        </div>
    </div>
  )
}
