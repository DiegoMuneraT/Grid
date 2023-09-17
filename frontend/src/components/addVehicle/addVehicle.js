const AddCar = (event) => {
    // Previene que el formulario se envíe
    event.preventDefault();
    // Obtener los datos del formulario
    const data = new FormData(event.currentTarget);
    // Crear el objeto de usuario
    const formUser = {
        modelo: data.get("modelo"),
        marca: data.get("marca"),
        placa: data.get("placa"),
    }

    console.log(formUser)

}
export default AddCar;