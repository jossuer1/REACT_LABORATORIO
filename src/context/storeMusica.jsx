import { create } from "zustand";


const storeMusica = create((set)=>({
    
    detalle:{
        nombre: "Shake it off",
        genero: "Pop",
    },
    
    setCancion: (newCancion) => set({ detalle: newCancion })
    
}))


export default storeMusica
