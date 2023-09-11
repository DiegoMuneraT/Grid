import NavBarApp from "../components/NavBarApp";

export default function Map() {
  return (
    <body>
        <NavBarApp/>
        
        <div style={{height: '100vh', overflowY: 'hidden'}}><iframe title="map" allowfullscreen="" frameborder="0" src="https://cdn.bootstrapstudio.io/placeholders/map.html" style={{width: '100%', height: '100%', position: 'static',}}></iframe></div>
    </body>
  )
}
