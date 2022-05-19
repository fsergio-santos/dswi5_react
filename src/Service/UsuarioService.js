
import banco from "../Config/Banco";


export const postFotoUsuario = async (formData) => {
    return(
        banco({
            method:'post',
            url:'/foto/gravar',
            data:formData,
            headers:{
                'Content-type': 'multipart/form-data'
            } 
        }).then(res=>{
           return res.data;
        })
    )
}

export const deleteFotoUsuario = async (foto) => {
    console.log(foto)
    return(
        banco({
            method:'delete',
            url:`/foto/delete/${foto}`,
        }).then(res=>{
           return res.data;
        })
    )
}