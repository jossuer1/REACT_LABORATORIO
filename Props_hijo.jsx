/*

  1- Props 

*/


const Sexto = ({data}) => {


  return (
    <>

      <h2 className="text-orange-800">Hijo</h2>
      
      <div className="flex justify-center mb-8">
        
        <div className="max-w-sm border-2 border-orange-500 rounded-lg p-4 w-80 text-center">
          
          <h2 className="text-lg font-semibold mb-2">Producto - {data.name}</h2>

          <p className="mb-3">Precio: ${data.price}</p>
          
          <p className="mb-3">Stock disponible: {data.stock}</p>
        
        </div>

      </div>

    </>
  )
}

export default Sexto