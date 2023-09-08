import picture from "../assets/img/scenery/image5.jpg"

export default function TarjetasHome(){
    return(
        <div className="col-md-6 col-lg-4">
            <div className="card" style={{boxShadow: '0px 2px 6px'}}><img className="card-img-top w-100 d-block" src={picture} />
                <div className="card-body">
                    <h4 className="card-title">Lorem Ipsum</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in.</p>
                </div>
                <div><button className="btn btn-outline-primary btn-sm" type="button">Learn More</button></div>
            </div>
        </div>
    )
}

    
