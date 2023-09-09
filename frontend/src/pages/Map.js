import NavBarApp from "../components/NavBarApp";

export default function Map() {
  return (
    <body>
        <NavBarApp/>
        
        <div style={{width: '100vw', height: '100vh'}}><iframe allowfullscreen="" frameborder="0" src="https://cdn.bootstrapstudio.io/placeholders/map.html" width="100%" height="400" style={{width: '100%', height: '100%', position: 'static'}}></iframe></div>

    </body>
  )
}
